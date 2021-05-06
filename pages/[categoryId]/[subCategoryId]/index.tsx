import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';

import shopData from '../../../shop-data.json';
import categoryDescriptionData from '../../../category-description-data.json';
import CategoryNav from '../../../components/CategoryNav';
import ProductsGrid from '../../../components/ProductsGrid';
import { getCategoryInfo, getCategoryInfoNoProducts, sortProducts } from '../../../lib/shopData';
import { useRouter } from 'next/router';

export default function SubCategoryHomepage({
  categoryInfo,
  categoryDescription,
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
        <meta name="description" content={`A selection of ${subCategoryInfo.name.toLowerCase()} ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="og:title" key="ogtitle" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="og:description" key="ogdescription" content={`A selection of ${subCategoryInfo.name.toLowerCase()} ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="twitter:title" key="twittertitle" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="twitter:description" key="twitterdescription" content={`A selection of ${subCategoryInfo.name.toLowerCase()} ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />
      </Head>
      <CategoryNav categoryInfo={categoryInfo} />
      <h1 className="page-title">{subCategoryInfo.name}</h1>
      {categoryDescription ? <p className="category-page__description">{categoryDescription}</p> : null}
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
  const sortedProducts = sortProducts(allProducts);

  const lookup = categoryId + "-" + subCategoryId
  const categoryDescription = categoryDescriptionData[lookup] ? categoryDescriptionData[lookup] : null

  return {
    props: {
      categoryInfo,
      categoryDescription,
      products: sortedProducts
    },
  }
}
