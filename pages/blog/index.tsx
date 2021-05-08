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
            <span className="featured-item__text">Send a little love</span><br/><span className="featured-item__text featured-item__large-text">in the post...</span>
          </p>
          <p className="featured-item__description">During hard times, messages of love and support can mean a lot to the people we love.</p>
          <p className="featured-item__description">Our eco-friendly greeting cards and luxury wedding stationery are printed on high quality FSC-approved paper, paired with recycled kraft envelopes and shipped in recyclable cellophane and cardboard.</p>
          <p className="featured-item__button-wrapper"><a href="/cards/just-because" className="featured-item__button">Shop now</a></p>
        </div>
      </div>
    </div>
  );
}
