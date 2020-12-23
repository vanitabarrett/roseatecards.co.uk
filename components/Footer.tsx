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
          <a className="footer__link" href="/privacy-policy">Privacy Policy</a>
          <a className="footer__link" href="/cookies">Cookies</a>
          <a className="footer__link" href="/accessibility">Accessibility</a>
          <a className="footer__link" href="/contact">Contact</a>
        </div>
        <div className="footer__copy">
          &copy; Roseate Cards {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
