export default function Home() {
  return (
    <div className="gel-wrap home-page">

      <h1 className="screenreader-only">Welcome to Roseate Cards</h1>

      <a className="home-page__featured" href="/cards">
        <p className="home-page__featured-text-wrapper">
          <span className="home-page__featured-text">Send a little love</span><br/><span className="home-page__featured-text home-page__featured-large-text">in the post...</span>
        </p>
      </a>

      <div className="home-page__info gel-layout">
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sparkles.svg" alt="" width="60px" height="40px" />
          <p className="home-page__info__text">Unique and original photo and card designs that you won't find anywhere else</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/email-dark.svg" alt="" width="60px" height="40px" />
          <p className="home-page__info__text">Personalise your chosen cards and send directly to the recipient (any UK address)</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/sustainability.svg" alt="" width="60px" height="40px" />
          <p className="home-page__info__text">Committed to using high-quality card and sustainable materials in all our products</p>
        </div>
      </div>

      <div className="home-page__cta gel-layout">
        <a className="home-page__cta__wrapper gel-layout__item gel-1/2@m" href="/cards">
          <img className="home-page__cta__image" src="/featured/wellbeing.jpg" alt="" />
          <p className="home-page__cta__text">Greetings cards</p>
        </a>
        <a className="home-page__cta__wrapper gel-layout__item gel-1/2@m" href="/wedding">
          <img className="home-page__cta__image home-page__cta__image--wellbeing" src="/featured/wedding.jpg" alt="" />
          <p className="home-page__cta__text">Wedding stationery</p>
        </a>
      </div>

      <p className="home-page__footnote">We love to read your reviews and see our cards arriving through your letterboxes! Tag your images and photos with #roseatecards to be in with a chance of featuring on our website!</p>

    </div>
  );
}
