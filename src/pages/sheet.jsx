import { useLoaderData } from 'react-router-dom'
import adsList from '../data/ads.json'
import styled from 'styled-components'
import { media, font, radius, color } from '../utils/constants'
import Star from '../components/star'
import Collapse from '../components/collapse'
import Carousel from '../components/carousel'

const Title = styled.h1`
  font-size: ${font.large};
  line-height: 51px;
  ${media.laptop} {
    font-size: ${font.medium};
    line-height: 38px;
  }
  ${media.tablet} {
    margin-bottom: 5px;
    font-size: ${font.small};
    line-height: 26px;
  }
`

const Location = styled.p`
  font-size: ${font.small};
  line-height: 26px;
  margin-bottom: 20px;
  ${media.laptop} {
    font-size: 16px;
  }
  ${media.tablet} {
    font-size: 14px;
    line-height: 20px;
    margin: 5px 0 10px;
  }
`

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Tag = styled.li`
  min-width: 115px;
  padding: 0 20px;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  color: white;
  background-color: ${color.primary};
  border-radius: ${radius.small};
  ${media.tablet} {
    min-width: 84px;
    line-height: 18px;
    font-size: 10px;
    border-radius: ${radius.tiny};
  }
`

const HostRatings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  ${media.laptop} {
    gap: 14px;
  }
  ${media.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`

const Host = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
`

const HostName = styled.span`
  width: min-content;
  text-align: right;
  line-height: 26px;
  ${media.tablet} {
    font-size: ${font.tiny};
    line-height: 17px;
  }
`

const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  ${media.laptop} {
    width: 48px;
    height: 48px;
  }
  ${media.tablet} {
    width: 32px;
    height: 32px;
  }
`

const Ratings = styled.div`
  display: flex;
  gap: 15px;
  ${media.tablet} {
    gap: 7px;
  }
`

const Presentation = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 24px;
  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }
`

const Informations = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

export default function SheetPage() {
  console.log('Sheet')
  const { ad } = useLoaderData()
  const range = [1, 2, 3, 4, 5]

  return (
    <>
      <Carousel />
      <Presentation>
        <div>
          <Title>{ad.title}</Title>
          <Location>{ad.location}</Location>
          <TagsList>
            {ad.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsList>
        </div>
        <HostRatings>
          <Host>
            <HostName>{ad.host.name}</HostName>
            <HostPicture src={ad.host.picture} alt={ad.host.name} />
          </Host>
          <Ratings>
            {range.map((el, index) =>
              el <= ad.rating ? (
                <Star key={index} type="full" />
              ) : (
                <Star key={index} />
              )
            )}
          </Ratings>
        </HostRatings>
      </Presentation>
      <Informations>
        <Collapse title="Descripton" desc={ad.description} />
        <Collapse title="Équipements" list={ad.equipments} />
      </Informations>
    </>
  )
}

// Loader function
export function adLoader({ params }) {
  console.log('params loader', params.id)
  const { id } = params
  const ad = adsList.find((el) => el.id === id)
  if (ad === undefined) throw new Error('Error: data is undefined')
  else {
    return { ad }
  }
}
