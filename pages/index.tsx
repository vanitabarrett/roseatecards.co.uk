import Link from 'next/link';

export default function Home() {
  return (
    <div className="gel-wrap home-page">

      <h1 className="screenreader-only">Welcome to Roseate Cards</h1>

      <a className="home-page__featured" href="/cards/christmas">
        <p className="home-page__featured-text-wrapper">
          <span className="home-page__featured-text">It's beginning to look a lot like</span><br/><span className="home-page__featured-text home-page__featured-large-text">Christmas</span>
        </p>
      </a>

      <div className="home-page__covid-banner"><strong>COVID-19 update:</strong> we're still open;&nbsp;
        <a href="/contact#covid19">shipping may be delayed</a>
      </div>

      <div className="home-page__info gel-layout">
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sparkles.svg" alt="" width="60px" />
          <p className="home-page__info__text">Unique card designs that you won't find anywhere else</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/email-dark.svg" alt="" width="60px" />
          <p className="home-page__info__text">Direct to recipient shipping available to any UK address</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sustainability.svg" alt="" width="60px" />
          <p className="home-page__info__text">Committed to high quality and sustainable products</p>
        </div>
      </div>

      <div className="home-page__cta gel-layout">
        <a className="home-page__cta__wrapper gel-layout__item gel-1/2@m gel-1/3@l" href="/cards">
          <img className="home-page__cta__image" src="/featured/all-cards.jpg" alt="" />
          <p className="home-page__cta__text">Shop all cards</p>
        </a>
        <a className="home-page__cta__wrapper gel-layout__item gel-1/2@m gel-1/3@l" href="/cards/christmas">
          <img className="home-page__cta__image home-page__cta__image--christmas" src="/featured/christmas.jpg"  alt="" />
          <p className="home-page__cta__text">Christmas cards</p>
        </a>
        <a className="home-page__cta__wrapper gel-layout__item gel-1/3@l" href="/cards/mental-health">
          <img className="home-page__cta__image home-page__cta__image--wellbeing" src="/featured/wellbeing.jpg" alt="" />
          <p className="home-page__cta__text">'Just because' cards</p>
        </a>
      </div>

    </div>
  );
}
