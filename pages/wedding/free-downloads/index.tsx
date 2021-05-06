import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import freeDownloadsData from '../../../free-downloads-data.json';
import categoryDescriptionData from '../../../category-description-data.json';
import CategoryNav from '../../../components/CategoryNav';
import ProductsGrid from '../../../components/ProductsGrid';
import { FreeDownload } from '../../../types';
import { getCategoryInfoNoProducts } from '../../../lib/shopData';
import { augmentDownloadData } from '../../../lib/freeDownloadData';

export default function CategoryHomepage({
  downloads,
  categoryDescription,
  categoryInfo
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
      <h1 className="page-title">Free Wedding Downloads</h1>
      {categoryDescription ? <p className="category-page__description">{categoryDescription}</p> : null}
      <ProductsGrid products={downloads} />
    </div>
  );
}

export async function getStaticProps() {
  const categoryInfo = getCategoryInfoNoProducts("wedding");
  const downloads: FreeDownload[] = freeDownloadsData.map((download) =>  {
    return augmentDownloadData(download)
  })

  const categoryDescription = categoryDescriptionData["wedding-free-downloads"] ? categoryDescriptionData["wedding-free-downloads"] : null

  return {
    props: {
      downloads,
      categoryDescription,
      categoryInfo
    },
  }
}
