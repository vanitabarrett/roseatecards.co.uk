import Head from 'next/head';

export default function Blog() {
  return (
    <div className="gel-wrap blog-page">
      <Head>
        <title>Blog - Roseate Cards</title>
        <meta name="description" content="" />

        <meta property="og:title" key="ogtitle" content="Blog - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="" />

        <meta property="twitter:title" key="twittertitle" content="Blog- Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="" />
      </Head>
      <h1 className="page-title">Blog</h1>

      <div className="featured-item gel-layout">
        <img src="/homepage-feature/just-because.jpg" className="featured-item__image gel-layout__item gel-1/1 gel-1/2@m" alt="" loading="lazy" />
        <div className="featured-item__text-wrapper gel-layout__item gel-1/1 gel-1/2@m">
          <p className="featured-item__headline-wrapper">
            <span className="featured-item__text">date</span><br/><span className="featured-item__text">Blog title</span>
          </p>
          <p className="featured-item__description">Blog summary.</p>
          <p className="featured-item__button-wrapper"><a href="/" className="featured-item__button">Continue reading</a></p>
        </div>
      </div>
    </div>
  );
}
