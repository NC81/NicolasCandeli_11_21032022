import { Outlet } from 'react-router-dom'
// import styled from 'styled-components'
// import { GlobalStyle } from '../../utils/globalStyles'
// import { media, margin } from '../../utils/constants'
import Header from '../header/header'
import Footer from '../footer/footer'
import '../../sass/main.css'

// export const PageWrapper = styled.div`
//   max-width: 1240px;
//   width: calc(100% - ${margin.huge}*2);
//   margin: ${margin.medium} 0;
//   ${media.laptop} {
//     width: calc(100% - ${margin.large}*2);
//   }
//   ${media.tablet} {
//     width: calc(100% - ${margin.medium}*2);
//     margin: ${margin.small} 0;
//   }
//   ${media.mobile} {
//     width: calc(100% - ${margin.small}*2);
//   }
// `

export default function Layout() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <div className="page-wrapper">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
