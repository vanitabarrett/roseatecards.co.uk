import { useRouter } from "next/router";
import Link from 'next/link';
import classnames from 'classnames';

import { CategoryNoProducts, NavLink } from "../types";

interface Props {
  categoryInfo: CategoryNoProducts
}

export default function CategoryNav({ categoryInfo }: Props) {
  const { asPath } = useRouter();

  const links: NavLink[] = [
    {
      href: `/${categoryInfo.id}`,
      text: `All ${categoryInfo.name}`
    },
    ...categoryInfo.subCategories.map(({ id, name }) => ({
      href: `/${categoryInfo.id}/${id}`,
      text: name
    }))
  ]

  return (
    <nav aria-label="Select Category" className="category-nav">
      <ul className="category-nav__list">
        {
          links.map(({ href, text }) => {
            const className = classnames("category-nav__link", {
              "category-nav__link--active": asPath === href
            });
            return (
              <li className="category-nav__item" key={href}>
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
