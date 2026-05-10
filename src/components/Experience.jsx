/**
 * Experience.jsx
 * Sección de experiencia laboral con tarjetas bento animadas.
 * Usa IntersectionObserver para animaciones al entrar en viewport.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data.js'
import './Experience.css'

/* ── Hook personalizado para animación al entrar en viewport ── */
const useScrollReveal = (threshold = 0.15) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: true })
  return { ref, inView }
}

/* ── Componente de tag de habilidad ── */
const Tag = ({ label }) => (
  <span className="exp__tag">{label}</span>
)

/* ── Tarjeta individual de experiencia ── */
const ExperienceCard = ({ job, index }) => {
  const { ref, inView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className="bento-card exp__card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Línea de acento izquierda */}
      <div className="exp__accent-line" />

      {/* Encabezado de la tarjeta */}
      <div className="exp__header">
        <div>
          <h3 className="exp__role">{job.role}</h3>
          <p className="exp__company">{job.company}</p>
        </div>
        <span className="exp__period">{job.period}</span>
      </div>

      {/* Lista de logros */}
      <ul className="exp__highlights">
        {job.highlights.map((item, i) => (
          <li key={i} className="exp__highlight-item">
            <span className="exp__bullet">→</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Tags de tecnologías/skills */}
      <div className="exp__tags">
        {job.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="experiencia" className="section">
      <div className="container">
        {/* Encabezado de sección */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section__header"
        >
          <span className="section-tag">Trayectoria</span>
          <h2 className="section__title">Experiencia Laboral</h2>
          <p className="section__subtitle">
            Roles que han formado mi perspectiva técnica y profesional.
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="exp__grid">
          {experience.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
