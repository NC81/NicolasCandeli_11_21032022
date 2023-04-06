import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from '../../utils/globalStyles'
import { media, margin } from '../../utils/constants'
import Header from './header'
import Footer from './footer'

export const Wrapper = styled.div`
  max-width: 1440px;
  width: calc(100% - ${margin.huge}*2);
  margin: ${margin.medium} auto;
  ${media.laptop} {
    width: calc(100% - ${margin.large}*2);
  }
  ${media.tablet} {
    width: calc(100% - ${margin.medium}*2);
    margin: ${margin.small} auto;
  }
  ${media.mobile} {
    width: calc(100% - ${margin.small}*2);
  }
`

export default function Layout() {
  console.log('Layout')
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Outlet />
        </main>
      </Wrapper>
      <Footer />
    </>
  )
}
