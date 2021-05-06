import Head from 'next/head';
import FAQ from '../components/FAQ';

export default function DeliveryReturns() {
  return (
    <div className="gel-wrap delivery-returns-page">
      <Head>
        <title>Delivery and Returns - Roseate Cards</title>
        <meta name="description" content="Information on our delivery options and return policy. We know that sometimes a product just isn’t right for you. We accept returns on items that are in their original condition, ideally still within the original packaging." />

        <meta property="og:title" key="ogtitle" content="Delivery and Returns - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="Information on our delivery options and return policy. We know that sometimes a product just isn’t right for you. We accept returns on items that are in their original condition, ideally still within the original packaging." />

        <meta property="twitter:title" key="twittertitle" content="Delivery and Returns - Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="Information on our delivery options and return policy. We know that sometimes a product just isn’t right for you. We accept returns on items that are in their original condition, ideally still within the original packaging." />
      </Head>
      <h1 className="page-title">Delivery and Returns</h1>

      <div className="delivery-returns-page__contents">
        <h2>Deliveries</h2>
        <ul>
          <li><a href="#delivery">How do deliveries work?</a></li>
          <li><a href="#not-in">What happens if I’m not in when my order arrives?</a></li>
          <li><a href="#direct-to-recipient">Tell me more about your direct sending service</a></li>
        </ul>

        <h2>Packaging</h2>
        <ul>
          <li><a href="#packaging">What is your approach to packaging?</a></li>
          <li><a href="#recyclable">Is your packaging recyclable?</a></li>
        </ul>

        <h2>Returns and Refunds</h2>
        <ul>
          <li><a href="#returns">What is your returns policy?</a></li>
          <li><a href="#incorrect-faulty">I have received an incorrect/faulty item</a></li>
          <li><a href="#how-return">How do I return something?</a></li>
          <li><a href="#refund">When will I receive a refund?</a></li>
          <li><a href="#return-customised">Can I return a customised order?</a></li>
        </ul>
      </div>

      <div className="delivery-returns-page__faq" itemScope itemType="https://schema.org/FAQPage">
        <FAQ anchorId="delivery" question="How do deliveries work?">
          <p>We primarily use Royal Mail to deliver your orders. We offer the following delivery services:</p>
          <ul>
            <li>2nd Class: FREE. Available on all products, excluding wedding samples.</li>
            <li>1st Class: £0.65. Available on greeting card products.</li>
            <li>Tracked: £3.99. Available on wedding stationery. For large volume wedding stationery orders, this may be applied by default.</li>
          </ul>
        </FAQ>

        <FAQ anchorId="not-in" question="What happens if I’m not in when my order arrives?">
          <p>We know that waiting around for a delivery isn’t practical for most people! The majority of our greeting card orders are small enough to be delivered through a standard size letterbox, so there’s no need for you to be in.</p>
          <p>Please be aware that larger volume orders, especially wedding stationery, may be too large to fit through a letterbox. If you’re not in, our delivery partners will try to deliver again a on a different day, or will leave a calling card stating where they have left the parcel (if applicable) or how to book a re-delivery.</p>
        </FAQ>

        <FAQ anchorId="direct-to-recipient" question="Tell me more about your direct sending service">
          <p>All of our greeting cards have the option to send the card directly to your chosen recipient. When placing your order, select the “Direct to recipient” sending option and make sure you include your message and the recipient name & address in the personalisation details.</p>
          <p>Our direct sending service doesn’t auto-generate your provided message. We manually type the message out ourselves before the card is printed. This means we can adjust the inside layout of the card to best suit your message.</p>
        </FAQ>

        <FAQ anchorId="packaging" question="What is your approach to packaging?">
          <p>As a small business, we want to do our best to be green and help the environment. We package our greeting cards and stationery inside cardboard packaging and avoid plastic where possible.</p>
          <p>Unfortunately, at this point in time, our greeting cards are packaged inside plastic. The good news is that this plastic can be recycled. We will be exploring alternatives to this plastic in the future.</p>
        </FAQ>

        <FAQ anchorId="recyclable" question="Is your packaging recyclable?">
          <p>Yes. We package our greeting cards and stationery inside cardboard packaging and avoid plastic where possible. Unfortunately, at this point in time, our greeting cards are packaged inside plastic. The good news is that this plastic can be recycled. We will be exploring alternatives to this plastic in the future.</p>
        </FAQ>

        <FAQ anchorId="returns" question="What is your returns policy?">
          <p>We know that sometimes a product just isn’t right for you. We accept returns on items that are in their original condition, ideally still within the original packaging.</p>
          <p>We do not accept returns on personalised products, including wedding stationery and greeting cards sent directly to recipients. Due to the nature of our products, we also don’t accept exchanges or cancellations of orders.</p>
          <p>To return an item and receive a full refund, contact us within 21 days of receipt of the item and post the item back to us within 30 days of receipt. If you request a refund for an item outside these timeframes, then any refund will be at our discretion.</p>
          <p>Returned items are your responsibility until they reach us, so make sure they're packaged properly. We recommend getting proof of postage in case you need to contact us about your return. You are responsible for the return of an item, unless you have <a href="#incorrect-faulty">received an incorrect or faulty item</a>.</p>
        </FAQ>

        <FAQ anchorId="incorrect-faulty" question="I have received an incorrect/faulty item">
          <p>We’re really sorry if you’ve experienced any problems with your order. If you have received an incorrect or faulty item, we will cover the cost of any return and issue a full refund.</p>
          <ol>
            <li>
              Send an email to support@roseatecards.co.uk stating the following:
              <ul>
                <li>Your order number</li>
                <li>The item(s) you wish to return</li>
                <li>A photograph of the incorrect/faulty item(s)</li>
              </ul>
            </li>
            <li>Keep an eye on your emails - we will contact you within 1-2 days with details on how to post back your items and when you will receive your refund.</li>
          </ol>
        </FAQ>

        <FAQ anchorId="how-return" question="How do I return something?">
          <p><a href="#incorrect-faulty">Follow these steps to return an incorrect or faulty item instead.</a></p>
          <ol>
            <li>
              Send an email to support@roseatecards.co.uk stating the following:
              <ul>
                <li>Your order number</li>
                <li>The item(s) you wish to return</li>
              </ul>
            </li>
            <li>Keep an eye on your emails - we will contact you within 1-2 days with details on how to post back your items and when you will receive your refund.</li>
          </ol>
        </FAQ>

        <FAQ anchorId="refund" question="When will I receive a refund?">
          <p>We will only refund orders once we have received your return. Please allow 5 working days for us to process your return. Depending on your method of payment, it may take a few days longer for the money to appear in your bank account.</p>
        </FAQ>

        <FAQ anchorId="return-customised" question="Can I return a customised order?">
          <p>Unfortunately we are unable to accept returns for any personalised orders, i.e: orders which have a personalised message or mention a person’s name/age, as these are difficult to re-sell. However, it may be possible to return items that have been customised in terms of colour/design only. Please get in touch following the steps on <a href="#how-return">how to return something</a> and we will get back to you.</p>
        </FAQ>
      </div>
    </div>
  );
}
