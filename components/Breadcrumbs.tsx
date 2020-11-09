import Link from 'next/link';

interface Props {
  items: { text: string, href?: string }[]
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <ol className="breadcrumbs">
      {
        items.map(({ text, href }) => {
          if (href) {
            return (
              <li key={text} className="breadcrumbs__item">
                <Link href={href}>
                  <a className="breadcrumbs__link">{text}</a>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={text} className="breadcrumbs__item">
                {text}
              </li>
            )
          }
        })
      }
    </ol>
  )
}
