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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.style.colorScheme = 'dark'
    try {
      localStorage.removeItem('portfolio-theme')
    } catch {
      // ignore
    }
  }, [])

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
      <div className="portfolio-app" data-theme="dark">
        {isNotFound ? (
          <NotFound onGoHome={handleGoHome} />
        ) : (
          <>
            <Navbar />
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
