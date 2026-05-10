/**
 * Contact.jsx
 * Sección de contacto con tarjetas de métodos de contacto
 * y una tarjeta grande de CTA principal.
 */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personal } from '../data.js'
import './Contact.css'

/* ── Datos de métodos de contacto ── */
const CONTACT_METHODS = [
  {
    icon: '✉',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    action: 'Enviar email',
  },
  {
    icon: '📱',
    label: 'Teléfono',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    action: 'Llamar',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: personal.location,
    href: null,
    action: null,
  },
]

/* ── Tarjeta de método de contacto individual ── */
const ContactCard = ({ method, index }) => {
  const [copied, setCopied] = useState(false)

  // Copia el valor al portapapeles
  const handleCopy = async () => {
    if (method.href) return // Si tiene link, no copiar
    await navigator.clipboard.writeText(method.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="contact__card bento-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="contact__icon">{method.icon}</span>
      <p className="contact__label">{method.label}</p>
      <p className="contact__value">{method.value}</p>

      {/* Botón de acción (link o copiar) */}
      {method.href ? (
        <a href={method.href} className="contact__action">
          {method.action} →
        </a>
      ) : (
        <button className="contact__action" onClick={handleCopy}>
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      )}
    </motion.div>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contacto" className="section contact__section">
      <div className="container">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Contacto</span>
          <h2 className="section__title">Hablemos</h2>
          <p className="section__subtitle">
            ¿Tienes una oportunidad o proyecto interesante? Estoy disponible.
          </p>
        </motion.div>

        {/* Layout de contacto */}
        <div className="contact__layout">
          {/* Tarjeta CTA grande izquierda */}
          <motion.div
            className="contact__cta bento-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Efecto de brillo de fondo */}
            <div className="contact__cta-glow" />

            <span className="contact__cta-tag">Disponible ahora</span>
            <h3 className="contact__cta-title">
              ¿Listo para <br />
              <span className="contact__cta-highlight">colaborar?</span>
            </h3>
            <p className="contact__cta-text">
              Busco oportunidades donde pueda crecer técnicamente y aportar valor
              real. No dudes en escribirme.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="contact__cta-btn"
            >
              Enviar mensaje →
            </a>

            {/* Información adicional */}
            <div className="contact__cta-meta">
              <span>🇩🇴 {personal.nationality}</span>
              <span>·</span>
              <span>Nacido {personal.born}</span>
            </div>
          </motion.div>

          {/* Cards de métodos de contacto */}
          <div className="contact__methods">
            {CONTACT_METHODS.map((method, i) => (
              <ContactCard key={method.label} method={method} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
