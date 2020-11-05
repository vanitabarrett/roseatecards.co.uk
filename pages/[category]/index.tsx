import { InferGetStaticPropsType, GetStaticPathsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import ProductItem from '../../components/ProductItem';
import shopData from '../../shop-data.json';
import { shuffle } from '../../lib/arrays';

export default function ProductHomepage({
  categoryData,
  products
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
      <h1 className="page-title">All {categoryData.title}</h1>
      <SubNav links={subnavLinks} />
      <div className="gel-layout">
        {
          products.map((product) => (
            <div key={product.id} className="gel-layout__item gel-1/2 gel-1/3@m gel-1/4@l">
              <ProductItem {...product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

type SubNavLinks = { href: string, text: string }[];

function SubNav({ links }: { links: SubNavLinks }) {
  const { asPath } = useRouter();
  return (
    <nav aria-label="Select Category" className="category-page__subnav">
      <ul className="category-page__subnav__list">
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
      </ul>
    </nav>
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
  const allProducts = categoryData.subCategories.map(({ products }) => products).flat();
  const dedupedProducts = allProducts.reduce((productsSoFar, product) => {
    if (productsSoFar.find(({ slug }) => slug === product.slug)) {
      return productsSoFar;
    }
    return [...productsSoFar, product];
  }, []);
  const sortedDedupedProducts = shuffle(dedupedProducts);

  return {
    props: {
      categoryData,
      products: sortedDedupedProducts
    },
  }
}
