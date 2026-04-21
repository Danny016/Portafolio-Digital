# Portafolio Digital - React

Portafolio profesional moderno y completamente modularizado con React y Vite. El proyecto cuenta con un diseño responsivo, modo oscuro/claro, y componentes reutilizables.

## 🎯 Características

- ✨ **Diseño moderno y responsivo** - Se adapta a cualquier dispositivo
- 🌓 **Modo oscuro/claro** - Con persistencia en localStorage
- ⚡ **Construcción rápida** - Powered by Vite
- 📦 **Código modularizado** - Componentes React reutilizables
- 🎨 **CSS organizado** - Estilos separados por componente
- 📱 **Mobile-first** - Optimizado para dispositivos móviles
- ♿ **Accesible** - Etiquetas ARIA y navegación semántica

## 📂 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Navbar.jsx       # Barra de navegación
│   ├── Hero.jsx         # Sección principal
│   ├── Skills.jsx       # Habilidades técnicas
│   ├── Projects.jsx     # Proyectos destacados
│   ├── Contact.jsx      # Sección de contacto
│   ├── Footer.jsx       # Pie de página
│   └── index.js         # Exportaciones
├── styles/              # CSS modularizado
│   ├── index.css        # Estilos globales
│   ├── navbar.css       # Estilos de Navbar
│   ├── hero.css         # Estilos de Hero
│   ├── skills.css       # Estilos de Skills
│   ├── projects.css     # Estilos de Projects
│   ├── contact.css      # Estilos de Contact
│   └── footer.css       # Estilos de Footer
├── utils/               # Utilidades
│   ├── hooks.js         # Custom hooks
│   └── data.js          # Datos estáticos
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# o con yarn
yarn install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# o con yarn
yarn dev
```

El servidor se abrirá en `http://localhost:3000` automáticamente.

### Construcción para producción

```bash
# Crear build optimizado
npm run build

# o con yarn
yarn build
```

### Vista previa del build

```bash
# Ver el build construido localmente
npm run preview

# o con yarn
yarn preview
```

## 🎨 Personalización

### Cambiar datos del portafolio

Edita `src/utils/data.js` para actualizar:
- Información personal
- Habilidades
- Proyectos
- Enlaces sociales

```javascript
export const portfolioData = {
  author: {
    name: 'Tu Nombre',
    title: 'Tu Título',
    email: 'tu@email.com',
    // ... más datos
  },
  // ...
}
```

### Modificar estilos

Los estilos están organizados en archivos CSS modulares dentro de `src/styles/`:

- `index.css` - Variables CSS y estilos globales
- `navbar.css` - Barra de navegación
- `hero.css` - Sección principal
- `skills.css` - Habilidades
- `projects.css` - Proyectos
- `contact.css` - Formulario de contacto
- `footer.css` - Pie de página

Las variables de color se pueden cambiar en `:root` dentro de `index.css`.

## 🎯 Componentes Principales

### Navbar
Barra de navegación pegajosa con toggle de tema. Realiza scroll suave a las secciones.

### Hero
Sección de presentación con badge de experiencia, descripción y botones de acción.

### Skills
Grid de habilidades técnicas con iconos de Font Awesome.

### Projects
Grid responsive de proyectos con tarjetas que muestran tecnologías utilizadas.

### Contact
Formulario de contacto interactivo con información de contacto y validación.

### Footer
Pie de página con enlaces a redes sociales e información de copyright.

## 🔧 Hooks Personalizados

El proyecto incluye hooks reutilizables en `src/utils/hooks.js`:

- `useTheme()` - Gestionar tema oscuro/claro
- `useSmoothScroll()` - Scroll suave a secciones
- `useContactForm()` - Validar y enviar formulario
- `useDownloadCV()` - Descargar CV

## 📦 Dependencias

- **React 18.2.0** - Librería UI
- **Vite 5.0.0** - Build tool rápido
- **Font Awesome 6.0** - Iconos
- **Google Fonts (Inter)** - Tipografía

## 🌐 Despliegue

El proyecto puede desplegarse en:

- **Vercel** - Soporte nativo para Vite/React
- **Netlify** - Configuración automática
- **GitHub Pages** - Build estático
- **Cualquier servidor** - Servir carpeta `dist/`

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Licencia

MIT © 2025

## 👨‍💻 Autor

**Alex Rivera** - Desarrollador Full Stack

## 📧 Contacto

- Email: alex.rivera@devportfolio.com
- GitHub: /alexrivera-dev
- LinkedIn: linkedin.com/in/alexrivera

---

**¡Hecho con ❤️ en React!**
