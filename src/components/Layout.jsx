import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </div>
  )
}

export default Layout
