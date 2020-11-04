import Link from 'next/link';

import shopData from '../shop-data.json';

const aProduct = shopData[0].subCategories[0].products[0];
type Product = typeof aProduct;

const NEW_IS_WITHIN_DAYS = 21;

export default function ProductItem({ id, title, price, images, created }: Product) {
  const isNew = ((new Date()).getTime() - created) < NEW_IS_WITHIN_DAYS * 24 * 60 * 60 * 1000;
  return (
    <Link href={id}>
      <a className="product-item">
        {isNew && <p className="product-item__new">New!</p>}
        <div className="product-item__image-wrapper">
          <img src={images[0].url_570xN} className="product-item__image" />
        </div>
        <p className="product-item__title">{title}</p>
        <p className="product-item__price">&pound;{price}</p>
      </a>
    </Link>
  )
}
