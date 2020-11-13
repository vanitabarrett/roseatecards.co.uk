import Link from 'next/link';

import Nav from './Nav';

export default function Header() {
  return (
    <header className="header" aria-hidden="true">
      <Link href="/">
        <a className="header__link" tabIndex={-1}>
          <img src="/svgs/logo.svg" alt="Roseate Cards" className="header__logo" width="250px" />
        </a>
      </Link>
      <Nav />
    </header>
  )
}
