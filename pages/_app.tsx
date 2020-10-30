import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Nav from "../components/Nav";

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roseate Cards</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Nav />
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
