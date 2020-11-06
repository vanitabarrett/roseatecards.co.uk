import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';

import shopData from '../../shop-data.json';
import { sortByKey } from '../../lib/arrays';
import CategoryNav from '../../components/CategoryNav';
import ProductsGrid from '../../components/ProductsGrid';
import { getCategoryInfo, getCategoryInfoNoProducts } from '../../lib/shopData';
import { useRouter } from 'next/router';

export default function ProductHomepage({
  categoryInfo,
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    query: { subCategoryId }
  } = useRouter();
  const subCategoryInfo = categoryInfo.subCategories.find(({ id }) => id === subCategoryId)

  return (
    <div className="gel-wrap category-page">
      <Head>
        <title>{subCategoryInfo.name} - {categoryInfo.name} - Roseate Cards</title>
      </Head>
      <h1 className="page-title">{subCategoryInfo.name}</h1>
      <CategoryNav categoryInfo={categoryInfo} />
      <ProductsGrid products={products} />
    </div>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: shopData.map(({ id: categoryId, subCategories }) => {
      return subCategories.map(({ id: subCategoryId }) => {
        return {
          params: {
            categoryId,
            subCategoryId
          }
        }
      })
    }).flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId as string;
  const subCategoryId = params.subCategoryId as string;
  const categoryInfo = getCategoryInfoNoProducts(categoryId);
  const allProducts = getCategoryInfo(categoryId).subCategories.find(({ id }) => id === subCategoryId).products;
  const sortedProducts = sortByKey(allProducts, 'lastModified').reverse();

  return {
    props: {
      categoryInfo,
      products: sortedProducts
    },
  }
}
