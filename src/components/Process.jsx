import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    step: '01',
    align: 'align-left',
    title: 'DISCOVER',
    desc: 'Understand the idea, business problem and requirements.',
    deliverable: 'Requirement Specifications & Scope Alignment',
  },
  {
    step: '02',
    align: 'align-right',
    title: 'DESIGN',
    desc: 'Plan the experience, architecture and technical approach.',
    deliverable: 'Experience Wireframes & Technical Architecture Plan',
  },
  {
    step: '03',
    align: 'align-left',
    title: 'BUILD',
    desc: 'Develop the frontend, backend and APIs.',
    deliverable: 'Modular Frontend & Spring Boot Application Codebase',
  },
  {
    step: '04',
    align: 'align-right',
    title: 'INTEGRATE',
    desc: 'Connect databases, external services, AI and automation where required.',
    deliverable: 'Connected SQL Database, External APIs & AI Workflows',
  },
  {
    step: '05',
    align: 'align-left',
    title: 'DEPLOY',
    desc: 'Containerize, test and deploy the application.',
    deliverable: 'Containerized Deployment & Live Running Product',
  },
]

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const sectionRef = useRef(null)
  const journeyRef = useRef(null)
  const activePathRef = useRef(null)
  const mobileActivePathRef = useRef(null)
  const milestoneRefs = useRef([])
  const waypointRefs = useRef([])

  useEffect(() => {
    if (!sectionRef.current || !journeyRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ----------------------------------------------------
      // DESKTOP CHOREOGRAPHY (> 900px)
      // ----------------------------------------------------
      mm.add('(min-width: 901px)', () => {
        // 1. Desktop Winding SVG Path Scrub
        const pathEl = activePathRef.current
        if (pathEl) {
          const pathLen = pathEl.getTotalLength ? pathEl.getTotalLength() : 900
          gsap.set(pathEl, { strokeDasharray: pathLen, strokeDashoffset: pathLen })

          gsap.to(pathEl, {
            scrollTrigger: {
              trigger: journeyRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 1.0,
              onUpdate: (self) => {
                const currentStep = Math.min(
                  processSteps.length - 1,
                  Math.floor(self.progress * processSteps.length)
                )
                setActiveStepIndex(currentStep)
              },
            },
            strokeDashoffset: 0,
            ease: 'none',
          })
        }

        // 2. Desktop Alternating Milestone Cards Entrance
        milestoneRefs.current.forEach((card, idx) => {
          if (!card) return
          const isLeft = idx % 2 === 0
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: isLeft ? -40 : 40,
            duration: 0.95,
            ease: 'power3.out',
          })
        })
      })

      // ----------------------------------------------------
      // MOBILE RESPONSIVE CHOREOGRAPHY (<= 900px)
      // Preserves: Progressive Vertical Path Draw -> Waypoint Activates
      // -> Milestone Card Enters -> Deliverable Reveals -> Next Step
      // ----------------------------------------------------
      mm.add('(max-width: 900px)', () => {
        // 1. Mobile Vertical Path Scrub along the waypoint spine
        const pathEl = mobileActivePathRef.current
        if (pathEl) {
          const pathLen = pathEl.getTotalLength ? pathEl.getTotalLength() : 1000
          gsap.set(pathEl, { strokeDasharray: pathLen, strokeDashoffset: pathLen })

          gsap.to(pathEl, {
            scrollTrigger: {
              trigger: journeyRef.current,
              start: 'top 75%',
              end: 'bottom 65%',
              scrub: 0.5,
              onUpdate: (self) => {
                const currentStep = Math.min(
                  processSteps.length - 1,
                  Math.floor(self.progress * processSteps.length)
                )
                setActiveStepIndex(currentStep)
              },
            },
            strokeDashoffset: 0,
            ease: 'none',
          })
        }

        // 2. Progressive Milestone Entrance as user scrolls to each step
        milestoneRefs.current.forEach((card, idx) => {
          if (!card) return
          const waypoint = waypointRefs.current[idx]

          const milestoneTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          })

          // Waypoint node pops into position
          if (waypoint) {
            milestoneTl.fromTo(
              waypoint,
              { scale: 0.6, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.6)' },
              0
            )
          }

          // Milestone card enters into position
          milestoneTl.fromTo(
            card,
            { opacity: 0, x: 26, scale: 0.96 },
            { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
            0.1
          )

          // Deliverable chip reveals
          const chip = card.querySelector('.milestone-deliverable-chip')
          if (chip) {
            milestoneTl.fromTo(
              chip,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
              0.25
            )
          }
        })
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="process-editorial-section">
      <div className="section-anchor"></div>

      <div className="container">
        {/* Section Header */}
        <div className="process-header">
          <div className="process-eyebrow">
            <span className="eyebrow-accent-dot"></span>
            <span>DEVELOPMENT PROCESS // STEP-BY-STEP</span>
          </div>

          <div className="process-title-row">
            <h2 className="process-display-title">
              How I turn concepts into{' '}
              <span className="process-highlight">working software.</span>
            </h2>

            <p className="process-lead-text">
              A structured, dependable engineering workflow from idea understanding through architecture, development, integration, and final deployment.
            </p>
          </div>
        </div>

        {/* Process Journey Stage */}
        <div ref={journeyRef} className="process-journey-stage">
          {/* Desktop: Continuous SVG Winding Spine */}
          <svg className="process-svg-canvas desktop-svg" viewBox="0 0 1080 880" preserveAspectRatio="none">
            {/* Background Track Line */}
            <path
              d="M 540 40 C 380 180, 700 280, 540 420 C 380 560, 700 660, 540 820"
              className="process-bg-path"
            />
            {/* Scroll-Scrubbed Active Drawing Path */}
            <path
              ref={activePathRef}
              d="M 540 40 C 380 180, 700 280, 540 420 C 380 560, 700 660, 540 820"
              className="process-active-path"
            />
          </svg>

          {/* Mobile: Vertical SVG Drawing Spine along Waypoints */}
          <svg className="process-svg-canvas mobile-svg" viewBox="0 0 44 1000" preserveAspectRatio="none">
            <path d="M 22 20 L 22 980" className="process-bg-path" />
            <path
              ref={mobileActivePathRef}
              d="M 22 20 L 22 980"
              className="process-active-path"
            />
          </svg>

          {/* Milestones Vertical Cascade */}
          <div className="process-milestones-list">
            {processSteps.map((step, index) => {
              const isActive = index === activeStepIndex
              const isCompleted = index < activeStepIndex

              let statusLabel = 'WAITING'
              let statusClass = 'waiting'
              if (isActive) {
                statusLabel = 'ACTIVE STEP'
                statusClass = 'active'
              } else if (isCompleted) {
                statusLabel = 'COMPLETED ✓'
                statusClass = 'completed'
              }

              return (
                <div key={step.step} className={`process-milestone-item ${step.align}`}>
                  {/* Waypoint Center Node */}
                  <div
                    ref={(el) => (waypointRefs.current[index] = el)}
                    className={`milestone-waypoint ${isActive ? 'is-active' : ''} ${
                      isCompleted ? 'is-completed' : ''
                    }`}
                  >
                    {isCompleted ? '✓' : step.step}
                  </div>

                  {/* Milestone Card Surface */}
                  <div
                    ref={(el) => (milestoneRefs.current[index] = el)}
                    className={`milestone-card ${isActive ? 'is-active' : ''}`}
                  >
                    <div className="milestone-meta-strip">
                      <span className="milestone-step-index">PHASE {step.step}</span>
                      <span className={`milestone-status-badge ${statusClass}`}>{statusLabel}</span>
                    </div>

                    <h3 className="milestone-title">{step.title}</h3>
                    <p className="milestone-desc">{step.desc}</p>

                    <div className="milestone-deliverable-chip">
                      <span className="deliverable-bullet">●</span>
                      <span>DELIVERABLE: {step.deliverable}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
