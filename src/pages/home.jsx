import Card from '../components/card'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const { data } = useLoaderData()

  return (
    <div>
      <h1>Chez vous, partout et ailleurs</h1>

      <ul>
        {data.map(({ id, title }) => (
          <Card key={id} id={id} title={title} />
        ))}
      </ul>
    </div>
  )
}
