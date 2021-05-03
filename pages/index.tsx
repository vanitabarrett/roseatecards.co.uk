export default function Home() {
  return (
    <div className="gel-wrap home-page">

      <h1 className="screenreader-only">Welcome to Roseate Cards</h1>

      <div className="home-page__featured gel-layout">
        <img src="/homepage-feature/just-because.jpg" className="home-page__featured__image gel-layout__item gel-1/1 gel-1/2@m" />
        <div className="home-page__featured__text-wrapper gel-layout__item gel-1/1 gel-1/2@m">
          <p className="home-page__featured__headline-wrapper">
            <span className="home-page__featured__text">Send a little love</span><br/><span className="home-page__featured__text home-page__featured__large-text">in the post...</span>
          </p>
          <p className="home-page__featured__description">During hard times, messages of love and support can mean a lot to the people we love.</p>
          <p className="home-page__featured__description">Our eco-friendly greeting cards are printed on high quality FSC-approved paper, paired with recycled kraft envelopes and shipped in recyclable cellophane and cardboard.</p>
          <p className="home-page__featured__button-wrapper"><a href="/cards/just-because" className="home-page__featured__button">Shop now</a></p>
        </div>
      </div>
      <div className="home-page__info gel-layout">
        <div className="home-page__info__section gel-layout__item gel-1/2@s gel-1/3@m">
          <img className="home-page__info__image" src="/svgs/delivery-truck.svg" alt="" width="60px" height="60px" />
          <h2 className="home-page__info__heading">Delivery Options</h2>
          <p className="home-page__info__text">Cards can be sent to you or directly to your recipient with a personalised typed message.</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/2@s gel-1/3@m">
          <img className="home-page__info__image" src="/svgs/smiley.svg" alt="" width="60px" height="60px" />
          <h2 className="home-page__info__heading">Personalisation</h2>
          <p className="home-page__info__text">Our cards can be customised in a variety of different ways, get in touch to find out more.</p>
        </div>
        <div className="home-page__info__section gel-layout__item gel-1/3">
          <img className="home-page__info__image" src="/svgs/world.svg" alt="" width="60px" height="60px" />
          <h2 className="home-page__info__heading">Sustainability</h2>
          <p className="home-page__info__text">Committed to using high-quality card and sustainable materials in all our products.</p>
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
