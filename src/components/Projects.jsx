import React from 'react'
import { portfolioData } from '../utils/data'
import '../styles/projects.css'

/**
 * Componente ProjectCard
 * Tarjeta individual de proyecto
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <i className={`${project.icon} fa-3x`}></i>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.links.repo} aria-label="Repositorio GitHub">
            <i className="fab fa-github"></i> Repo
          </a>
          <a href={project.links.demo} aria-label="Demo o sitio en vivo">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Componente Projects
 * Sección de proyectos destacados
 */
export const Projects = () => {
  const { projects } = portfolioData

  return (
    <section id="proyectos">
      <div className="container">
        <h2 className="section-title">
          📁 <span>Proyectos destacados</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
