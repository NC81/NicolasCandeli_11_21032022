import { useLoaderData } from 'react-router-dom'
import principles from '../data/principles.json'
import styled from 'styled-components'
import { media } from '../utils/constants'
import Banner from '../components/banner/banner'
import Collapse from '../components/collapse/collapse'

const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  ${media.tablet} {
    gap: 20px;
  }
`

export default function About() {
  const { principles } = useLoaderData()

  return (
    <main>
      <Banner />
      <Company>
        {principles.map((el) => (
          <Collapse key={el.id} page="about" title={el.title} desc={el.desc} />
        ))}
      </Company>
    </main>
  )
}

// Loader function
export function principlesLoader() {
  if (principles == null)
    throw new Error(`Data in principlesLoader is ${principles}`)
  else return { principles }
}
