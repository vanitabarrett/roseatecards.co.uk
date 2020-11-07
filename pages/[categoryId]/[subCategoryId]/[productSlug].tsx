import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import htmlParser from 'html-react-parser';

import shopData from '../../../shop-data.json';
import { getCategoryInfo, getCategoryInfoNoProducts } from '../../../lib/shopData';
import { NavLink } from '../../../types';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProductPage({
  categoryInfo,
  subCategoryInfo,
  product
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const breadcrumbLinks: NavLink[] = [
    {
      href: `/${categoryInfo.id}`,
      text: categoryInfo.name
    },
    {
      href: `/${categoryInfo.id}/${subCategoryInfo.id}`,
      text: subCategoryInfo.name
    },
    {
      href: undefined,
      text: product.title
    }
  ];
  return (
    <div className="gel-wrap product-page">
      <Head>
        <title>{product.title} - {subCategoryInfo.name} - {categoryInfo.name} - Roseate Cards</title>
      </Head>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="gel-layout">
        <div className="gel-layout__item gel-1/3@m gel-1/4@xl gel-1/3@xxl">

        </div>
        <div className="gel-layout__item gel-2/3@m gel-3/4@xl gel-2/3@xxl">
          <h1 className="page-title product-page__title">{product.title}</h1>
          <p className="product-page__price">£{product.price}</p>
          <p className="product-page__description">
            {htmlParser(product.description.replace(/\n/g, '<br />'))}
          </p>
          <Link href={product.url}>
            <a className="product-page__buy">
              Buy on Etsy
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: shopData.map(({ id: categoryId, subCategories }) => {
      return subCategories.map(({ id: subCategoryId, products }) => {
        return products.map(({ slug: productSlug }) => {
          return {
            params: {
              categoryId,
              subCategoryId,
              productSlug
            }
          }
        })
      }).flat()
    }).flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.categoryId as string;
  const subCategoryId = params.subCategoryId as string;
  const productSlug = params.productSlug as string;
  const categoryInfo = getCategoryInfoNoProducts(categoryId);
  const subCategoryInfo = categoryInfo.subCategories.find(({ id }) => id === subCategoryId);
  const product = getCategoryInfo(categoryId).subCategories.find(({ id }) => id === subCategoryId).products.find(({ slug }) => slug === productSlug);

  return {
    props: {
      categoryInfo,
      subCategoryInfo,
      product
    },
  }
}