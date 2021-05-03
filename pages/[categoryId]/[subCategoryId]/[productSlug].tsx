import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import htmlParser from 'html-react-parser';

import shopData from '../../../shop-data.json';
import { getCategoryInfo, getCategoryInfoNoProducts } from '../../../lib/shopData';
import Breadcrumbs from '../../../components/Breadcrumbs';
import AdditionalInfo from '../../../components/AdditionalInfo';
import ImageCarousel from '../../../components/ImageCarousel';

export default function ProductPage({
  categoryInfo,
  subCategoryInfo,
  product,
  similarProducts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const breadcrumbItems = [
    {
      href: `/${categoryInfo.id}`,
      text: categoryInfo.name
    },
    {
      href: `/${categoryInfo.id}/${subCategoryInfo.id}`,
      text: subCategoryInfo.name
    },
    {
      text: product.title
    }
  ];
  const isTest = process.env.ENVIRONMENT === 'test';
  const domain = isTest ? 'test.roseatecards.co.uk' : 'roseatecards.co.uk';
  const { asPath } = useRouter();
  return (
    <div className="gel-wrap product-page">
      <Head>
        <title>{product.title} - {subCategoryInfo.name} - {categoryInfo.name} - Roseate Cards</title>
        <meta name="description" content={`${htmlParser(product.description.replace(/\n/g, ' ')).toString().split('.')[0]}. Design by Roseate Cards. Send a little love in the post ❤️`} />

        <meta property="og:title" key="ogtitle" content={`${product.title} | ${subCategoryInfo.name} ${categoryInfo.name} | Roseate Cards`} />
        <meta property="og:description" key="ogdescription" content={`${htmlParser(product.description.replace(/\n/g, ' ')).toString().split('.')[0]}. Design by Roseate Cards. Send a little love in the post ❤️`} />

        <meta property="twitter:title" key="twittertitle" content={`${product.title} | ${subCategoryInfo.name} ${categoryInfo.name} | Roseate Cards`} />
        <meta property="twitter:description" key="twitterdescription" content={`${htmlParser(product.description.replace(/\n/g, ' ')).toString().split('.')[0]}. Design by Roseate Cards. Send a little love in the post ❤️`} />
      </Head>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="gel-layout" itemScope itemType="http://schema.org/Product">
        <div itemProp="brand" itemType="http://schema.org/Brand" itemScope>
          <meta itemProp="name" content="Roseate Cards" />
        </div>
        <div className="gel-layout__item gel-1/2@m">
          <ImageCarousel images={product.images} />
        </div>
        <div className="gel-layout__item gel-1/2@m">
          <h1 className="page-title product-page__title">{product.title}</h1>
          <meta itemProp="name" content={`${product.title} - Roseate Cards`} />
          <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <link itemProp="url" href={`https://${domain}${asPath}`} />
            <meta itemProp="priceCurrency" content="GBP" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
            <meta itemProp="price" content={product.price} />
            <p className="product-page__price">£{product.price}</p>
          </span>
          <a className="product-page__buy" href={product.url}>
            Buy on Etsy
          </a>
          <meta itemProp="description" content={`${htmlParser(product.description.replace(/\n/g, ' '))}`} />
          <p className="product-page__description">
            {htmlParser(product.description.replace(/\n/g, '<br />'))}
          </p>
        </div>
      </div>

      <AdditionalInfo categoryId={categoryInfo.id} />
      <h2>Similar Products</h2>
      <ul>
        {similarProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
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
  const productsInCategory = getCategoryInfo(categoryId).subCategories.find(({ id }) => id === subCategoryId).products;
  const product = productsInCategory.find(({ slug }) => slug === productSlug);
  const similarProducts = productsInCategory.filter(({ slug }) => slug !== productSlug).sort(() => Math.random() - 0.5).slice(0, 4);

  return {
    props: {
      categoryInfo,
      subCategoryInfo,
      product,
      similarProducts
    },
  }
}
