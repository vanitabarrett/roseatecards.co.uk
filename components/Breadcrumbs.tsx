interface Props {
  items: { text: string, href?: string }[]
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
      {
        items.map(({ text, href }, index) => {
          if (href) {
            return (
              <li key={text} className="breadcrumbs__item" itemProp="itemListElement" itemScope  itemType="https://schema.org/ListItem">
                <a className="breadcrumbs__link" href={href} itemProp="item"><span itemProp="name">{text}</span></a>
                <meta itemProp="position" content={`${index + 1}`} />
              </li>
            )
          } else {
            return (
              <li key={text} className="breadcrumbs__item" itemProp="itemListElement" itemScope  itemType="https://schema.org/ListItem">
                <span itemProp="name">{text}</span>
                <meta itemProp="position" content={`${index + 1}`} />
              </li>
            )
          }
        })
      }
    </ol>
  )
}
