import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Article from '../../components/Article';
import blogs from '../../blog-data.json';

export default function Blog({
  featuredBlog,
  blogList
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="gel-wrap blogs-page" itemScope itemType="https://schema.org/Blog">
      <Head>
        <title>Blog - Roseate Cards</title>
        <meta name="description" content="Explore our latest blog posts for wedding inspiration, help with deciding on your wedding stationery, and interesting topical blog posts on the latest in the world of greeting cards." />

        <meta property="og:title" key="ogtitle" content="Blog - Roseate Cards" />
        <meta property="og:description" key="ogdescription" content="Explore our latest blog posts for wedding inspiration, help with deciding on your wedding stationery, and interesting topical blog posts on the latest in the world of greeting cards." />

        <meta property="twitter:title" key="twittertitle" content="Blog- Roseate Cards" />
        <meta property="twitter:description" key="twitterdescription" content="Explore our latest blog posts for wedding inspiration, help with deciding on your wedding stationery, and interesting topical blog posts on the latest in the world of greeting cards." />
      </Head>
      <h1 className="page-title">Blog</h1>

      { featuredBlog ?
        <article className="featured-item" itemScope itemType="https://schema.org/BlogPosting">
          <span itemProp="author" itemScope itemType="http://schema.org/Organisation">
            <meta itemProp="name" content="Roseate Cards"></meta>
          </span>
          <meta itemProp="datePublished" content={featuredBlog.published_date}></meta>
          <span itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <img src={`/blog/${featuredBlog.image}`} className="featured-item__image gel-layout__item gel-1/1 gel-1/2@m" alt="" loading="lazy" itemProp="url contentUrl" />
          </span>
          <div className="featured-item__text-wrapper gel-layout__item gel-1/1 gel-1/2@m">
            <h2 className="featured-item__headline-wrapper">
              <span className="featured-item__text" itemProp="name headline">{featuredBlog.title}</span>
            </h2>
            <p className="featured-item__description">{featuredBlog.description}</p>
            <p className="featured-item__button-wrapper"><a href={`/blog/${featuredBlog.slug}`} className="featured-item__button" itemProp="mainEntityOfPage url">Continue reading</a></p>
          </div>
        </article> : null
      }

      { blogList ?

        <div className="blog-lists gel-layout">

          {
            blogList.map((blog) => (
              <Article key={blog.slug} {...blog} />
            ))
          }

        </div> : null
      }

      <div className="mailing-cta">
        <h2 className="mailing-cta__title">Join our members club</h2>
        <p className="mailing-cta__text">Subscribe to our mailing list to receive exclusive offers, news on new products and our latest blog posts.</p>
        <div className="mailing-cta__frame">
          <iframe className="mj-w-res-iframe" frameBorder="0" scrolling="no" src="https://app.mailjet.com/widget/iframe/6M56/J1u" width="100%"></iframe>
          <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
        </div>
      </div>

    </div>
  );
}

export async function getStaticProps() {
  const featuredBlog = blogs["featured"] ? blogs["featured"] : null
  const blogList = blogs["other_blogs"] ? blogs["other_blogs"] : null

  return {
    props: {
      featuredBlog,
      blogList
    },
  }
}
