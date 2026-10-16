import { useState, useRef, useEffect } from 'react'
import {
  RaasraatriMockup,
  NasconMockup,
  VibeForgeAIMockup,
  EmailAssistantMockup,
} from './projects/ProjectMockups'
import ProjectCaseStudyModal from './projects/ProjectCaseStudyModal'
import { initProjectScroll } from '../animations/projectScroll'

const projectsData = [
  {
    id: 'raasraatri',
    number: '01',
    year: '2026',
    title: 'RAASRAATRI',
    category: 'Event / Creative Web Experience',
    classification: 'ACTUAL DELIVERED PROJECT',
    tech: ['React', 'Vite', 'Modern CSS', 'Audio Web API'],
    description:
      'An immersive 3-night cultural event platform engineered with rich dark burgundy, gold, and cream aesthetics, synchronized tempo visualizers, and real-time pass reservation workflows.',
    actionLabel: 'VIEW PROJECT',
    mockup: <RaasraatriMockup />,
    caseStudy: {
      project:
        'RaasRaatri required a digital flagship that communicated the kinetic energy and grandeur of an annual 5,000+ attendee cultural festival in Ahmedabad. Rather than a standard ticketing landing page, the goal was an evocative, atmospheric digital world that felt like an extension of the stage itself.',
      experience:
        'Built with a bespoke palette of deep burgundy, radiant gold, and warm cream. The editorial layout guides the user through the 3-night event narrative, featuring live pass countdowns, an interactive holographic VIP ticket preview, and artist lineup announcements.',
      experienceHighlights: [
        {
          title: 'Spatial Atmosphere',
          desc: 'Ambient lighting and radial gradients tuned to night festival lighting.',
        },
        {
          title: 'Holographic Ticket Card',
          desc: 'Interactive 3D layer simulating security foils and VIP tier designations.',
        },
      ],
      interaction:
        'Features an interactive audio rhythm visualizer calibrated to 138 BPM folk fusion, cursor-responsive floating layers that create realistic spatial depth, and micro-animated ticket countdown timers.',
      build:
        'Developed with React 19 and Vite for instantaneous load times and zero runtime bloat. All transitions leverage pure CSS transforms and cubic-bezier easing to ensure fluid 120 FPS rendering on mobile and desktop.',
      stackBreakdown: [
        { layer: 'FRONTEND', value: 'React 19 + Vite' },
        { layer: 'STYLING', value: 'Vanilla CSS Design Tokens' },
        { layer: 'AUDIO API', value: 'Web Audio Visualizer Nodes' },
        { layer: 'PERFORMANCE', value: '100/100 Core Web Vitals' },
      ],
    },
  },
  {
    id: 'nascon',
    number: '02',
    year: '2026',
    title: 'NASCON TECHNOLOGIES',
    category: 'Industrial / B2B Website',
    classification: 'ACTUAL CLIENT PLATFORM',
    tech: ['React', 'Vite', 'API / Contact Integration', 'Enterprise Forms', 'Docker'],
    description:
      'A corporate industrial automation platform featuring heavy-duty machinery catalogs, interactive CAD conveyor schematics, and an automated RFQ API routing directly to engineering desks.',
    actionLabel: 'VIEW PROJECT',
    mockup: <NasconMockup />,
    caseStudy: {
      project:
        'Nascon Technologies designs and manufactures high-tonnage pallet conveyor systems and automated robotic cells. Their legacy web presence failed to communicate their technical rigor to enterprise automotive and logistics buyers. We architected a complete digital platform from the ground up.',
      experience:
        'Structured around engineering transparency: full CAD schematic viewports with millimeter dimension overlays, technical spec matrices (payload capacity, motor power, PLC protocols), and product category navigation across conveyor lines and robotic workstations.',
      experienceHighlights: [
        {
          title: 'CAD Schematic Viewport',
          desc: 'Interactive blueprint inspection with real-time dimension indicators.',
        },
        {
          title: 'Direct RFQ API Trigger',
          desc: 'Custom form pipeline routing enterprise inquiries directly to technical leads with an SLA < 2 hours.',
        },
      ],
      interaction:
        'Subtle mechanical roller animations on hover, interactive product category filtering, and instant API validation feedback on engineering spec sheet downloads.',
      build:
        'Engineered with React + Vite, modular form controllers, and Docker containerization for automated CI/CD deployment on client infrastructure.',
      stackBreakdown: [
        { layer: 'FRONTEND', value: 'React 19 + Vite' },
        { layer: 'API ROUTING', value: 'Custom REST API & Webhooks' },
        { layer: 'DEPLOYMENT', value: 'Docker Containerized Cluster' },
        { layer: 'SECURITY', value: 'Enterprise Input Sanitization & TLS' },
      ],
    },
  },
  {
    id: 'vibeforge',
    number: '03',
    year: '2026',
    title: 'VIBEFORGE-AI',
    category: 'AI SaaS Platform / Website Builder',
    classification: 'AI SAAS PLATFORM (IN ACTIVE DEVELOPMENT)',
    tech: ['React 19', 'Vite', 'Spring Boot', 'Claude & OpenAI APIs', 'Tailwind CSS', 'Docker'],
    description:
      'An AI-powered SaaS platform engineered for instant website generation, dynamic code synthesis, and intelligent component orchestration through natural language prompts.',
    actionLabel: 'VIEW PROJECT',
    mockup: <VibeForgeAIMockup />,
    caseStudy: {
      project:
        'VibeForge-AI is an end-to-end SaaS platform engineered to eliminate the manual boilerplate of web development. Users describe their application requirements, brand styling, and target persona in plain English, and the platform autonomously synthesizes responsive React components, modern layouts, and deployable production code.',
      experience:
        'Architected with a dual-mode interactive workspace: an intelligent AI Prompt Orchestrator on the left guiding AST parsing and token generation, paired with a real-time live preview canvas on the right supporting instant viewport toggles (Desktop, Tablet, Mobile) and dynamic theme switching.',
      experienceHighlights: [
        {
          title: 'Intelligent AST Generation',
          desc: 'Transforms high-level natural language prompts into structured Abstract Syntax Trees and modular UI tokens.',
        },
        {
          title: 'Instant Multi-Viewport Preview',
          desc: 'Live sandboxed canvas with real-time responsive rendering, dark/light theme preview, and zero reload friction.',
        },
      ],
      interaction:
        'Features interactive 4-stage pipeline indicators (Tokenizer → AST Wireframing → Dynamic Assembly → Edge Deploy), instant code-to-preview toggle, and one-click cloud deployment pipeline.',
      build:
        'Developed with React 19 and Vite for instantaneous hot module updates, connected to a high-throughput Java Spring Boot REST backend orchestrating state-of-the-art LLM inference APIs and containerized in Docker.',
      stackBreakdown: [
        { layer: 'FRONTEND CLIENT', value: 'React 19 + Vite + Tailwind' },
        { layer: 'AI ORCHESTRATION', value: 'Claude 3.5 & GPT-4o Tokenizer' },
        { layer: 'BACKEND SERVICES', value: 'Java Spring Boot Microservice' },
        { layer: 'DEPLOYMENT', value: 'Docker Containerized Cluster' },
      ],
    },
  },
  {
    id: 'email-assistant',
    number: '04',
    year: '2026',
    title: 'EMAIL ASSISTANT',
    category: 'AI Productivity Application',
    classification: 'ACTUAL PRODUCTION PRODUCT',
    tech: ['React', 'Spring Boot', 'Chrome Extension', 'AI / LLM', 'Docker'],
    description:
      'A Chrome Extension directly injecting an AI assistant into Gmail to analyze client threads, detect action items, and draft contextual responses via a Spring Boot backend microservice.',
    actionLabel: 'VIEW PROJECT',
    mockup: <EmailAssistantMockup />,
    caseStudy: {
      project:
        'Engineered to eliminate email triage friction for founders and engineering teams. Instead of switching back and forth between separate AI chat windows and email clients, Email Assistant lives directly inside the native Gmail composer interface.',
      experience:
        'A cohesive 3-phase automated pipeline: Step 01 ingests the active email thread context; Step 02 triggers intent extraction and priority scoring via Spring Boot; Step 03 generates a contextual response draft ready for one-click insertion.',
      experienceHighlights: [
        {
          title: 'Tone Modulation',
          desc: 'Switch between Executive (concise) and Technical (in-depth) drafts.',
        },
        {
          title: '1-Click Composer Insertion',
          desc: 'Seamlessly injects generated text directly into the native Gmail DOM composer.',
        },
      ],
      interaction:
        'Interactive 3-stage progress indicators, immediate live preview of response variations, and one-click clipboard transfer with responsive toast verification.',
      build:
        'Manifest v3 Chrome Extension connected to Java 21 Spring Boot microservice, isolated in Docker container with zero-retention privacy protocols.',
      stackBreakdown: [
        { layer: 'EXTENSION CLIENT', value: 'React + Manifest v3' },
        { layer: 'BACKEND API', value: 'Java Spring Boot REST' },
        { layer: 'AI PIPELINE', value: 'LLM Prompt Orchestration' },
        { layer: 'CONTAINER', value: 'Docker Swarm' },
      ],
    },
  },
]

export default function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null)

  // React Refs for GSAP ScrollTrigger
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const narrativeSlideRefs = useRef([])
  const visualSlideRefs = useRef([])
  const indicatorDotRefs = useRef([])
  const progressLineRef = useRef(null)

  useEffect(() => {
    const cleanup = initProjectScroll({
      sectionRef,
      stageRef,
      narrativeSlideRefs,
      visualSlideRefs,
      indicatorDotRefs,
      progressLineRef,
    })

    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  const openCaseStudy = (project) => {
    setActiveModalProject(project)
  }

  const closeCaseStudy = () => {
    setActiveModalProject(null)
  }

  const nextCaseStudy = () => {
    if (!activeModalProject) return
    const currentIndex = projectsData.findIndex((p) => p.id === activeModalProject.id)
    const nextIndex = (currentIndex + 1) % projectsData.length
    setActiveModalProject(projectsData[nextIndex])
  }

  const scrollToProjectIndex = (index) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top
    const totalDist = 2400
    const targetScroll = scrollTop + (index / (projectsData.length - 1)) * totalDist
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      className="selected-experiences-section selected-work-section"
    >
      {/* Anchor targets */}
      <div id="selected-experiences" className="section-anchor"></div>
      <div id="selected-work" className="section-anchor"></div>
      <div id="projects" className="section-anchor"></div>

      {/* Pinned Showcase Stage (Desktop) */}
      <div ref={stageRef} className="pinned-showcase-stage">
        <div className="container stage-container">
          {/* Section Header */}
          <div className="editorial-section-header">
            <div className="header-meta-line">
              <span className="meta-bullet">●</span>
              <span className="meta-category">SELECTED EXPERIENCES</span>
              <span className="meta-dash">—</span>
              <span className="meta-note">ACTUAL DELIVERED WORK</span>
            </div>

            <div className="header-content-split">
              <h2 className="header-display-title">
                Featured work engineered for{' '}
                <span className="highlight-text">scale, conversion &amp; impact.</span>
              </h2>

              {/* Quick Navigation / Progress Rail */}
              <div className="showcase-progress-rail" aria-label="Project Scroll Tracker">
                <div className="rail-steps">
                  {projectsData.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      ref={(el) => (indicatorDotRefs.current[idx] = el)}
                      className="rail-step-dot"
                      onClick={() => scrollToProjectIndex(idx)}
                      title={`Jump to ${p.title}`}
                    >
                      <span className="step-num">{p.number}</span>
                      <span className="step-label">{p.title}</span>
                    </button>
                  ))}
                </div>
                <div className="rail-track">
                  <div ref={progressLineRef} className="rail-bar"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dual-Pane Editorial Project Stage */}
          <div className="stage-dual-viewport">
            {/* Left Column: Stacked Project Narratives */}
            <div className="stage-narrative-stack">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => (narrativeSlideRefs.current[index] = el)}
                  className="narrative-slide"
                >
                  <div className="narrative-meta-strip">
                    <span className="narrative-index-num">{project.number}</span>
                    <span className="narrative-year">{project.year}</span>
                    <span className="narrative-badge">{project.classification}</span>
                  </div>

                  <div className="narrative-category-label">{project.category}</div>

                  <h3
                    className="narrative-project-heading"
                    onClick={() => openCaseStudy(project)}
                  >
                    <span>{project.title}</span>
                    <span className="heading-arrow">↗</span>
                  </h3>

                  <div className="narrative-tech-pills">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="narrative-description-text">{project.description}</p>

                  <div className="narrative-action-box">
                    <button
                      type="button"
                      className="btn-view-project"
                      onClick={() => openCaseStudy(project)}
                    >
                      <span>{project.actionLabel}</span>
                      <span className="btn-action-arrow">↗</span>
                    </button>
                    <span className="case-study-hint">IMMERSIVE CASE STUDY</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Stacked Project Visual Mockup Stages */}
            <div className="stage-visuals-stack">
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => (visualSlideRefs.current[index] = el)}
                  className="visual-slide"
                  onClick={() => openCaseStudy(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open case study for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openCaseStudy(project)
                  }}
                >
                  <div className="visual-slide-canvas">
                    {project.mockup}
                  </div>
                  <div className="visual-stage-hover-overlay">
                    <span className="overlay-prompt">EXPLORE CASE STUDY ↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Flow (Displayed on screens < 992px) */}
      <div className="mobile-showcase-flow">
        <div className="container">
          <div className="editorial-section-header mobile-header">
            <div className="header-meta-line">
              <span className="meta-bullet">●</span>
              <span className="meta-category">SELECTED EXPERIENCES</span>
              <span className="meta-dash">—</span>
              <span className="meta-note">ACTUAL DELIVERED WORK</span>
            </div>
            <h2 className="header-display-title">
              Featured work engineered for{' '}
              <span className="highlight-text">scale, conversion &amp; impact.</span>
            </h2>
          </div>

          <div className="mobile-projects-stack">
            {projectsData.map((project) => (
              <article key={project.id} className="mobile-project-card">
                <div className="mobile-card-meta">
                  <span className="mobile-card-num">{project.number}</span>
                  <span className="mobile-card-cat">{project.category}</span>
                </div>

                <h3
                  className="mobile-card-title"
                  onClick={() => openCaseStudy(project)}
                >
                  <span>{project.title}</span>
                  <span className="card-arrow">↗</span>
                </h3>

                <div className="mobile-card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="mobile-card-visual"
                  onClick={() => openCaseStudy(project)}
                >
                  {project.mockup}
                </div>

                <p className="mobile-card-desc">{project.description}</p>

                <button
                  type="button"
                  className="btn-view-project"
                  onClick={() => openCaseStudy(project)}
                >
                  <span>{project.actionLabel}</span>
                  <span className="btn-action-arrow">↗</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal (Shared between Desktop & Mobile) */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={closeCaseStudy}
        onNextProject={nextCaseStudy}
      />
    </section>
  )
}
