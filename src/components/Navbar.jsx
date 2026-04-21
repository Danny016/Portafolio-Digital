import React from 'react'
import { useTheme, useSmoothScroll } from '../utils/hooks'
import '../styles/navbar.css'

/**
 * Componente Navbar
 * Navbar pegajoso con navegación y toggle de tema
 */
export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { scrollToId } = useSmoothScroll()

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#inicio" className="logo" onClick={(e) => handleNavClick(e, '#inicio')}>
          &lt;Daniel Bernardino Reyes Nolasco/&gt;
        </a>

        <div className="nav-links">
          <a onClick={(e) => handleNavClick(e, '#inicio')}>Inicio</a>
          <a onClick={(e) => handleNavClick(e, '#habilidades')}>Habilidades</a>
          <a onClick={(e) => handleNavClick(e, '#proyectos')}>Proyectos</a>
          <a onClick={(e) => handleNavClick(e, '#contacto')}>Contacto</a>

          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
