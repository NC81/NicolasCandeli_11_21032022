import { useLoaderData } from 'react-router-dom'
import values from '../data/values.json'
import styled from 'styled-components'
import { media } from '../utils/constants'
import Banner from '../components/banner'
import Collapse from '../components/collapse'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  ${media.tablet} {
    gap: 20px;
  }
`

export default function AboutPage() {
  console.log('About')
  const { values } = useLoaderData()

  return (
    <>
      <Banner />
      <Section>
        {values.map((el) => (
          <Collapse key={el.id} title={el.title} desc={el.desc} />
        ))}
      </Section>
    </>
  )
}

// Loader function
export function valuesLoader() {
  return { values }
}
