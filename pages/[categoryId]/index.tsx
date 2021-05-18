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
        <meta name="description" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="og:title" key="ogtitle" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="og:description" key="ogdescription" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="twitter:title" key="twittertitle" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="twitter:description" key="twitterdescription" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />
      </Head>
      <CategoryNav categoryInfo={categoryInfo} />
      <h1 className="page-title">All {categoryInfo.name}</h1>
      <ProductsGrid products={products} />

      <div className="mailing-cta">
        <h2 className="mailing-cta__title">Can't find what you're looking for?</h2>
        <p className="mailing-cta__text">Subscribe to our mailing list to be first to find out about our new products, exclusive offers and our blog posts.</p>
        <div className="mailing-cta__frame">
          <iframe className="mj-w-res-iframe" frameBorder="0" scrolling="no" src="https://app.mailjet.com/widget/iframe/6M56/J1u" width="100%"></iframe>
          <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
        </div>
      </div>

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
