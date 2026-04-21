import React from 'react'
import { portfolioData } from '../utils/data'
import '../styles/skills.css'

/**
 * Componente SkillCard
 * Tarjeta individual de habilidad
 */
const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <i className={skill.icon}></i>
      <span>{skill.name}</span>
    </div>
  )
}

/**
 * Componente Skills
 * Sección de habilidades técnicas
 */
export const Skills = () => {
  const { skills } = portfolioData

  return (
    <section id="habilidades">
      <div className="container">
        <h2 className="section-title">
          ⚡ <span>Habilidades técnicas</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
