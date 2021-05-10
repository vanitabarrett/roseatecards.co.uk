import Head from 'next/head';

export default function Blog() {
  return (
    <div className="gel-wrap blogs-page">
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
          <h2 className="featured-item__headline-wrapper">
            <span className="featured-item__text">date</span><br/><span className="featured-item__text">Blog title</span>
          </h2>
          <p className="featured-item__description">Blog summary.</p>
          <p className="featured-item__button-wrapper"><a href="/" className="featured-item__button">Continue reading</a></p>
        </div>
      </div>

      <div className="blog-lists gel-layout">

        <div className="blog-lists__item gel-layout__item gel-1/2@m">
          <img className="blog-lists__item__image" src="/homepage-feature/just-because.jpg" alt="" loading="lazy" />
          <div className="blog-lists__item__wrapper">
            <p className="blog-lists__item__date">Date</p>
            <h2 className="blog-lists__item__title">Blog Title</h2>
            <p className="blog-lists__item__description">Blog description.</p>
            <a className="blog-lists__item__button" href="" >Continue reading</a>
          </div>
        </div>

        <div className="blog-lists__item gel-layout__item gel-1/2@m">
          <img className="blog-lists__item__image" src="/homepage-feature/just-because.jpg" alt="" loading="lazy" />
          <div className="blog-lists__item__wrapper">
            <p className="blog-lists__item__date">Date</p>
            <h2 className="blog-lists__item__title">Blog Title</h2>
            <p className="blog-lists__item__description">Blog description.</p>
            <a className="blog-lists__item__button" href="" >Continue reading</a>
          </div>
        </div>

        <div className="blog-lists__item gel-layout__item gel-1/2@m">
          <img className="blog-lists__item__image" src="/homepage-feature/just-because.jpg" alt="" loading="lazy" />
          <div className="blog-lists__item__wrapper">
            <p className="blog-lists__item__date">Date</p>
            <h2 className="blog-lists__item__title">Blog Title</h2>
            <p className="blog-lists__item__description">Blog description.</p>
            <a className="blog-lists__item__button" href="" >Continue reading</a>
          </div>
        </div>

        <div className="blog-lists__item gel-layout__item gel-1/2@m">
          <img className="blog-lists__item__image" src="/homepage-feature/just-because.jpg" alt="" loading="lazy" />
          <div className="blog-lists__item__wrapper">
            <p className="blog-lists__item__date">Date</p>
            <h2 className="blog-lists__item__title">Blog Title</h2>
            <p className="blog-lists__item__description">Blog description.</p>
            <a className="blog-lists__item__button" href="" >Continue reading</a>
          </div>
        </div>

        <div className="blog-lists__mailing">
          <h2 className="blog-lists__mailing__title">Join our members club</h2>
          <p className="blog-lists__mailing__text">Subscribe to our mailing list to receive exclusive offers, news on new products and our latest blog posts.</p>
          <div className="blog-lists__mailing__frame">
            <iframe className="mj-w-res-iframe" frameBorder="0" scrolling="no" src="https://app.mailjet.com/widget/iframe/6M56/J1u" width="100%"></iframe>
            <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
          </div>
        </div>

      </div>
    </div>
  );
}
