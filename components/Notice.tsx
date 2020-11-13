interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export default function Notice({title, children}: Props) {
  return (
    <div className="notice">
      <h2 className="notice__title">{title}</h2>
      <div className="notice__text">{children}</div>
    </div>
  )
}
