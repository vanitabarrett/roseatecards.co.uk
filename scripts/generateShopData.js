const getJSON = require('./lib/getEtsyJSON');
const fs = require('fs');
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const VARIATION_ALLOW_LIST = ['Design'];
const SHOP_ID = 'RoseateCards';
const IMAGE_DESCRIPTIONS_HEADING = 'Image Descriptions:\n';
const IMAGE_DESCRIPTIONS_REGEX = /([0-9]+): (?:([a-z0-9- ]+) -- )?(.*)/i;
const IMAGE_DESCRIPTIONS_SEPARATOR = '\n';
const SHORT_TITLE_DELIMITER = '|';
const CATEGORY_TO_TYPE_MAP = {
  cards: 'card'
};

(async function () {
  const activeListings = await getJSON(`/v2/shops/${SHOP_ID}/listings/active`);
  const enrichedListings = activeListings.results.reduce((listingsSoFar, listing) => {
    const catSubCatTags = listing.tags.filter((tag) => tag.includes('--'));

    if (!catSubCatTags.length) {
      return listingsSoFar;
    }

    return [
      ...listingsSoFar,
      ...catSubCatTags.map((catSubCatTag) => {
        const [rawCategoryName, rawSubCategoryName] = catSubCatTag.split('--');
        const categoryName = rawCategoryName.replace(/-/g, ' ');
        const subCategoryName = rawSubCategoryName.replace(/-/g, ' ');
        return {
          ...listing,
          categoryName,
          subCategoryName
        }
      })
    ]
  }, []);

  const shopData = await enrichedListings.reduce(async (categoriesSoFarPromise, listing) => {
    const categoriesSoFar = await categoriesSoFarPromise;
    const { categoryName, subCategoryName } = listing;
    const categoryId = getSlug(categoryName);
    const subCategoryId = getSlug(subCategoryName);
    const matchingMappedCategoryIndex = categoriesSoFar.findIndex(({ id }) => categoryId === id);
    const productsForListing = await getProductsForListing(listing, categoryId, subCategoryId);

    if (matchingMappedCategoryIndex > -1) {
      const matchingMappedCategory = categoriesSoFar[matchingMappedCategoryIndex];
      const matchingMappedSubCategoryIndex = matchingMappedCategory.subCategories.findIndex(({ id }) => subCategoryId === id);

      if (matchingMappedSubCategoryIndex > -1) {
        return [
          ...categoriesSoFar.slice(0, matchingMappedCategoryIndex),
          {
            ...matchingMappedCategory,
            subCategories: [
              ...matchingMappedCategory.subCategories.slice(0, matchingMappedSubCategoryIndex),
              {
                ...matchingMappedCategory.subCategories[matchingMappedSubCategoryIndex],
                products: [
                  ...matchingMappedCategory.subCategories[matchingMappedSubCategoryIndex].products,
                  ...productsForListing
                ]
              },
              ...matchingMappedCategory.subCategories.slice(matchingMappedSubCategoryIndex + 1)
            ]
          },
          ...categoriesSoFar.slice(matchingMappedCategoryIndex + 1)
        ]
      } else {
        return [
          ...categoriesSoFar.slice(0, matchingMappedCategoryIndex),
          {
            ...matchingMappedCategory,
            subCategories: [
              ...matchingMappedCategory.subCategories,
              {
                id: subCategoryId,
                name: subCategoryName,
                products: [
                  ...productsForListing
                ]
              }
            ]
          },
          ...categoriesSoFar.slice(matchingMappedCategoryIndex + 1)
        ]
      }
    } else {
      return [
        ...categoriesSoFar,
        {
          id: categoryId,
          name: categoryName,
          subCategories: [
            {
              id: subCategoryId,
              name: subCategoryName,
              products: [
                ...productsForListing
              ]
            }
          ]
        }
      ]
    }
  }, []);
  fs.writeFileSync('./shop-data.json', JSON.stringify(shopData, null, 2));
})();

async function getProductsForListing(listing, categoryId, subCategoryId) {
  if (listing.has_variations) {
    const inventoryForListing = await getJSON(`/v2/listings/${listing.listing_id}/inventory`);
    const allPropertyValues = inventoryForListing.results.products.reduce((propertyValuesSoFar, { property_values }) => {
      return [
        ...propertyValuesSoFar,
        ...property_values
      ]
    }, []);
    const variations = allPropertyValues.reduce((variationsSoFar, propertyValue) => {
      const allowedVariation = VARIATION_ALLOW_LIST.includes(propertyValue.property_name);
      const variationAlreadyFound = variationsSoFar.find((variation) => variation === propertyValue.values[0]);
      if (allowedVariation && !variationAlreadyFound) {
        return [
          ...variationsSoFar,
          propertyValue.values[0]
        ]
      } else {
        return variationsSoFar;
      }
    }, []);

    if (variations.length > 0) {
      const enrichedVariations = await Promise.all(variations.map((variation) => {
        return getCleanListing(listing, categoryId, subCategoryId, variation);
      }));
      return enrichedVariations;
    }
    return [await getCleanListing(listing, categoryId, subCategoryId)];
  }
  return [await getCleanListing(listing, categoryId, subCategoryId)];
}

async function getCleanListing(listing, categoryId, subCategoryId, variationName) {
  const title = variationName || getCleanTitle(listing.title);
  const images = await getImagesForListing(listing, variationName);
  const slug = getSlug(title);
  return {
    id: `/${categoryId}/${subCategoryId}/${slug}`,
    slug,
    type: CATEGORY_TO_TYPE_MAP[categoryId] || '',
    title: entities.decode(title),
    description: entities.decode(listing.description),
    url: listing.url,
    price: listing.price,
    created: listing.creation_tsz * 1000,
    lastModified: listing.last_modified_tsz * 1000,
    images
  }
}

function getCleanTitle(originalTitle) {
  return originalTitle.includes(SHORT_TITLE_DELIMITER) ? originalTitle.substr(0, originalTitle.indexOf(SHORT_TITLE_DELIMITER) - 1) : originalTitle;
}

async function getImagesForListing(listing, variationName) {
  const { listing_id, description } = listing;
  const { results: listingImages } = await getJSON(`/v2/listings/${listing_id}/images`);
  if (description.indexOf(IMAGE_DESCRIPTIONS_HEADING) < 0) {
    return listingImages.map(cleanImage);
  }
  const imageDescriptions = description
    .substr(description.indexOf(IMAGE_DESCRIPTIONS_HEADING) + IMAGE_DESCRIPTIONS_HEADING.length)
    .split(IMAGE_DESCRIPTIONS_SEPARATOR);
  return imageDescriptions.reduce((imagesSoFar, unmappedImageDescription) => {
    const [_, imageRank, imageVariationName, imageDescription] = IMAGE_DESCRIPTIONS_REGEX.exec(unmappedImageDescription);
    if (!imageRank || !imageDescription || (variationName && imageVariationName && variationName !== imageVariationName)) {
      return imagesSoFar;
    }
    const matchingImage = listingImages.find(({ rank }) => rank === Number.parseInt(imageRank));
    return [
      ...imagesSoFar,
      {
        ...cleanImage(matchingImage),
        description: entities.decode(imageDescription)
      }
    ];
  }, [])
}

function cleanImage(image) {
  const { url_75x75, url_170x135, url_570xN, url_fullxfull } = image;
  return { url_75x75, url_170x135, url_570xN, url_fullxfull, description: '' };
}

function getSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}
