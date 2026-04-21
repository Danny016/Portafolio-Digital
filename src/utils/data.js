/**
 * Datos estáticos del portafolio
 */

export const portfolioData = {
  author: {
    name: 'Daniel Bernardino Reyes Nolasco',
    title: 'Desarrollador Full Stack',
    email: 'danydango001@gmail.com',
    github: '/Danny016',
    linkedin: '',
    location: 'Miahuatlán de Porfirio Díaz, Oaxaca',
    availability: 'Disponible para freelance / remoto'
  },

  hero: {
    badge: '',
    title: 'Construyo soluciones digitales que marcan la diferencia',
    description: 'Soy desarrollador Full Stack apasionado por crear aplicaciones web escalables y con diseño centrado en el usuario.'
  },

  skills: [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React & Next.js', icon: 'fab fa-react' },
    { name: 'Node.js / Express', icon: 'fab fa-node-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'PostgreSQL / MongoDB', icon: 'fas fa-database' },
    { name: 'Git & GitHub Actions', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fas fa-cloud' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
  ],

  projects: [
    {
      id: 1,
      title: 'Aplicación Móvil de Ventas de Carita',
      description: 'Plataforma móvil para la gestion de pedidos para la venta de carita(tradicional).',
      icon: 'fas fa-mobile-alt',
      technologies: ['kotlin', 'JetpackCompose', 'FireStore'],
      links: {
        repo: 'https://github.com/Danny016/Caritas_2.0.git'
      }
    },
    {
      id: 2,
      title: 'Diseño de App Biblioteca',
      description: 'Diseño de interfaz para una aplicación de biblioteca, enfocada en la experiencia del usuario y la accesibilidad.',
      icon: 'fas fa-palette',
      technologies: ['Figma'],
      links: {
        repo: 'https://delete-jasper-64871676.figma.site/'
      }
    },
    // {
    //   id: 3,
    //   title: 'TaskFlow Pro',
    //   description: 'Aplicación colaborativa de gestión de tareas con drag & drop, comentarios y notificaciones en tiempo real.',
    //   icon: 'fas fa-tasks',
    //   technologies: ['Vue 3', 'Pinia', 'Socket.io', 'Tailwind'],
    //   links: {
    //     repo: '#',
    //     demo: '#'
    //   }
    // },
    // {
    //   id: 4,
    //   title: 'AI Content Hub',
    //   description: 'Generador de contenido asistido por IA con integración OpenAI, frontend interactivo y caché optimizada.',
    //   icon: 'fas fa-robot',
    //   technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Vercel'],
    //   links: {
    //     repo: '#',
    //     demo: '#'
    //   }
    // }
  ],

  social: [
    { icon: 'fab fa-github', label: 'GitHub', url: '#' },
    { icon: 'fas fa-envelope', label: 'Email', url: '#' }
  ]
}
