import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

const LINKS = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/cards',
    text: 'Shop'
  },
  {
    href: '/contact',
    text: 'Contact'
  }
]

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          LINKS.map(({ href, text }) => {
            const linkClassName = classnames('nav__link', {
              'nav__link--active': pathname === href || pathname.startsWith(`${href}/`)
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
