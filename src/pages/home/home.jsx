import { useLoaderData } from 'react-router-dom'
import adsList from '../../data/ads.json'
// import styled from 'styled-components'
// import { media, radius, margin, color } from '../../utils/constants'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'

// const Gallery = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 50px ${margin.large};
//   padding: 56px 50px 6px;
//   background-color: ${color.secondary};
//   border-radius: ${radius.large};
//   ${media.laptop} {
//     gap: 35px;
//     padding: 0;
//     background-color: white;
//   }
//   ${media.tablet} {
//     gap: ${margin.small};
//   }
// `

// const HiddenCard = styled.div`
//   flex: 1 340px;
//   ${media.laptop} {
//     flex: 1 255px;
//   }
//   ${media.mobile} {
//     display: none;
//   }
// `

export default function Home() {
  const { adsList } = useLoaderData()

  return (
    <main>
      <Banner />
      <section className="gallery">
        {adsList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
        <div className="gallery__hidden-card"></div>
        <div className="gallery__hidden-card"></div>
      </section>
    </main>
  )
}

// Loader function
export function adsListLoader() {
  if (adsList == null)
    throw new Response(`Data in adsListLoader is ${adsList}`, { status: 404 })
  else return { adsList }
}
