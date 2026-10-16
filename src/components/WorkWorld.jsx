import { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  RaasraatriMockup,
  NasconMockup,
  VibeForgeAIMockup,
  EmailAssistantMockup,
  AutomatedImageDesignMockup,
} from './projects/ProjectMockups'
import ProjectCaseStudyModal from './projects/ProjectCaseStudyModal'
import './WorkWorld.css'

gsap.registerPlugin(ScrollTrigger)

// Core Prashuk Jain Node Coordinates in Virtual Space (1400 x 840)
const CORE_NODE = {
  id: 'core',
  name: 'PRASHUK JAIN',
  role: 'SOFTWARE DEVELOPER',
  coords: { x: 700, y: 130 },
}

// Actual Portfolio Projects
const projectsData = [
  {
    id: 'raasraatri',
    number: '01',
    year: '2026',
    title: 'RAASRAATRI',
    category: 'Event / Creative Web Experience',
    classification: 'DELIVERED EXPERIENCE',
    tech: ['React', 'Vite', 'Modern CSS', 'Audio Web API', 'Responsive Design'],
    description:
      'A premium interactive event website for a Garba celebration, designed as an immersive digital experience with visual storytelling, pass reservation, and responsive interaction.',
    statement:
      'Where cultural festival storytelling meets interactive digital craft.',
    role: 'Frontend & Interactive Web Developer',
    status: 'Completed & Delivered',
    actionLabel: 'EXPLORE CASE STUDY',
    coords: { x: 260, y: 350 },
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
    category: 'Industrial / B2B Platform',
    classification: 'CLIENT PLATFORM',
    tech: ['React', 'Vite', 'REST APIs', 'Enterprise Forms', 'Docker'],
    description:
      'A professional industrial digital platform for an automation and robotics manufacturer, focused on presenting products, industries, partner information, and RFQ inquiries.',
    statement:
      'Industrial digital platform engineered for engineering clarity and B2B presentation.',
    role: 'Full-Stack Web Developer (React + REST API Integration)',
    status: 'Completed & Live',
    actionLabel: 'EXPLORE CASE STUDY',
    coords: { x: 1140, y: 350 },
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
    category: 'AI SaaS Platform / Web Engine',
    classification: 'AI SAAS PLATFORM (IN ACTIVE DEVELOPMENT)',
    tech: ['React 19', 'Vite', 'Spring Boot', 'Claude & OpenAI APIs', 'Tailwind CSS', 'Docker'],
    description:
      'An AI-powered SaaS platform engineered for instant website generation, dynamic code synthesis, and intelligent component orchestration through natural language prompts.',
    statement:
      'Natural Language Prompt → AI Architecture Engine → Live Interactive Website Generation & Instant Cloud Deployment.',
    role: 'Full-Stack AI SaaS Architect & Developer',
    status: 'In Active Development',
    actionLabel: 'EXPLORE SAAS ARCHITECTURE',
    coords: { x: 700, y: 440 },
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
    category: 'AI Productivity System',
    classification: 'PRODUCTION SYSTEM',
    tech: ['React', 'Spring Boot', 'Chrome Extension', 'AI Integration', 'Docker'],
    description:
      'An AI-powered email productivity system that connects a native Gmail Chrome extension to a Spring Boot backend and AI generation workflow.',
    statement:
      'Gmail → Chrome Extension → Spring Boot REST API → AI Integration workflow.',
    role: 'Full-Stack Developer (Extension, Spring Boot REST Backend & Docker)',
    status: 'Active Production',
    actionLabel: 'EXPLORE CASE STUDY',
    coords: { x: 380, y: 680 },
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
  {
    id: 'automated-image',
    number: '05',
    year: '2026',
    title: 'AUTOMATED IMAGE DESIGN',
    category: 'Creative Automation System',
    classification: 'CURRENTLY IN DEVELOPMENT',
    tech: ['React', 'Spring Boot', 'Canvas API', 'REST APIs', 'Automation'],
    description:
      'An automated image-design system focused on programmatic visual layout composition and asset generation workflows.',
    statement:
      'Programmatic layout rules and automated visual composition pipeline.',
    role: 'Full-Stack Architecture & Development',
    status: 'Currently in development',
    actionLabel: 'VIEW DEVELOPMENT STATUS',
    coords: { x: 1020, y: 680 },
    mockup: <AutomatedImageDesignMockup />,
    caseStudy: {
      project:
        'Currently in active development. This project explores automated visual asset creation, combining programmatic design layout rules with modern frontend rendering and scalable backend services.',
      experience:
        'Focused on algorithmic layout composition, dynamic template assembly, and automated asset generation workflows without manual design overhead.',
      experienceHighlights: [
        {
          title: 'Algorithmic Composition',
          desc: 'Programmatic layout positioning and dynamic layer generation.',
        },
        {
          title: 'Active Development',
          desc: 'Iterative pipeline under active engineering and testing.',
        },
      ],
      interaction:
        'Interactive preview canvas with real-time layer updates and automated export configurations.',
      build:
        'Developing the core system using React on the frontend and Spring Boot on the backend for automated image pipelines.',
      stackBreakdown: [
        { layer: 'FRONTEND', value: 'React + Canvas APIs' },
        { layer: 'BACKEND', value: 'Java Spring Boot' },
        { layer: 'PIPELINE', value: 'Automated Asset Generation' },
        { layer: 'STATUS', value: 'Currently in Development' },
      ],
    },
  },
]

// SVG Connection Paths in the Spatial World
const CONNECTION_PATHS = [
  { id: 'core-raas', from: 'core', to: 'raasraatri', d: 'M 700 130 C 520 170, 380 240, 260 350' },
  { id: 'core-vibeforge', from: 'core', to: 'vibeforge', d: 'M 700 130 L 700 440' },
  { id: 'core-nascon', from: 'core', to: 'nascon', d: 'M 700 130 C 880 170, 1020 240, 1140 350' },
  { id: 'raas-vibeforge', from: 'raasraatri', to: 'vibeforge', d: 'M 260 350 C 420 360, 540 390, 700 440' },
  { id: 'nascon-vibeforge', from: 'nascon', to: 'vibeforge', d: 'M 1140 350 C 980 360, 860 390, 700 440' },
  { id: 'raas-email', from: 'raasraatri', to: 'email-assistant', d: 'M 260 350 C 270 470, 310 570, 380 680' },
  { id: 'vibeforge-email', from: 'vibeforge', to: 'email-assistant', d: 'M 700 440 C 580 520, 480 590, 380 680' },
  { id: 'vibeforge-image', from: 'vibeforge', to: 'automated-image', d: 'M 700 440 C 820 520, 920 590, 1020 680' },
  { id: 'nascon-image', from: 'nascon', to: 'automated-image', d: 'M 1140 350 C 1130 470, 1090 570, 1020 680' },
  { id: 'email-image', from: 'email-assistant', to: 'automated-image', d: 'M 380 680 C 540 730, 860 730, 1020 680' },
  { id: 'raas-nascon', from: 'raasraatri', to: 'nascon', d: 'M 260 350 C 540 260, 860 260, 1140 350' },
]

export default function WorkWorld() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [focusedProject, setFocusedProject] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [caseStudyModalProject, setCaseStudyModalProject] = useState(null)

  // DOM Refs
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const canvasRef = useRef(null)
  const gridRef = useRef(null)
  const svgRef = useRef(null)
  const nodesLayerRef = useRef(null)
  const coreNodeRef = useRef(null)
  const nodeRefs = useRef({})
  const pathRefs = useRef({})
  const focusedOverlayRef = useRef(null)
  const focusedStageRef = useRef(null)

  // Drag & Parallax Internal Physics
  const panRef = useRef({ x: 0, y: 0 })
  const dragStartRef = useRef({ x: 0, y: 0, initialPanX: 0, initialPanY: 0 })
  const hasMovedRef = useRef(false)
  const isPointerDownRef = useRef(false)

  // ==========================================
  // GSAP SCROLL ENTRANCE & CLEANUP
  // ==========================================
  // Mobile refs & state
  const mobileCoreRef = useRef(null)
  const mobileCardRefs = useRef([])
  const mobileSpineRefs = useRef([])
  const [mobileFocusedId, setMobileFocusedId] = useState('raasraatri')

  // ==========================================
  // GSAP SCROLL ENTRANCE & RESPONSIVE CHOREOGRAPHY
  // ==========================================
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ----------------------------------------------------
      // DESKTOP CHOREOGRAPHY (>= 900px)
      // ----------------------------------------------------
      mm.add('(min-width: 900px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })

        // 1. Header reveal
        tl.from('.work-world-header', {
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power3.out',
        })

        // 2. Viewport Canvas reveal
        if (viewportRef.current) {
          tl.from(
            viewportRef.current,
            {
              opacity: 0,
              scale: 0.96,
              duration: 0.9,
              ease: 'power2.out',
            },
            '-=0.4'
          )
        }

        // 3. SVG Connection Paths draw in
        const paths = Object.values(pathRefs.current).filter(Boolean)
        if (paths.length > 0) {
          paths.forEach((path) => {
            try {
              const length = path.getTotalLength() || 600
              gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
              tl.to(
                path,
                {
                  strokeDashoffset: 0,
                  duration: 1.1,
                  ease: 'power2.inOut',
                },
                '-=0.7'
              )
            } catch {
              // SVG path length fallback
            }
          })
        }

        // 4. Core & Project Nodes entrance
        const allNodes = [coreNodeRef.current, ...Object.values(nodeRefs.current)].filter(Boolean)
        if (allNodes.length > 0) {
          tl.from(
            allNodes,
            {
              scale: 0.8,
              opacity: 0,
              stagger: 0.12,
              duration: 0.65,
              ease: 'back.out(1.5)',
            },
            '-=0.6'
          )
        }

        // 5. Hint badge reveal
        tl.from(
          '.work-world-hint-badge',
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.3'
        )
      })

      // ----------------------------------------------------
      // MOBILE RESPONSIVE CHOREOGRAPHY (< 900px)
      // Preserves: Section Enters -> Core Node appears -> Project 01 enters & settles
      // -> Connector line draws -> Project 02 enters & settles -> Connector line draws
      // -> Project 03 enters & settles
      // ----------------------------------------------------
      mm.add('(max-width: 899px)', () => {
        // 1. Header reveal
        gsap.from('.work-world-header', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: 'power3.out',
        })

        // 2. Mobile Core Card reveal
        if (mobileCoreRef.current) {
          gsap.from(mobileCoreRef.current, {
            scrollTrigger: {
              trigger: mobileCoreRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 25,
            scale: 0.96,
            duration: 0.6,
            ease: 'power3.out',
          })
        }

        // 3. Staggered individual project entrance as user scrolls
        mobileCardRefs.current.forEach((card, idx) => {
          if (!card) return
          const spine = mobileSpineRefs.current[idx]

          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })

          // Connector spine draws down
          if (spine) {
            cardTl.fromTo(
              spine,
              { scaleY: 0, opacity: 0 },
              { scaleY: 1, opacity: 1, duration: 0.4, ease: 'power2.out', transformOrigin: 'top center' },
              0
            )
          }

          // Project Card enters into position: opacity, translateY(60px), scale
          cardTl.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.94,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: 'power3.out',
            },
            0.1
          )

          // Card contents entrance
          const preview = card.querySelector('.mobile-card-preview')
          const tech = card.querySelector('.mobile-card-tech')
          if (preview) {
            cardTl.fromTo(
              preview,
              { opacity: 0, scale: 0.96 },
              { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' },
              '-=0.35'
            )
          }
          if (tech) {
            cardTl.fromTo(
              tech,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
              '-=0.3'
            )
          }
        })
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  // ==========================================
  // DRAG & PAN BEHAVIOR
  // ==========================================
  const handlePointerDown = (e) => {
    if (focusedProject) return
    isPointerDownRef.current = true
    hasMovedRef.current = false
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialPanX: panRef.current.x,
      initialPanY: panRef.current.y,
    }
  }

  const handlePointerMove = (e) => {
    if (focusedProject) return

    if (isPointerDownRef.current) {
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y

      if (Math.hypot(dx, dy) > 6) {
        hasMovedRef.current = true
        if (!isDragging) setIsDragging(true)
      }

      // Constrain within bounds to prevent dragging offscreen
      const rawX = dragStartRef.current.initialPanX + dx
      const rawY = dragStartRef.current.initialPanY + dy
      const clampedX = Math.max(-240, Math.min(240, rawX))
      const clampedY = Math.max(-160, Math.min(160, rawY))

      panRef.current = { x: clampedX, y: clampedY }

      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          x: clampedX,
          y: clampedY,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    } else {
      // 2.5D Pointer Parallax (when resting)
      if (!viewportRef.current) return
      const rect = viewportRef.current.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(gridRef.current, {
        x: nx * 14,
        y: ny * 14,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto',
      })
      gsap.to(svgRef.current, {
        x: nx * 22,
        y: ny * 22,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto',
      })
      gsap.to(nodesLayerRef.current, {
        x: nx * 32,
        y: ny * 32,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }

  const handlePointerUp = () => {
    isPointerDownRef.current = false
    setTimeout(() => {
      setIsDragging(false)
    }, 40)
  }

  // ==========================================
  // NODE HOVER BEHAVIOR
  // ==========================================
  const handleNodeMouseEnter = (project) => {
    if (focusedProject || isDragging) return
    setHoveredProject(project.id)

    // Highlight node with subtle scale & elevate
    const el = nodeRefs.current[project.id]
    if (el) {
      gsap.to(el, {
        scale: 1.05,
        zIndex: 15,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleNodeMouseLeave = (project) => {
    if (focusedProject || isDragging) return
    setHoveredProject(null)

    const el = nodeRefs.current[project.id]
    if (el) {
      gsap.to(el, {
        scale: 1,
        zIndex: 6,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  // ==========================================
  // CAMERA FOCUS INTERACTION (KEY FEATURE)
  // ==========================================
  const focusProject = useCallback(
    (project) => {
      if (isDragging || hasMovedRef.current) return
      setFocusedProject(project)

      // Calculate camera translation: bring selected node toward visual focus
      // Canvas center: (700, 420)
      const targetPanX = (700 - project.coords.x) * 0.4
      const targetPanY = (420 - project.coords.y) * 0.4

      panRef.current = { x: targetPanX, y: targetPanY }

      // 1. Zoom and pan camera
      if (canvasRef.current) {
        gsap.to(canvasRef.current, {
          x: targetPanX,
          y: targetPanY,
          scale: 1.12,
          duration: 0.9,
          ease: 'power3.inOut',
        })
      }

      // 2. Dim and push other nodes
      projectsData.forEach((p) => {
        const el = nodeRefs.current[p.id]
        if (!el) return
        if (p.id === project.id) {
          gsap.to(el, { opacity: 0, scale: 0.95, duration: 0.4 })
        } else {
          gsap.to(el, { opacity: 0.15, scale: 0.85, duration: 0.6 })
        }
      })

      if (coreNodeRef.current) {
        gsap.to(coreNodeRef.current, { opacity: 0.15, scale: 0.85, duration: 0.6 })
      }

      // 3. Choreographed entrance of focused project stage
      const overlay = focusedOverlayRef.current
      const stage = focusedStageRef.current
      if (overlay && stage) {
        overlay.classList.add('is-active')
        const stageTl = gsap.timeline({ delay: 0.25 })

        stageTl.fromTo(
          stage,
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'power3.out' }
        )

        stageTl.from(
          '.focused-visual-col',
          { opacity: 0, scale: 0.96, duration: 0.5, ease: 'power2.out' },
          '-=0.35'
        )

        stageTl.from(
          '.focused-narrative-top > *',
          { opacity: 0, x: -20, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
          '-=0.4'
        )

        stageTl.from(
          '.focused-narrative-actions',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        )
      }
    },
    [isDragging]
  )

  // ==========================================
  // RESET WORLD (BACK TO WORLD)
  // ==========================================
  const resetWorld = useCallback(() => {
    // Hide overlay
    if (focusedOverlayRef.current) {
      focusedOverlayRef.current.classList.remove('is-active')
    }

    // Reset camera pan and zoom
    panRef.current = { x: 0, y: 0 }
    if (canvasRef.current) {
      gsap.to(canvasRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      })
    }

    // Restore all nodes
    projectsData.forEach((p) => {
      const el = nodeRefs.current[p.id]
      if (el) {
        gsap.to(el, { opacity: 1, scale: 1, zIndex: 6, duration: 0.6, ease: 'power2.out' })
      }
    })

    if (coreNodeRef.current) {
      gsap.to(coreNodeRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' })
    }

    setFocusedProject(null)
  }, [])

  // Keyboard accessibility: ESC resets world
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && focusedProject) {
        resetWorld()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedProject, resetWorld])

  return (
    <section id="work" ref={sectionRef} className="work-world-section">
      {/* Anchor targets */}
      <div id="selected-work" className="section-anchor"></div>
      <div id="projects" className="section-anchor"></div>
      <div id="work-world" className="section-anchor"></div>

      <div className="container">
        {/* Section Header */}
        <div className="work-world-header">
          <div className="work-world-eyebrow">
            <span className="eyebrow-accent-dot"></span>
            <span>SELECTED WORK</span>
            <span className="eyebrow-sep">/</span>
            <span className="eyebrow-count">05 PROJECTS</span>
          </div>

          <div className="work-world-title-row">
            <h2 className="work-world-main-heading">
              Work, built to be{' '}
              <span className="heading-accent">experienced.</span>
            </h2>

            <div className="work-world-meta-col">
              <p className="work-world-intro-copy">
                Explore the systems, interfaces and digital experiences I&apos;ve built.
              </p>

              <div className="work-world-hint-badge">
                <span className="hint-dot"></span>
                <span>DRAG TO EXPLORE</span>
                <span className="hint-sep">·</span>
                <span>CLICK A PROJECT TO FOCUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            DESKTOP SPATIAL CANVAS VIEWPORT
            ========================================================================== */}
        <div
          ref={viewportRef}
          className={`work-world-viewport ${isDragging ? 'is-dragging' : ''} ${focusedProject ? 'is-focused' : ''
            }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Spatial World Canvas */}
          <div ref={canvasRef} className="work-world-canvas">
            {/* Layer 1: Backdrop Grid */}
            <div ref={gridRef} className="world-backdrop-grid"></div>

            {/* Corner Spatial Telemetry Markers */}
            <div className="world-coord-markers">
              <span className="coord-corner top-left">LOC // 23°01&apos;N 72°35&apos;E</span>
              <span className="coord-corner top-right">CANVAS // 1400 × 840 PX</span>
              <span className="coord-corner bottom-left">SYSTEM // SPATIAL MATRIX v2.4</span>
              <span className="coord-corner bottom-right">STATUS // ONLINE</span>
            </div>

            {/* Layer 2: SVG Dynamic Connections Matrix */}
            <svg ref={svgRef} className="world-svg-matrix" viewBox="0 0 1400 840">
              {CONNECTION_PATHS.map((path) => {
                const isConnectedToHovered =
                  hoveredProject && (path.from === hoveredProject || path.to === hoveredProject)
                const isDimmed = hoveredProject && !isConnectedToHovered
                return (
                  <path
                    key={path.id}
                    ref={(el) => (pathRefs.current[path.id] = el)}
                    d={path.d}
                    className={`matrix-path ${isConnectedToHovered ? 'is-active' : ''} ${isDimmed ? 'is-dimmed' : ''
                      }`}
                  />
                )
              })}
            </svg>

            {/* Layer 3: Spatial Nodes */}
            <div ref={nodesLayerRef} className="world-nodes-layer">
              {/* Central Core Node: Prashuk Jain */}
              <div
                ref={coreNodeRef}
                className="central-core-node"
                style={{ left: `${CORE_NODE.coords.x}px`, top: `${CORE_NODE.coords.y}px` }}
              >
                <div className="core-pulse-beacon">
                  <div className="beacon-core"></div>
                  <div className="beacon-wave"></div>
                </div>
                <div className="core-label-box">
                  <span className="core-brand-name">{CORE_NODE.name}</span>
                  <span className="core-sub-title">{CORE_NODE.role}</span>
                </div>
              </div>

              {/* 5 Asymmetrical Project Nodes */}
              {projectsData.map((project) => {
                const isHovered = hoveredProject === project.id
                const isDimmed = hoveredProject && !isHovered
                return (
                  <div
                    key={project.id}
                    ref={(el) => (nodeRefs.current[project.id] = el)}
                    className={`project-spatial-node ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''
                      }`}
                    style={{ left: `${project.coords.x}px`, top: `${project.coords.y}px` }}
                    onMouseEnter={() => handleNodeMouseEnter(project)}
                    onMouseLeave={() => handleNodeMouseLeave(project)}
                    onClick={() => focusProject(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Focus project: ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        focusProject(project)
                      }
                    }}
                  >
                    {/* Top Strip */}
                    <div className="node-top-strip">
                      <span className="node-num-badge">{project.number}</span>
                      <span className="node-year-tag">{project.year}</span>
                    </div>

                    <div className="node-category-label">{project.category}</div>

                    <h3 className="node-title-heading">
                      <span>{project.title}</span>
                      <span className="node-arrow-symbol">↗</span>
                    </h3>

                    {/* Node Mini Abstract Preview */}
                    <div className="node-mini-preview-frame">
                      {project.id === 'raasraatri' && (
                        <div className="mini-raas-preview">
                          <span className="mini-mandala-symbol">✦</span>
                          <span className="mini-ticket-stamp">PASS CONFIRMED</span>
                        </div>
                      )}
                      {project.id === 'nascon' && (
                        <div className="mini-nascon-preview">
                          <div className="mini-cad-grid">
                            <div className="mini-cad-bar" style={{ width: '45%' }}></div>
                            <span className="mini-cad-label">CAD SPEC NTC-940</span>
                          </div>
                          <div className="mini-cad-grid">
                            <div className="mini-cad-bar" style={{ width: '75%' }}></div>
                            <span className="mini-cad-label">RFQ ROUTING</span>
                          </div>
                        </div>
                      )}
                      {project.id === 'vibeforge' && (
                        <div className="mini-vibeforge-preview">
                          <div className="mini-pipeline-step">
                            <span className="step-dot" style={{ background: '#38bdf8' }}></span>
                            <span>PROMPT → REACT 19</span>
                          </div>
                          <div className="mini-pipeline-step">
                            <span className="step-dot" style={{ background: '#D8FF3E' }}></span>
                            <span>SAAS AST SYNTHESIS</span>
                          </div>
                        </div>
                      )}
                      {project.id === 'email-assistant' && (
                        <div className="mini-email-preview">
                          <div className="mini-pipeline-step">
                            <span className="step-dot"></span>
                            <span>GMAIL CONTEXT</span>
                          </div>
                          <div className="mini-pipeline-step">
                            <span className="step-dot"></span>
                            <span>SPRING BOOT + AI</span>
                          </div>
                        </div>
                      )}
                      {project.id === 'automated-image' && (
                        <div className="mini-image-preview">
                          <div className="mini-pipeline-step">
                            <span className="step-dot" style={{ background: '#eab308' }}></span>
                            <span>IN DEVELOPMENT</span>
                          </div>
                          <div className="mini-pipeline-step">
                            <span className="step-dot"></span>
                            <span>CANVAS ENGINE</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Pills */}
                    <div className="node-tech-row">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="node-tech-chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Hover Focus Context Hint */}
                    <div className="node-hover-focus-pill">FOCUS PROJECT →</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom Telemetry Controls Bar */}
          <div className="world-viewport-controls">
            <div className="controls-status-strip">
              <span className="online-dot"></span>
              <span>LIVE SPATIAL GRAPH // 5 NODES ACTIVE</span>
            </div>

            <button type="button" className="world-reset-btn" onClick={resetWorld}>
              RESET POSITION
            </button>
          </div>

          {/* ==========================================================================
              FOCUSED PROJECT EXPERIENCE STAGE OVERLAY
              ========================================================================== */}
          <div ref={focusedOverlayRef} className="world-focused-stage-overlay">
            {focusedProject && (
              <div ref={focusedStageRef} className="focused-experience-container">
                {/* Top Control Bar */}
                <div className="focused-stage-topbar">
                  <button type="button" className="btn-back-to-world" onClick={resetWorld}>
                    <span>←</span>
                    <span>BACK TO WORLD</span>
                  </button>

                  <div className="focused-telemetry-meta">
                    <span className="focused-proj-num">{focusedProject.number}</span>
                    <span className="focused-status-tag">{focusedProject.classification}</span>
                  </div>
                </div>

                {/* Split Stage Body: Narrative + Visual */}
                <div className="focused-stage-body">
                  {/* Left Column: Narrative Details */}
                  <div className="focused-narrative-col">
                    <div className="focused-narrative-top">
                      <span className="focused-category-badge">{focusedProject.category}</span>
                      <h2 className="focused-project-title">{focusedProject.title}</h2>

                      <div className="focused-meta-bar">
                        {focusedProject.role && (
                          <div className="focused-meta-item">
                            <span className="focused-meta-k">ROLE:</span>
                            <span className="focused-meta-v">{focusedProject.role}</span>
                          </div>
                        )}
                        {focusedProject.status && (
                          <div className="focused-meta-item">
                            <span className="focused-meta-k">STATUS:</span>
                            <span className="focused-meta-v highlight-status">{focusedProject.status}</span>
                          </div>
                        )}
                      </div>

                      <div className="focused-tech-tags">
                        {focusedProject.tech.map((t) => (
                          <span key={t} className="focused-tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="focused-desc-text">{focusedProject.description}</p>
                    </div>

                    <div className="focused-narrative-actions">
                      <button
                        type="button"
                        className="btn-open-case-study"
                        onClick={() => setCaseStudyModalProject(focusedProject)}
                      >
                        <span>{focusedProject.actionLabel}</span>
                        <span className="btn-arrow-sym">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Stage Mockup */}
                  <div className="focused-visual-col">
                    <div className="focused-mockup-frame">
                      {focusedProject.mockup}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==========================================================================
            MOBILE ADAPTATION FLOW (Screens < 900px)
            ========================================================================== */}
        <div className="mobile-work-world">
          <div ref={mobileCoreRef} className="mobile-core-card">
            <span className="eyebrow-accent-dot"></span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '13px' }}>{CORE_NODE.name}</div>
              <div style={{ fontSize: '10px', color: '#777777', fontFamily: 'monospace' }}>
                {CORE_NODE.role} // 0{projectsData.length} PROJECTS
              </div>
            </div>
          </div>

          <div className="mobile-projects-container">
            {projectsData.map((project, idx) => (
              <div key={project.id} className="mobile-project-step">
                {/* Connecting spine between core/nodes */}
                <div
                  ref={(el) => (mobileSpineRefs.current[idx] = el)}
                  className="mobile-connector-spine"
                >
                  <div className="mobile-spine-dot" />
                </div>

                <article
                  ref={(el) => (mobileCardRefs.current[idx] = el)}
                  className={`mobile-world-card ${mobileFocusedId === project.id ? 'is-focused' : ''}`}
                  onClick={() => setMobileFocusedId(project.id)}
                >
                  <div className="mobile-card-header">
                    <span className="mobile-card-num">{project.number}</span>
                    <span className="mobile-card-category">{project.category}</span>
                  </div>

                  <div className="mobile-meta-bar">
                    {project.role && (
                      <span className="mobile-meta-item">
                        <strong>ROLE:</strong> {project.role}
                      </span>
                    )}
                    {project.status && (
                      <span className="mobile-meta-item highlight">
                        <strong>STATUS:</strong> {project.status}
                      </span>
                    )}
                  </div>

                  <h3
                    className="mobile-card-title"
                    onClick={() => setCaseStudyModalProject(project)}
                  >
                    <span>{project.title}</span>
                    <span style={{ color: '#D8FF3E' }}>↗</span>
                  </h3>

                  <div
                    className="mobile-card-preview"
                    onClick={() => setCaseStudyModalProject(project)}
                  >
                    {project.mockup}
                  </div>

                  <p className="mobile-card-desc">{project.description}</p>

                  <div className="mobile-card-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="focused-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mobile-card-actions">
                    <button
                      type="button"
                      className="mobile-btn-explore"
                      onClick={() => setCaseStudyModalProject(project)}
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <span>↗</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Specification View */}
      <ProjectCaseStudyModal
        project={caseStudyModalProject}
        isOpen={Boolean(caseStudyModalProject)}
        onClose={() => setCaseStudyModalProject(null)}
        onNextProject={() => {
          if (!caseStudyModalProject) return
          const currentIndex = projectsData.findIndex((p) => p.id === caseStudyModalProject.id)
          const nextIndex = (currentIndex + 1) % projectsData.length
          setCaseStudyModalProject(projectsData[nextIndex])
        }}
      />
    </section>
  )
}
