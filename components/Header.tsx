import Link from 'next/link';

import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <img src="/svgs/logo.svg" alt="Roseate Cards" className="header__logo" />
        </a>
      </Link>
      <Nav />
    </header>
  )
}
