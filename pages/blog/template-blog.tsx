import Head from 'next/head';
import { useRouter } from "next/router";

export default function BlogPost() {
  const { asPath } = useRouter();
  return (
    <div className="gel-wrap blog-post-page">
      <Head>
        <title>[BLOG TITLE] - Roseate Cards</title>
        <meta name="description" content="[BLOG DESCRIPTION]" />

        <meta property="og:title" key="ogtitle" content="[BLOG TITLE] - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="[BLOG DESCRIPTION]" />

        <meta property="twitter:title" key="twittertitle" content="[BLOG TITLE] - Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="[BLOG DESCRIPTION]" />
      </Head>
      <div className="blog-post-page__back">
        <a href="/blog" className="blog-post-page__back__link">Back</a>
      </div>

      <div className="blog-post-page__content">
        <p className="blog-post-page__content__date">DATE</p>
        <h1 className="blog-post-page__content__title">BLOG TITLE BLOG TITLE BLOG TITLE BLOG TITLE BLOG TITLE BLOG TITLE BLOG TITLE BLOG TITLE </h1>
      </div>

    </div>
  );
}
