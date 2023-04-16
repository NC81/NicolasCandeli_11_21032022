import cliffs from '../../assets/cliffs.png'
import mountains from '../../assets/mountains.png'

export default function Banner({ page }) {
  const path = page === 'home' ? cliffs : mountains
  const alt = page === 'home' ? 'Falaises de bord de mer' : 'Haute vallée'
  return (
    <header className={`banner banner--${page}`}>
      <img className="banner__image" src={path} alt={alt} />
      {page === 'home' ? (
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      ) : null}
    </header>
  )
}
