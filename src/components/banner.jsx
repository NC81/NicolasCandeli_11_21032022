import styled from 'styled-components'
import { media, font, radius } from '../utils/constants'
import { useLocation } from 'react-router-dom'
import cliffs from '../assets/cliffs.png'

const BannerWrapper = styled.section`
  height: 223px;
  margin: 63px 0 43px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: ${radius.large};
  ${media.laptop} {
    height: 150px;
    margin-top: 35px;
  }
  ${media.tablet} {
    height: 111px;
    margin: 16px 0 22px;
    border-radius: ${radius.small};
  }
`

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: ${font.huge};
  line-height: 223px;
  ${media.laptop} {
    font-size: ${font.large};
    line-height: 150px;
  }
  ${media.tablet} {
    font-size: ${font.medium};
    line-height: 111px;
  }
  ${media.mobile} {
    line-height: 24px;
    width: 230px;
    text-align: left;
    padding: 31px 0 0 16px;
  }
`

export default function Banner() {
  const location = useLocation()

  return location.pathname === '/home' ? (
    <BannerWrapper img={cliffs} home>
      <Title home>Chez vous, partout et ailleurs</Title>
    </BannerWrapper>
  ) : null
}
