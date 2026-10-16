import { useState, useEffect, useRef } from 'react'
import {
  RaasraatriMockup,
  NasconMockup,
  EmailAssistantMockup,
} from './projects/ProjectMockups'

const projects = [
  {
    id: 'raasraatri',
    number: '01',
    title: 'RAASRAATRI',
    category: 'Event / creative web experience',
    classification: 'ACTUAL PROJECT // PRODUCTION BUILD',
    statement:
      'Immersive cultural night celebration engineered with spatial acoustic design, real-time ticket tier countdown, and high-performance festival branding.',
    tech: ['React', 'Vite', 'Modern CSS', 'Audio Web API', 'Responsive Craft'],
    actionLabel: 'Explore Experience',
    mockup: <RaasraatriMockup />,
  },
  {
    id: 'nascon',
    number: '02',
    title: 'NASCON TECHNOLOGIES',
    category: 'Industrial / B2B website',
    classification: 'ACTUAL PROJECT // LIVE CLIENT PLATFORM',
    statement:
      'Corporate industrial automation platform engineered with interactive machinery spec catalogs, CAD schematic inspection, and automated RFQ API routing.',
    tech: ['React', 'Vite', 'Contact API Integration', 'Enterprise Forms', 'Docker'],
    actionLabel: 'Explore Platform',
    mockup: <NasconMockup />,
  },
  {
    id: 'email-assistant',
    number: '03',
    title: 'EMAIL ASSISTANT',
    category: 'AI productivity application',
    classification: 'ACTUAL PROJECT // PRODUCTION AI TOOL',
    statement:
      'Chrome Extension directly injecting an AI assistant into Gmail to analyze client threads, detect action items, and draft contextual responses via Spring Boot microservices.',
    tech: ['React', 'Spring Boot', 'Chrome Extension', 'AI / LLM', 'Docker'],
    actionLabel: 'Explore Workflow',
    mockup: <EmailAssistantMockup />,
  },
]

export default function SelectedExperiences() {
  const [activeProject, setActiveProject] = useState(0)
  const projectRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return
        const { top, bottom } = ref.getBoundingClientRect()
        const elementTop = window.scrollY + top
        const elementBottom = window.scrollY + bottom

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveProject(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProject = (index) => {
    const target = projectRefs.current[index]
    if (target) {
      const offset = 90
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      setActiveProject(index)
    }
  }

  return (
    <section id="work" className="experiences-section">
      {/* Target anchors for Navbar links */}
      <div id="services" className="section-anchor"></div>
      <div id="solutions" className="section-anchor"></div>
      <div id="selected-experiences" className="section-anchor"></div>

      <div className="container">
        {/* Section Header */}
        <div className="experiences-header">
          <div className="experiences-eyebrow">
            <span className="eyebrow-accent-bullet">●</span>
            <span>SELECTED EXPERIENCES</span>
            <span className="eyebrow-divider">—</span>
            <span className="eyebrow-status">ACTUAL DELIVERED WORK</span>
          </div>

          <div className="experiences-title-row">
            <h2 className="experiences-main-title">
              Featured work engineered for{' '}
              <span className="title-highlight">scale, conversion &amp; impact.</span>
            </h2>

            {/* Quick Project Switcher Rail */}
            <div className="project-quick-rail" aria-label="Project Navigation">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  className={`rail-btn ${idx === activeProject ? 'active' : ''}`}
                  onClick={() => scrollToProject(idx)}
                >
                  <span className="rail-num">{proj.number}</span>
                  <span className="rail-name">{proj.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Stages List */}
        <div className="projects-stages-stack">
          {projects.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-stage-card ${
                index === activeProject ? 'stage-focused' : ''
              }`}
            >
              {/* Top Stage Bar */}
              <div className="stage-topbar">
                <div className="stage-meta-left">
                  <span className="stage-number">{item.number}</span>
                  <div className="stage-classification">
                    <span className="class-bullet">●</span>
                    <span>{item.classification}</span>
                  </div>
                </div>

                <span className="stage-category">{item.category}</span>
              </div>

              {/* Middle Narrative Row */}
              <div className="stage-narrative-row">
                <div className="stage-title-col">
                  <h3 className="stage-project-title">
                    <span>{item.title}</span>
                    <span className="title-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </h3>
                  <p className="stage-statement">{item.statement}</p>
                </div>

                <div className="stage-tech-col">
                  <div className="stage-tech-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="stage-explore-btn">
                    <span>{item.actionLabel}</span>
                    <span className="explore-arrow">↗</span>
                  </a>
                </div>
              </div>

              {/* Large Visual Mockup Stage */}
              <div className="stage-visual-container">
                {item.mockup}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
