import shopData from '../shop-data.json';
import { Category, CategoryNoProducts } from '../types';

export function getCategoryInfoNoProducts(categoryId): CategoryNoProducts {
  const { subCategories, ...categoryInfo } = getCategoryInfo(categoryId);
  return {
    ...categoryInfo,
    subCategories: subCategories.map(({ products, ...subCategoryInfo}) => ({ ...subCategoryInfo }))
  }
}

export function getCategoryInfo(categoryId): Category {
  return shopData.find(({ id }) => id === categoryId);
}
