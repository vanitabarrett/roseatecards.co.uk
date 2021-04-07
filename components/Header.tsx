import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/" tabIndex={-1} aria-hidden="true">
        <img src="/svgs/logo.svg" alt="Roseate Cards" className="header__logo" width="250px" height="60px" />
      </a>
      <p className="header__tagline">Greeting cards and stationery for all occasions</p>
      <Nav />
    </header>
  )
}
