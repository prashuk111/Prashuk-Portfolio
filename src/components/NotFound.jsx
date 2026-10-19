import { useState } from 'react'

export default function NotFound({ onGoHome }) {
  const [currentPath] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : ''))

  const handleReturn = () => {
    if (onGoHome) {
      onGoHome()
    } else {
      window.history.pushState({}, '', '/')
      window.location.href = '/'
    }
  }

  return (
    <div className="notfound-screen">
      <div className="notfound-ambient-glow" aria-hidden="true"></div>
      <div className="container notfound-container">
        {/* Brand Sign */}
        <div className="notfound-badge">
          <svg className="notfound-sign-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="90" rx="22" fill="#0d0f14" stroke="rgba(216, 255, 62, 0.5)" strokeWidth="3" />
            <path d="M30 22 V74" stroke="#d8ff3e" strokeWidth="7.5" strokeLinecap="round" />
            <path d="M30 24 H52 C64 24 71 31 71 40 C71 49 64 54 52 54 H30" stroke="#ffffff" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 42 V62 C52 72 44 78 34 78 C25 78 19 73 17 67" stroke="#d8ff3e" strokeWidth="7.5" strokeLinecap="round" />
            <circle cx="72" cy="70" r="4.5" fill="#d8ff3e" />
          </svg>
          <span className="notfound-brand-name">PRASHUK JAIN</span>
        </div>

        {/* Eyebrow */}
        <div className="notfound-eyebrow">
          <span className="eyebrow-accent-bullet">●</span>
          <span>404 ERROR // ROUTE EXCEPTION</span>
        </div>

        {/* 404 Headline */}
        <h1 className="notfound-title">
          <span>PAGE NOT</span>
          <span className="highlight-lime"> FOUND.</span>
        </h1>

        <p className="notfound-desc">
          The requested path <code className="notfound-code">{currentPath || '/unknown'}</code> is not part of this portfolio or may have been relocated.
        </p>

        {/* Action Button */}
        <div className="notfound-actions">
          <button type="button" onClick={handleReturn} className="btn-primary notfound-btn">
            <span>← RETURN TO PORTFOLIO</span>
          </button>
          <a href="mailto:prashukjainn3@gmail.com" className="btn-secondary notfound-btn">
            <span>CONTACT PRASHUK</span>
            <span>↗</span>
          </a>
        </div>

        {/* Bottom Specs */}
        <div className="notfound-specs">
          <span className="spec-tag">PRASHUK JAIN © 2026</span>
          <span className="spec-dot">·</span>
          <a href="tel:+919109323622" className="notfound-phone">+91 9109323622</a>
          <span className="spec-dot">·</span>
          <span>JAVA · SPRING BOOT · REACT</span>
        </div>
      </div>
    </div>
  )
}
