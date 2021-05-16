import Head from 'next/head';
import { useRouter } from 'next/router';
import blogs from '../../blog-data.json';

export default function BlogPost() {
  const { asPath } = useRouter();

  const allBlogs = []
  allBlogs.push(blogs["featured"])

  for (var blog of blogs["other_blogs"]) {
    allBlogs.push(blog)
  }

  const blogSlug = asPath.substring(asPath.lastIndexOf('/') + 1)

  const matchingBlog = allBlogs.find(({ slug }) => slug === blogSlug);

  const blogTitle = matchingBlog.title
  const blogFeaturedImage = `/blog/${matchingBlog.image}`
  const blogSocialShareDescription = matchingBlog.description

  return (
    <article className="gel-wrap blog-post-page" itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting">
      <Head>
        <title>{blogTitle} - Roseate Cards</title>
        <meta name="description" content={blogSocialShareDescription} />

        <meta property="og:title" key="ogtitle" content={`${blogTitle} - Roseate Cards`} />
        <meta property="og:description" key="ogdescription" content={blogSocialShareDescription} />
        <meta property="og:image" key="ogimage" content={`https://roseatecards.co.uk${blogFeaturedImage}`} />

        <meta property="twitter:title" key="twittertitle" content={`${blogTitle} - Roseate Cards`} />
        <meta property="twitter:description" key="twitterdescription" content={blogSocialShareDescription} />
        <meta property="twitter:image" key="twitterimage" content={`https://roseatecards.co.uk${blogFeaturedImage}`} />
      </Head>
      <meta itemProp="mainEntityOfPage" content={`https://roseatecards.co.uk${asPath}`}></meta>
      <div className="blog-post-page__back">
        <a href="/blog" className="blog-post-page__back__link">Back</a>
      </div>

      <div itemScope itemType="https://schema.org/ImageObject">
        <img src={blogFeaturedImage} className="blog-post-page__feature" alt="" loading="lazy" itemProp={blogFeaturedImage} />
      </div>

      <div className="blog-post-page__content">
        <p className="blog-post-page__content__date">
        <time dateTime={matchingBlog.published_date} itemProp="datePublished">{matchingBlog.human_published_date}</time>
        </p>
        <h1 className="blog-post-page__content__title" itemProp="name headline">{blogTitle}</h1>
        <div itemProp="articleBody" className="blog-post-page__article-body">
          <h2>Florals</h2>
          <p>[INTRO]</p>

          <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <img itemProp="url contentUrl" alt="Screenshot of an example wedding website" src="/blog/invite-budget/hitched.jpg" />
            <figcaption itemProp="caption">Wedding website, image taken from <a href="https://www.hitched.co.uk/website/index.php">Hitched</a></figcaption>
          </figure>

          <h2>Simple and Monochromatic</h2>
          <p>[INTRO]</p>

          <h2>Watercolour</h2>
          <p>[INTRO]</p>

          <h2>Blush</h2>
          <p>[INTRO]</p>
        </div>
      </div>

      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Roseate Cards"></meta>
        <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="url" content="https://roseatecards.co.uk/social/social.png"></meta>
        </span>
      </span>

      <div className="blog-post-page__share">
        <h2>Share:</h2>
        <ul className="blog-post-page__share__list">
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://roseatecards.co.uk${asPath}`}
              rel="noreferrer external"
              className="blog-post-page__share__link"
              aria-label="Share on Facebook"
            >
              <svg width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 75v362c0 41.398-33.602 75-75 75H316l-30-30h-30l-30 30H75c-41.398 0-75-33.602-75-75V75C0 33.602 33.602 0 75 0h362c41.398 0 75 33.602 75 75zm0 0" fill="#7984eb"/><path d="M512 75v362c0 41.398-33.602 75-75 75H316l-30-30h-15V0h166c41.398 0 75 33.602 75 75zm0 0" fill="#4661d1"/><path d="M316 180v60h90l-15 90h-75v182h-90V330h-60v-90h60v-60c0-33.3 18.3-62.402 45-78 13.2-7.5 28.8-12 45-12h90v90zm0 0" fill="#ececf1"/><path d="M316 180v60h90l-15 90h-75v182h-45V102c13.2-7.5 28.8-12 45-12h90v90zm0 0" fill="#e2e2e7"/></svg>
            </a>
          </li>

          <li>
            <a
              href={`https://pinterest.com/pin/create/button/?url=https://roseatecards.co.uk${asPath}&media=https://roseatecards.co.uk${blogFeaturedImage}&description=${blogTitle}`}
              rel="noreferrer external"
              className="blog-post-page__share__link"
              aria-label="Share on Pinterest"
            >
              <svg viewBox="0 0 32 32" width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M26 32H6a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6z" fill="#ffe6e2"/><path d="M16.217 8c-4.385.001-6.717 2.811-6.717 5.875 0 1.421.794 3.193 2.066 3.755.363.163.315-.036.627-1.229a.283.283 0 00-.068-.278C10.307 14.021 11.77 9.7 15.959 9.7c6.062 0 4.93 8.388 1.055 8.388-.999 0-1.743-.784-1.507-1.754.285-1.155.844-2.397.844-3.23 0-2.099-3.126-1.787-3.126.993 0 .859.304 1.439.304 1.439l-1.193 4.823c-.316 1.285.043 3.366.074 3.545.019.099.13.13.192.049.099-.13 1.315-1.865 1.656-3.119.124-.457.633-2.31.633-2.31.335.605 1.302 1.112 2.332 1.112 3.064 0 5.279-2.693 5.279-6.035C22.489 10.397 19.746 8 16.217 8z" fill="#fc573b"/></svg>
            </a>
          </li>

          <li>
            <a
              href={`https://twitter.com/intent/tweet?url=https://roseatecards.co.uk${asPath}&text=${blogTitle}`}
              rel="noreferrer external"
              className="blog-post-page__share__link"
              aria-label="Share on Twitter"
            >
              <svg height="50" width="50" viewBox="0 0 504.4 504.4" xmlns="http://www.w3.org/2000/svg"><path d="M497 512H15c-8.284 0-15-6.716-15-15V15C0 6.716 6.716 0 15 0h482c8.284 0 15 6.716 15 15v482c0 8.284-6.716 15-15 15z" fill="#00aced"/><path d="M497 0H256v512h241c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z" fill="#009cea"/><path d="M421.425 144.315l-8.069 3.029s9.381-16.535 12.205-24.474c1.417-3.984-.721-6.09-3.203-7.2-2.62-1.172-5.637-.916-8.173.428-16.957 8.984-41.512 11.875-41.512 11.875-12.904-14.982-33.898-18.743-55.21-18.94-39.985-.37-73.512 31.144-74.186 71.125a72.933 72.933 0 001.074 13.773c-75.551-2.33-131.971-68.949-131.971-68.949-42.791 18.311-8.084 85.545-8.084 85.545-33.345 17.875 15.751 69.03 15.751 69.03-11.751 36.82 47.761 61.122 47.761 61.122-33.275 21.978-84.132 17.432-84.132 17.432-13.062 4.35-4.604 13.464-4.604 13.464 126.748 72.074 230.164-2.507 230.164-2.507 98.971-72.343 90.968-177.93 90.968-177.93l33.894-37.718c3.118-4.347.949-6.998-2-8.562-3.284-1.742-7.194-1.849-10.673-.543z" fill="#fff"/><path d="M432.097 144.858c-3.283-1.741-7.193-1.849-10.672-.543l-8.069 3.03s9.381-16.535 12.205-24.474c1.417-3.984-.721-6.09-3.204-7.2-2.62-1.171-5.637-.916-8.173.428-16.957 8.984-41.512 11.875-41.512 11.875-12.904-14.982-33.898-18.743-55.21-18.94-25.312-.234-48.022 12.318-61.463 31.697v252.802c33.213-10.032 53.236-24.465 53.236-24.465 98.971-72.343 90.968-177.93 90.968-177.93l33.894-37.718c3.119-4.347.949-6.998-2-8.562z" fill="#d7f2f9"/></svg>
            </a>
          </li>

          <li>
            <a
              href={`whatsapp://send?text=https://roseatecards.co.uk${asPath}`}
              rel="noreferrer external"
              className="blog-post-page__share__link"
              aria-label="Share on Whatsapp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.4 504.4" width="50" height="50"><path d="M254.8 119.4c-71.6 0-129.6 57.6-129.6 128.8 0 28 9.2 54.4 24.8 75.6l-16.4 48 50-16c20.4 13.6 45.2 21.2 71.6 21.2 71.6 0 130-57.6 130-128.8-.4-71.2-58.8-128.8-130.4-128.8zm76 182c-3.2 8.8-18.8 17.2-25.6 18s-6.8 5.6-45.6-9.2c-38.4-15.2-62.8-54-64.8-56.8-2-2.4-15.6-20.4-15.6-38.8s9.6-27.6 13.2-31.2c3.6-3.6 7.6-4.8 10-4.8 2.4 0 5.2.4 7.2.4 2.4 0 5.2-1.2 8.4 6.4 3.2 7.6 10.8 26 11.6 28s1.6 4 .4 6.4c-1.2 2.4-2 4-3.6 6.4-2 2-4 4.8-5.6 6.4-2 2-4 4-1.6 7.6 2.4 3.6 10 16 21.2 26 14.4 12.8 26.8 16.8 30.4 18.8 3.6 2 6 1.6 8-.8 2.4-2.4 9.6-10.8 12-14.8 2.4-3.6 5.2-3.2 8.4-2 3.6 1.2 22 10.4 26 12.4 3.6 2 6.4 2.8 7.2 4.4 1.2.8 1.2 8.4-1.6 17.2z" fill="#70C548"/><path d="M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zM254.8 401.4c-27.2 0-52.4-6.8-74.8-19.2l-85.6 27.2 28-82c-14-23.2-22-50.4-22-79.2 0-84.8 69.2-153.2 154.4-153.2s154.4 68.4 154.4 153.2S340 401.4 254.8 401.4z" fill="#70C548"/></svg>
            </a>
          </li>
        </ul>
      </div>

    </article>
  );
}
