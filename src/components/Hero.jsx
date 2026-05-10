/**
 * Hero.jsx
 * Sección principal / "above the fold".
 * Diseño asimétrico con nombre grande, bento cards de stats
 * y partículas de fondo. Animaciones de entrada escalonadas.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data.js'
import './Hero.css'

// Variantes de animación reutilizables
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

/* ── Mini card de stat ── */
const StatCard = ({ label, value, delay }) => (
  <motion.div
    className="hero__stat bento-card"
    variants={fadeUp}
    custom={delay}
    initial="hidden"
    animate="visible"
  >
    <span className="hero__stat-value">{value}</span>
    <span className="hero__stat-label">{label}</span>
  </motion.div>
)

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">

        {/* ── Columna izquierda: texto principal ── */}
        <div className="hero__content">
          {/* Etiqueta de estado */}
          <motion.div
            className="hero__badge"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__badge-dot" />
            Disponible para nuevas oportunidades laborales inmediatas.
          </motion.div>

          {/* Nombre grande */}
          <motion.h1
            className="hero__name"
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            animate="visible"
          >
            {personal.name}
            <br />
            <span className="hero__name-last">{personal.lastName}</span>
          </motion.h1>

          {/* Título */}
          <motion.p
            className="hero__title"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="visible"
          >
            {personal.title} &amp; {personal.subtitle}
          </motion.p>

          {/* Bio corta */}
          <motion.p
            className="hero__bio"
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero__actions"
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            animate="visible"
          >
            <a href="#contacto" className="hero__btn hero__btn--primary">
              Hablemos →
            </a>
            <a href="#experiencia" className="hero__btn hero__btn--secondary">
              Ver experiencia
            </a>
          </motion.div>

          {/* Contacto rápido */}
          <motion.div
            className="hero__contact"
            variants={fadeUp}
            custom={0.7}
            initial="hidden"
            animate="visible"
          >
            <a href={`mailto:${personal.email}`} className="hero__contact-link">
              {personal.email}
            </a>
            <span className="hero__contact-sep">·</span>
            <span className="hero__contact-location">📍 {personal.location}</span>
          </motion.div>
        </div>

        {/* ── Columna derecha: grid de stats ── */}
        <div className="hero__stats-grid">
          <StatCard label="Años de experiencia" value="3+" delay={0.5} />
          <StatCard label="Sistemas operativos" value="7" delay={0.6} />
          <StatCard label="Certificaciones" value="5" delay={0.7} />
          <StatCard label="Empresas" value="4" delay={0.8} />

          {/* Card grande de ubicación */}
          <motion.div
            className="hero__location-card bento-card"
            variants={fadeUp}
            custom={0.9}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__location-icon">🇩🇴</div>
            <div>
              <p className="hero__location-name">San Cristóbal</p>
              <p className="hero__location-country">República Dominicana</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}

export default Hero
