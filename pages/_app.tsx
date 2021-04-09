import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roseate Cards | Sustainable Greetings Cards and Postcards</title>
        <meta name="description" content="Greeting cards and wedding stationery for all occasions, including mental health and wellbeing cards. Send a little love in the post." />

        <meta property="og:title" content="Roseate Cards | Sustainable Greetings Cards and Wedding Stationery" />
        <meta property="og:description" content="Greeting cards and wedding stationery. Send a little love in the post ❤️" />

        <meta property="twitter:title" content="Roseate Cards" />
        <meta property="twitter:description" content="Greeting cards and wedding stationery. Send a little love in the post ❤️" />
      </Head>
      <div className="page-container">
        <a href="#main" className="skiplink">Skip to main page content</a>
        <CookieBanner />
        <Header />
        <main id="main" role="main">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
