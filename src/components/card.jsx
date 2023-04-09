import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import PropTypes from 'prop-types'

const CardLink = styled(Link)`
  position: relative;
  flex: 1 340px;
  height: 340px;
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${(props) => props.state});
  background-size: cover;
  background-position: center;
  border-radius: ${radius.medium};
  ${media.laptop} {
    flex: 1 255px;
    height: 255px;
  }
`

const Title = styled.h2`
  position: absolute;
  width: 40%;
  left: 20px;
  bottom: 20px;
  color: white;
`

export default function Card({ id, title, cover }) {
  return (
    <CardLink state={cover} to={`../sheet/${id}`}>
      <Title>{title}</Title>{' '}
    </CardLink>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}
