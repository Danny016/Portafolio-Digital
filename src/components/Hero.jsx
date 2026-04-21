import React from 'react'
import { useDownloadCV, useSmoothScroll } from '../utils/hooks'
import { portfolioData } from '../utils/data'
import '../styles/hero.css'

/**
 * Componente Hero
 * Sección principal con presentación del desarrollador
 */
export const Hero = () => {
  const { downloadCV } = useDownloadCV()
  const { scrollToId } = useSmoothScroll()

  const { hero } = portfolioData

  const handleProjectsClick = (e) => {
    e.preventDefault()
    scrollToId('#proyectos')
  }

  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <i className="fas fa-code"></i>
          <span>{hero.badge}</span>
        </div>

        <h1>
          Construyo <span className="hero-highlight">soluciones digitales</span> que marcan la diferencia
        </h1>

        <p>{hero.description}</p>

        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={handleProjectsClick}
          >
            Ver proyectos <i className="fas fa-arrow-right"></i>
          </button>
          <button 
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault()
              downloadCV()
            }}
          >
            Descargar CV <i className="fas fa-download"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
