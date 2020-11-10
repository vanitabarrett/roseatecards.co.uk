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
    </div>
  );
}
