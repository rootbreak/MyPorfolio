/**
 * Skills.jsx
 * Sección de habilidades técnicas y blandas.
 * Las habilidades técnicas tienen barras animadas de progreso.
 * Las blandas se muestran como tarjetas interactivas.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data.js'
import './Skills.css'

/* ── Barra de progreso animada ── */
const SkillBar = ({ name, level, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className="skill__bar-item">
      <div className="skill__bar-header">
        <span className="skill__bar-name">{name}</span>
        <span className="skill__bar-level">{level}%</span>
      </div>
      <div className="skill__bar-track">
        {/* La barra se anima al entrar en viewport */}
        <motion.div
          className="skill__bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  )
}

/* ── Card de habilidad blanda ── */
const SoftSkillCard = ({ label, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="skill__soft-card bento-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.03 }}
    >
      <span className="skill__soft-label">{label}</span>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="habilidades" className="section">
      <div className="container">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Capacidades</span>
          <h2 className="section__title">Habilidades</h2>
          <p className="section__subtitle">
            Combinación de conocimientos técnicos y competencias interpersonales.
          </p>
        </motion.div>

        {/* Layout de dos bloques */}
        <div className="skills__layout">
          {/* Bloque de habilidades técnicas */}
          <div className="bento-card skills__technical">
            <h3 className="skills__block-title">Técnicas</h3>
            <div className="skills__bars">
              {skills.technical.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Bloque de habilidades blandas */}
          <div className="skills__soft-block">
            <h3 className="skills__block-title skills__block-title--right">Blandas</h3>
            <div className="skills__soft-grid">
              {skills.soft.map((label, i) => (
                <SoftSkillCard key={label} label={label} index={i} />
              ))}
            </div>

            {/* Mini-tarjeta extra: idiomas */}
            <div className="bento-card skills__languages">
              <h4 className="skills__lang-title">Idiomas</h4>
              <div className="skills__lang-list">
                <div className="skills__lang-item">
                  <span>Español</span>
                  <span className="skills__lang-level">Nativo</span>
                </div>
                <div className="skills__lang-item">
                  <span>Inglés</span>
                  <span className="skills__lang-level">Básico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
