import React, { useEffect } from 'react'
import { Navbar, Hero, Skills, Projects, Contact, Footer } from './components'

/**
 * Componente principal App
 * Integra todos los componentes del portafolio
 */
function App() {
  useEffect(() => {
    console.log('Portafolio de programador — listo para inspirar')
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
