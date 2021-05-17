import { InferGetStaticPropsType } from 'next';
import { getFeaturedListings } from '../lib/shopData';
import ProductsGrid from '../components/ProductsGrid';

export default function Home({
  featuredListings
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="home-page">

      <div className="gel-wrap">
        <h1 className="screenreader-only">Welcome to Roseate Cards</h1>

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
        <div className="home-page__info gel-layout">
          <div className="home-page__info__section gel-layout__item gel-1/2@s gel-1/3@m">
            <img className="home-page__info__image" src="/svgs/delivery-truck.svg" alt="" width="60px" height="60px" loading="lazy" />
            <h2 className="home-page__info__heading">Delivery Options</h2>
            <p className="home-page__info__text">Cards can be posted to you, or sent directly to your recipient with a custom typed message.</p>
          </div>
          <div className="home-page__info__section gel-layout__item gel-1/2@s gel-1/3@m">
            <img className="home-page__info__image" src="/svgs/smiley.svg" alt="" width="60px" height="60px" loading="lazy" />
            <h2 className="home-page__info__heading">Personalisation</h2>
            <p className="home-page__info__text">Our cards can be customised in a variety of different ways, get in touch to find out more.</p>
          </div>
          <div className="home-page__info__section gel-layout__item gel-1/3">
            <img className="home-page__info__image" src="/svgs/world.svg" alt="" width="60px" height="60px" loading="lazy" />
            <h2 className="home-page__info__heading">Sustainability</h2>
            <p className="home-page__info__text">All our cards are recyclable, and we are committed to using high-quality and sustainable materials. </p>
          </div>
        </div>

        <div className="home-page__cta">
          <a href="/wedding" className="home-page__cta__wrapper home-page__cta__wrapper-large home-page__cta__wrapper-large-3">
            <p className="home-page__cta__tag">Shop wedding stationery</p>
            <img className="home-page__cta__wrapper-large__image" src="/homepage-categories/wedding.jpg" alt="" loading="lazy" />
          </a>
          <a href="/cards/just-because" className="home-page__cta__wrapper home-page__cta__wrapper-small home-page__cta__wrapper-small-1">
            <p className="home-page__cta__tag">Just because</p>
            <img className="home-page__cta__wrapper-small__image" src="/homepage-categories/just-because.png" alt="" loading="lazy" />
          </a>
          <a href="/cards/birthday" className="home-page__cta__wrapper home-page__cta__wrapper-small home-page__cta__wrapper-small-2">
            <p className="home-page__cta__tag">Birthday</p>
            <img className="home-page__cta__wrapper-small__image" src="/homepage-categories/birthday.png" alt="" loading="lazy" />
          </a>
        </div>
      </div>

      <div className="home-page__about">
        <div className="gel-wrap">
          <div className="gel-layout">
            <div className="gel-1/3 gel-layout__item">
            <img className="home-page__about__image" src="/homepage-about/about.jpg" alt="" loading="lazy" />
            </div>
            <div className="gel-layout__item gel-1/1 gel-2/3@m">
              <h2 className="home-page__about__title">Hello!</h2>
              <p className="home-page__about__text">Welcome to Roseate Cards, an independent stationery and online greeting card shop, run by Vanita and based in London, UK. We sell fun and unique cards, and love creating new stationery designs whether it be birthday cards or a fully co-ordinated wedding stationery set. In fact, Vanita has been making greetings cards for all occasions from a young age - but let’s just say those earlier creations were a bit heavy on the felt-tip and stickers!</p>
              <p className="home-page__about__text">Unlike other retailers, all our cards are printed on thick professional-quality card with a beautiful matt finish - or gloss for photo cards to really make the colours pop! You can <a href="/papers">read more about the papers we use</a>. As a small business, we do our best for the planet: we use natural materials and non-toxic inks, and ship our products in recyclable packaging.</p>
              <p className="home-page__about__text">If you are interested in customising or personalising any products, please contact us to chat over your ideas! We hope you enjoy browsing our website.</p>
            </div>
          </div>
        </div>
      </div>

      {featuredListings ?
        <div className="gel-wrap home-page__products">
          <h2 className="home-page__products__title">A few of our favourite things...</h2>
          <ProductsGrid products={featuredListings} />
        </div>
      : null}

      <p className="home-page__footnote">Placed an online order recently? We’d love to know how we did! Take a snap of your order and tag it with #roseatecards to be in with a chance of featuring on our website.</p>
    </div>
  );
}

export async function getStaticProps() {
  const featuredListings = getFeaturedListings();
  return {
    props: {
      featuredListings
    },
  }
}
