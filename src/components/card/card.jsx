import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`../sheet/${id}`}>
      <img className="card__image" src={cover} alt="Intérieur d'appartement" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}
