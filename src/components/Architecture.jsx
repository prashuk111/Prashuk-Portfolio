import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const architectureNodes = [
  {
    id: 'user',
    step: '01',
    name: 'USER INTERACTION',
    subtitle: 'Client Experience & Actions',
    tech: 'Web Browsers · Mobile Devices · Responsive UI',
    latency: 'Real-Time User Input',
    protocol: 'HTTPS / DOM Events',
    role: 'The user accesses the digital platform through responsive web interfaces across desktop, tablet, and mobile devices, triggering application workflows.',
  },
  {
    id: 'react',
    step: '02',
    name: 'REACT FRONTEND',
    subtitle: 'Interactive UI & State Management',
    tech: 'React.js · GSAP · Three.js · Modern CSS',
    latency: 'Sub-16ms (60-120 FPS)',
    protocol: 'Component State & Virtual DOM',
    role: 'Renders dynamic interfaces, handles responsive animations and micro-interactions, manages client-side state, and communicates with backend services.',
  },
  {
    id: 'api',
    step: '03',
    name: 'REST API',
    subtitle: 'Communication & Data Contracts',
    tech: 'RESTful Endpoints · JSON · HTTP/HTTPS',
    latency: '< 20ms Routing Overhead',
    protocol: 'JSON over HTTP/HTTPS',
    role: 'Provides structured request-response endpoints, input validation, and secure communication contracts between client interfaces and server services.',
  },
  {
    id: 'spring',
    step: '04',
    name: 'SPRING BOOT',
    subtitle: 'Core Backend & Application Logic',
    tech: 'Java · Spring Boot · REST Controllers · Services',
    latency: 'Fast Request Processing',
    protocol: 'JVM / HTTP / Internal Service',
    role: 'Executes primary business logic, request validation, authentication, and coordinates data flow between APIs, persistence layers, and external tools.',
  },
  {
    id: 'database',
    step: '05',
    name: 'DATABASE',
    subtitle: 'Relational Storage & Data Integrity',
    tech: 'SQL · Relational Databases · JDBC / JPA',
    latency: 'Optimized Query Performance',
    protocol: 'TCP Connection Pool',
    role: 'Stores application data, maintains schema relationships, enforces transactional data integrity, and executes optimized SQL queries.',
  },
  {
    id: 'ai',
    step: '06',
    name: 'AI / AUTOMATION',
    subtitle: 'Intelligent Workflows & Automation',
    tech: 'AI Integration · AI Orchestration · Webhooks',
    latency: 'Asynchronous / Streaming Flow',
    protocol: 'REST APIs / Streaming Events',
    role: 'Connects contextual AI processing, automated task workflows, and system webhooks to augment business capabilities and eliminate repetitive tasks.',
  },
  {
    id: 'docker',
    step: '07',
    name: 'DOCKER',
    subtitle: 'Containerization & Environment Parity',
    tech: 'Docker Containers · Git · Environment Configs',
    latency: 'Zero Environment Drift',
    protocol: 'Container Runtime',
    role: 'Packages applications, runtime dependencies, and backend services into isolated containers to ensure seamless dev-to-production parity.',
  },
  {
    id: 'deployment',
    step: '08',
    name: 'DEPLOYMENT',
    subtitle: 'Production Delivery & Accessibility',
    tech: 'Cloud Hosting · Web Servers · SSL / DNS',
    latency: 'Reliable Live Uptime',
    protocol: 'HTTPS / TLS Security',
    role: 'Delivers containerized production applications to live users with automated SSL security, domain routing, and dependable application availability.',
  },
]

export default function Architecture() {
  const [selectedNode, setSelectedNode] = useState(architectureNodes[0])

  const sectionRef = useRef(null)
  const pipelineRef = useRef(null)
  const nodeItemRefs = useRef([])
  const linePathRefs = useRef([])
  const inspectorRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !pipelineRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ----------------------------------------------------
      // DESKTOP TOPOLOGY TIMELINE (>= 992px)
      // ----------------------------------------------------
      mm.add('(min-width: 992px)', () => {
        const assembleTl = gsap.timeline({
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: 'top 75%',
            end: 'bottom 65%',
            scrub: 0.6,
          },
        })

        const totalNodes = architectureNodes.length

        architectureNodes.forEach((_, idx) => {
          const nodeEl = nodeItemRefs.current[idx]
          const lineEl = linePathRefs.current[idx]
          const timePos = idx * 1.2

          if (nodeEl) {
            assembleTl.fromTo(
              nodeEl,
              { opacity: 0.25, x: -30, scale: 0.95 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
                onStart: () => {
                  setSelectedNode(architectureNodes[idx])
                },
              },
              timePos
            )
          }

          if (lineEl && idx < totalNodes - 1) {
            const pathLen = lineEl.getTotalLength ? lineEl.getTotalLength() : 70
            gsap.set(lineEl, { strokeDasharray: pathLen, strokeDashoffset: pathLen })

            assembleTl.to(
              lineEl,
              {
                strokeDashoffset: 0,
                duration: 0.6,
                ease: 'none',
              },
              timePos + 0.35
            )
          }
        })

        if (inspectorRef.current) {
          gsap.from(inspectorRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: 40,
            duration: 0.8,
            ease: 'power3.out',
          })
        }
      })

      // ----------------------------------------------------
      // MOBILE RESPONSIVE CHOREOGRAPHY (< 992px)
      // Preserves: Node appears -> line draws down -> next node appears -> line draws down
      // ----------------------------------------------------
      mm.add('(max-width: 991px)', () => {
        architectureNodes.forEach((_, idx) => {
          const nodeEl = nodeItemRefs.current[idx]
          const lineEl = linePathRefs.current[idx]
          const wrapperEl = nodeEl ? nodeEl.closest('.pipeline-node-wrapper') : null
          const triggerEl = wrapperEl || nodeEl

          if (!triggerEl) return

          const nodeTl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerEl,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
              onEnter: () => setSelectedNode(architectureNodes[idx]),
              onEnterBack: () => setSelectedNode(architectureNodes[idx]),
            },
          })

          // Node card enters: opacity 0.2 -> 1, x: -24 -> 0, scale: 0.95 -> 1
          nodeTl.fromTo(
            nodeEl,
            { opacity: 0.2, x: -24, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power2.out' },
            0
          )

          // Line draws down to next node
          if (lineEl && idx < architectureNodes.length - 1) {
            const pathLen = lineEl.getTotalLength ? lineEl.getTotalLength() : 70
            gsap.set(lineEl, { strokeDasharray: pathLen, strokeDashoffset: pathLen })

            nodeTl.fromTo(
              lineEl,
              { strokeDashoffset: pathLen },
              { strokeDashoffset: 0, duration: 0.45, ease: 'power1.inOut' },
              0.25
            )
          }
        })

        // Mobile inspector entrance
        if (inspectorRef.current) {
          gsap.from(inspectorRef.current, {
            scrollTrigger: {
              trigger: inspectorRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            scale: 0.97,
            duration: 0.7,
            ease: 'power3.out',
          })
        }
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section id="architecture" ref={sectionRef} className="architecture-editorial-section">
      <div id="solutions" className="section-anchor"></div>

      <div className="container">
        {/* Header */}
        <div className="arch-header">
          <div className="arch-eyebrow">
            <span className="eyebrow-accent-bullet">●</span>
            <span>SOLUTIONS // SYSTEM ARCHITECTURE</span>
          </div>

          <div className="arch-title-row">
            <h2 className="arch-display-title">
              How I connect frontend, backend,{' '}
              <span className="arch-highlight">AI and deployment.</span>
            </h2>
            <p className="arch-lead-text">
              An integrated system view from user interaction to production deployment. As you scroll, explore the progression connecting React, REST APIs, Spring Boot, databases, AI integration, Docker and live hosting.
            </p>
          </div>
        </div>

        {/* Interactive Visualization Grid */}
        <div className="arch-interactive-grid">
          {/* Left: Self-Assembling Pipeline Column */}
          <div ref={pipelineRef} className="arch-pipeline-column" role="tablist" aria-label="System Pipeline Nodes">
            {architectureNodes.map((node, index) => (
              <div key={node.id} className="pipeline-node-wrapper">
                <button
                  type="button"
                  ref={(el) => (nodeItemRefs.current[index] = el)}
                  role="tab"
                  aria-selected={selectedNode.id === node.id}
                  className={`pipeline-node-card ${selectedNode.id === node.id ? 'active' : ''}`}
                  onClick={() => setSelectedNode(node)}
                >
                  <div className="node-card-left">
                    <span className="node-num-tag">{node.step}</span>
                    <div className="node-names">
                      <span className="node-primary-name">{node.name}</span>
                      <span className="node-secondary-sub">{node.subtitle}</span>
                    </div>
                  </div>

                  <div className="node-card-right">
                    <span className="node-tech-summary">{node.tech.split('·')[0]}</span>
                    <span className="node-select-arrow">→</span>
                  </div>
                </button>

                {/* Vertical SVG Connector between nodes */}
                {index !== architectureNodes.length - 1 && (
                  <div className="pipeline-connector-segment">
                    <svg className="connector-svg-spine" width="24" height="48" viewBox="0 0 24 48">
                      <line
                        ref={(el) => (linePathRefs.current[index] = el)}
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="48"
                        stroke="#D8FF3E"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        className="spine-line"
                      />
                    </svg>
                    <span className="connector-arrow-head">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Selected Node Detail Inspector Panel */}
          <div ref={inspectorRef} className="arch-inspector-column">
            <div className="inspector-panel-sticky">
              <div className="inspector-card">
                {/* Inspector Header */}
                <div className="inspector-topbar">
                  <div className="inspector-badge">
                    <span className="i-bullet">●</span>
                    <span>ACTIVE NODE TELEMETRY</span>
                  </div>
                  <span className="inspector-step-code">STAGE {selectedNode.step} OF 08</span>
                </div>

                {/* Node Title & Lead */}
                <div className="inspector-main-info">
                  <span className="inspector-node-id">{selectedNode.name}</span>
                  <h3 className="inspector-title">{selectedNode.subtitle}</h3>
                  <p className="inspector-role-desc">{selectedNode.role}</p>
                </div>

                {/* Telemetry Matrix Grid */}
                <div className="inspector-metrics-grid">
                  <div className="metric-cell">
                    <span className="cell-label">PRIMARY TECHNOLOGIES</span>
                    <span className="cell-val">{selectedNode.tech}</span>
                  </div>

                  <div className="metric-cell">
                    <span className="cell-label">EXPECTED LATENCY / BENCHMARK</span>
                    <span className="cell-val accent-val">{selectedNode.latency}</span>
                  </div>

                  <div className="metric-cell">
                    <span className="cell-label">COMMUNICATION PROTOCOL</span>
                    <span className="cell-val">{selectedNode.protocol}</span>
                  </div>
                </div>

                {/* Topology Status Footer */}
                <div className="inspector-footer">
                  <span className="footer-cluster-info">SYSTEM FLOW: END-TO-END ARCHITECTURE</span>
                  <span className="footer-status-healthy">CONNECTED · FULL-STACK PIPELINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
