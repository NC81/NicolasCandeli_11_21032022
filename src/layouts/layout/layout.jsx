import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
