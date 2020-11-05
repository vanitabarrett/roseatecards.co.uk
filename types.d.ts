import shopData from './shop-data.json';

const aCategory = shopData[0];
const aSubCategory = aCategory.subCategories[0];
const aProduct = aSubCategory.products[0];
type Product = typeof aProduct;
type Category = typeof aCategory;
type SubCategory = typeof aSubCategory;
type SubCategoryNoProducts = Omit<SubCategory, "products">;
type CategoryNoProducts = Omit<Category, "subCategories"> & {
  subCategories: SubCategoryNoProducts[]
};

type NavLink = { href: string, text: string };
