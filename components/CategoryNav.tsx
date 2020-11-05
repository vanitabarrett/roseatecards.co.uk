import { useRouter } from "next/router";
import Link from 'next/link';
import classnames from 'classnames';

import { NavLink } from "../types";

interface Props {
  links: NavLink[];
}

export default function CategoryNav({ links }: Props) {
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

}
