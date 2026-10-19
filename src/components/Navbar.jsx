import { useState, useEffect } from 'react'

export default function Navbar() {
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

        {/* Right CTA */}
        <div className="navbar-actions">
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
