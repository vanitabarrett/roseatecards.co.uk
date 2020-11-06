import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';

import shopData from '../../shop-data.json';
import { shuffle } from '../../lib/arrays';
import CategoryNav from '../../components/CategoryNav';
import ProductsGrid from '../../components/ProductsGrid';
import { getCategoryInfo, getCategoryInfoNoProducts } from '../../lib/shopData';

export default function ProductHomepage({
  categoryInfo,
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="gel-wrap category-page">
      <Head>
        <title>{categoryInfo.name} - Roseate Cards</title>
      </Head>
      <h1 className="page-title">All {categoryInfo.name}</h1>
      <CategoryNav categoryInfo={categoryInfo} />
      <ProductsGrid products={products} />
    </div>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: shopData.map(({ id }) => ({
      params: {
        category: id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.category as string;
  const categoryInfo = getCategoryInfoNoProducts(categoryId);
  const allProducts = getCategoryInfo(categoryId).subCategories.map(({ products }) => products).flat();
  const dedupedProducts = allProducts.reduce((productsSoFar, product) => {
    if (productsSoFar.find(({ slug }) => slug === product.slug)) {
      return productsSoFar;
    }
    return [...productsSoFar, product];
  }, []);
  const sortedDedupedProducts = shuffle(dedupedProducts);

  return {
    props: {
      categoryInfo,
      products: sortedDedupedProducts
    },
  }
}
