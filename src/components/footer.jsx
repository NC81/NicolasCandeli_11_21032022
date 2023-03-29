import styled from 'styled-components'
import { media, font } from '../utils/constants'
import logoWhite from '../assets/logo_white.svg'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  height: 209px;
  background-color: black;
  padding: 66px 0 29px;
  ${media.laptop} {
    padding: 62px 0 62px;
  }
`

const Logo = styled.img`
  display: block;
  width: 122px;
`

const Text = styled.p`
  margin-top: 30px;
  color: white;
  font-size: ${font.medium};
  ${media.laptop} {
    font-size: ${font.small};
    margin-top: 0;
  }
  ${media.mobile} {
    font-size: ${font.tiny};
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Logo src={logoWhite} alt="kasa logo" />
      <Text>© 2020 Kasa. All rights reserved</Text>
    </StyledFooter>
  )
}
