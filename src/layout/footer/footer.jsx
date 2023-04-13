// import styled from 'styled-components'
// import { media, font } from '../../utils/constants'
import logoWhite from '../../assets/logo_secondary.svg'

// const FooterWrapper = styled.footer`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: auto;
//   height: 209px;
//   background-color: black;
//   padding: 66px 0 29px;
//   ${media.laptop} {
//     padding-bottom: 45px;
//   }
//   ${media.mobile} {
//     padding: 62px 0 62px;
//   }
// `

// const Text = styled.p`
//   color: white;
//   font-size: ${font.medium};
//   ${media.laptop} {
//     font-size: ${font.small};
//   }
//   ${media.mobile} {
//     font-size: ${font.tiny};
//   }
// `

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="kasa logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
