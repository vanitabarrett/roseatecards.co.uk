import Head from 'next/head';
import FAQ from '../components/FAQ';

export default function Contact() {
  return (
    <div className="gel-wrap contact-page">
      <Head>
        <title>Contact - Roseate Cards</title>
      </Head>
      <h1 className="page-title">FAQ</h1>

      <div className="contact-page__faq">
        <FAQ anchorId="covid19" question="COVID-19 update">
          <p>Roseate Cards is still open and will remain open during the lockdown period as we can safely work from home! However, our shipping couriers are experiencing some delays which are unfortunately outside our control.</p>
          <p>Most orders take between 3-5 days, but there have been reports of orders taking up to 10 days to arrive. Please make sure you leave as much time as possible when placing your order!</p>
        </FAQ>

        <FAQ anchorId="customise" question="Can I customise my order?">
          <p>All our products state whether they have customisable elements. Unfortunately it is not possible for us to make custom changes on request, but feel free to suggest ideas and we may add these to our products in the future!</p>
        </FAQ>

        <FAQ anchorId="order-not-arrived" question="Why has my order not arrived yet?">
          <p>Unfortunately Royal Mail is experiencing delays due to the coronavirus pandemic. If your order has not arrived in 10 working days, please contact us at <a href="mailto:support@roseatecards.co.uk">support@roseatecards.co.uk</a> or use our <a href="http://m.me/roseatecards">live chat on Facebook Messenger</a></p>
        </FAQ>

        <FAQ anchorId="wrong-order" question="I have received an incorrect or faulty item">
          <p>We’re really sorry if you’ve experienced any problems with your order! Unfortunately we can’t accept returns, but if your item is incorrect, faulty or damaged then we can offer a refund. Please contact us at <a href="mailto:support@roseatecards.co.uk">support@roseatecards.co.uk</a> or use our <a href="http://m.me/roseatecards">live chat on Facebook Messenger</a></p>
        </FAQ>

        <FAQ anchorId="how-long" question="How long will my order take to print and ship?">
          <p>Orders take approximately 1-2 days to print and 3-4 days for 2nd class delivery in the UK (please see the latest <a href="#covid19">COVID-19 update</a> for information on shipping delays).</p>
        </FAQ>

        <FAQ anchorId="tech" question="Trouble with the website itself">
          <p>Oops, did we break something? Let us know by emailing <a href="mailto:tech@roseatecards.co.uk">tech@roseatecards.co.uk</a>, providing as much detail as possible about what isn’t working</p>
        </FAQ>
      </div>

      <div className="contact-page__methods">
        <h1 className="page-title">Contact Us</h1>

        <a className="contact-page__methods__link" href="mailto:hello@roseatecards.co.uk">
          <img src="/svgs/email.svg" className="contact-page__svg" alt="" />
          <span>Email us at hello@roseatecards.co.uk</span>
        </a>

        <a className="contact-page__methods__link" href="http://m.me/roseatecards">
          <img src="/svgs/live-chat.svg" className="contact-page__svg" alt="" />
          <span>Live Chat (requires a Facebook account)</span>
        </a>
      </div>
    </div>
  );
}
