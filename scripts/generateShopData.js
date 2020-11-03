const getJSON = require('./lib/getEtsyJSON');
const fs = require('fs');

const VARIATION_ALLOW_LIST = ['Design'];
const SHOP_ID = 'RoseateCards';
const IMAGE_DESCRIPTIONS_HEADING = 'Image Descriptions:\n';
const IMAGE_DESCRIPTIONS_REGEX = /([0-9]+): (?:([a-z0-9- ]+) -- )?(.*)/i;
const IMAGE_DESCRIPTIONS_SEPARATOR = '\n';

(async function () {
  const activeListings = await getJSON(`/v2/shops/${SHOP_ID}/listings/active`);
  const categories = await activeListings.results.reduce(async (categoriesSoFarPromise, listing) => {
    const categoriesSoFar = await categoriesSoFarPromise;
    const catSubCatTag = listing.tags.find((tag) => tag.includes('--'));

    if (!catSubCatTag) {
      return categoriesSoFar;
    }

    const [categoryName, subCategoryName] = catSubCatTag.split('--');
    const categoryId = getSlug(categoryName);
    const subCategoryId = getSlug(subCategoryName);
    const matchingMappedCategoryIndex = categoriesSoFar.findIndex(({ id }) => categoryId === id);
    const productsForListing = await getProductsForListing(listing);

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
          title: categoryName,
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
  fs.writeFileSync('./shop-data.json', JSON.stringify(categories, null, 2));
})();

async function getProductsForListing(listing) {
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
        return getCleanListing(listing, variation);
      }));
      return enrichedVariations;
    }
    return [await getCleanListing(listing)];
  }
  return [await getCleanListing(listing)];
}

async function getCleanListing(listing, variationName) {
  const title = variationName ? `${variationName} ${getCleanTitle(listing.title)}` : getCleanTitle(listing.title);
  const images = await getImagesForListing(listing, variationName);
  return {
    slug: getSlug(title),
    title: title,
    description: listing.description,
    url: listing.url,
    price: listing.price,
    images
  }
}

function getCleanTitle(originalTitle) {
  return originalTitle.includes('/') ? originalTitle.substr(0, originalTitle.indexOf('/') - 1) : originalTitle;
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
        description: imageDescription
      }
    ];
  }, [])
}

function cleanImage(image) {
  const { url_75x75, url_170x135, url_570xN, url_fullxfull } = image;
  return { url_75x75, url_170x135, url_570xN, url_fullxfull };
}

function getSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}
