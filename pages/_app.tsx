import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Roseate Cards | Sustainable Greetings Cards and Postcards</title>
        <meta name="description" content="Greeting cards and wedding stationery for all occasions, including mental health and wellbeing cards. Send a little love in the post." />

        <meta property="og:title" key="ogtitle" content="Roseate Cards | Sustainable Greetings Cards and Wedding Stationery" />
        <meta property="og:description" key="ogdescription" content="Greeting cards and wedding stationery. Send a little love in the post ❤️" />

        <meta property="twitter:title" key="twittertitle" content="Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="Greeting cards and wedding stationery. Send a little love in the post ❤️" />
      </Head>
      <div className="page-container">
        <a href="#main" className="skiplink">Skip to main page content</a>
        <CookieBanner />
        <p className="global-banner">🌼 Enter promo code ROSEATE2FREE for £2 off a £10+ spend 🌼</p>
        { asPath !== "/hello" ? <Header /> : null }
        <main id="main" role="main">
          <Component {...pageProps} />
        </main>
      </div>
      { asPath !== "/hello" ? <Footer /> : null }
    </>
  );
}

export default MyApp;
