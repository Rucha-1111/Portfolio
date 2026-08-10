import { useLocation } from 'react-router-dom'
import Stars from './Stars.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  return (
    <>
      <Stars />
      <Nav />
      {children}
      <Footer dash={pathname === '/contact'} />
    </>
  )
}
