import Link from 'next/link';
import { Product } from '../types';

const NEW_IS_WITHIN_DAYS = 21;

export default function ProductItem({ id, title, price, images, created, type }: Product) {
  const isNew = ((new Date()).getTime() - created) < NEW_IS_WITHIN_DAYS * 24 * 60 * 60 * 1000;
  return (
    <a className="product-item" href={id} aria-label={`${title}${type ? ` ${type}` : ''}. £${price}`}>
      {isNew && <p className="product-item__new">New!</p>}
      <div className="product-item__image-wrapper">
        <img src={images[0].url_570xN} className="product-item__image" alt={images[0].description} />
      </div>
      <p className="product-item__title">{title}</p>
      <p className="product-item__price">&pound;{price}</p>
    </a>
  )
}
