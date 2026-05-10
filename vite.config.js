import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para producción en Netlify
// base: '/' asegura que las rutas funcionen correctamente
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
