import { NavLink } from 'react-router-dom'
import logoPrimary from '../../assets/logo_primary.svg'

export default function Header() {
  return (
    <header className="layout-header">
      <img
        className="layout-header__logo"
        src={logoPrimary}
        alt="Logo orange Kasa"
      />
      <nav className="layout-header__nav">
        <ul className="layout-header__list">
          <li>
            <NavLink className="layout-header__link" to={'home'}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="layout-header__link" to={`about`}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
