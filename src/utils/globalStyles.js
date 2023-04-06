import { createGlobalStyle } from 'styled-components'
import { font, color } from './constants'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, Sans-Serif;
    font-size: ${font.small};
    font-weight: 500;
    color: ${color.primary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
  }
`
