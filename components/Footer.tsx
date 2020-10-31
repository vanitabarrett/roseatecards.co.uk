import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="gel-wrap">
        <div className="footer__social">
          <div className="footer__social__item">
            <a
              href="https://www.facebook.com/roseatecards"
              rel="noreferrer external"
              className="footer__link"
            >
              Facebook
          </a>
          </div>
          <div className="footer__social__item">
            <a
              href="https://www.instagram.com/roseatecards/"
              rel="noreferrer external"
              className="footer__link"
            >
              Instagram
          </a>
          </div>
        </div>
        <div className="footer__related">
          <Link href="/privacy-policy">
            <a className="footer__link">Privacy Policy</a>
          </Link>
          <Link href="/accessibility">
            <a className="footer__link">Accessibility</a>
          </Link>
          <Link href="/contact">
            <a className="footer__link">Contact</a>
          </Link>
        </div>
        <div className="footer__copy">
          &copy; Roseate Cards {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
