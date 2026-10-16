import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkWorld from './components/WorkWorld'
import Capabilities from './components/Capabilities'
import Architecture from './components/Architecture'
import Process from './components/Process'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  const [isNotFound, setIsNotFound] = useState(false)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname
      // If path is anything other than root or empty, render 404 page
      if (path && path !== '/' && path !== '/index.html') {
        setIsNotFound(true)
      } else {
        setIsNotFound(false)
      }
    }

    checkRoute()
    window.addEventListener('popstate', checkRoute)
    return () => window.removeEventListener('popstate', checkRoute)
  }, [])

  const handleGoHome = () => {
    window.history.pushState({}, '', '/')
    setIsNotFound(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ErrorBoundary>
      <div className="portfolio-app" data-theme={theme}>
        {isNotFound ? (
          <NotFound onGoHome={handleGoHome} />
        ) : (
          <>
            <Navbar theme={theme} onToggleTheme={toggleTheme} />
            <main>
              <Hero />
              <About />
              <WorkWorld />
              <Capabilities />
              <Architecture />
              <Process />
              <Contact />
            </main>
          </>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default App
