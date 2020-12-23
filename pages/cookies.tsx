import Head from 'next/head';
import { useEffect, useState } from 'react';
import { cookieExpiry, getCookie, deleteAllCookies } from '../components/CookieBanner';

export default function Cookies() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showSaved, setShowSaved] = useState<boolean>(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  function submitCookiesForm(e) {
    e.preventDefault();

    const optionSelected = e.target.elements['analytics'].value;
    const cookieValueToSet = optionSelected === 'accept' ? 1 : 0;

    if (cookieValueToSet === 0) {
      deleteAllCookies();
    }

    document.cookie = 'cookie_preferences=' + cookieValueToSet + ';expires=' + cookieExpiry() + ';domain=' + window.location.hostname + ';path=/';

    setShowSaved(true);
  }

  return (
    <div className="gel-wrap cookies-page gel-2/3@l">
      <Head>
        <title>Cookies - Roseate Cards</title>
      </Head>
      <h1 className="page-title">Cookies</h1>
      <p>Cookies are files saved on your phone, tablet or computer when you visit a website. We use cookies to store information about how you use our website, such as the pages you visit.</p>

      <h2 className="cookies-page__heading">What cookies do we use?</h2>
      <noscript>
        <p>We use JavaScript to set cookies. It looks like you have JavaScript disabled, so we won't be setting any cookies for you! If you want to enable cookies, you may need to enable JavaScript or reload this page.</p>
      </noscript>
      {showForm && (
        <>
          <h3 className="cookies-page__heading">Essential cookies</h3>
          <p>Essential cookies are necessary for the site to run. We only set one essential cookie to save you cookie preferences.</p>
          <table className="cookies-page__table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Purpose</th>
                <th scope="col">Expires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_preferences</td>
                <td>Remembers your cookie preferences so we don't keep asking you</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3 className="cookies-page__heading">Analytics cookies</h3>
          <p>We use Google Analytics to measure how you use the website so we can improve it based on user needs. We do not allow Google to use or share the data about how you use this site. These are not essential cookies, and it is your decision to enable or disable these analytics cookies:</p>

          <form className="cookies-page__form" onSubmit={submitCookiesForm}>
            <div className="cookies-page__form__input-group">
              <input className="cookies-page__form__radio" required type="radio" id="analytics-accept" name="analytics" value="accept" defaultChecked={getCurrentConsent(1)} />
              <label htmlFor="analytics-accept">Accept analytics cookies</label>
            </div>
            <div className="cookies-page__form__input-group">
              <input className="cookies-page__form__radio" required type="radio" id="analytics-reject" name="analytics" value="reject" defaultChecked={getCurrentConsent(0)} />
              <label htmlFor="analytics-reject">Reject analytics cookies</label>
            </div>

            <button type="submit" className="cookies-page__form__button">Save preferences</button>
            {showSaved && <p className="cookies-page__form__success js-form-success">Saved!</p>}
          </form>
        </>
      )}
    </div>
  );
}

function getCurrentConsent(consent: Number) {
  var cookieConsent = getCookie('cookie_preferences');

  if (cookieConsent) {
    return Number(cookieConsent) === consent
  }

  return false;
}
