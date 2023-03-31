import { Outlet, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from '../utils/globalStyles'
import { media, margin } from '../utils/constants'
import Header from './header'
import Footer from './footer'

export const Wrapper = styled.div`
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
  // eslint-disable-next-line no-unused-vars
  const data = useLoaderData()

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  )
}
