import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import freeDownloadsData from '../../../free-downloads-data.json';
import CategoryNav from '../../../components/CategoryNav';
import ProductsGrid from '../../../components/ProductsGrid';
import { FreeDownload } from '../../../types';
import { getCategoryInfoNoProducts } from '../../../lib/shopData';
import { augmentDownloadData } from '../../../lib/freeDownloadData';

export default function CategoryHomepage({
  downloads,
  categoryInfo
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="gel-wrap category-page">
      <Head>
        <title>{categoryInfo.name} - Roseate Cards</title>
        <meta name="description" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="og:title" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="og:description" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />

        <meta property="twitter:title" content={`${categoryInfo.name} - Roseate Cards`} />
        <meta property="twitter:description" content={`A selection of ${categoryInfo.name.toLowerCase()} available on Roseate Cards.`} />
      </Head>
      <h1 className="page-title">Free Wedding Downloads</h1>
      <CategoryNav categoryInfo={categoryInfo} />
      <ProductsGrid products={downloads} />
    </div>
  );
}

export async function getStaticProps() {
  const categoryInfo = getCategoryInfoNoProducts("wedding");
  const downloads: FreeDownload[] = freeDownloadsData.map((download) =>  {
    return augmentDownloadData(download)
  })

  return {
    props: {
      downloads,
      categoryInfo
    },
  }
}
