import { useState } from 'react'
import arrowLeft from '../../assets/arrow_left.svg'
import arrowRight from '../../assets/arrow_right.svg'

export default function Carousel({ pictures, title }) {
  const [imageIndex, updateImage] = useState(0)

  return (
    <header className="carousel">
      <img className="carousel__image" src={pictures[imageIndex]} alt={title} />
      {pictures.length > 1 ? (
        <>
          <span className="carousel__counter">
            {imageIndex + 1}/{pictures.length}
          </span>
          <button
            className="btn carousel__btn carousel__btn--prev"
            onClick={() =>
              imageIndex === 0
                ? updateImage(pictures.length - 1)
                : updateImage(imageIndex - 1)
            }
          >
            <img className="carousel__icon" src={arrowLeft} alt="Précédent" />
          </button>
          <button
            className="btn carousel__btn carousel__btn--next"
            onClick={() =>
              imageIndex === pictures.length - 1
                ? updateImage(0)
                : updateImage(imageIndex + 1)
            }
          >
            <img className="carousel__icon" src={arrowRight} alt="Suivant" />
          </button>
        </>
      ) : null}
    </header>
  )
}
