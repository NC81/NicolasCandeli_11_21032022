import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../utils/responsive'
import { font, color } from '../utils/variables'

const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 63px;
  ${media.laptop} {
    margin-bottom: 35px;
  }
  ${media.mobile} {
    margin-bottom: 16px;
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
    <Banner role="banner">
      <Logo src="logo_primary.svg" alt="kasa logo" />
      <Navigation>
        <List>
          <li>
            <NavbarLink to={'/'}>Accueil</NavbarLink>
          </li>
          <li>
            <NavbarLink to={`/about`}>A propos</NavbarLink>
          </li>
        </List>
      </Navigation>
    </Banner>
  )
}
