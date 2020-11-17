import Document, { Html, Head, Main, NextScript } from 'next/document';

const isTest = process.env.ENVIRONMENT === 'test';
const domain = isTest ? 'test.roseatecards.co.uk' : 'roseatecards.co.uk';
const robots = isTest ? 'noindex, nofollow' : 'index, follow';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ed664d" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          <meta charSet="utf-8" />
          <meta name="robots" content={robots} />
          <meta name="description" content="Greeting cards, postcards and stationery for those special occasions, including mental health and wellbeing cards. Send a little love in the post ❤️" />

          <meta property="og:title" content="Roseate Cards | Sustainable Greetings Cards and Postcards" />
          <meta property="og:image" content={`https://${domain}/social/social.png`} />
          <meta property="og:description" content="Greeting cards and stationery. Send a little love in the post ❤️" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Roseate Cards" />
          <meta property="twitter:description" content="Greeting cards and stationery. Send a little love in the post ❤️" />
          <meta property="twitter:image" content={`https://${domain}/social/social.png`} />

          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
