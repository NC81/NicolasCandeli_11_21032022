import { useNavigate } from 'react-router-dom'

export default function Card({ id, title }) {
  const navigate = useNavigate()

  return <li onClick={() => navigate(`sheet/${id}`)}>{title}</li>
}
