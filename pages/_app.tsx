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
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="page-container">
        <Header />
        <main role="main">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
