/**
 * Footer.jsx
 * Pie de página minimalista con créditos y links rápidos.
 */
import React from 'react'
import { personal } from '../data.js'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Logo / Nombre */}
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__bracket">[</span>MM<span className="footer__bracket">]</span>
          </span>
          <p className="footer__tagline">
            {personal.title} · {personal.nationality}
          </p>
        </div>

        {/* Links de navegación */}
        <nav className="footer__nav">
          <a href="#inicio" className="footer__link">Inicio</a>
          <a href="#experiencia" className="footer__link">Experiencia</a>
          <a href="#educacion" className="footer__link">Educación</a>
          <a href="#habilidades" className="footer__link">Habilidades</a>
          <a href="#contacto" className="footer__link">Contacto</a>
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Miguel Ángel Mejía Mateo
        </p>
      </div>

      {/* Separador decorativo */}
      <div className="footer__line" />
    </footer>
  )
}

export default Footer
