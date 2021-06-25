import Head from 'next/head';

export default function WeddingInfoPack() {
  return (
    <div className="gel-wrap wedding-info-pack gel-2/3@l">
      <Head>
        <title>Wedding Information Pack - Roseate Cards</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="page-title">Wedding Information Pack</h1>

      <div className="wedding-info-pack__intro">
        <p><strong>Hello, and congratulations on your upcoming wedding!</strong></p>
        <p>We have wedding stationery bundles to suit a range of budgets, depending on how custom and personalised you want your stationery. If you have any further questions, please get in contact via email at <a className="wedding-info-pack__link" href="mailto:hello@roseatecards.co.uk">hello@roseatecards.co.uk</a></p>
      </div>

      <h2>Wedding Stationery</h2>

      <div className="gel-layout">
        <div className="gel-layout__item gel-1/2 wedding-info-pack__product">
          <img className="wedding-info-pack__product-image" src="wedding-info-pack/savedates.jpg" role="presentation" />
          <div className="wedding-info-pack__product-text">
            <h3>Save the dates</h3>
            <p>Personalised save the date cards with matching envelopes.</p>
          </div>
        </div>

        <div className="gel-layout__item gel-1/2 wedding-info-pack__product">
          <img className="wedding-info-pack__product-image" src="wedding-info-pack/invitations.jpg" role="presentation" />
          <div className="wedding-info-pack__product-text">
            <h3>Invitations</h3>
            <p>Personalised wedding invitations with matching envelopes.</p>
          </div>
        </div>

        <div className="gel-layout__item gel-1/2 wedding-info-pack__product">
        <img className="wedding-info-pack__product-image" src="wedding-info-pack/standard.jpg" role="presentation" />
          <div className="wedding-info-pack__product-text">
            <h3>Standard stationery bundle</h3>
            <p>Personalised save the date cards, invitations, information cards and matching envelopes.</p>
          </div>
        </div>

        <div className="gel-layout__item gel-1/2 wedding-info-pack__product">
          <img className="wedding-info-pack__product-image" src="wedding-info-pack/luxury.jpg" role="presentation" />
          <div className="wedding-info-pack__product-text">
            <h3>Luxury stationery bundle</h3>
            <p>Personalised save the date cards, invitations and accompanying vellum sheets, information cards, belly bands and matching textured envelopes.</p>
          </div>
        </div>
      </div>

      <div className="wedding-info-pack__digital">
        <h3>Digital downloads</h3>
        <p>As well as printed stationery, we also offer cheaper digital downloads if you want to print your stationery yourself. All of our wedding stationery products can be provided as print-ready PDFs for a reduced price, inclusive of personalisation with your names, wedding date and venue.</p>
      </div>

      <div className="wedding-info-pack__cta-wrapper">
        <a href="/wedding/stationery" className="wedding-info-pack__cta">View all our wedding stationery products</a>
      </div>

      <h2>Ordering process</h2>
      <div className="gel-layout wedding-info-pack__ordering">
        <div className="gel-layout__item gel-1/3@l">
          <img src="wedding-info-pack/ordering.jpg" className="wedding-info-pack__ordering-image" />
        </div>

        <div className="gel-layout__item gel-2/3@l wedding-info-pack__ordering-text">
          <p><strong>We know that ordering wedding stationery online can be overwhelming, and we want to make it as easy as possible.</strong></p>
          <p>The rough process for ordering wedding stationery from us:</p>
          <ol>
            <li><span className="list-title">Initial Enquiry:</span> You take a look through our <a className="wedding-info-pack__link" href="/wedding/stationery">wedding stationery bundles</a> and <a className="wedding-info-pack__link" href="/contact#contact-methods">enquire</a> about the design you are interested in - or simply go ahead and purchase if don't want any additional customisations. Make sure you have a good idea of the number of guests you will be inviting and your budget.</li>
            <li><span className="list-title">Discuss customisations:</span> We discuss any changes you want to make, for example: changing the envelopes or paper that your stationery is printed on, and provide an updated quote.</li>
            <li><span className="list-title">Provide wedding details:</span> When you are happy to proceed, provide the details of you wedding. The minimum we will need is wedding date and time; the names of the bride and groom; and the address of your wedding venue. Don't worry - we will follow up with you if you forget to provide any information.</li>
            <li><span className="list-title">Sit back and let us do all the hard work:</span> Once we have received all the necessary information, you can sit back and relax while we generate your designs! We will send you online copies of each design, so you get final sign-off before the stationery goes to print.</li>
            <li><span className="list-title">Online proof and delivery:</span> Assuming you are happy with the online copy, we will go ahead and print your stationery and post them to you.</li>
          </ol>
        </div>
      </div>

      <div className="wedding-info-pack__small-print">
        <p>Please note: we have a minimum order quantity of 30 for all of our wedding stationery bundles - this applies to save the dates, invitations and full stationery bundles. This is so we can cover the costs of printing and working on your order. If you want to order less than 30, we can fulfill this but will still charge the full price - and we'd always recommend ordering a few extra just in case!</p>
        <p>As a small business, we don't have the capacity to work on urgent/rush orders. Please leave plenty of time when placing your order.</p>
      </div>

      <h2>Wedding photobooks</h2>
      <p>A wonderful momento of your wedding day, wedding photobooks display the best of your photographs in a professionally printed hardback book - perfect for a post-wedding or anniversary present! We take all the stress out of the process - simply provide us with your wedding photographs and we can select the best ones and choose the ideal layout to present your photographs in the best way.</p>

      <div className="gel-layout wedding-info-pack__photobooks">
        <img src="wedding-info-pack/photobook-2.jpg" className="gel-layout__item gel-1/3@l" />
        <img src="wedding-info-pack/photobook-1.jpg" className="gel-layout__item gel-1/3@l" />
        <img src="wedding-info-pack/photobook-3.jpg" className="gel-layout__item gel-1/3@l" />
      </div>

      <h2>Get in touch</h2>
      <p>If you interested in our wedding products or have any questions, please get in touch via email at <a href="mailto:hello@roseatecards.co.uk">hello@roseatecards.co.uk</a> or use our <a className="wedding-info-pack__link" href="/contact#contact-methods">live chat</a></p>
    </div>
  );
}
