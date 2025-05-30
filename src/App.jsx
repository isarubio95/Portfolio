import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Limpiar la URL si viene con parámetros (como ?name=)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if ([...params.keys()].length > 0) {
      const cleanURL = window.location.pathname + window.location.hash
      window.history.replaceState({}, '', cleanURL)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
