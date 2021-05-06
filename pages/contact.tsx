import Head from 'next/head';
import FAQ from '../components/FAQ';

export default function Contact() {
  return (
    <div className="gel-wrap contact-page">
      <Head>
        <title>Contact - Roseate Cards</title>
        <meta name="description" content="If our frequently answered questions have not helped, you can contact us via our support channels. We monitor our support channels between 8am and 9pm. We will respond to messages sent outside those times when we are next online." />

        <meta property="og:title" key="ogtitle" content="Contact - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="If our frequently answered questions have not helped, you can contact us via our support channels. We monitor our support channels between 8am and 9pm. We will respond to messages sent outside those times when we are next online." />

        <meta property="twitter:title" key="twittertitle" content="Contact - Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="If our frequently answered questions have not helped, you can contact us via our support channels. We monitor our support channels between 8am and 9pm. We will respond to messages sent outside those times when we are next online." />
      </Head>
      <h1 className="page-title">Contact</h1>

      <div className="contact-page__faq" itemScope itemType="https://schema.org/FAQPage">
        <FAQ anchorId="delivery" question="Looking for delivery information?">
          <p><a href="/delivery-returns#delivery">You can read about our different delivery options here.</a></p>
        </FAQ>

        <FAQ anchorId="returns" question="Looking for our returns policy?">
          <p><a href="/delivery-returns#returns">You can read our returns and refund policy here.</a></p>
        </FAQ>

        <FAQ anchorId="how-return" question="Want to know how to return an item?">
          <p><a href="/delivery-returns#how-return">Follow the instructions here on how to return an item.</a></p>
        </FAQ>

        <FAQ anchorId="tech" question="Found an issue with our website?">
          <p>Oops, did we break something? Let us know by emailing <a href="mailto:tech@roseatecards.co.uk">tech@roseatecards.co.uk</a>, providing as much detail as possible about what isn’t working.</p>
        </FAQ>
      </div>

      <div className="contact-page__contact">
        <h2 className="contact-page__contact__title">Still got some questions?</h2>
        <p>We monitor our support channels between 8am and 9pm. We will respond to messages sent outside those times when we are next online.</p>
        <a className="contact-page__contact__link" href="mailto:support@roseatecards.co.uk">Email us at support@roseatecards.co.uk</a>
        <a className="contact-page__contact__link" href="http://m.me/roseatecards">Facebook Messenger live chat</a>
      </div>
    </div>
  );
}
