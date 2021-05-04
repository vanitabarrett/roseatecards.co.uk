import shopData from '../shop-data.json';
import { Category, CategoryNoProducts, Product } from '../types';
import { sortByKey } from './arrays';

export function getFeaturedListings(): Product[] {
  const allProducts = shopData.map((category) => {
    return category.subCategories.map((subCategory) => subCategory.products);
  }).flat().flat();
  const featuredProducts = allProducts.filter(({ featuredRank })=> !!featuredRank);
  return sortByKey(featuredProducts, 'featuredRank').slice(0, 4);
}

export function getCategoryInfoNoProducts(categoryId): CategoryNoProducts {
  const { subCategories, ...categoryInfo } = getCategoryInfo(categoryId);
  return {
    ...categoryInfo,
    subCategories: subCategories.map(({ products, ...subCategoryInfo }) => ({ ...subCategoryInfo }))
  }
}

export function getCategoryInfo(categoryId): Category {
  return shopData.find(({ id }) => id === categoryId);
}

export function sortProducts(products: Product[]): Product[] {
  const { featuredProducts, nonFeaturedProducts } = products.reduce((accumulator, product) => {
    if (product.featuredRank) {
      return {
        featuredProducts: [...accumulator.featuredProducts, product],
        nonFeaturedProducts: accumulator.nonFeaturedProducts
      }
    }
    return {
      featuredProducts: accumulator.featuredProducts,
      nonFeaturedProducts: [...accumulator.nonFeaturedProducts, product]
    }
  }, { featuredProducts: [], nonFeaturedProducts: [] });
  return [
    ...sortByKey(featuredProducts, 'featuredRank'),
    ...sortByKey(nonFeaturedProducts, 'lastModified').reverse()
  ];
}
