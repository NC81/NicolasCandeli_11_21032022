// import styled from 'styled-components'
// import { media } from '../utils/constants'
import starFull from '../assets/star_full.svg'
import starEmpty from '../assets/star_empty.svg'
import PropTypes from 'prop-types'

// const StarIcon = styled.img`
//   height: 24px;
//   ${media.laptop} {
//     height: 18px;
//   }
//   ${media.tablet} {
//     height: 13px;
//   }
// `

export default function Star({ type }) {
  return type === 'full' ? (
    <img src={starFull} alt="full star" className="starIcon" />
  ) : (
    <img src={starEmpty} alt="empty star" />
  )
}

Star.propTypes = {
  type: PropTypes.string,
}
