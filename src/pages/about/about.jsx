import { useLoaderData } from 'react-router-dom'
import principles from '../../data/principles.json'
import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/collapse'

export default function About() {
  const { principles } = useLoaderData()
  return (
    <main>
      <Banner page="about" />
      <div className="about-principles">
        {principles.map(({ id, title, description }) => (
          <Collapse key={id} page="about" title={title} desc={description} />
        ))}
      </div>
    </main>
  )
}

// Loader function
export function principlesLoader() {
  if (principles == null)
    throw new Response(`Data in principlesLoader is ${principles}`, {
      status: 404,
    })
  else return { principles }
}
