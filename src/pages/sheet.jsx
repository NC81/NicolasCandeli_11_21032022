import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Sheet() {
  const { data } = useLoaderData()
  const routeParams = useParams()
  const ad = data.find((el) => el.id === routeParams.id)

  return (
    <div>
      <h1>{ad.title}</h1>
    </div>
  )
}
