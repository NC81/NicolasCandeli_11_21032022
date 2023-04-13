import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import { media, font } from '../../utils/constants'
import logoPrimary from '../../assets/logo_primary.svg'

// const HeaderWrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
// `

// const Logo = styled.img`
//   width: 210px;
//   ${media.tablet} {
//     width: 170px;
//   }
//   ${media.mobile} {
//     width: 45%;
//     max-width: 145px;
//   }
// `

// const Navigation = styled.nav`
//   margin: auto 0;
// `

// const List = styled.ul`
//   display: flex;
//   gap: 63px;
//   ${media.tablet} {
//     gap: 35px;
//   }
//   ${media.mobile} {
//     gap: 15px;
//   }
// `

// const NavbarLink = styled(NavLink)`
//   font-size: ${font.medium};
//   text-decoration: none;
//   &.active {
//     text-decoration: underline;
//   }
//   ${media.tablet} {
//     font-size: ${font.small};
//   }
//   ${media.mobile} {
//     text-transform: uppercase;
//     font-size: ${font.tiny};
//   }
// `

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPrimary} alt="kasa logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <NavLink className="header__link" to={'home'}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to={`about`}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
