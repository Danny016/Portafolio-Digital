import React from 'react'
import { useContactForm } from '../utils/hooks'
import { portfolioData } from '../utils/data'
import '../styles/contact.css'

/**
 * Componente ContactInfo
 * Información de contacto del desarrollador
 */
const ContactInfo = ({ author }) => {
  return (
    <div className="contact-info">
      <div className="info-item">
        <i className="fas fa-envelope"></i>
        <span>{author.email}</span>
      </div>
      <div className="info-item">
        <i className="fab fa-github"></i>
        <span>{author.github}</span>
      </div>
      <div className="info-item">
        <i className="fas fa-map-marker-alt"></i>
        <span>{author.location}</span>
      </div>
      <div className="info-item">
        <i className="fas fa-clock"></i>
        <span>{author.availability}</span>
      </div>
    </div>
  )
}

/**
 * Componente ContactForm
 * Formulario de contacto interactivo
 */
const ContactForm = () => {
  const { formData, handleChange, handleSubmit, loading, message } = useContactForm()


}

/**
 * Componente Contact
 * Sección de contacto con información y formulario
 */
export const Contact = () => {
  const { author } = portfolioData

  return (
    <section id="contacto">
      <div className="container">
        <h2 className="section-title">
          📬 <span>Hablemos</span>
        </h2>
        <div className="contact-wrapper">
          <ContactInfo author={author} />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
