import Link from 'next/link';

export default function Home() {
  return (
    <div className="gel-wrap home-page">

      <Link href="/cards/christmas">
        <a className="home-page__featured">
          <p className="home-page__featured-text-wrapper">
            <span className="home-page__featured-text">It's beginning to look a lot like</span><br/><span className="home-page__featured-text home-page__featured-large-text">Christmas</span>
          </p>
        </a>
      </Link>

      <div className="home-page__covid-banner"><strong>COVID-19 update:</strong> we're still open;&nbsp;
        <Link href="/contact#covid19">
          <a>shipping may be delayed</a>
        </Link>
      </div>

      <div className="home-page__info gel-layout">
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sparkles.svg" alt="" />
          <p className="home-page__info__text">Unique card designs that you won't find anywhere else</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/email-dark.svg" alt="" />
          <p className="home-page__info__text">Direct to recipient shipping available to any UK address</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sustainability.svg" alt=""/>
          <p className="home-page__info__text">Committed to high quality and sustainable products</p>
        </div>
      </div>

    </div>
  );
}
