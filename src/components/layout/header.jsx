import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { media, font } from '../../utils/constants'
import logoPrimary from '../../assets/logo_primary.svg'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
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
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  ${media.tablet} {
    font-size: ${font.small};
    margin-left: 25px;
  }
  ${media.mobile} {
    text-transform: uppercase;
    font-size: ${font.tiny};
    margin-left: 10px;
    &.home {
      margin-left: 0;
    }
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logoPrimary} alt="kasa logo" />
      <Navigation>
        <List>
          <li>
            <NavbarLink className="home" to={'home'}>
              Accueil
            </NavbarLink>
          </li>
          <li>
            <NavbarLink to={`about`}>A propos</NavbarLink>
          </li>
        </List>
      </Navigation>
    </HeaderWrapper>
  )
}
