import styled from 'styled-components'
import { media } from '../utils/responsive'
import { radius } from '../utils/variables'

const Titre = styled.h1`
  height: 223px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('cliffs.png') 25% 50% / cover;
  margin-bottom: 43px;
  border-radius: ${radius.large};
  ${media.laptop} {
    height: 150px;
    border-radius: ${radius.medium};
  }
  ${media.tablet} {
    height: 111px;
    border-radius: ${radius.small};
  }
  &:after {
    ${(props) => props.isHome && `content: 'Chez vous, partout et ailleurs';`}
    ${(props) => props.isAbout && `content: '';`}
    display: block;
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
      width: 220px;
      text-align: left;
      padding: 31px 0 0 16px;
    }
  }
`

export default function Banner() {
  return <Titre isHome></Titre>
}
