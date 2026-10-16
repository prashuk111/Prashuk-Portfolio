import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const capabilitiesData = [
  {
    id: 'website',
    step: '01',
    category: 'WEBSITE DEVELOPMENT',
    label: 'Modern, Responsive & Interactive Websites',
    lead: 'Modern, responsive and interactive websites built around the business and user experience.',
    tools: ['React.js', 'GSAP', 'Three.js', 'Vite', 'Modern CSS', 'Responsive UI'],
    principles: [
      'Interactive animations and micro-interactions with GSAP and Three.js.',
      'Mobile-first responsive layouts across desktop, tablet, and mobile viewports.',
      'Semantic structure, fast load performance, and zero runtime bloat.',
    ],
    codeSnippet: `// Interactive React Component with GSAP
const InteractiveExperience = () => {
  useGSAP(() => {
    gsap.from(".hero-element", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });
  });
  return <div className="hero-element">Modern Digital Experience</div>;
};`,
    deliverables: 'Interactive Websites · Portfolio Experiences · Event Platforms · Landing Pages',
  },
  {
    id: 'fullstack',
    step: '02',
    category: 'FULL-STACK DEVELOPMENT',
    label: 'Frontend & Backend Application Engineering',
    lead: 'Frontend and backend applications using React, Java, Spring Boot and REST APIs.',
    tools: ['React.js', 'Java', 'Spring Boot', 'REST APIs', 'SQL', 'Docker'],
    principles: [
      'Full-stack cohesion connecting interactive UI with structured backend logic.',
      'RESTful API communication with clear JSON data contracts.',
      'Containerized development workflows with Docker for environment consistency.',
    ],
    codeSnippet: `// Full-Stack React & Spring Boot Integration
export function useProductData(endpoint) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(\`/api/v1/\${endpoint}\`)
      .then(res => res.json())
      .then(payload => setData(payload));
  }, [endpoint]);
  return data;
}`,
    deliverables: 'Web Applications · B2B Platforms · Dashboard Systems · Client Portals',
  },
  {
    id: 'backend',
    step: '03',
    category: 'BACKEND & API DEVELOPMENT',
    label: 'Scalable Backend Services & REST APIs',
    lead: 'Scalable backend services, APIs and integrations using Spring Boot and Java.',
    tools: ['Java', 'Spring Boot', 'REST APIs', 'SQL Databases', 'Docker', 'Git'],
    principles: [
      'Structured REST controller architecture with clean service separation.',
      'Relational data persistence and query optimization with SQL.',
      'Expanding into microservices, Kafka, and distributed architecture.',
    ],
    codeSnippet: `@RestController
@RequestMapping("/api/v1/services")
public class ApiController {
  private final BusinessService service;

  @PostMapping("/process")
  public ResponseEntity<ResponseData> handleRequest(@RequestBody RequestDto req) {
    return ResponseEntity.ok(service.execute(req));
  }
}`,
    deliverables: 'REST APIs · Microservice Foundations · Authentication · SQL Persistence',
  },
  {
    id: 'ai',
    step: '04',
    category: 'AI INTEGRATION',
    label: 'Practical AI Capabilities in Real Workflows',
    lead: 'Integrating AI capabilities into practical web applications and business workflows.',
    tools: ['AI Integration', 'AI Orchestration', 'Spring Boot', 'Chrome Extensions', 'REST APIs'],
    principles: [
      'Embedding AI into actual tools rather than isolated chat windows.',
      'Context extraction and prompt orchestration for accurate results.',
      'Streamlined user interactions with one-click insertion and output previews.',
    ],
    codeSnippet: `// AI Pipeline Service Integration
@Service
public class AiOrchestrationService {
  public AiResponse processPrompt(String threadContext) {
    PromptPayload payload = PromptBuilder.create()
      .withContext(threadContext)
      .withTone(Tone.EXECUTIVE);
    return aiClient.generateResponse(payload);
  }
}`,
    deliverables: 'AI Chrome Extensions · Productivity Tools · Automated Draft Systems',
  },
  {
    id: 'automation',
    step: '05',
    category: 'BUSINESS AUTOMATION',
    label: 'Connecting Systems, APIs & Automated Workflows',
    lead: 'Connecting systems, APIs and workflows to reduce repetitive manual processes.',
    tools: ['REST Webhooks', 'API Connectors', 'Spring Boot', 'Docker', 'Automation Scripts'],
    principles: [
      'Connecting disparate services through robust API webhooks and endpoints.',
      'Automating manual data entry and repetitive communication workflows.',
      'Deterministic error handling and status verification.',
    ],
    codeSnippet: `// Automated Workflow Handler
@Component
public class WorkflowAutomationHandler {
  public void onIncomingTrigger(WebhookEvent event) {
    validateEvent(event);
    dispatchToPipeline(event.getPayload());
    notifyServiceDelivery(event.getId());
  }
}`,
    deliverables: 'API Integrations · Workflow Pipelines · Form Automations · System Webhooks',
  },
  {
    id: 'ecommerce',
    step: '06',
    category: 'E-COMMERCE / SHOPIFY',
    label: 'Modern E-Commerce Experiences & Integrations',
    lead: 'Modern e-commerce experiences and integrations for businesses.',
    tools: ['Shopify', 'React', 'REST APIs', 'Checkout UX', 'Responsive Storefronts'],
    principles: [
      'Clean product catalogs and frictionless customer purchase flows.',
      'Mobile-optimized shopping experiences and fast page load times.',
      'Third-party integrations with inventory, payment, and analytics.',
    ],
    codeSnippet: `// Modern E-Commerce Integration
const CartCheckoutSync = ({ cartItems, onComplete }) => {
  const handleCheckout = async () => {
    const session = await createStorefrontCheckout(cartItems);
    window.location.href = session.checkoutUrl;
  };
  return <button onClick={handleCheckout}>PROCEED TO CHECKOUT ↗</button>;
};`,
    deliverables: 'Storefront Integrations · Custom Shopify Themes · Catalog Systems',
  },
]

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(0)

  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const capabilityCardRefs = useRef([])
  const codeCardRefs = useRef([])
  const railBtnRefs = useRef([])

  useEffect(() => {
    if (!sectionRef.current || !stageRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
        () => {
          const totalItems = capabilitiesData.length
          const scrollDistance = 2800

          // Initial setup of cards: item 0 visible, others hidden
          capabilityCardRefs.current.forEach((el, idx) => {
            if (!el) return
            if (idx === 0) {
              gsap.set(el, { opacity: 1, y: 0, visibility: 'visible', pointerEvents: 'auto' })
            } else {
              gsap.set(el, { opacity: 0, y: 40, visibility: 'hidden', pointerEvents: 'none' })
            }
          })

          codeCardRefs.current.forEach((el, idx) => {
            if (!el) return
            if (idx === 0) {
              gsap.set(el, { opacity: 1, scale: 1, visibility: 'visible' })
            } else {
              gsap.set(el, { opacity: 0, scale: 0.94, visibility: 'hidden' })
            }
          })

          // Master ScrollTrigger timeline pinned across scrollDistance
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: stageRef.current,
              start: 'top top',
              end: `+=${scrollDistance}`,
              scrub: 0.8,
              anticipatePin: 1,
              onUpdate: (self) => {
                const currentStep = Math.min(
                  totalItems - 1,
                  Math.floor(self.progress * totalItems)
                )
                setActiveIdx(currentStep)
              },
            },
          })

          // Choreograph transitions between capabilities:
          // 0 -> 1 -> 2 -> 3
          for (let i = 0; i < totalItems - 1; i++) {
            const timeOffset = (i + 1) * 1.5

            // Outgoing capability
            const currContent = capabilityCardRefs.current[i]
            const currCode = codeCardRefs.current[i]
            // Incoming capability
            const nextContent = capabilityCardRefs.current[i + 1]
            const nextCode = codeCardRefs.current[i + 1]

            if (currContent) {
              tl.to(
                currContent,
                {
                  opacity: 0,
                  y: -35,
                  duration: 0.7,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    gsap.set(currContent, { visibility: 'hidden', pointerEvents: 'none' })
                  },
                  onReverseComplete: () => {
                    gsap.set(currContent, { visibility: 'visible', pointerEvents: 'auto' })
                  },
                },
                timeOffset
              )
            }

            if (currCode) {
              tl.to(
                currCode,
                {
                  opacity: 0,
                  scale: 0.94,
                  duration: 0.7,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    gsap.set(currCode, { visibility: 'hidden' })
                  },
                  onReverseComplete: () => {
                    gsap.set(currCode, { visibility: 'visible' })
                  },
                },
                timeOffset
              )
            }

            if (nextContent) {
              tl.set(nextContent, { visibility: 'visible', pointerEvents: 'auto' }, timeOffset + 0.1)
              tl.fromTo(
                nextContent,
                { opacity: 0, y: 35 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
                timeOffset + 0.1
              )
            }

            if (nextCode) {
              tl.set(nextCode, { visibility: 'visible' }, timeOffset + 0.1)
              tl.fromTo(
                nextCode,
                { opacity: 0, scale: 0.94 },
                { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
                timeOffset + 0.1
              )
            }
          }
        }
      )

      // Mobile Responsive Choreography (< 992px)
      // Preserves: Service 01 (active, opacity 1, scale 1) -> Service 02 enters & activates
      // (previous dims to 0.38) -> Service 03 enters & activates -> Service 04
      mm.add('(max-width: 991px)', () => {
        function setMobileActiveCard(activeI) {
          setActiveIdx(activeI)
          capabilityCardRefs.current.forEach((c, i) => {
            if (!c) return
            if (i === activeI) {
              gsap.to(c, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
              })
              c.classList.add('mobile-focus')
            } else {
              gsap.to(c, {
                opacity: 0.38,
                scale: 0.97,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
              })
              c.classList.remove('mobile-focus')
            }
          })
        }

        capabilityCardRefs.current.forEach((card, idx) => {
          if (!card) return

          // ScrollTrigger focus detection as each capability scrolls through center
          ScrollTrigger.create({
            trigger: card,
            start: 'top 65%',
            end: 'bottom 35%',
            onEnter: () => setMobileActiveCard(idx),
            onEnterBack: () => setMobileActiveCard(idx),
          })

          // Staggered entrance as card approaches viewport
          gsap.fromTo(
            card,
            { opacity: 0, y: 45, scale: 0.94 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              opacity: idx === 0 ? 1 : 0.38,
              y: 0,
              scale: idx === 0 ? 1 : 0.97,
              duration: 0.7,
              ease: 'power3.out',
            }
          )
        })
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  const scrollToCapability = (index) => {
    if (!sectionRef.current) return
    const isMobile = window.innerWidth < 992
    if (isMobile) {
      const card = capabilityCardRefs.current[index]
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    } else {
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top
      const totalDist = 2800
      const targetScroll = scrollTop + (index / (capabilitiesData.length - 1)) * totalDist
      window.scrollTo({ top: targetScroll, behavior: 'smooth' })
    }
  }

  return (
    <section id="capabilities" ref={sectionRef} className="capabilities-editorial-section">
      <div id="services" className="section-anchor"></div>

      {/* Pinned Stage Container */}
      <div ref={stageRef} className="capabilities-pinned-stage">
        <div className="container">
          {/* Header */}
          <div className="capabilities-header">
            <div className="capabilities-eyebrow">
              <span className="eyebrow-accent-bullet">●</span>
              <span>SERVICES // CORE OFFERINGS</span>
            </div>

            <div className="capabilities-title-row">
              <h2 className="capabilities-display-title">
                Full-stack engineering &amp;{' '}
                <span className="cap-highlight">modern digital solutions.</span>
              </h2>

              {/* Progress Rail Selector */}
              <div className="capabilities-selector-rail" role="tablist" aria-label="Capabilities Navigation">
                {capabilitiesData.map((item, idx) => (
                  <button
                    key={item.id}
                    ref={(el) => (railBtnRefs.current[idx] = el)}
                    type="button"
                    role="tab"
                    aria-selected={activeIdx === idx}
                    className={`cap-selector-btn ${activeIdx === idx ? 'active' : ''}`}
                    onClick={() => scrollToCapability(idx)}
                  >
                    <span className="cap-btn-bullet">●</span>
                    <span className="cap-btn-step">{item.step}</span>
                    <span className="cap-btn-name">{item.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dual Stage: Left Content Stack + Right Live Code Inspection Stack */}
          <div className="capabilities-dual-stage">
            {/* Left Content Column (Stacked Slides) */}
            <div className="cap-content-stack">
              {capabilitiesData.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => (capabilityCardRefs.current[idx] = el)}
                  className={`cap-content-slide ${activeIdx === idx ? 'mobile-focus' : ''}`}
                >
                  <div className="cap-category-badge">
                    <span className="badge-step">{item.step}</span>
                    <span className="badge-sep">//</span>
                    <span>{item.category}</span>
                  </div>

                  <h3 className="cap-category-heading">{item.label}</h3>
                  <p className="cap-category-lead">{item.lead}</p>

                  {/* Core Tooling Tags */}
                  <div className="cap-tooling-section">
                    <span className="cap-sublabel">CORE TECHNOLOGIES &amp; PROTOCOLS</span>
                    <div className="cap-tools-cloud">
                      {item.tools.map((tool) => (
                        <span key={tool} className="tool-chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Principles */}
                  <div className="cap-principles-section">
                    <span className="cap-sublabel">ARCHITECTURAL PRINCIPLES</span>
                    <ul className="cap-principles-list">
                      {item.principles.map((pr) => (
                        <li key={pr} className="principle-item">
                          <span className="principle-bullet">→</span>
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Embedded Code Inspection */}
                  <div className="mobile-code-inspection">
                    <div className="code-window-topbar">
                      <div className="window-dots">
                        <span className="w-dot"></span>
                        <span className="w-dot"></span>
                        <span className="w-dot"></span>
                      </div>
                      <span className="window-file-name">{item.id}.architecture.ts</span>
                      <span className="window-status-pill">VALIDATED</span>
                    </div>
                    <pre className="code-viewport">
                      <code>{item.codeSnippet}</code>
                    </pre>
                    <div className="code-window-footer">
                      <span className="footer-scope-lbl">SAMPLE DELIVERABLES:</span>
                      <span className="footer-scope-val">{item.deliverables}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Code/Inspection Stage (Desktop Stacked Slides) */}
            <div className="cap-code-stack desktop-only-code">
              {capabilitiesData.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => (codeCardRefs.current[idx] = el)}
                  className="cap-code-slide"
                >
                  <div className="code-window-frame">
                    <div className="code-window-topbar">
                      <div className="window-dots">
                        <span className="w-dot"></span>
                        <span className="w-dot"></span>
                        <span className="w-dot"></span>
                      </div>
                      <span className="window-file-name">{item.id}.architecture.ts</span>
                      <span className="window-status-pill">VALIDATED</span>
                    </div>

                    <pre className="code-viewport">
                      <code>{item.codeSnippet}</code>
                    </pre>

                    <div className="code-window-footer">
                      <span className="footer-scope-lbl">SAMPLE DELIVERABLES:</span>
                      <span className="footer-scope-val">{item.deliverables}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
