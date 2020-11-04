export default function FAQ({question, anchorId, children}) {
  return (
    <div className="faq" id={anchorId}>
      <h2 className="faq__question">{question}</h2>
      <div className="faq__answer">
        {children}
      </div>
    </div>
  )
}
