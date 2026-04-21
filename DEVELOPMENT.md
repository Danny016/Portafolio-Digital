# Guía de Desarrollo del Portafolio Digital

## 📚 Documentación de Desarrollo

Este documento proporciona información adicional para desarrolladores que trabajan en este proyecto.

## 🏗️ Arquitectura del Proyecto

### Principios de Diseño

1. **Modularidad** - Cada componente es independiente y reutilizable
2. **Separación de responsabilidades** - Componentes, estilos y datos separados
3. **Performance** - Uso de lazy loading implicit en React
4. **Accesibilidad** - Semántica HTML y ARIA labels

### Flujo de Datos

```
App.jsx (raíz)
├── Navbar (navegación + tema)
├── Hero (presentación)
├── Skills (habilidades)
├── Projects (portafolio)
├── Contact (formulario)
└── Footer (redes sociales)
```

## 🨙 Hooks Personalizados

### useTheme()

Gestiona el estado del tema oscuro/claro con persistencia en localStorage.

```jsx
const { isDark, toggleTheme } = useTheme()
```

### useSmoothScroll()

Proporciona navegación suave a secciones específicas.

```jsx
const { scrollToId } = useSmoothScroll()
scrollToId('#proyectos') // Navega a la sección
```

### useContactForm()

Maneja la validación y envío del formulario de contacto.

```jsx
const { formData, handleChange, handleSubmit, loading, message } = useContactForm()
```

### useDownloadCV()

Simula la descarga de un CV.

```jsx
const { downloadCV } = useDownloadCV()
```

## 🎨 Sistema de Estilos

### Variables CSS Disponibles

```css
:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --card-bg: #ffffff;
  --border: #e2e8f0;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  --skill-bg: #f1f5f9;
  --footer-bg: #f1f5f9;
}

body.dark {
  /* Variables oscuras */
}
```

### Agregar nuevos estilos

1. Crear archivo CSS modularizado en `src/styles/`
2. Importar en el componente correspondiente
3. Usar clases CSS en el JSX

## 🔄 Actualizar Datos

Para cambiar los datos estáticos del portafolio, edita `src/utils/data.js`:

```javascript
export const portfolioData = {
  author: { /* información personal */ },
  hero: { /* sección hero */ },
  skills: [ /* array de habilidades */ ],
  projects: [ /* array de proyectos */ ],
  social: [ /* array de redes sociales */ ]
}
```

## 🚀 Próximas Mejoras Sugeridas

- [ ] Integrate with a backend API for contact form
- [ ] Add animations with Framer Motion
- [ ] Add blog section with markdown support
- [ ] Add authentication for admin panel
- [ ] Implement SEO meta tags dynamically
- [ ] Add loading states and error boundaries
- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Cypress
- [ ] Internationalization (i18n) support

## 🐛 Debugging

### Console Logs

El proyecto registra un mensaje en la consola al cargar:

```
Portafolio de programador — listo para inspirar
```

### React Developer Tools

Se recomienda instalar [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) para debug avanzado.

## 📜 Convenciones del Código

### Nombres de Archivos

- Componentes: PascalCase (ej: `Header.jsx`)
- Utilidades: camelCase (ej: `hooks.js`)
- Estilos: kebab-case (ej: `navbar.css`)

### Estructura de Componentes

```jsx
import React from 'react'
import { hook } from '../utils/hooks'
import '../styles/component.css'

/**
 * Descripción del componente
 */
export const ComponentName = () => {
  const { data } = hook()

  return (
    <section className="component">
      {/* contenido */}
    </section>
  )
}
```

### Comentarios

- Usar comentarios JSDoc para componentes
- Explicar lógica compleja
- Documentar funciones públicas

## 🔐 Seguridad

- No incluir claves API en el código
- Usar variables de entorno para datos sensibles
- Validar datos del formulario en el cliente y servidor
- Usar Content Security Policy headers

## 📱 Testing Responsive

Tamaños de pantalla importantes:

```css
Mobile: 320px - 480px
Tablet: 481px - 1024px
Desktop: 1025px+

@media (max-width: 768px) {
  /* estilos mobile */
}
```

## 🎯 Performance

- Lazy load de imágenes (cuando sea aplicable)
- Code splitting automático con Vite
- Minificación de CSS y JS en build
- Optimización de imágenes SVG/PNG

## 📦 Build Optimizations

El archivo `vite.config.js` incluye optimizaciones:

```javascript
plugins: [react()],
server: {
  port: 3000,
  open: true
}
```

---

Última actualización: 2025
