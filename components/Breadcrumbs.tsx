import Link from 'next/link';

import { NavLink } from "../types";

interface Props {
  links: NavLink[]
}

export default function Breadcrumbs({ links }: Props) {
  return (
    <ol className="breadcrumbs">
      {
        links.map(({ text, href }) => {
          if (href) {
            return (
              <li key={text} className="breadcrumbs__item">
                <Link href={href}>
                  <a className="breadcrumbs__link">{text}</a>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={text} className="breadcrumbs__item">
                {text}
              </li>
            )
          }
        })
      }
    </ol>
  )
}
