import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import htmlParser from 'html-react-parser';

import freeDownloadsData from '../../../free-downloads-data.json';
import { getCategoryInfoNoProducts } from '../../../lib/shopData';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { augmentDownloadData } from '../../../lib/freeDownloadData';

export default function DownloadPage({
  categoryInfo,
  subCategoryInfo,
  download
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
      text: download.title
    }
  ];
  const isTest = process.env.ENVIRONMENT === 'test';
  const domain = isTest ? 'test.roseatecards.co.uk' : 'roseatecards.co.uk';
  const { asPath } = useRouter();
  return (
    <div className="gel-wrap free-download-page">
      <Head>
      <title>{download.title} - {subCategoryInfo.name} - {categoryInfo.name} - Roseate Cards</title>
        <meta name="description" content={`${htmlParser(download.description.replace(/\n/g, ' ')).toString().split('.')[0]}. A free wedding download, ready to print. Design by Roseate Cards.`} />

        <meta property="og:title" key="ogtitle" content={`${download.title} | ${subCategoryInfo.name} ${categoryInfo.name} | Roseate Cards`} />
        <meta property="og:description" key="ogdescription" content={`${htmlParser(download.description.replace(/\n/g, ' ')).toString().split('.')[0]}. A free wedding download, ready to print. Design by Roseate Cards.`} />

        <meta property="twitter:title" key="twittertitle" content={`${download.title} | ${subCategoryInfo.name} ${categoryInfo.name} | Roseate Cards`} />
        <meta property="twitter:description" key="twitterdescription" content={`${htmlParser(download.description.replace(/\n/g, ' ')).toString().split('.')[0]}. A free wedding download, ready to print. Design by Roseate Cards.`} />
      </Head>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="gel-layout" itemScope itemType="http://schema.org/Product">
        <div itemProp="brand" itemType="http://schema.org/Brand" itemScope>
          <meta itemProp="name" content="Roseate Cards" />
        </div>

        <div className="gel-layout__item gel-1/1">
          <h1 className="page-title free-download-page__title">{download.title} download</h1>
          <meta itemProp="name" content={`${download.title} - Roseate Cards`} />
          <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <link itemProp="url" href={`https://${domain}${asPath}`} />
            <meta itemProp="priceCurrency" content="GBP" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
            <meta itemProp="price" content={download.price} />
          </span>
        </div>

        <div className="gel-layout__item gel-1/2@m">
          <img className="free-download-page__image" src={download.images[0].url_570xN} loading="lazy" />
        </div>

        <div className="gel-layout__item gel-1/2@m">
          <p className="free-download-page__price">Free</p>
          <meta itemProp="description" content={`${htmlParser(download.description.replace(/\n/g, ' '))}`} />
          <p className="free-download-page__description">
            {htmlParser(download.description.replace(/\n/g, '<br />'))}
          </p>

          <a className="product-page__buy" href={download.url} download>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: freeDownloadsData.map(({ id: downloadId }) => {
      return {
        params: {
          downloadId,
        }
      }
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const downloadId = params.downloadId as string;
  const categoryInfo = getCategoryInfoNoProducts("wedding");
  const download = freeDownloadsData.find(({ id }) => id === downloadId);
  const subCategoryInfo = {
    id: "free-downloads",
    name: "Free Wedding Downloads"
  }

  return {
    props: {
      categoryInfo,
      subCategoryInfo,
      download: augmentDownloadData(download)
    },
  }
}
