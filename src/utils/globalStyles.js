import { createGlobalStyle } from 'styled-components'
import { font, color } from './constants'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${color.primary};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
    font-size: ${font.small};
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }

  h2 {
    font-size: ${font.small};
  }
`
