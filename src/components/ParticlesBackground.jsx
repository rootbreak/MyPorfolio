/**
 * ParticlesBackground.jsx
 * Fondo animado con tsParticles.
 * Partículas sutiles que crean una atmósfera tech sin distraer.
 */
import React, { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesBackground = () => {
  // Inicializa el motor de partículas (solo se ejecuta una vez)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', // No interfiere con los clics
      }}
      options={{
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 55,
            density: { enable: true, area: 900 },
          },
          color: { value: '#00ff87' },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.02, max: 0.12 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
          links: {
            enable: true,
            distance: 140,
            color: '#00ff87',
            opacity: 0.06,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab', // Al hacer hover, las partículas cercanas se conectan
            },
          },
          modes: {
            grab: {
              distance: 160,
              links: { opacity: 0.18 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground
