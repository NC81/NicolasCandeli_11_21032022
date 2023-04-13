// import styled from 'styled-components'
// import { media, font, radius } from '../../utils/constants'
import { useLocation } from 'react-router-dom'
import cliffs from '../../assets/cliffs.png'
import mountains from '../../assets/mountains.png'

// const BannerWrapper = styled.header`
//   height: 223px;
//   margin: ${(props) =>
//     props.page === '/home' ? '63px 0 43px' : '44px 0 30px'};
//   background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
//     url(${(props) => props.img});
//   background-size: cover;
//   background-position: center;
//   border-radius: ${radius.large};
//   ${media.laptop} {
//     height: 150px;
//     margin-top: ${(props) => (props.page === '/home' ? '35px' : '30px')};
//   }
//   ${media.tablet} {
//     height: 111px;
//     margin: ${(props) =>
//       props.page === '/home' ? '16px 0 22px' : '17px 0 20px'};
//     border-radius: ${radius.medium};
//   }
// `

// const Title = styled.h1`
//   color: white;
//   text-align: center;
//   font-size: ${font.huge};
//   line-height: 223px;
//   ${media.laptop} {
//     font-size: ${font.large};
//     line-height: 150px;
//   }
//   ${media.tablet} {
//     font-size: ${font.medium};
//     line-height: 111px;
//   }
//   ${media.mobile} {
//     line-height: 24px;
//     width: 235px;
//     text-align: left;
//     padding: 31px 0 0 16px;
//   }
// `

export default function Banner() {
  const { pathname } = useLocation()

  return pathname === '/home' ? (
    <header className="banner banner--home">
      <img className="banner__image" src={cliffs} alt="cliffs"></img>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </header>
  ) : (
    <header className="banner banner--about">
      <img className="banner__image" src={mountains} alt="mountains"></img>
    </header>
  )
}
