/**
 * Education.jsx
 * Sección de educación y certificaciones.
 * Layout bento: educación a la izquierda, certs a la derecha.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education, certifications } from '../data.js'
import './Education.css'

/* ── Tarjeta de educación individual ── */
const EducationItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className={`edu__item bento-card ${item.current ? 'edu__item--current' : ''}`}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Indicador de en curso */}
      {item.current && (
        <span className="edu__current-badge">En curso</span>
      )}
      <p className="edu__period">{item.period}</p>
      <h3 className="edu__degree">{item.degree}</h3>
      <p className="edu__institution">{item.institution}</p>
    </motion.div>
  )
}

/* ── Tarjeta de certificación individual ── */
const CertCard = ({ cert, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="cert__card bento-card"
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Ícono de certificado */}
      <div className="cert__icon">◈</div>
      <div className="cert__content">
        <h4 className="cert__name">{cert.name}</h4>
        <p className="cert__issuer">{cert.issuer}</p>
        <p className="cert__desc">{cert.description}</p>
      </div>
    </motion.div>
  )
}

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="educacion" className="section edu__section">
      <div className="container">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Formación</span>
          <h2 className="section__title">Educación & Certificaciones</h2>
          <p className="section__subtitle">
            Base académica y aprendizaje continuo como pilares del crecimiento profesional.
          </p>
        </motion.div>

        {/* Layout de dos columnas */}
        <div className="edu__layout">
          {/* Columna izquierda: educación formal */}
          <div className="edu__formal">
            <h3 className="edu__col-title">Educación Formal</h3>
            <div className="edu__items">
              {education.map((item, i) => (
                <EducationItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Columna derecha: certificaciones */}
          <div className="edu__certs">
            <h3 className="edu__col-title">Certificaciones</h3>
            <div className="cert__list">
              {certifications.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
