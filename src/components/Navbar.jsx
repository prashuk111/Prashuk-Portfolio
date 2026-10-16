import { useState, useEffect } from 'react'

export default function Navbar({ theme = 'dark', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#capabilities' },
    { label: 'Solutions', href: '#architecture' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  const isLight = theme === 'light'

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Sign */}
        <a href="#" className="navbar-brand" onClick={closeMenu} aria-label="Prashuk Jain — Software Developer">
          <div className="brand-sign-badge">
            <svg className="brand-sign-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="90" height="90" rx="22" className="brand-sign-bg" />
              <circle cx="50" cy="50" r="32" className="brand-sign-glow" />
              <path d="M30 22 V74" className="brand-sign-stem" />
              <path d="M30 24 H52 C64 24 71 31 71 40 C71 49 64 54 52 54 H30" className="brand-sign-loop" />
              <path d="M52 42 V62 C52 72 44 78 34 78 C25 78 19 73 17 67" className="brand-sign-curve" />
              <circle cx="72" cy="70" r="4.5" className="brand-sign-spark" />
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">PRASHUK JAIN</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="navbar-actions">
          {/* Theme Toggle Button (Desktop) */}
          <button
            type="button"
            className="btn-theme-toggle"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            <div className="theme-toggle-inner">
              {isLight ? (
                <svg
                  className="theme-toggle-icon moon-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg
                  className="theme-toggle-icon sun-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              )}
            </div>
            <span className="theme-toggle-label">{isLight ? 'DARK' : 'LIGHT'}</span>
          </button>

          <a href="#contact" className="btn-nav-talk">
            <span>Let&apos;s Talk</span>
            <span className="btn-nav-arrow">↗</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Theme Toggle Row */}
          <div className="mobile-theme-row">
            <button
              type="button"
              className="mobile-theme-btn"
              onClick={() => {
                if (onToggleTheme) onToggleTheme()
              }}
              aria-label="Toggle Theme"
            >
              <div className="mobile-theme-info">
                {isLight ? (
                  <svg className="theme-toggle-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                ) : (
                  <svg className="theme-toggle-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )}
                <span>THEME MODE</span>
              </div>
              <span className="mobile-theme-badge">{isLight ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>
          </div>

          <div className="mobile-drawer-footer">
            <a href="#contact" className="btn-primary" onClick={closeMenu}>
              <span>Let&apos;s Talk</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
