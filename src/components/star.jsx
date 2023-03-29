import styled from 'styled-components'
import { media } from '../utils/constants'
import starFull from '../assets/star_full.svg'
import starEmpty from '../assets/star_empty.svg'

const StarIcon = styled.img`
  height: 24px;
  ${media.laptop} {
    height: 18px;
  }
  ${media.tablet} {
    height: 13px;
  }
`

export default function Star({ type }) {
  return type === 'full' ? (
    <StarIcon src={starFull} alt="full star" />
  ) : (
    <StarIcon src={starEmpty} alt="empty star" />
  )
}
