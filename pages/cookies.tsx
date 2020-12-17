import Head from 'next/head';

export default function Cookies() {
  return (
    <div className="gel-wrap cookies-page gel-2/3@l">
      <Head>
        <title>Cookies - Roseate Cards</title>
      </Head>
      <h1 className="page-title">Cookies</h1>
      <p>Cookies are files saved on your phone, tablet or computer when you visit a website. We use cookies to store information about how you use our website, such as the pages you visit.</p>

      <h2 className="cookies-page__heading">What cookies do we use?</h2>
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

      <form className="cookies-page__form" method="post">
        <div className="cookies-page__form__input-group">
          <input className="cookies-page__form__radio" type="radio" id="analytics-accept" name="analytics" value="accept" />
          <label htmlFor="analytics-accept">Accept analytics cookies</label>
        </div>
        <div className="cookies-page__form__input-group">
          <input className="cookies-page__form__radio" type="radio" id="analytics-reject" name="analytics" value="reject" />
          <label htmlFor="analytics-reject">Reject analytics cookies</label>
        </div>

        <button type="submit" className="cookies-page__form__button">Save preferences</button>
      </form>
    </div>
  );
}
