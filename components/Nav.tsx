import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import shopData from '../shop-data.json';

const categoryLinks = shopData.map(({ id, title }) => ({
  href: `/${id}`,
  text: title
}));

const LINKS = [
  {
    href: '/',
    text: 'Home'
  },
  ...categoryLinks,
  {
    href: '/contact',
    text: 'Contact'
  }
]

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          LINKS.map(({ href, text }) => {
            const linkClassName = classnames('nav__link', {
              'nav__link--active': asPath === href || asPath.startsWith(`${href}/`)
            });
            return (
              <li key={href} className="nav__item">
                <Link href={href}>
                  <a className={linkClassName}>{text}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
