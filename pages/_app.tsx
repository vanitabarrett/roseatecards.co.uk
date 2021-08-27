import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const isTest = process.env.ENVIRONMENT === 'test';
  const domain = isTest ? 'test.roseatecards.co.uk' : 'roseatecards.co.uk';

  return (
    <>
      <Head>
        <title>Roseate Cards | Sustainable Greetings Cards and Wedding Stationery</title>
        <meta name="description" content="Greeting cards and wedding stationery for all occasions, including mental health and wellbeing cards. Send a little love in the post. Made and printed in the UK." />

        <meta property="og:image" key="ogimage" content={`https://${domain}/social/social.png`} />
        <meta property="og:title" key="ogtitle" content="Roseate Cards | Sustainable Greetings Cards and Wedding Stationery" />
        <meta property="og:description" key="ogdescription" content="Greeting cards and wedding stationery. Made and printed in the UK. Send a little love in the post ❤️ " />

        <meta property="twitter:title" key="twittertitle" content="Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="Greeting cards and wedding stationery. Made and printed in the UK. Send a little love in the post ❤️" />
        <meta property="twitter:image" key="twitterimage" content={`https://${domain}/social/social.png`} />

        {
          // To verify website for Pinterest
        }
        <meta name="p:domain_verify" content="3d012a888f399846e4f5f99362b773fa"/>
      </Head>
      <div className="page-container">
        <a href="#main" className="skiplink">Skip to main page content</a>
        <CookieBanner />
        <p className="global-banner" data-nosnippet>🌼 Enter voucher code ROSEATE2FREE at checkout for a £2 discount. Applicable to any £10+ order. 🌼</p>
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
