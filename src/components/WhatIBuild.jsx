import { useState, useEffect, useRef } from 'react'
import {
  WebExperiencesMockup,
  WebApplicationsMockup,
  AISolutionsMockup,
  EcommerceMockup,
  CloudAutomationMockup,
} from './mockups/MockupViews'

const capabilities = [
  {
    id: 'web-experiences',
    number: '01',
    title: 'WEB EXPERIENCES',
    subtitle: 'Modern websites and digital experiences.',
    statement: 'Turning visitors into customers through high-craft interfaces.',
    description:
      'Designing and developing fast, responsive websites with spatial typography, purposeful micro-interactions, and conversion-focused architectures.',
    tags: ['Next.js', 'React', 'CSS Systems', 'Core Web Vitals', 'Conversion UI'],
    mockupLabel: 'MINIATURE WEBSITE PLATFORM',
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'WEB APPLICATIONS',
    subtitle: 'Dashboards, CRM, ERP, booking systems and SaaS.',
    statement: 'Mission-critical software engineered for scale and reliability.',
    description:
      'Engineering full-stack web applications with reactive client states, secure authentication, data tables, custom workflows, and resilient API integrations.',
    tags: ['SaaS Architectures', 'CRM & Dashboards', 'REST / GraphQL', 'PostgreSQL', 'Auth'],
    mockupLabel: 'SAAS OPERATIONS CONTROL CENTER',
  },
  {
    id: 'ai-solutions',
    number: '03',
    title: 'AI SOLUTIONS',
    subtitle: 'AI assistants, automation and intelligent workflows.',
    statement: 'Supercharging products with autonomous intelligence.',
    description:
      'Integrating custom conversational agents, prompt reasoning chains, retrieval-augmented workflows, and automated decision pipelines into existing business apps.',
    tags: ['Custom AI Agents', 'LLM Workflows', 'Prompt Systems', 'Automations', 'API Pipelines'],
    mockupLabel: 'AUTONOMOUS REASONING AGENT',
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-COMMERCE',
    subtitle: 'Shopify and custom commerce experiences.',
    statement: 'High-velocity digital storefronts that sell seamlessly.',
    description:
      'Crafting bespoke e-commerce experiences from headless Next.js commerce to high-converting Shopify Plus storefronts with frictionless multi-currency checkouts.',
    tags: ['Shopify Plus', 'Headless Storefronts', 'Stripe & Checkout', 'Cart UX', 'Speed'],
    mockupLabel: 'EDITORIAL LUXURY COMMERCE',
  },
  {
    id: 'cloud-automation',
    number: '05',
    title: 'CLOUD & AUTOMATION',
    subtitle: 'Docker, cloud deployment and CI/CD.',
    statement: 'End-to-end topology: Frontend → API → Backend → Database → Cloud.',
    description:
      'Configuring automated multi-region architectures, containerized Docker environments, automated CI/CD pipelines, database clustering, and resilient cloud hosting.',
    tags: ['Docker Containers', 'CI/CD Pipelines', 'AWS / Vercel', 'Microservices', 'Telemetry'],
    mockupLabel: 'END-TO-END SYSTEM TOPOLOGY',
  },
]

export default function WhatIBuild() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress within the storytelling section
      const totalScrollDistance = rect.height - windowHeight
      if (totalScrollDistance <= 0) return

      const scrolledDistance = -rect.top
      const progress = Math.min(Math.max(scrolledDistance / totalScrollDistance, 0), 0.999)
      const nextIndex = Math.min(Math.floor(progress * capabilities.length), capabilities.length - 1)

      setActiveIndex(nextIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCapability = (index) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const totalScrollDistance = rect.height - window.innerHeight
    const targetTop =
      window.scrollY + rect.top + (index / (capabilities.length - 1)) * totalScrollDistance
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const current = capabilities[activeIndex]

  return (
    <section id="services" ref={sectionRef} className="story-section-wrapper">
      {/* Anchors for navigation links */}
      <div id="work" className="section-anchor"></div>
      <div id="solutions" className="section-anchor"></div>
      <div id="what-i-build" className="section-anchor"></div>

      {/* Sticky Main Stage Container */}
      <div className="story-sticky-stage">
        <div className="container story-inner">
          {/* Section Editorial Header */}
          <div className="story-header">
            <div className="story-eyebrow">
              <span className="eyebrow-accent-bullet">●</span>
              <span>WHAT I BUILD</span>
            </div>

            <div className="story-statement-row">
              <h2 className="story-statement-title">
                I don&apos;t just build websites.
                <span className="story-statement-accent">
                  I build digital products.
                </span>
              </h2>

              <div className="story-stage-counter">
                <span className="counter-current">{current.number}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">05</span>
              </div>
            </div>
          </div>

          {/* Interactive Presentation Canvas */}
          <div className="story-main-stage">
            {/* Left Narrative Column */}
            <div className="story-narrative-col">
              {/* Interactive Step Index Navigation */}
              <nav className="story-step-nav" aria-label="Capabilities Navigation">
                {capabilities.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`story-nav-btn ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToCapability(idx)}
                  >
                    <span className="btn-indicator-bar"></span>
                    <span className="btn-step-num">{item.number}</span>
                    <span className="btn-step-title">{item.title}</span>
                  </button>
                ))}
              </nav>

              {/* Active State Detail Panel */}
              <div className="story-active-detail">
                <div className="detail-meta-pill">
                  <span className="detail-bullet">●</span>
                  <span>CAPABILITY SPECIFICATION</span>
                </div>

                <h3 className="detail-title">{current.title}</h3>
                <p className="detail-subtitle">{current.subtitle}</p>
                <p className="detail-description">{current.description}</p>

                <div className="detail-tech-cloud">
                  {current.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="story-progress-track">
                  <div
                    className="story-progress-fill"
                    style={{
                      width: `${((activeIndex + 1) / capabilities.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Visual Stage Column */}
            <div className="story-viewport-col">
              <div className="story-viewport-frame">
                {/* Viewport Header Bar */}
                <div className="viewport-topbar">
                  <div className="viewport-tab-info">
                    <span className="viewport-mode-tag">INTERACTIVE STAGE</span>
                    <span className="viewport-label">{current.mockupLabel}</span>
                  </div>

                  <div className="viewport-controls">
                    <button
                      type="button"
                      className="viewport-nav-btn"
                      aria-label="Previous capability"
                      disabled={activeIndex === 0}
                      onClick={() => scrollToCapability(Math.max(0, activeIndex - 1))}
                    >
                      ←
                    </button>
                    <span className="viewport-nav-label">
                      {activeIndex + 1} OF {capabilities.length}
                    </span>
                    <button
                      type="button"
                      className="viewport-nav-btn"
                      aria-label="Next capability"
                      disabled={activeIndex === capabilities.length - 1}
                      onClick={() =>
                        scrollToCapability(
                          Math.min(capabilities.length - 1, activeIndex + 1),
                        )
                      }
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* The 5 Stacked Visual Mockups */}
                <div className="viewport-screen-area">
                  <div
                    className={`mockup-slide ${
                      activeIndex === 0 ? 'mockup-active' : 'mockup-hidden'
                    }`}
                  >
                    <WebExperiencesMockup />
                  </div>

                  <div
                    className={`mockup-slide ${
                      activeIndex === 1 ? 'mockup-active' : 'mockup-hidden'
                    }`}
                  >
                    <WebApplicationsMockup />
                  </div>

                  <div
                    className={`mockup-slide ${
                      activeIndex === 2 ? 'mockup-active' : 'mockup-hidden'
                    }`}
                  >
                    <AISolutionsMockup />
                  </div>

                  <div
                    className={`mockup-slide ${
                      activeIndex === 3 ? 'mockup-active' : 'mockup-hidden'
                    }`}
                  >
                    <EcommerceMockup />
                  </div>

                  <div
                    className={`mockup-slide ${
                      activeIndex === 4 ? 'mockup-active' : 'mockup-hidden'
                    }`}
                  >
                    <CloudAutomationMockup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
