import Head from 'next/head';

export default function Hello() {
  return (
    <div className="gel-wrap hello-page gel-2/3@l">
      <Head>
        <title>Popular Links - Roseate Cards</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="page-title">Popular Links</h1>
      <img src="/svgs/logo-light.svg" alt="Roseate Cards" className="hello-page__logo" width="250px" height="60px" />

      <a href="/blog/wedding-invitations-on-a-budget" className="hello-page__link">Wedding Invitations on a Budget</a>
      <a href="/wedding/free-downloads" className="hello-page__link">Free Wedding Postponement Cards</a>
      <a href="/newsletter-signup" className="hello-page__link">Join our Member's Club</a>


      <h2>Shop Now</h2>
      <a href="/cards" className="hello-page__link">Cards, Notecards and Postcards</a>
      <a href="/wedding" className="hello-page__link">Wedding Stationery</a>

      <h2>Social Media</h2>
      <a href="/" className="hello-page__link">Website</a>
      <a href="/blog" className="hello-page__link">Blog</a>
      <a href="https://www.facebook.com/roseatecards" className="hello-page__link">Facebook</a>
      <a href="https://www.instagram.com/roseatecards/" className="hello-page__link">Instagram</a>
      <a href="https://www.etsy.com/uk/shop/roseatecards/" className="hello-page__link">Etsy</a>
      <a href="/contact" className="hello-page__link">Contact us</a>

    </div>
  );
}
