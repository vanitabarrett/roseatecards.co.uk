interface Props {
  categoryId: string
}

export default function AdditionalInfo({categoryId}: Props) {
  if (categoryId === "cards") {
    return (
      <div className="additional-info">
        <h2 className="additional-info__title">About our cards...</h2>
        <div className="gel-layout">
          <div className="additional-info__section gel-layout__item gel-1/2@s gel-1/3@m">
            <img className="additional-info__image" src="/svgs/sustainable-inks.svg" alt="" />
            <p className="additional-info__text">We use water-based inks, which are comprised of naturally occurring materials.</p>
          </div>
          <div className="additional-info__section gel-layout__item gel-1/2@s gel-1/3@m">
            <img className="additional-info__image" src="/svgs/sustainable-card.svg" alt=""/>
            <p className="additional-info__text">All cards are sent to you in tough, rigid cardboard envelopes or boxes made from recycled materials.</p>
          </div>
          <div className="additional-info__section gel-layout__item gel-1/3@m">
            <img className="additional-info__image" src="/svgs/sustainable-fsc.svg" alt="" />
            <p className="additional-info__text">Our cards are made from sustainably-sourced wood from forests certified by the Forest Stewardship Council (FSC).</p>
          </div>
        </div>
      </div>
    )
  }

  return null;
}
