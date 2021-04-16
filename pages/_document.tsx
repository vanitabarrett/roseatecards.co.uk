import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCookie } from '../components/CookieBanner';

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
          <script dangerouslySetInnerHTML={{ __html: `
            ${ getCookie.toString() }

            if (getCookie('cookie_preferences') && getCookie('cookie_preferences') === '1') {
              // Load GTM script
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-59QZCF3');
            }
          ` }}>
          </script>

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

          <meta property="og:image" content={`https://${domain}/social/social.png`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={`https://${domain}/social/social.png`} />

          {
            // Inlined Google Font loading to improve performance
          }
          <style dangerouslySetInnerHTML={{ __html: `
            @font-face {
              font-family: 'Lato';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: 'Lato';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
              font-family: 'Lato';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          ` }}>
          </style>
        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59QZCF3" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
