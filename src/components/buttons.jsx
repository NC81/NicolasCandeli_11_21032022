import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

const ButtonWrapper = styled.a`
  padding: 0 23px;
  ${media.laptop} {
    padding: 0 15px;
  }
  ${media.mobile} {
    padding: 0 6px;
  }
`

const Arrow = styled.img`
  height: 79px;
  ${media.laptop} {
    height: 50px;
  }
  ${media.mobile} {
    height: 20px;
  }
`

export default function Button() {
  const routeParams = useParams()
  const ad = useLoaderData().data.find((el) => el.id === routeParams.id)
  const [imageIndex, updateImage] = useState(0)

  return (
    <div>
      <ButtonWrapper
        href="#"
        onClick={() =>
          imageIndex === 0
            ? updateImage(ad.pictures.length - 1)
            : updateImage(imageIndex - 1)
        }
      >
        <Arrow src={arrowLeft} alt="left arrow" />
      </ButtonWrapper>
      <ButtonWrapper
        href="#"
        onClick={() =>
          imageIndex === ad.pictures.length - 1
            ? updateImage(0)
            : updateImage(imageIndex + 1)
        }
      >
        <Arrow src={arrowRight} alt="right arrow" />
      </ButtonWrapper>
    </div>
  )
}
