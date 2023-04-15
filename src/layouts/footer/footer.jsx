import logoWhite from '../../assets/logo_secondary.svg'

export default function Footer() {
  return (
    <footer className="layout-footer">
      <img src={logoWhite} alt="Logo blanc Kasa" />
      <p className="layout-footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
