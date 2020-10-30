import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Roseate Cards" className="header__logo" />
        </a>
      </Link>
    </header>
  )
}
