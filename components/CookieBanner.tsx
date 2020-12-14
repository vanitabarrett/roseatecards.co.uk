export default function CookieBanner() {
  return (
    <div role='region' aria-label='cookie banner' className="cookie-banner">
      <div className="cookie-banner__wrapper">
        <div className="cookie-banner__text-wrapper">
          <h2 className="cookie-banner__heading">We'd like to set analytics cookies - is that ok?</h2>
          <p>Analytics cookies help us understand how our website is being used.</p>
        </div>

        <div className="cookie-banner__buttons">
          <button className="cookie-banner__button">Accept analytics cookies</button>
          <button className="cookie-banner__button">Reject analytics cookies</button>
        </div>
      </div>
    </div>
  )
}
