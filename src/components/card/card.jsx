import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`../sheet/${id}`}>
      <img className="card__image" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}
