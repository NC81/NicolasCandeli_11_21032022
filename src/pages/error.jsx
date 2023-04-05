import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from '../utils/globalStyles'
import { font, media } from '../utils/constants'
import { Wrapper } from '../../src/components/layout/layout'
import Header from '../../src/components/layout/header'

const Section = styled.section`
  text-align: center;
  margin: 169px 0 182px;
  ${media.laptop} {
    margin: 169px 0 133px;
  }
  ${media.tablet} {
    margin: 195px 60px 133px;
  }
`

const Title = styled.h1`
  margin-bottom: 66px;
  font-size: 288px;
  font-weight: 700;
  line-height: 263px;
  ${media.laptop} {
    margin-bottom: 40px;
    font-size: 160px;
  }
  ${media.tablet} {
    margin-bottom: 11px;
    font-size: 96px;
  }
`

const Message = styled.p`
  font-size: ${font.large};
  ${media.laptop} {
    font-size: ${font.medium};
  }
  ${media.tablet} {
    font-size: ${font.small};
  }
`

const Footer = styled.footer`
  text-align: center;
`

const FooterLink = styled(Link)`
  ${media.tablet} {
    font-size: 14px;
  }
`

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Wrapper id="error-page">
      <GlobalStyle />
      <Header />
      <Section>
        <Title>404</Title>
        <Message>Oups! La page que vous demandez n'existe pas</Message>
      </Section>
      <Footer>
        <FooterLink to={'home'}>Retournez sur la page d'accueil</FooterLink>
      </Footer>
    </Wrapper>
  )
}
