import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const LINE1_ITEMS = ['JAVA', 'SPRING BOOT', 'REACT', 'BACKEND', 'APIs']
const LINE2_ITEMS = ['WEBSITES', 'WEB APPS', 'E-COMMERCE', 'AI']
const LINE3_ITEMS = ['RAASRAATRI', 'NASCON', 'VIBEFORGE-AI', 'EMAIL ASSISTANT']

// Safe utility to query elements inside a container and return an array
const getElements = (parent, selector) => {
  if (!parent) return []
  return gsap.utils.toArray(parent.querySelectorAll(selector))
}

export default function Hero() {
  const sectionRef = useRef(null)
  const bgGridRef = useRef(null)
  const glowRef = useRef(null)

  // Eyebrow & signal
  const eyebrowRef = useRef(null)
  const signalDotRef = useRef(null)

  // Headline lines (Entrance targets)
  const titleRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)

  // Interactive Magnetic & Reveal inner refs
  const line1InnerRef = useRef(null)
  const line2InnerRef = useRef(null)
  const line3InnerRef = useRef(null)

  const line1TextRef = useRef(null)
  const line2TextRef = useRef(null)
  const line3TextRef = useRef(null)

  const line1RevealRef = useRef(null)
  const line2RevealRef = useRef(null)
  const line3RevealRef = useRef(null)

  // Line 2 traveling signal beam refs
  const line2SignalRef = useRef(null)
  const line2BeamRef = useRef(null)

  // Custom Cursor
  const cursorRef = useRef(null)
  const cursorLabelRef = useRef(null)

  // Supporting & CTA
  const supportingRef = useRef(null)
  const descRef = useRef(null)
  const ctaGroupRef = useRef(null)
  const specBarRef = useRef(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Wrap everything in gsap.context for complete teardown on unmount
    const ctx = gsap.context(() => {
      const line1 = line1Ref.current
      const line2 = line2Ref.current
      const line3 = line3Ref.current
      const lineElements = [line1, line2, line3].filter(Boolean)
      const innerElements = [line1InnerRef.current, line2InnerRef.current, line3InnerRef.current]
      const textElements = [line1TextRef.current, line2TextRef.current, line3TextRef.current]
      const revealElements = [line1RevealRef.current, line2RevealRef.current, line3RevealRef.current]
      const titleEl = titleRef.current
      const cursor = cursorRef.current
      const cursorLabel = cursorLabelRef.current

      // =======================================================================
      // 1. SLOW & MAJESTIC ENTRANCE CHOREOGRAPHY
      // =======================================================================
      const entranceTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      let isInteractive = false

      if (prefersReduced) {
        const reducedTargets = [
          line1, line2, line3,
          eyebrowRef.current,
          supportingRef.current,
          descRef.current,
          ctaGroupRef.current,
          specBarRef.current,
        ].filter(Boolean)

        if (reducedTargets.length) {
          entranceTl.fromTo(
            reducedTargets,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
          )
        }
        isInteractive = true
      } else {
        const isMobile = window.innerWidth < 768
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

        const startX1 = isMobile ? -80 : isTablet ? -200 : -Math.min(window.innerWidth * 0.7, 750)
        const startX2 = isMobile ? 80 : isTablet ? 200 : Math.min(window.innerWidth * 0.7, 750)
        const startX3 = isMobile ? -80 : isTablet ? -200 : -Math.min(window.innerWidth * 0.8, 850)

        // Slow Background Grid & Ambient Glow
        if (bgGridRef.current) {
          entranceTl.fromTo(bgGridRef.current, { opacity: 0 }, { opacity: 1, duration: 1.8, ease: 'power2.out' }, 0)
        }
        if (glowRef.current) {
          entranceTl.fromTo(glowRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 2.2, ease: 'power2.out' }, 0)
          // Ambient continuous slow breathing glow
          gsap.to(glowRef.current, {
            scale: 1.12,
            opacity: 0.85,
            duration: 6.0,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: 2.2,
          })
        }

        // Slow, majestic headline line entrances
        if (line1) {
          entranceTl.fromTo(line1, { x: startX1, opacity: 0, scale: 0.94 }, { x: 0, opacity: 1, scale: 1, duration: 1.45, ease: 'back.out(0.4)' }, 0.15)
        }
        if (line2) {
          entranceTl.fromTo(line2, { x: startX2, opacity: 0, scale: 0.94 }, { x: 0, opacity: 1, scale: 1, duration: 1.55, ease: 'back.out(0.4)' }, 0.25)
        }
        if (line3) {
          entranceTl.fromTo(line3, { x: startX3, opacity: 0, scale: 0.92 }, { x: 0, opacity: 1, scale: 1, duration: 1.65, ease: 'back.out(0.4)' }, 0.35)
        }

        // Eyebrow, Supporting, Description, CTAs, Spec Bar
        if (eyebrowRef.current) {
          entranceTl.fromTo(eyebrowRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out' }, 1.1)
        }
        if (signalDotRef.current) {
          entranceTl.fromTo(signalDotRef.current, { scale: 0.6 }, { scale: 1.3, duration: 0.4, yoyo: true, repeat: 1, ease: 'power2.out' }, 1.3)
        }
        if (supportingRef.current) {
          entranceTl.fromTo(supportingRef.current, { opacity: 0, y: 16, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out' }, 1.25)
        }
        if (descRef.current) {
          entranceTl.fromTo(descRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.95, ease: 'power2.out' }, 1.4)
        }
        if (ctaGroupRef.current) {
          entranceTl.fromTo(ctaGroupRef.current, { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: 'back.out(1.15)' }, 1.55)
        }
        if (specBarRef.current) {
          entranceTl.fromTo(specBarRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }, 1.7)
        }

        entranceTl.eventCallback('onComplete', () => {
          isInteractive = true
        })

        // Allow interaction after 0.8s even if CTA is still smoothly fading in
        gsap.delayedCall(0.8, () => {
          isInteractive = true
        })
      }

      // =======================================================================
      // 2. CUSTOM CURSOR CONTROLLER (For Fine Pointers)
      // =======================================================================
      let quickCursorX = () => { }
      let quickCursorY = () => { }
      if (cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 })
        quickCursorX = gsap.quickTo(cursor, 'x', { duration: 0.28, ease: 'power2.out' })
        quickCursorY = gsap.quickTo(cursor, 'y', { duration: 0.28, ease: 'power2.out' })
      }

      const setCursorState = (state, label = '') => {
        if (!cursor) return
        cursor.className = `hero-custom-cursor ${state}`
        if (cursorLabel) cursorLabel.textContent = label
      }

      // =======================================================================
      // 3. SIGNAL LASER BEAM (LINE 2)
      // =======================================================================
      let beamTween = null
      const startBeam = () => {
        if (!line2BeamRef.current) return
        if (beamTween) beamTween.kill()
        beamTween = gsap.fromTo(
          line2BeamRef.current,
          { xPercent: -100 },
          { xPercent: 240, duration: 1.6, ease: 'power2.inOut', repeat: -1, repeatDelay: 0.25 }
        )
      }
      const stopBeam = () => {
        if (beamTween) {
          beamTween.kill()
          beamTween = null
        }
        if (line2BeamRef.current) gsap.set(line2BeamRef.current, { xPercent: -100 })
      }

      // =======================================================================
      // 4. REVERSIBLE LINE HOVER & TAP TIMELINES (SLOW & CINEMATIC)
      // =======================================================================
      const hoverTls = [0, 1, 2].map((idx) => {
        const tl = gsap.timeline({ paused: true })
        const textEl = textElements[idx]
        const otherInners = innerElements.filter((_, i) => i !== idx).filter(Boolean)
        const revEl = revealElements[idx]
        const tags = getElements(revEl, '.hero-reveal-tag')
        const bullets = getElements(revEl, '.hero-reveal-bullet')

        // Slow, elegant text expansion
        if (textEl) {
          const targetSpacing = idx === 0 ? '-0.5px' : idx === 1 ? '-1.2px' : '-1.5px'
          tl.to(
            textEl,
            { scale: 1.03, letterSpacing: targetSpacing, duration: 0.55, ease: 'power2.out' },
            0
          )
        }

        // Soft dimming of siblings
        if (otherInners.length) {
          tl.to(
            otherInners,
            { opacity: 0.32, duration: 0.5, ease: 'power2.out' },
            0
          )
        }

        // Slow stagger reveal of technical tags
        if (tags.length) {
          tl.fromTo(
            tags,
            { opacity: 0, y: 8, filter: 'blur(3px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.48, stagger: 0.05, ease: 'power2.out' },
            0.05
          )
        }

        if (bullets.length) {
          tl.fromTo(
            bullets,
            { opacity: 0 },
            { opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power2.out' },
            0.05
          )
        }

        if (idx === 1 && line2SignalRef.current) {
          tl.to(line2SignalRef.current, { opacity: 1, duration: 0.45, ease: 'power2.out' }, 0)
        }

        return tl
      })

      let activeIndex = null

      const activateLine = (idx) => {
        if (!isInteractive) return
        if (activeIndex === idx) return

        if (activeIndex !== null) {
          hoverTls[activeIndex].reverse()
          if (lineElements[activeIndex]) lineElements[activeIndex].classList.remove('is-active')
          if (activeIndex === 1) stopBeam()
        }

        activeIndex = idx
        if (lineElements[idx]) lineElements[idx].classList.add('is-active')
        hoverTls[idx].play()
        setCursorState('state-headline', 'EXPLORE')
        if (idx === 1) startBeam()
      }

      const deactivateLine = (idx) => {
        if (activeIndex !== idx) return
        if (lineElements[idx]) lineElements[idx].classList.remove('is-active')
        activeIndex = null
        hoverTls[idx].reverse()
        setCursorState('state-normal', '')
        if (idx === 1) stopBeam()
      }

      const resetAllHeadlines = () => {
        if (activeIndex !== null) {
          hoverTls[activeIndex].reverse()
          if (lineElements[activeIndex]) lineElements[activeIndex].classList.remove('is-active')
          if (activeIndex === 1) stopBeam()
          activeIndex = null
        }
        setCursorState('state-normal', '')
      }

      // =======================================================================
      // 5. UNIVERSAL INTERACTION LISTENERS (DESKTOP, TABLET & MOBILE)
      // =======================================================================
      const quickLineX = innerElements.map((el) => (el ? gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power2.out' }) : () => { }))
      const quickLineY = innerElements.map((el) => (el ? gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power2.out' }) : () => { }))
      const maxMoveX = 8
      const maxMoveY = 6

      // Section level pointer tracking
      const handleSectionMove = (e) => {
        if (e.pointerType === 'touch') return
        quickCursorX(e.clientX)
        quickCursorY(e.clientY)
      }
      const handleSectionEnter = (e) => {
        if (e && e.pointerType === 'touch') return
        if (cursor) gsap.to(cursor, { opacity: 1, duration: 0.35, ease: 'power2.out' })
      }
      const handleSectionLeave = (e) => {
        if (e && e.pointerType === 'touch') return
        if (cursor) gsap.to(cursor, { opacity: 0, duration: 0.35, ease: 'power2.out' })
        resetAllHeadlines()
      }

      sectionEl.addEventListener('pointermove', handleSectionMove)
      sectionEl.addEventListener('pointerenter', handleSectionEnter)
      sectionEl.addEventListener('pointerleave', handleSectionLeave)

      // Per-line universal listeners: supports mouse hover, trackpad, pointer, AND touch tap
      const lineCleanups = lineElements.map((lineEl, index) => {
        if (!lineEl) return () => { }

        // 1. Mouse/Fine Pointer Move (Parallax + Hover Trigger)
        const handleLineMove = (e) => {
          if (e.pointerType === 'touch') return
          if (!isInteractive) return
          if (activeIndex !== index) activateLine(index)

          const rect = lineEl.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const relX = (e.clientX - centerX) / (rect.width / 2)
          const relY = (e.clientY - centerY) / (rect.height / 2)
          const clampedX = Math.max(-1, Math.min(1, relX))
          const clampedY = Math.max(-1, Math.min(1, relY))
          quickLineX[index](clampedX * maxMoveX)
          quickLineY[index](clampedY * maxMoveY)
        }

        // 2. Mouse/Pointer Enter
        const handleLineEnter = (e) => {
          if (e.pointerType === 'touch') return
          activateLine(index)
        }

        // 3. Mouse/Pointer Leave
        const handleLineLeave = (e) => {
          if (e.pointerType === 'touch') return
          quickLineX[index](0)
          quickLineY[index](0)
          if (innerElements[index]) {
            gsap.to(innerElements[index], { x: 0, y: 0, duration: 0.5, ease: 'power2.out', overwrite: 'auto' })
          }
          deactivateLine(index)
        }

        // 4. Click / Tap Handler (Works for touch devices, tablets, and responsive mobile)
        const handleLineClick = (e) => {
          if (!isInteractive) return
          e.stopPropagation()
          if (activeIndex === index) {
            deactivateLine(index)
          } else {
            activateLine(index)
          }
        }

        lineEl.addEventListener('pointermove', handleLineMove)
        lineEl.addEventListener('pointerenter', handleLineEnter)
        lineEl.addEventListener('pointerleave', handleLineLeave)
        lineEl.addEventListener('click', handleLineClick)

        return () => {
          lineEl.removeEventListener('pointermove', handleLineMove)
          lineEl.removeEventListener('pointerenter', handleLineEnter)
          lineEl.removeEventListener('pointerleave', handleLineLeave)
          lineEl.removeEventListener('click', handleLineClick)
        }
      })

      // Outside click reset (taps outside headline reset active tags)
      const handleDocClick = (e) => {
        if (activeIndex !== null && titleEl && !titleEl.contains(e.target)) {
          resetAllHeadlines()
        }
      }
      document.addEventListener('click', handleDocClick)

      // CTA Buttons hover tracking
      const ctaLinks = getElements(sectionEl, '.hero-cta-group a')
      const handleCtaEnter = () => setCursorState('state-cta', 'OPEN ↗')
      const handleCtaLeave = () => setCursorState('state-normal', '')
      ctaLinks.forEach((link) => {
        link.addEventListener('pointerenter', handleCtaEnter)
        link.addEventListener('pointerleave', handleCtaLeave)
      })

      const handleWindowBlur = () => resetAllHeadlines()
      window.addEventListener('blur', handleWindowBlur)

      return () => {
        sectionEl.removeEventListener('pointermove', handleSectionMove)
        sectionEl.removeEventListener('pointerenter', handleSectionEnter)
        sectionEl.removeEventListener('pointerleave', handleSectionLeave)
        lineCleanups.forEach((cleanup) => cleanup())
        document.removeEventListener('click', handleDocClick)
        ctaLinks.forEach((link) => {
          link.removeEventListener('pointerenter', handleCtaEnter)
          link.removeEventListener('pointerleave', handleCtaLeave)
        })
        window.removeEventListener('blur', handleWindowBlur)
        stopBeam()
        hoverTls.forEach((tl) => tl.kill())
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      {/* Minimal Hero Custom Cursor */}
      <div ref={cursorRef} className="hero-custom-cursor state-normal" aria-hidden="true">
        <span ref={cursorLabelRef} className="hero-cursor-label"></span>
      </div>

      {/* Subtle technical background grid */}
      <div ref={bgGridRef} className="hero-bg-grid" aria-hidden="true"></div>

      {/* Ambient background glow */}
      <div ref={glowRef} className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Developer Eyebrow */}
        <div ref={eyebrowRef} className="hero-eyebrow">
          <span ref={signalDotRef} className="eyebrow-accent-bullet">●</span>
          <span className="eyebrow-text">
            PRASHUK JAIN
          </span>
        </div>

        {/* Title — Split Entrance from Opposite Sides & Post-Entrance Interactive */}
        <h1 ref={titleRef} className="hero-title studio-hero-title">
          {/* Line 1: I BUILD */}
          <div
            ref={line1Ref}
            className="hero-line hero-line-interactive hero-line-1"
            data-line="0"
          >
            <div ref={line1InnerRef} className="hero-line-inner">
              <span ref={line1TextRef} className="hero-line-text">
                I BUILD
              </span>
              <div ref={line1RevealRef} className="hero-reveal-layer hero-reveal-1" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                {LINE1_ITEMS.map((item, idx) => (
                  <span key={item} className="hero-reveal-tag-wrap" style={{ pointerEvents: 'none' }}>
                    {idx > 0 && <span className="hero-reveal-bullet" style={{ pointerEvents: 'none' }}>/</span>}
                    <span className="hero-reveal-tag" style={{ pointerEvents: 'none' }}>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Line 2: DIGITAL */}
          <div
            ref={line2Ref}
            className="hero-line hero-line-interactive hero-line-2"
            data-line="1"
          >
            <div ref={line2InnerRef} className="hero-line-inner">
              <span ref={line2TextRef} className="hero-line-text">
                DIGITAL
              </span>
              {/* Thin accent line / signal traveling through or underneath the word */}
              <div ref={line2SignalRef} className="hero-signal-track" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                <div ref={line2BeamRef} className="hero-signal-beam" style={{ pointerEvents: 'none' }}></div>
              </div>
              <div ref={line2RevealRef} className="hero-reveal-layer hero-reveal-2" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                {LINE2_ITEMS.map((item, idx) => (
                  <span key={item} className="hero-reveal-tag-wrap" style={{ pointerEvents: 'none' }}>
                    {idx > 0 && <span className="hero-reveal-bullet" style={{ pointerEvents: 'none' }}>/</span>}
                    <span className="hero-reveal-tag" style={{ pointerEvents: 'none' }}>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Line 3: EXPERIENCES. */}
          <div
            ref={line3Ref}
            className="hero-line hero-line-interactive hero-line-3 hero-accent-word"
            data-line="2"
          >
            <div ref={line3InnerRef} className="hero-line-inner">
              <span ref={line3TextRef} className="hero-line-text">
                EXPERIENCES.
              </span>
              <div ref={line3RevealRef} className="hero-reveal-layer hero-reveal-3" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                {LINE3_ITEMS.map((item, idx) => (
                  <span key={item} className="hero-reveal-tag-wrap" style={{ pointerEvents: 'none' }}>
                    {idx > 0 && <span className="hero-reveal-bullet" style={{ pointerEvents: 'none' }}>/</span>}
                    <span className="hero-reveal-tag" style={{ pointerEvents: 'none' }}>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </h1>

        {/* Supporting Line / Category Pill */}
        <div ref={supportingRef} className="hero-supporting-line">
          <span>Websites</span>
          <span className="dot-sep">·</span>
          <span>Web Apps</span>
          <span className="dot-sep">·</span>
          <span>AI</span>
          <span className="dot-sep">·</span>
          <span>Automation</span>
        </div>

        {/* Developer Description */}
        <p ref={descRef} className="hero-description">
          I build modern digital products, web applications and AI-powered experiences — from frontend to backend and deployment.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaGroupRef} className="hero-cta-group">
          <a href="#work" className="btn-primary">
            <span className="btn-label">VIEW WORK</span>
            <span className="cta-arrow">↗</span>
          </a>

          <a href="#contact" className="btn-secondary">
            <span className="btn-label">LET&apos;S BUILD</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>

        {/* Developer Spec Bar */}
        <div ref={specBarRef} className="hero-studio-bar">
          <div className="studio-spec-item">
            <span className="spec-label">ROLE</span>
            <span className="spec-value">Software Developer (B.Tech 2026)</span>
          </div>
          <div className="studio-spec-item">
            <span className="spec-label">CORE STACK</span>
            <span className="spec-value">Java · Spring Boot · React</span>
          </div>
          <div className="studio-spec-item">
            <span className="spec-label">FOCUS</span>
            <span className="spec-value">Interactive Web · AI &amp; Automation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
