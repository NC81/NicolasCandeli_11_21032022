import { Link, useRouteError } from 'react-router-dom'
import Header from '../../layouts/header/header'

export default function Error() {
  const error = useRouteError()
  const { status } = useRouteError()
  console.error(error)

  return (
    <div className="page-wrapper">
      <Header />
      <main className="error-main">
        <h1 className="error-main__title">{status}</h1>
        <p className="error-main__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </main>
      <footer className="error-footer">
        <Link className="error-footer__link" to={'home'}>
          Retourner sur la page d’accueil
        </Link>
      </footer>
    </div>
  )
}
