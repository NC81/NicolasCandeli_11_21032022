import Card from '../components/card'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { media, radius, margin, color } from '../utils/constants'
import Banner from '../components/banner'

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px ${margin.large};
  padding: 56px 50px;
  background-color: ${color.secondary};
  border-radius: ${radius.large};
  ${media.laptop} {
    gap: ${margin.medium};
    padding: 0;
    background-color: white;
  }
  ${media.tablet} {
    gap: ${margin.small};
  }
`

export default function Home() {
  return (
    <>
      <Banner />
      <Gallery>
        {useLoaderData().data.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </Gallery>
    </>
  )
}
