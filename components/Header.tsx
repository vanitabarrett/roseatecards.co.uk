import Link from 'next/link';

import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/" tabIndex={-1} aria-hidden="true">
        <img src="/svgs/logo.svg" alt="Roseate Cards" className="header__logo" width="250px" />
      </a>
      <Nav />
    </header>
  )
}
