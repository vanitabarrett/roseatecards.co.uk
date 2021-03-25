import { useRouter } from "next/router";
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

  if (categoryInfo.id === "weddings") {
    links.push({
      href: "/weddings/free-downloads",
      text: "Free Downloads"
    })
  }

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
                <a className={className} href={href}>{text}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
