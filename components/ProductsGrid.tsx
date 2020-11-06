import ProductItem from './ProductItem';
import { Product } from '../types';

interface Props {
  products: Product[];
}

export default function ProductsGrid({ products }: Props) {
  return (
    <div className="gel-layout">
      {
        products.map((product) => (
          <div key={product.id} className="gel-layout__item gel-1/2 gel-1/3@m gel-1/4@l">
            <ProductItem {...product} />
          </div>
        ))
      }
    </div>
  )
}
