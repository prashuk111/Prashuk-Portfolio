import { useEffect } from 'react'

export default function ProjectCaseStudyModal({ project, isOpen, onClose, onNextProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="case-study-overlay" role="dialog" aria-modal="true">
      <div className="case-study-backdrop" onClick={onClose}></div>

      <div className="case-study-container">
        {/* Top Header Bar */}
        <div className="case-study-topbar">
          <button type="button" className="btn-close-case-study" onClick={onClose}>
            <span>←</span>
            <span>BACK TO OVERVIEW</span>
          </button>

          <div className="case-study-topbar-meta">
            <span className="case-study-proj-num">{project.number}</span>
            <span className="case-study-year">{project.year}</span>
          </div>
        </div>

        {/* Hero Header of Case Study */}
        <div className="case-study-hero">
          <div className="case-study-eyebrow">
            <span className="case-study-bullet">●</span>
            <span>CASE STUDY SPECIFICATION</span>
            <span className="case-study-divider">—</span>
            <span className="case-study-cat">{project.category}</span>
          </div>

          <h1 className="case-study-title">{project.title}</h1>

          <p className="case-study-lead">{project.statement}</p>

          <div className="case-study-tech-row">
            {project.tech.map((t) => (
              <span key={t} className="case-study-tech-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="case-study-meta-tags">
            {project.role && (
              <span className="case-study-role-pill">
                <strong>ROLE:</strong> {project.role}
              </span>
            )}
            {project.status && (
              <span className="case-study-status-pill">
                <strong>STATUS:</strong> {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Large Visual Presentation Stage */}
        <div className="case-study-visual-stage">
          {project.mockup}
        </div>

        {/* Editorial Case Study Content Sections */}
        <div className="case-study-editorial-body">
          {/* THE PROJECT */}
          <section className="case-study-section">
            <div className="section-label-col">
              <span className="section-label-num">01</span>
              <h2 className="section-heading">THE PROJECT</h2>
            </div>
            <div className="section-content-col">
              <p className="section-paragraph">{project.caseStudy.project}</p>
            </div>
          </section>

          {/* THE EXPERIENCE */}
          <section className="case-study-section">
            <div className="section-label-col">
              <span className="section-label-num">02</span>
              <h2 className="section-heading">THE EXPERIENCE</h2>
            </div>
            <div className="section-content-col">
              <p className="section-paragraph">{project.caseStudy.experience}</p>
              <div className="section-sub-details">
                {project.caseStudy.experienceHighlights?.map((item) => (
                  <div key={item.title} className="highlight-box">
                    <span className="highlight-title">{item.title}</span>
                    <span className="highlight-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* THE INTERACTION */}
          <section className="case-study-section">
            <div className="section-label-col">
              <span className="section-label-num">03</span>
              <h2 className="section-heading">THE INTERACTION</h2>
            </div>
            <div className="section-content-col">
              <p className="section-paragraph">{project.caseStudy.interaction}</p>
            </div>
          </section>

          {/* THE BUILD */}
          <section className="case-study-section">
            <div className="section-label-col">
              <span className="section-label-num">04</span>
              <h2 className="section-heading">THE BUILD</h2>
            </div>
            <div className="section-content-col">
              <p className="section-paragraph">{project.caseStudy.build}</p>
              <div className="build-stack-grid">
                {project.caseStudy.stackBreakdown?.map((item) => (
                  <div key={item.layer} className="stack-layer-card">
                    <span className="layer-tag">{item.layer}</span>
                    <span className="layer-val">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer: Next Project Navigation */}
        <div className="case-study-footer">
          <div className="footer-left">
            <span className="footer-status-label">FINISHED READING</span>
            <span className="footer-status-sub">Proceed to the next case study</span>
          </div>

          <button type="button" className="btn-next-project" onClick={onNextProject}>
            <span>NEXT PROJECT</span>
            <span className="next-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
