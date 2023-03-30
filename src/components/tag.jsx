import styled from 'styled-components'
import { media, color, radius } from '../utils/constants'
import PropTypes from 'prop-types'

const TagWrapper = styled.li`
  min-width: 115px;
  padding: 0 20px;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  color: white;
  background-color: ${color.primary};
  border-radius: ${radius.small};
  ${media.tablet} {
    min-width: 84px;
    line-height: 18px;
    font-size: 10px;
    border-radius: ${radius.tiny};
  }
`

export default function Tag({ tag }) {
  return <TagWrapper>{tag}</TagWrapper>
}

Tag.propTypes = {
  tag: PropTypes.string,
}
