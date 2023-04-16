import { useLoaderData } from 'react-router-dom'
import adsList from '../../data/ads.json'
import Collapse from '../../components/collapse/collapse'
import Carousel from '../../components/carousel/carousel'
import starFull from '../../assets/star_full.svg'
import starEmpty from '../../assets/star_empty.svg'

export default function Sheet() {
  const { ad } = useLoaderData()
  const range = ['1', '2', '3', '4', '5']

  return (
    <main>
      <Carousel pictures={ad.pictures} title={ad.title} />
      <section className="sheet-intro">
        <div className="sheet-intro-pri">
          <h1 className="sheet-intro-pri__title">{ad.title}</h1>
          <p className="sheet-intro-pri__location">{ad.location}</p>
          <ul className="sheet-intro-pri__tags-list">
            {ad.tags.map((tag, index) => (
              <li className="sheet-intro-pri__tag-item" key={`${tag}-${index}`}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="sheet-intro-sec">
          <div className="sheet-intro-sec__host">
            <span className="sheet-intro-sec__host-name">{ad.host.name}</span>
            <img
              className="sheet-intro-sec__host-picture"
              src={ad.host.picture}
              alt={ad.host.name}
            />
          </div>
          <div className="sheet-intro-sec__rating">
            {range.map((el) =>
              el <= ad.rating ? (
                <img
                  className="sheet-intro-sec__rating-icon"
                  key={el}
                  src={starFull}
                  alt="Étoile pleine"
                />
              ) : (
                <img
                  className="sheet-intro-sec__rating-icon"
                  key={el}
                  src={starEmpty}
                  alt="Étoile vide"
                />
              )
            )}
          </div>
        </div>
      </section>
      <div className="sheet-details">
        <Collapse page="sheet" title="Descripton" desc={ad.description} />
        <Collapse page="sheet" title="Équipements" list={ad.equipments} />
      </div>
    </main>
  )
}

// Loader function
export function singleAdLoader({ params }) {
  const { id } = params
  const ad = adsList.find((el) => el.id === id)
  if (ad == null)
    throw new Response(`Data in singleAdLoader is ${ad}`, { status: 404 })
  else return { ad }
}
