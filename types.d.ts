import shopData from './shop-data.json';

const aProduct = shopData[0].subCategories[0].products[0];
type Product = typeof aProduct;

type NavLink = { href: string, text: string };
