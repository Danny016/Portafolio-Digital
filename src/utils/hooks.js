import { useState, useEffect } from 'react'

/**
 * Hook personalizado para gestionar el tema oscuro/claro
 * Persiste la preferencia en localStorage
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Cargar tema guardado al montar el componente
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.body.classList.add('dark')
    } else if (savedTheme === 'light') {
      setIsDark(false)
      document.body.classList.remove('dark')
    } else {
      // Verificar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        setIsDark(true)
        document.body.classList.add('dark')
      }
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev
      if (newValue) {
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return newValue
    })
  }

  return { isDark, toggleTheme }
}

/**
 * Hook para manejar scroll suave a secciones
 */
export const useSmoothScroll = () => {
  const scrollToId = (id) => {
    if (id === '#') return
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return { scrollToId }
}

/**
 * Hook para gestionar el formulario de contacto
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { nombre, email, mensaje } = formData
    
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setMessage('❌ Por favor, completa todos los campos.')
      return
    }

    if (!validateEmail(email)) {
      setMessage('📧 Ingresa un correo electrónico válido.')
      return
    }

    setLoading(true)
    
    // Simular envío (en producción, aquí iría una llamada a API)
    setTimeout(() => {
      setMessage(`✨ ¡Gracias ${nombre}! Tu mensaje ha sido enviado (simulación). Pronto me pondré en contacto contigo.`)
      setFormData({ nombre: '', email: '', mensaje: '' })
      setLoading(false)

      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setMessage(''), 3000)
    }, 1000)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    message
  }
}

/**
 * Hook para descargar CV
 */
export const useDownloadCV = () => {
  const downloadCV = () => {
    alert("📄 Cv No disponible por el momento")
  }

  return { downloadCV }
}
