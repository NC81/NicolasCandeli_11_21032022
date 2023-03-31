import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 415px;
  margin: 20px 0 24px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: ${radius.small};
  ${media.laptop} {
    height: 255px;
  }
  ${media.tablet} {
    margin: 27px 0 15px;
  }
`

const Counter = styled.span`
  position: absolute;
  color: white;
  width: 40px;
  left: calc(50% - 20px);
  bottom: 25px;
  text-align: center;
  ${media.mobile} {
    display: none;
  }
`

const Button = styled.a`
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

export default function Carousel() {
  const routeParams = useParams()
  const ad = useLoaderData().data.find((el) => el.id === routeParams.id)
  const [imageIndex, updateImage] = useState(0)

  return (
    <CarouselWrapper img={ad.pictures[imageIndex]}>
      {ad.pictures.length !== 1 ? (
        <>
          <Counter>
            {imageIndex + 1}/{ad.pictures.length}
          </Counter>
          <Button
            href="#"
            onClick={() =>
              imageIndex === 0
                ? updateImage(ad.pictures.length - 1)
                : updateImage(imageIndex - 1)
            }
          >
            <Arrow src={arrowLeft} alt="left arrow" />
          </Button>
          <Button
            href="#"
            onClick={() =>
              imageIndex === ad.pictures.length - 1
                ? updateImage(0)
                : updateImage(imageIndex + 1)
            }
          >
            <Arrow src={arrowRight} alt="right arrow" />
          </Button>
        </>
      ) : null}
    </CarouselWrapper>
  )
}
