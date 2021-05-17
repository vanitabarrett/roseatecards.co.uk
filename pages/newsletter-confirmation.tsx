import Head from 'next/head';

export default function NewsletterConfirmation() {
  return (
    <div className="gel-wrap newsletter-confirmation-page gel-2/3@l">
      <Head>
        <title>Thank you for subscribing - Roseate Cards</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="page-title">Newsletter subscription confirmed!</h1>
      <p>Thank you for subscribing to our newsletter!</p>
      <p>Keep your eyes peeled for our next update, which is guaranteed to include all the low-down on our latest products, new blog posts, and maybe some exclusive offers.</p>
      <p>
        In the meantime, you may want to:
        <ul className="newsletter-confirmation-page__links">
          <li><a href="/wedding">Shop wedding stationery</a></li>
          <li><a href="/cards">Shop greetings cards</a></li>
          <li><a href="/blog">Read our latest blog posts</a></li>
        </ul>
      </p>
    </div>
  );
}
