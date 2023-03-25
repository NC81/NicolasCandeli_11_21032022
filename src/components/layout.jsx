import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import { GlobalStyle } from '../utils/globalStyles'
import { media } from '../utils/responsive'
import { margin } from '../utils/variables'

const Wrapper = styled.div`
  margin: ${margin.medium} ${margin.huge};
  ${media.laptop} {
    margin: ${margin.medium} ${margin.large};
  }
  ${media.tablet} {
    margin: ${margin.small} ${margin.medium};
  }
  ${media.mobile} {
    margin: ${margin.small} ${margin.small};
  }
`

export default function Layout() {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  )
}
