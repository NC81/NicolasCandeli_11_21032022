import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { media, font, color } from '../utils/constants'
import logoPrimary from '../assets/logo_primary.svg'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${media.tablet} {
    margin-bottom: 27px;
  }
`

const Logo = styled.img`
  height: 68px;
  ${media.tablet} {
    height: 47px;
  }
`

const Navigation = styled.nav`
  margin: auto 0;
`

const List = styled.ul`
  display: flex;
`

const NavbarLink = styled(NavLink)`
  margin-left: 60px;
  font-size: ${font.medium};
  color: ${color.primary};
  ${media.tablet} {
    font-size: ${font.small};
    margin-left: 25px;
  }
  ${media.mobile} {
    text-transform: uppercase;
    font-size: ${font.tiny};
    margin-left: 10px;
  }
`

export default function Header() {
  return (
    <HeaderWrapper role="banner">
      <Logo src={logoPrimary} alt="kasa logo" />
      <Navigation>
        <List>
          <li>
            <NavbarLink to={'home'}>Accueil</NavbarLink>
          </li>
          <li>
            <NavbarLink to={`about`}>A propos</NavbarLink>
          </li>
        </List>
      </Navigation>
    </HeaderWrapper>
  )
}
