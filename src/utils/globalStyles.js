import { createGlobalStyle } from 'styled-components'
import { media } from './responsive'
import { font } from './variables'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
    font-size: ${font.medium};
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    font-size: ${font.huge};
    ${media.laptop} {
      font-size: ${font.large};
    }
    ${media.tablet} {
      font-size: ${font.medium};
    }
  }
`
