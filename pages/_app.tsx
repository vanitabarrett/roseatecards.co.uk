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
