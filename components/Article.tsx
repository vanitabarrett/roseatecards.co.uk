export default function Article({ published_date, human_published_date, title, description, image, slug }) {
  return (
    <>
      <article className="blog-lists__item gel-layout__item gel-1/2@m" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="author" itemScope itemType="http://schema.org/Organisation">
            <meta itemProp="name">Roseate Cards</meta>
          </meta>
        <meta itemProp="datePublished" content={published_date}></meta>
        <span itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <img className="blog-lists__item__image" src={`/blog/${image}`} alt="" loading="lazy" itemProp="url contentUrl" />
        </span>
        <div className="blog-lists__item__wrapper">
          <p className="blog-lists__item__date">{human_published_date}</p>
          <h2 className="blog-lists__item__title" itemProp="name headline">{title}</h2>
          <p className="blog-lists__item__description">{description}</p>
          <a className="blog-lists__item__button" href={`/blog/${slug}`} itemProp="mainEntityOfPage url">Continue reading</a>
        </div>
      </article>
    </>
  )
}

