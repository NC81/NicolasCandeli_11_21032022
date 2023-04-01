import { useLoaderData, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { media, font } from '../utils/constants'
import Tag from '../components/tag'
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
  gap: 9px;
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
  const routeParams = useParams()
  const ad = useLoaderData().data.find((el) => el.id === routeParams.id)
  const range = ['1', '2', '3', '4', '5']

  return (
    <>
      <Carousel />
      <Presentation>
        <div>
          <Title>{ad.title}</Title>
          <Location>{ad.location}</Location>
          <TagsList>
            {ad.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
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
