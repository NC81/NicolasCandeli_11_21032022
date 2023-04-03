import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import adsList from '../data/ads.json'
import { media, radius, margin, color } from '../utils/constants'
import Banner from '../components/banner'
import Card from '../components/card'

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px ${margin.large};
  padding: 56px 50px 6px;
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

const HiddenCard = styled.div`
  flex: 1 340px;
  ${media.laptop} {
    flex: 1 255px;
  }
  ${media.mobile} {
    display: none;
  }
`

export default function HomePage() {
  console.log('Home')
  const { adsList } = useLoaderData()

  return (
    <main>
      <Banner />
      <Gallery>
        {adsList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
        <HiddenCard></HiddenCard>
        <HiddenCard></HiddenCard>
      </Gallery>
    </main>
  )
}

// Loader function
export function adsListLoader() {
  return { adsList }
}
