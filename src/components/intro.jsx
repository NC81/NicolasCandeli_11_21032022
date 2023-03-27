import styled from 'styled-components'
import { media } from '../utils/responsive'
import { radius } from '../utils/variables'
import { useLocation } from 'react-router-dom'

const IntroWrapper = styled.section`
  height: 223px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('cliffs.png') 25% 50% / cover;
  margin-bottom: 43px;
  border-radius: ${radius.large};
  ${media.laptop} {
    height: 150px;
  }
  ${media.tablet} {
    height: 111px;
    border-radius: ${radius.small};
    margin-bottom: 22px;
  }
`

const Title = styled.h1`
  color: white;
  text-align: center;
  line-height: 223px;
  ${media.laptop} {
    line-height: 150px;
  }
  ${media.tablet} {
    line-height: 111px;
  }
  ${media.mobile} {
    line-height: 24px;
    width: 230px;
    text-align: left;
    padding: 31px 0 0 16px;
  }
`

export default function Intro() {
  const location = useLocation()

  return location.pathname === '/' ? (
    <IntroWrapper>
      <Title>Chez vous, partout et ailleurs</Title>
    </IntroWrapper>
  ) : null
}
