import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roseate Cards</title>
      </Head>

      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
