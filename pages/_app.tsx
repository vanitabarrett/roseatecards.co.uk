import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Footer from '../components/Footer';

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roseate Cards</title>

        <meta charSet="utf-8" ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="roseate cards, cards, greeting, stationery, envelopes, christmas, birthday" />
        <meta name="description" content="Greeting cards and stationery. Send a little love in the post ❤️" />

        <meta property="og:title" content="Roseate Cards" />
        <meta property="og:image" content="/social/social.png" />
        <meta property="og:description" content="Greeting cards and stationery. Send a little love in the post ❤️" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Roseate Cards" />
        <meta property="twitter:description" content="Greeting cards and stationery. Send a little love in the post ❤️" />
        <meta property="twitter:image" content="/social/social.png" />

        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="page-container">
        <a href="#main" className="skiplink">Skip to main page content</a>
        <Header />
        <main id="main" role="main" aria-live="assertive">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
