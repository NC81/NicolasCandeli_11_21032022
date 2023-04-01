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
  const dataCollapse = [
    {
      id: 1,
      title: `Fiabilité`,
      desc: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos 
      sont conformes aux logements, et toutes les informations sont régulièrement 
      vérifiées  par nos équipes.`,
    },
    {
      id: 2,
      title: `Respect`,
      desc: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
      discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
      plateforme.`,
    },
    {
      id: 3,
      title: `Service`,
      desc: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience 
      parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
    },
    {
      id: 4,
      title: `Sécurité`,
      desc: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les 
      voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
      En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
      vérifier que les standards sont bien respectés. Nous organisons également des ateliers 
      sur la sécurité domestique pour nos hôtes.`,
    },
  ]

  return (
    <>
      <Banner />
      <Section>
        {dataCollapse.map((el) => (
          <Collapse key={el.id} title={el.title} desc={el.desc} />
        ))}
      </Section>
    </>
  )
}
