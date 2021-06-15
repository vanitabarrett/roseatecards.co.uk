export default function Footer() {
  return (
    <footer className="footer">
      <div className="gel-wrap">
        <div className="footer__social">
          <a
            href="https://www.facebook.com/roseatecards"
            rel="noreferrer external"
            className="footer__social__item"
            aria-label="Facebook"
          >
            <svg id="Layer" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m42 8h-20c-7.72 0-14 6.28-14 14v20c0 7.72 6.28 14 14 14h20c7.72 0 14-6.28 14-14v-20c0-7.72-6.28-14-14-14zm-12 36c0-1.104-.896-2-2-2h-4v-4h4c1.104 0 2-.896 2-2v-8c0-3.309 2.691-6 6-6h8v4h-6c-2.206 0-4 1.794-4 4v6c0 1.104.896 2 2 2h7.664l-1.165 4h-6.499c-1.104 0-2 .896-2 2v8h-4zm22-2c0 5.514-4.486 10-10 10h-4v-6h6c.89 0 1.672-.587 1.92-1.441l1.922-6.596c.304-.898.166-1.89-.376-2.672-.561-.808-1.483-1.291-2.466-1.291h-7v-4h8c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2h-10c-5.514 0-10 4.486-10 10v6h-4c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h4v6h-4c-5.514 0-10-4.486-10-10v-20c0-5.514 4.486-10 10-10h20c5.514 0 10 4.486 10 10z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/roseatecards/"
            rel="noreferrer external"
            className="footer__social__item"
            aria-label="Instagram"
          >
            <svg id="Layer" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m42 8h-20c-7.72 0-14 6.28-14 14v20c0 7.72 6.28 14 14 14h20c7.72 0 14-6.28 14-14v-20c0-7.72-6.28-14-14-14zm10 34c0 5.514-4.486 10-10 10h-20c-5.514 0-10-4.486-10-10v-20c0-5.514 4.486-10 10-10h20c5.514 0 10 4.486 10 10z"/><path d="m32 21c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/><path d="m45 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/></svg>          </a>
        </div>
        <div className="gel-layout">
          <div className="footer__newsletter gel-layout__item gel-1/4@l">
            <h2 className="footer__newsletter__heading">Join our Members Club</h2>
            <p className="footer__newsletter__text">By signing up to our newsletter, you will be the first to know about exclusive offers, competitions and new products!</p>
            <a className="footer__link" href="/newsletter-signup">Sign up now &#8594;</a>
          </div>
          <div className="footer__main gel-layout__item gel-3/4@l">
            <div className="gel-layout">
              <div className="footer__related">
                <a className="footer__link" href="/privacy-policy">Privacy Policy</a>
                <a className="footer__link" href="/cookies">Cookies</a>
                <a className="footer__link" href="/accessibility">Accessibility</a>
                <a className="footer__link" href="/delivery-returns">Delivery and Returns</a>
              </div>
              <div className="gel-layout__item gel-2/3 footer__text">
                <p className="footer__copy">We are a small greetings card company based in London, UK, and we really appreciate every single purchase made! Thank you for supporting small businesses.</p>
                <p className="footer__email">Say hello at hello@roseatecards.co.uk</p>
                <a className="footer__indieretail" href="https://www.indieretail.uk/find-a-shop/?name=roseate_cards&shop=132287&browsesector=31">
                  <img src="/social/indieretail_logo.png" alt="" width="100px" />
                  We are a member of Indie Retail UK
                </a>
                <p className="footer__copy">&copy; Roseate Cards {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
