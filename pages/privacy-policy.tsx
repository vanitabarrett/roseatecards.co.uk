import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="gel-wrap privacy-policy-page gel-2/3">
      <Head>
        <title>Privacy Policy - Roseate Cards</title>
      </Head>
      <h1 className="page-title">Privacy Policy</h1>
      <p>Roseate Cards operates the website <a href="/">www.roseatecards.co.uk</a>. Roseate Cards is the data controller for any page on the roseatecards.co.uk domain. If you follow a link to a third-party site, for example: Etsy, that organisation is the data controller and is responsible for processing any data you share with them, unless stated otherwise.</p>

      <h2 className="privacy-policy-page__heading">What data we collect</h2>
      <p>We do not collect any data from you on www.roseatecards.co.uk. If you choose to purchase a product from us, you will be directed to Etsy <a href="https://www.etsy.com/uk/shop/roseatecards">(https://www.etsy.com/uk/shop/roseatecards)</a>. Any purchase made via the Roseate Cards Etsy shop will send the following data to us:</p>
      <ul className="privacy-policy-page__list">
        <li>name and postal address</li>
        <li>email address</li>
        <li>personalisation information (where applicable)</li>
        <li>questions, queries and feedback you submit via Etsy</li>
      </ul>

      <p>Details of your purchase will be stored within Etsy and only provided to our third-party printers in order to fulfil your order. At no point are they passed on to any other third-parties.</p>
      <p>We will not:</p>
      <ul className="privacy-policy-page__list">
        <li>sell or rent your data to third parties</li>
        <li>share your data with third parties for marketing purposes</li>
        <li>use your data in analytics</li>
      </ul>

      <p>We will share your data if we are required to do so by law - for example, by court order, or to prevent fraud or other crime.</p>

      <h2 className="privacy-policy-page__heading">Why we need your data</h2>
      <p>We only collect the data you submit when purchasing a product via Roseate Cards. This information is required in order to fulfil your order and is not used for any other purpose. This data may be anonymised and analysed by us to gain insights into our sales.</p>

      <h2 className="privacy-policy-page__heading">How long we keep your data</h2>
      <p>We will only retain your personal data for as long as it is needed for the purposes set out in this document and as long as the law requires us to.</p>

      <h2 className="privacy-policy-page__heading">Children’s privacy protection</h2>
      <p>Our services are not designed for, or intentionally targeted at, children 13 years of age or younger. We do not intentionally collect or maintain data about anyone under the age of 13.</p>

      <h2 className="privacy-policy-page__heading">Your rights</h2>
      <p>You have the right to request:</p>
      <ul className="privacy-policy-page__list">
        <li>information about how your personal data is processed</li>
        <li>a copy of that personal data</li>
      </ul>

      <p>You can also:</p>
      <ul className="privacy-policy-page__list">
        <li>raise an objection about how your personal data is processed</li>
        <li>request that your personal data is erased if there is no longer a justification for it</li>
        <li>ask that the processing of your personal data is restricted in certain circumstances</li>
      </ul>

      <p>Please get in touch via <a href="mailto:support@roseatecards.co.uk">support@roseatecards.co.uk</a></p>

      <h2 className="privacy-policy-page__heading">Links to other websites</h2>
      <p>Roseate Cards may contain links to other websites. This privacy notice only applies to Roseate Cards, and does not cover other websites that we link to.</p>

      <p>If you go to another website from this one, read the privacy policy on that website to find out what it does with your information.</p>

      <h2 className="privacy-policy-page__heading">Contact us</h2>
      <p>Contact us if you:</p>
      <ul className="privacy-policy-page__list">
        <li>have a question about anything in this privacy notice</li>
        <li>think that your personal data has been misused or mishandled</li>
      </ul>

      <p>Email us: <a href="mailto:support@roseatecards.co.uk">support@roseatecards.co.uk</a></p>

      <h2 className="privacy-policy-page__heading">Changes to this policy</h2>
      <p>We may change this privacy policy. In that case, the ‘last updated’ date at the bottom of this page will also change. Any changes to this privacy policy will apply to you and your data immediately.</p>

      <p className="privacy-policy-page__updated">Last updated: 7 November 2020</p>
    </div>
  );
}
