import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header role="banner">
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  )
}
