const getJSON = require('./lib/getEtsyJSON');
const fs = require('fs');

const VARIATION_ALLOW_LIST = ['Design'];
const SHOP_ID = 'RoseateCards';

(async function () {
  const activeListings = await getJSON(`/v2/shops/${SHOP_ID}/listings/active`, { includes: 'Section,MainImage' });
  const categories = await activeListings.results.reduce(async (categoriesSoFarPromise, listing) => {
    const categoriesSoFar = await categoriesSoFarPromise;
    const catSubCatTag = listing.tags.find((tag) => tag.includes('::'));

    if (!catSubCatTag) {
      return categoriesSoFar;
    }

    const [categoryName, subCategoryName] = catSubCatTag.split('::');
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
      const variationAlreadyFound = variationsSoFar.find(({ id }) => id === propertyValue.value_ids[0]);
      if (allowedVariation && !variationAlreadyFound) {
        return [
          ...variationsSoFar,
          {
            id: propertyValue.value_ids[0],
            name: propertyValue.values[0]
          }
        ]
      } else {
        return variationsSoFar;
      }
    }, []);

    if (variations.length > 0) {
      const variationImages = await getJSON(`/v2/listings/${listing.listing_id}/variation-images`);
      const listingImages = await getJSON(`/v2/listings/${listing.listing_id}/images`);
      const enrichedVariations = await variations.map((variation) => {
        const imageId = variationImages.results.find(({ value_id }) => value_id === variation.id).image_id;
        const title = `${variation.name} ${getCleanTitle(listing.title)}`;
        const image = listingImages.results.find(({ listing_image_id }) => listing_image_id === imageId);
        return getCleanListing(listing, { title, image });
      });
      return enrichedVariations;
    }
    return [getCleanListing(listing)];
  }
  return [getCleanListing(listing)];
}

function getCleanListing(listing, { title, image } = {}) {
  const originalTitle = title || listing.title;
  const cleansedTitle = getCleanTitle(originalTitle);
  const imageToParse = image || listing.MainImage;
  return {
    slug: getSlug(cleansedTitle),
    title: cleansedTitle,
    description: listing.description,
    url: listing.url,
    price: listing.price,
    images: getImages(imageToParse)
  }
}

function getCleanTitle(originalTitle) {
  return originalTitle.includes('/') ? originalTitle.substr(0, originalTitle.indexOf('/') - 1) : originalTitle;
}

function getImages(image) {
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
