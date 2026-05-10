# Portfolio — Miguel Ángel Mejía Mateo

Portfolio personal construido con **React + Vite**, **Framer Motion**, **tsParticles** y un diseño **Bento UI** oscuro y elegante.

## Tecnologías usadas

- ⚡ **Vite 5** — build tool ultrarrápido
- ⚛️ **React 18** — librería de UI
- 🎞️ **Framer Motion** — animaciones fluidas
- ✨ **tsParticles** — fondo de partículas interactivo
- 👁️ **react-intersection-observer** — animaciones al hacer scroll
- 🎨 **CSS puro con variables** — sin frameworks CSS adicionales

## Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr servidor de desarrollo
npm run dev

# 3. Abrir http://localhost:5173
```

## Build para producción (Netlify)

```bash
npm run build
```

El comando genera la carpeta `dist/` lista para subir a Netlify.

### Deploy en Netlify

1. Sube el proyecto a tu repositorio de GitHub
2. Conecta el repo en Netlify
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. El archivo `netlify.toml` ya maneja las redirecciones SPA automáticamente.

## Estructura del proyecto

```
src/
├── components/
│   ├── ParticlesBackground.jsx  ← Fondo animado tsParticles
│   ├── Navbar.jsx               ← Navegación fija con glassmorphism
│   ├── Hero.jsx                 ← Sección principal
│   ├── Experience.jsx           ← Experiencia laboral (bento grid)
│   ├── Education.jsx            ← Educación y certificaciones
│   ├── Skills.jsx               ← Habilidades con barras animadas
│   ├── Contact.jsx              ← Sección de contacto
│   └── Footer.jsx               ← Pie de página
├── data.js                      ← ⭐ EDITA AQUÍ tu información
├── App.jsx                      ← Componente raíz
├── App.css
├── index.css                    ← Variables de diseño globales
└── main.jsx                     ← Entry point
```

## Personalización

Para actualizar tu información, **solo edita `src/data.js`** — no necesitas tocar los componentes.

## Paleta de colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--bg` | `#070808` | Fondo principal |
| `--accent` | `#00ff87` | Acento verde eléctrico |
| `--text-primary` | `#f0f0ee` | Texto principal |
| `--text-secondary` | `#8a8f8a` | Texto secundario |
