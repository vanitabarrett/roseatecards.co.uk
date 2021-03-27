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
      </Head>
      <h1 className="page-title">Free Wedding Downloads</h1>
      <CategoryNav categoryInfo={categoryInfo} />
      <ProductsGrid products={downloads} />
    </div>
  );
}

export async function getStaticProps() {
  const categoryInfo = getCategoryInfoNoProducts("weddings");
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
