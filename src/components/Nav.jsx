import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => (isActive ? 'active' : undefined)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <NavLink className="logo" to="/" onClick={close}>
        <span className="glyph"></span>RUCHA
      </NavLink>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>
      <ul className={`navlinks${open ? ' open' : ''}`}>
        <li><NavLink to="/about" className={linkClass} onClick={close}>About Me</NavLink></li>
        <li><NavLink to="/projects" className={linkClass} onClick={close}>Projects</NavLink></li>
        {/*<li><NavLink to="/blogs" className={linkClass} onClick={close}>Blogs</NavLink></li>*/}
        <li><NavLink to="/resume" className={linkClass} onClick={close}>Resume</NavLink></li>
        <li><NavLink to="/contact" className={linkClass} onClick={close}>Contact</NavLink></li>
      </ul>
      <NavLink className="nav-cta" to="/contact">Say Hi 👋</NavLink>
    </nav>
  )
}
