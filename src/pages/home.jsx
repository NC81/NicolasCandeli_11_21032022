import Card from '../components/card'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/titre'

export default function Home() {
  const { data } = useLoaderData()

  return (
    <div>
      <Banner />
      <ul>
        {data.map(({ id, title }) => (
          <Card key={id} id={id} title={title} />
        ))}
      </ul>
    </div>
  )
}
