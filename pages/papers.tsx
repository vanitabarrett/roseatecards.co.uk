import Head from 'next/head';

export default function Papers() {
  return (
    <div className="gel-wrap papers-page">
      <Head>
        <title>Our Papers - Roseate Cards</title>
        <meta name="description" content="At Roseate Cards, we’re always looking for the best quality we can get while making sure our products remain affordable. We only use professional-grade papers, and all our stationery is produced with print companies which are Forest Stewardship Council (FSC) certified." />

        <meta property="og:title" content="Our Papers - Roseate Cards" />
        <meta property="og:description" content="At Roseate Cards, we’re always looking for the best quality we can get while making sure our products remain affordable. We only use professional-grade papers, and all our stationery is produced with print companies which are Forest Stewardship Council (FSC) certified." />

        <meta property="twitter:title" content="Our Papers - Roseate Cards" />
        <meta property="twitter:description" content="At Roseate Cards, we’re always looking for the best quality we can get while making sure our products remain affordable. We only use professional-grade papers, and all our stationery is produced with print companies which are Forest Stewardship Council (FSC) certified." />
      </Head>
      <h1 className="page-title">Our Papers</h1>
      <p>At Roseate Cards, we’re always looking for the best quality we can get while making sure our products remain affordable. The majority of cards printed in bulk by card retailers use approximately 250 gsm paper - at Roseate Cards, we use 324 gsm to give you sturdy and luxurious cards. We only use professional-grade papers, and all our stationery is produced with print companies which are Forest Stewardship Council (FSC) certified.</p>

      <h2 className="papers-page__heading">Greeting Cards</h2>
      <div className="gel-layout">
        <div className="gel-layout__item gel-1/2@m gel-1/1">
          <h3>Mohawk</h3>
          <p>A thick (324 gsm) premium white card with a smooth matt finish. This is an uncoated paper which we use for the majority of our postcards and greetings cards.</p>
        </div>

        <div className="gel-layout__item gel-1/2@m gel-1/1">
          <h3>Gloss</h3>
          <p>A mid-weight (280 gsm) white paper with a smooth glossy finish. Gloss paper adds vibrancy and brings out the details in photograph prints, so we use this for our photo cards.</p>
        </div>
      </div>

      <h2 className="papers-page__heading">Wedding Stationery</h2>
      <p>This page lists the papers we use by default for our wedding stationery. However, we do have other paper options available with a variety of textures and shimmered effects. If this is something you’re interested in, please contact us to learn more. </p>
      <div className="gel-layout">
        <div className="gel-layout__item gel-1/2 gel-1/4@m">
          <img src="/papers/uncoated.jpg" alt="" role="presentation" className="papers-page__image" />
          <h3>Uncoated</h3>
          <p>A thick (350 gsm) paper, uncoated paper absorbs more ink than others and therefore colours appear slightly muted. A solid and modern choice, this is a great option for wedding stationery. We use this for our standard wedding stationery sets.</p>
        </div>

        <div className="gel-layout__item gel-1/2 gel-1/4@m">
          <img src="/papers/laid.jpg" alt="" role="presentation" className="papers-page__image" />
          <h3>White Laid</h3>
          <p>A premium paper with a fine lined texture, this adds a touch of luxury to printed products. We pair white laid envelopes with our uncoated wedding stationery to add that premium feel.</p>
        </div>

        <div className="gel-layout__item gel-1/2 gel-1/4@m">
          <img src="/papers/rives-shetland.jpg" alt="" role="presentation" className="papers-page__image" />
          <h3>Rives Shetland</h3>
          <p>A mid-weight (250 gsm) paper with an unusual subtle woven texture. It absorbs more ink than others, so printed inks appear more muted and understated. This is a real favourite for subtly textured and premium wedding stationery. We use this for our luxury wedding stationery sets.</p>
        </div>

        <div className="gel-layout__item gel-1/2 gel-1/4@m">
          <img src="/papers/tintoretto-gesso.jpg" alt="" role="presentation" className="papers-page__image" />
          <h3>Tintoretto Gesso</h3>
          <p>A premium fine Italian paper with a hammered texture, this adds a touch of luxury to printed products. We pair Tintoretto Gesso envelopes with our luxury wedding sets to match accompany the Rives Shetland textured stationery.</p>
        </div>
      </div>
    </div>
  );
}
