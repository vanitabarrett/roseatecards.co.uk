import Link from 'next/link';

export default function Home() {
  return (
    <div className="gel-wrap home-page">
      <Link href="/cards/christmas">
        <a className="home__featured">
          <p className="home__featured-text-wrapper">
            <span className="home__featured-text">It's beginning to look a lot like</span><br/><span className="home__featured-text home__featured-large-text">Christmas</span>
          </p>
        </a>
      </Link>
    </div>
  );
}
