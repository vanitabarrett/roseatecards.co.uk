import Head from 'next/head';
import type { AppProps } from 'next/app';

import Header from "../components/Header";
import Footer from '../components/Footer';

import '../styles/app.scss';
import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const skipLink = useRef<HTMLAnchorElement>();
  const pageReadOut = useRef<HTMLDivElement>();

  useEffect(() => {
    skipLink.current.classList.add('screenreader-only');
    pageReadOut.current.innerText = window.document.title;
    skipLink.current.focus();
  }, [asPath]);

  const onSkipBlur = useCallback(() => {
    skipLink.current.classList.remove('screenreader-only');
  }, [skipLink]);

  return (
    <>
      <Head>
        <title>Roseate Cards</title>
      </Head>
      <div className="page-container">
        <div ref={pageReadOut} className="screenreader-only" aria-live="polite"></div>
        <a ref={skipLink} href="#main" onBlur={onSkipBlur} className="skiplink">Skip to main page content</a>
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
