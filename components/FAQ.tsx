interface Props {
  question: string;
  anchorId: string;
  children: JSX.Element | JSX.Element[];
}

export default function FAQ({question, anchorId, children}: Props) {
  return (
    <div className="faq" id={anchorId} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <h2 className="faq__question" itemProp="name">{question}</h2>
      <div className="faq__answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
          {children}
        </div>
      </div>
    </div>
  )
}
