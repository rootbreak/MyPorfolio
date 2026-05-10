/**
 * App.jsx
 * Componente raíz que ensambla todas las secciones del portfolio.
 *
 * Estructura:
 * - ParticlesBackground: fondo fijo animado
 * - Navbar: navegación fija en la parte superior
 * - Hero: sección principal / presentación
 * - Experience: experiencia laboral
 * - Education: educación y certificaciones
 * - Skills: habilidades técnicas y blandas
 * - Contact: sección de contacto
 * - Footer: pie de página
 */
import React from 'react'

// Componentes de layout global
import ParticlesBackground from './components/ParticlesBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Secciones del portfolio
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

import './App.css'

const App = () => {
  return (
    <>
      {/* Partículas de fondo (posición fixed, z-index 0) */}
     

      {/* Contenido principal por encima de las partículas */}
      <div className="app">
        <Navbar />
        <main>
         <br />
         <br />
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
