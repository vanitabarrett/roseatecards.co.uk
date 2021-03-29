import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';

import shopData from '../../shop-data.json';
import CategoryNav from '../../components/CategoryNav';
import Notice from '../../components/Notice';
import ProductsGrid from '../../components/ProductsGrid';
import { getCategoryInfo, getCategoryInfoNoProducts, sortProducts } from '../../lib/shopData';
import { dedupeByKey } from '../../lib/arrays';

export default function CategoryHomepage({
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
      <Notice title="Can't find what you're looking for?">
        <p>We regularly add new designs - follow us on <a href="https://www.instagram.com/roseatecards/" rel="noreferrer external">social media</a> for updates!</p>
      </Notice>
    </div>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: shopData.map(({ id }) => ({
      params: {
        categoryId: id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId as string;
  const categoryInfo = getCategoryInfoNoProducts(categoryId);
  const allProducts = getCategoryInfo(categoryId).subCategories.map(({ products }) => products).flat();
  const dedupedProducts = dedupeByKey(allProducts, 'slug');
  const sortedDedupedProducts = sortProducts(dedupedProducts);

  return {
    props: {
      categoryInfo,
      products: sortedDedupedProducts
    },
  }
}
