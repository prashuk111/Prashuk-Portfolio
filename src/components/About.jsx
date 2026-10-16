import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const statementWords = [
  { text: 'I', shiftX: -30, shiftY: 15 },
  { text: 'BUILD', shiftX: 25, shiftY: -20 },
  { text: 'DIGITAL', shiftX: -40, shiftY: -10 },
  { text: 'EXPERIENCES', shiftX: 35, shiftY: 25 },
  { text: 'FROM', shiftX: -20, shiftY: -15 },
  { text: 'IDEA', shiftX: 30, shiftY: 10 },
  { text: 'TO', shiftX: -15, shiftY: 20 },
  { text: 'DEPLOYMENT.', shiftX: 45, shiftY: -25, highlight: true },
]

const lifecycleSteps = [
  { step: '01', title: 'DISCOVER', desc: 'Understanding the idea, business problem, and core requirements.' },
  { step: '02', title: 'DESIGN', desc: 'Planning the experience, system architecture, and technical approach.' },
  { step: '03', title: 'FRONTEND', desc: 'Building responsive, interactive interfaces with React, GSAP, and Three.js.' },
  { step: '04', title: 'BACKEND & APIS', desc: 'Developing structured REST APIs and service logic using Java and Spring Boot.' },
  { step: '05', title: 'DATABASE & SQL', desc: 'Modeling relational schemas, query structures, and data integrity.' },
  { step: '06', title: 'AI & AUTOMATION', desc: 'Integrating context-aware AI capabilities and automated workflows.' },
  { step: '07', title: 'CONTAINER & DEPLOY', desc: 'Packaging Docker containers, versioning with Git, and deploying reliably.' },
]

const skillsGroups = [
  { group: 'LANGUAGES', skills: ['Java', 'JavaScript', 'SQL'] },
  { group: 'FRONTEND', skills: ['React.js', 'GSAP', 'Three.js'] },
  { group: 'BACKEND', skills: ['Spring Boot', 'REST APIs'] },
  { group: 'ENGINEERING', skills: ['Docker', 'Git', 'GitHub'] },
  { group: 'AI', skills: ['AI Integration', 'AI Orchestration'] },
  {
    group: 'CURRENTLY LEARNING',
    skills: ['Microservices', 'Kafka', 'Advanced Spring Boot', 'Distributed Systems'],
    isLearning: true,
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const statementRef = useRef(null)
  const bioRef = useRef(null)
  const timelineRef = useRef(null)
  const lineProgressRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ----------------------------------------------------
      // DESKTOP CHOREOGRAPHY (>= 768px)
      // ----------------------------------------------------
      mm.add('(min-width: 768px)', () => {
        // 1. Editorial Statement Assembly
        const statementTl = gsap.timeline({
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 1.2,
          },
        })

        const words = statementRef.current.querySelectorAll('.assembly-word')
        words.forEach((word) => {
          const sx = parseFloat(word.dataset.shiftx || '0')
          const sy = parseFloat(word.dataset.shifty || '0')

          statementTl.fromTo(
            word,
            {
              x: sx,
              y: sy,
              opacity: 0.2,
              filter: 'blur(3px)',
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'power2.out',
            },
            0
          )
        })

        // 2. Bio & Specialties reveal
        const bioElements = gsap.utils.toArray('.about-bio-reveal')
        if (bioElements.length && bioRef.current) {
          gsap.from(bioElements, {
            scrollTrigger: {
              trigger: bioRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.95,
            ease: 'power3.out',
          })
        }

        // 3. Lifecycle progressive line draw & illumination
        const nodes = timelineRef.current.querySelectorAll('.timeline-node')
        const lifecycleTl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 1.0,
          },
        })

        if (lineProgressRef.current) {
          lifecycleTl.fromTo(
            lineProgressRef.current,
            { scaleY: 0 },
            { scaleY: 1, ease: 'none', transformOrigin: 'top center' },
            0
          )
        }

        nodes.forEach((node, i) => {
          const circle = node.querySelector('.node-circle')
          const details = node.querySelector('.node-details')

          lifecycleTl.fromTo(
            circle,
            { borderColor: '#262626', background: '#111111', color: '#666666' },
            { borderColor: '#D8FF3E', background: '#181e10', color: '#D8FF3E', ease: 'power1.out', duration: 0.15 },
            (i / (nodes.length - 1)) * 0.9
          )

          lifecycleTl.fromTo(
            details,
            { opacity: 0.35, x: 10 },
            { opacity: 1, x: 0, ease: 'power1.out', duration: 0.2 },
            (i / (nodes.length - 1)) * 0.9
          )
        })
      })

      // ----------------------------------------------------
      // MOBILE RESPONSIVE CHOREOGRAPHY (< 768px)
      // Preserves: Word assembly with proportional shifts, blur resolution,
      // and progressive vertical lifecycle drawing
      // ----------------------------------------------------
      mm.add('(max-width: 767px)', () => {
        // 1. Mobile Editorial Statement Assembly with calibrated displacement
        const statementTl = gsap.timeline({
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 82%',
            end: 'top 45%',
            scrub: 0.7,
          },
        })

        const words = statementRef.current.querySelectorAll('.assembly-word')
        words.forEach((word) => {
          const sx = parseFloat(word.dataset.shiftx || '0') * 0.35
          const sy = parseFloat(word.dataset.shifty || '0') * 0.35

          statementTl.fromTo(
            word,
            {
              x: sx,
              y: sy,
              opacity: 0.25,
              filter: 'blur(2px)',
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'power2.out',
            },
            0
          )
        })

        // 2. Bio & Specialties staggered reveal
        const mobileBioElements = gsap.utils.toArray('.about-bio-reveal')
        if (mobileBioElements.length && bioRef.current) {
          gsap.from(mobileBioElements, {
            scrollTrigger: {
              trigger: bioRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
          })
        }

        // 3. Mobile Lifecycle progressive line draw & illumination
        const nodes = timelineRef.current.querySelectorAll('.timeline-node')
        const lifecycleTl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        })

        if (lineProgressRef.current) {
          lifecycleTl.fromTo(
            lineProgressRef.current,
            { scaleY: 0 },
            { scaleY: 1, ease: 'none', transformOrigin: 'top center' },
            0
          )
        }

        nodes.forEach((node, i) => {
          const circle = node.querySelector('.node-circle')
          const details = node.querySelector('.node-details')

          lifecycleTl.fromTo(
            circle,
            { borderColor: '#262626', background: '#111111', color: '#666666' },
            { borderColor: '#D8FF3E', background: '#181e10', color: '#D8FF3E', ease: 'power1.out', duration: 0.15 },
            (i / (nodes.length - 1)) * 0.9
          )

          lifecycleTl.fromTo(
            details,
            { opacity: 0.35, x: 6 },
            { opacity: 1, x: 0, ease: 'power1.out', duration: 0.2 },
            (i / (nodes.length - 1)) * 0.9
          )
        })
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about-editorial-section">
      <div className="section-anchor"></div>

      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <div className="about-eyebrow">
            <span className="eyebrow-accent-bullet">●</span>
            <span>ABOUT // ENGINEERING PHILOSOPHY</span>
          </div>

          {/* Monumental Editorial Assembly Statement */}
          <div ref={statementRef} className="about-statement-assembly" aria-label="I BUILD DIGITAL EXPERIENCES FROM IDEA TO DEPLOYMENT.">
            {statementWords.map((item, idx) => (
              <span
                key={idx}
                className={`assembly-word ${item.highlight ? 'word-highlight' : ''}`}
                data-shiftx={item.shiftX}
                data-shifty={item.shiftY}
              >
                {item.text}
              </span>
            ))}
          </div>

          <h3 className="about-sub-headline">
            Bridging clean software engineering with{' '}
            <span className="about-highlight">interactive digital craft.</span>
          </h3>
        </div>

        {/* Editorial Two-Column Narrative */}
        <div className="about-editorial-grid">
          {/* Left Column: Personal Statement & Credentials */}
          <div ref={bioRef} className="about-bio-column">
            <div className="bio-name-tag about-bio-reveal">
              <span className="bio-name">PRASHUK JAIN</span>

            </div>

            {/* Honest Experience & Education Badge */}
            <div className="about-experience-badge about-bio-reveal">
              <div className="exp-badge-top">
                <span className="exp-badge-role">SOFTWARE ENGINEER</span>
                <span className="exp-badge-dot">●</span>
                <span className="exp-badge-tenure">3 MONTHS EXPERIENCE</span>
              </div>
              <div className="exp-badge-sub">B.Tech Graduate · Class of 2026</div>
            </div>

            <p className="bio-lead-text about-bio-reveal">
              I&apos;m a Software Developer focused on building modern web applications, interactive digital experiences and AI-powered systems. I work primarily with Java, Spring Boot and React while expanding into microservices, Kafka, AI integration and orchestration.
            </p>

            <p className="bio-secondary-text about-bio-reveal">
              I also enjoy building highly interactive web experiences using GSAP and Three.js. I&apos;ve built projects ranging from creative event platforms and industrial websites to AI-powered productivity tools, and I&apos;m continuously expanding my understanding of backend architecture, DSA and distributed systems.
            </p>

            {/* Organized Skills & Tech Matrix */}
            <div className="about-specialties-block about-bio-reveal">
              <span className="specialties-title">TECHNOLOGY &amp; PROFICIENCIES</span>
              <div className="skills-category-grid">
                {skillsGroups.map((grp) => (
                  <div key={grp.group} className={`skills-group-card ${grp.isLearning ? 'is-learning-group' : ''}`}>
                    <div className="skills-group-header">
                      <span className="skills-group-name">{grp.group}</span>
                      {grp.isLearning && <span className="skills-learning-pill">CURRENTLY EXPLORING</span>}
                    </div>
                    <div className="skills-chips-row">
                      {grp.skills.map((skill) => (
                        <span key={skill} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Progressive End-to-End Pipeline Visualization */}
          <div className="about-lifecycle-column">
            <div className="lifecycle-header">
              <span className="lifecycle-tag">END-TO-END PRODUCT LIFECYCLE</span>
              <span className="lifecycle-sub">FROM CONCEPT TO CONTAINER</span>
            </div>

            <div ref={timelineRef} className="lifecycle-timeline">
              {/* Continuous Spine Line Track */}
              <div className="timeline-spine-track">
                <div ref={lineProgressRef} className="timeline-spine-progress"></div>
              </div>

              {lifecycleSteps.map((item) => (
                <div key={item.step} className="timeline-node">
                  <div className="node-marker-col">
                    <div className="node-circle">
                      <span className="node-step">{item.step}</span>
                    </div>
                  </div>

                  <div className="node-details">
                    <h4 className="node-title">{item.title}</h4>
                    <p className="node-desc">{item.desc}</p>
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
