import { useRouter } from 'next/router';
import classnames from 'classnames';

import shopData from '../shop-data.json';
import { NavLink } from '../types';

const categoryLinks = shopData.map(({ id, name }) => ({
  href: `/${id}`,
  text: `Shop ${name}`
}));

const LINKS: NavLink[] = [
  ...categoryLinks,
  {
    href: '/blog',
    text: 'Blog'
  },
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
                <a className={linkClassName} href={href}>{text}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
