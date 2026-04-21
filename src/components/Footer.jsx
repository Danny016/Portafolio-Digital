import React from 'react'
import { portfolioData } from '../utils/data'
import '../styles/footer.css'

/**
 * Componente SocialLinks
 * Enlaces a redes sociales
 */
const SocialLinks = ({ social }) => {
  return (
    <div className="social-links">
      {social.map((link) => (
        <a 
          key={link.label}
          href={link.url} 
          aria-label={link.label}
          title={link.label}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  )
}

/**
 * Componente Footer
 * Pie de página con enlaces sociales e información
 */
export const Footer = () => {
  const { social, author } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <SocialLinks social={social} />
        <p>© {currentYear} {author.name} — {author.title} | Creativo y resolutivo</p>
      </div>
    </footer>
  )
}
