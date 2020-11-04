import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import shopData from '../../shop-data.json';

export default function ProductHomepage({
  categoryData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const subnavLinks: SubNavLinks = [
    {
      href: `/${categoryData.id}`,
      text: `All ${categoryData.title}`
    },
    ...categoryData.subCategories.map(({ id, name }) => ({
      href: `/${categoryData.id}/${id}`,
      text: name
    }))
  ]

  return (
    <div className="gel-wrap category-page">
      <Head>
        <title>{categoryData.title} - Roseate Cards</title>
      </Head>
      <h1 className="category-page__title">All {categoryData.title}</h1>
      <nav aria-label="Select Category" className="category-page__subnav">
        <ul className="category-page__subnav__list">
          <SubNav links={subnavLinks} />
        </ul>
      </nav>
    </div>
  );
}

type SubNavLinks = { href: string, text: string }[];

function SubNav({ links }: { links: SubNavLinks }) {
  const { asPath } = useRouter();
  return (
    <>
      {
        links.map(({ href, text }) => {
          const className = classnames("category-page__subnav__link", {
            "category-page__subnav__link--active": asPath === href
          });
          return (
            <li className="category-page__subnav__item" key={href}>
              <Link href={href}>
                <a className={className}>{text}</a>
              </Link>
            </li>
          )
        })
      }
    </>
  )
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: shopData.map(({ id }) => ({
      params: {
        category: id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryId = params.category as string;
  const categoryData = shopData.find(({ id }) => id === categoryId);

  return {
    props: {
      categoryData,
    },
  }
}
