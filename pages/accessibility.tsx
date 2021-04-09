import Head from 'next/head';

export default function Accessibility() {
  return (
    <div className="gel-wrap accessibility-page gel-2/3@l">
      <Head>
        <title>Accessibility Statement - Roseate Cards</title>
        <meta name="description" content="The Roseate Cards website is designed to be used by as many people as possible. Our accessibility statement sets out our compliance against WCAG 2.0 and any known issues." />

        <meta property="og:title" key="ogtitle" content="Accessibility Statement - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="The Roseate Cards website is designed to be used by as many people as possible. Our accessibility statement sets out our compliance against WCAG 2.0 and any known issues." />

        <meta property="twitter:title" key="twittertitle" content="Accessibility Statement - Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="The Roseate Cards website is designed to be used by as many people as possible. Our accessibility statement sets out our compliance against WCAG 2.0 and any known issues." />
      </Head>
      <h1 className="page-title">Accessibility Statement</h1>
      <p>This statement applies to content published on <a href="/">roseatecards.co.uk</a>.</p>
      <p>This website is designed to be used by as many people as possible. The text should be clear and simple to understand. You should be able to:</p>

      <ul className="accessibility-page__list">
        <li>zoom in up to 400% without problems</li>
        <li>navigate most of the website using just a keyboard</li>
        <li>use most of the website using a screen reader</li>
      </ul>

      <h2 className="accessibility-page__heading">How accessible this website is</h2>
      <p>Parts of this website are not fully accessible. For example:</p>

      <ul className="accessibility-page__list">
        <li>we use a third party image carousel which may be difficult for screenreader users to navigate</li>
        <li>image carousels do not work when Javascript is disabled</li>
        <li>some content has poor colour contrast which fails WCAG 2.0 AAA standard</li>
      </ul>

      <p>We will update the statement when issues are fixed.</p>

      <h2 className="accessibility-page__heading">Reporting accessibility problems with this website</h2>
      <p>If you find any problems that are not listed on this page or you think we’re not meeting the accessibility requirements, contact us at <a href="mailto:support@roseatecards.co.uk">support@roseatecards.co.uk</a>.</p>

      <p>In your message, include:</p>
      <ul className="accessibility-page__list">
        <li>the web address (URL) of the page</li>
        <li>your email address and name</li>
        <li>details of the issue</li>
      </ul>

      <h2 className="accessibility-page__heading">Compliance status</h2>
      <p>This website is partially compliant with the Web Content Accessibility Guidelines version 2.1 AA standard. We use the Web Content Accessibility Guidelines V2.1 level A and level AA to test how accessible this site is. This website was tested with:</p>

      <ul className="accessibility-page__list">
        <li>Chrome Lighthouse audit</li>
        <li>SiteImprove audit</li>
        <li>Voiceover on Mac 10.14.6 (Chrome 86)</li>
        <li>Manual magnification of the web browser to 400%</li>
      </ul>

      <p className="accessibility-page__updated">Last updated: 14 November 2020</p>
    </div>
  );
}
