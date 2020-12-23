import shopData from './shop-data.json';

const aCategory = shopData[0];
const aSubCategory = aCategory.subCategories[0];
const aProduct = aSubCategory.products[0];
const anImages = aProduct.images;
type Product = typeof aProduct;
type Category = typeof aCategory;
type SubCategory = typeof aSubCategory;
type Images = typeof anImages;
type SubCategoryNoProducts = Omit<SubCategory, "products">;
type CategoryNoProducts = Omit<Category, "subCategories"> & {
  subCategories: SubCategoryNoProducts[]
};

type NavLink = { href: string, text: string };

declare global {
  interface Window {
    dataLayer: any[];
  }
}
