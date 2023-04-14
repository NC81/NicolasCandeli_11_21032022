import { Link, useRouteError } from 'react-router-dom'
// import styled from 'styled-components'
// import { GlobalStyle } from '../../utils/globalStyles'
// import { font, media } from '../../utils/constants'
// import { PageWrapper } from '../../src/layout/layout/layout'
import Header from '../../layout/header/header'

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 169px 0 182px;
//   gap: 66px;
//   ${media.laptop} {
//     margin: 169px 0 133px;
//     gap: 40px;
//   }
//   ${media.tablet} {
//     margin: 195px 0 133px;
//     gap: 11px;
//   }
// `

// const Title = styled.h1`
//   font-size: 288px;
//   font-weight: 700;
//   line-height: 263px;
//   ${media.laptop} {
//     font-size: 160px;
//     line-height: 180px;
//   }
//   ${media.tablet} {
//     font-size: 96px;
//     line-height: 137px;
//   }
// `

// const Message = styled.p`
//   text-align: center;
//   font-size: ${font.large};
//   ${media.laptop} {
//     font-size: ${font.medium};
//   }
//   ${media.tablet} {
//     font-size: ${font.small};
//   }
//   ${media.mobile} {
//     width: 220px;
//   }
// `

// const Footer = styled.footer`
//   text-align: center;
// `

// const FooterLink = styled(Link)`
//   ${media.tablet} {
//     font-size: 14px;
//   }
// `

export default function Error() {
  const error = useRouteError()
  const { status } = useRouteError()
  console.error(error)

  return (
    <div className="page-wrapper">
      <Header />
      <main className="error-main">
        <h1 className="error-main__title">{status}</h1>
        <p className="error-main__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </main>
      <footer className="error-footer">
        <Link className="error-footer__link" to={'home'}>
          Retourner sur la page d’accueil
        </Link>
      </footer>
    </div>
  )
}
