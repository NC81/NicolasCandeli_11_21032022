import { createGlobalStyle } from 'styled-components'
import { font } from './constants'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
    font-size: ${font.small};
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }
`
