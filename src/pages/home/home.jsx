import { useLoaderData } from 'react-router-dom'
import adsList from '../../data/ads.json'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'

export default function Home() {
  const { adsList } = useLoaderData()
  return (
    <main>
      <Banner page="home" />
      <section className="home-gallery">
        {adsList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
        <div className="home-gallery__hidden-card"></div>
        <div className="home-gallery__hidden-card"></div>
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
