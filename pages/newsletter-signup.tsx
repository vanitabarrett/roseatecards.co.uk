import Head from 'next/head';

export default function NewsletterSignup() {
  return (
    <div className="gel-wrap newsletter-signup-page gel-2/3@l">
      <Head>
        <title>Join our members club - Roseate Cards</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="page-title">Join our members club</h1>
      <p>Subscribe to our mailing list to receive exclusive offers, competitions, news on new products and our latest blog posts.</p>
      <div className="newsletter-signup-page__form">
        <iframe className="mj-w-res-iframe" frameBorder="0" scrolling="no" src="https://app.mailjet.com/widget/iframe/6M56/J1u" width="100%"></iframe>
        <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
      </div>
    </div>
  );
}
