import { Carousel } from 'react-responsive-carousel';

import { Images } from "../types";

interface Props {
  images: Images
};

export default function ImageCarousel({ images }: Props) {
  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      swipeable
      emulateTouch
      className="image-carousel"
      renderArrowPrev={renderArrow('previous')}
      renderArrowNext={renderArrow('next')}
    >
      {
        images.map(({ url_fullxfull, description }) => (
          <img key={url_fullxfull} src={url_fullxfull} alt={description} />
        ))
      }
    </Carousel>
  )
}

function renderArrow(direction: 'previous' | 'next') {
  return (onClickHandler) =>
  (
    <button type="button" onClick={onClickHandler} aria-label={`Show ${direction} image`} className={`image-carousel__arrow image-carousel__arrow--${direction}`}>
      <span aria-hidden="true">{direction === 'previous' ? '⇦' : '⇨'}</span>
    </button>
  )
}
