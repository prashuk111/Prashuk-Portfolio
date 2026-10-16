import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Advanced GSAP + ScrollTrigger Scroll Storytelling Showcase
 *
 * Orchestrates pinned desktop storytelling across projects:
 * 01 — RAASRAATRI
 * 02 — NASCON TECHNOLOGIES
 * 03 — EMAIL ASSISTANT
 *
 * Includes:
 * - Pinning the project showcase stage
 * - Scrub-driven timeline (direct scroll binding, reversible)
 * - Coordinated slide transitions (visual scale & opacity, narrative translation & opacity)
 * - Multi-layer visual parallax per project (background, decorative/schematic, UI base, foreground accent)
 * - Responsive desktop pinning vs mobile vertical flow via gsap.matchMedia()
 * - Accessibility: prefers-reduced-motion fallback
 * - React StrictMode resilience via gsap.context()
 */
export function initProjectScroll({
  sectionRef,
  stageRef,
  narrativeSlideRefs,
  visualSlideRefs,
  indicatorDotRefs,
  progressLineRef,
}) {
  if (!sectionRef.current || !stageRef.current) return () => {}

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // 1. DESKTOP PINNED STORYTELLING (min-width: 992px and no reduced motion)
    mm.add(
      '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
      () => {
        const totalProjects = visualSlideRefs.current.length
        if (totalProjects < 2) return

        // Initial setup for slides
        visualSlideRefs.current.forEach((el, i) => {
          if (!el) return
          if (i === 0) {
            gsap.set(el, { opacity: 1, scale: 1, zIndex: 10, visibility: 'visible', pointerEvents: 'auto' })
          } else {
            gsap.set(el, { opacity: 0, scale: 0.92, zIndex: 1, visibility: 'hidden', pointerEvents: 'none' })
          }
        })

        narrativeSlideRefs.current.forEach((el, i) => {
          if (!el) return
          if (i === 0) {
            gsap.set(el, { opacity: 1, x: 0, zIndex: 10, visibility: 'visible', pointerEvents: 'auto' })
          } else {
            gsap.set(el, { opacity: 0, x: 40, zIndex: 1, visibility: 'hidden', pointerEvents: 'none' })
          }
        })

        if (indicatorDotRefs?.current) {
          indicatorDotRefs.current.forEach((dot, i) => {
            if (!dot) return
            gsap.set(dot, { opacity: i === 0 ? 1 : 0.35, scale: i === 0 ? 1.1 : 1 })
          })
        }

        if (progressLineRef?.current) {
          gsap.set(progressLineRef.current, { scaleX: 1 / totalProjects, transformOrigin: 'left center' })
        }

        // Master Timeline attached to ScrollTrigger with scrub
        // Scroll distance: 2400px gives a spacious, editorial feel for 3 projects
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: stageRef.current,
            start: 'top top',
            end: '+=2400',
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Helper to query layer elements in a visual slide
        const getLayers = (slideEl) => {
          if (!slideEl) return {}
          return {
            bg: slideEl.querySelector('[data-layer="bg"]'),
            deco: slideEl.querySelector('[data-layer="deco"]'),
            base: slideEl.querySelector('[data-layer="base"]'),
            fg: slideEl.querySelector('[data-layer="fg"]'),
          }
        }

        // ==========================================
        // PHASE 1: PROJECT 01 (RAASRAATRI) DEVELOP
        // 0% -> 25%: Layer parallax develops
        // ==========================================
        const p1Layers = getLayers(visualSlideRefs.current[0])
        if (p1Layers.bg) tl.to(p1Layers.bg, { y: 15, ease: 'none', duration: 1 }, 0)
        if (p1Layers.deco) tl.to(p1Layers.deco, { y: -20, rotate: 6, ease: 'none', duration: 1 }, 0)
        if (p1Layers.base) tl.to(p1Layers.base, { y: -8, ease: 'none', duration: 1 }, 0)
        if (p1Layers.fg) tl.to(p1Layers.fg, { y: -30, ease: 'none', duration: 1 }, 0)

        // ==========================================
        // TRANSITION 1: 01 -> 02 (NASCON TECHNOLOGIES)
        // 33% -> 50%
        // ==========================================
        const t1Start = 1.0
        const t1Duration = 0.8

        // P1 Visual Exit
        if (visualSlideRefs.current[0]) {
          tl.to(
            visualSlideRefs.current[0],
            {
              scale: 0.92,
              opacity: 0,
              duration: t1Duration,
              ease: 'power2.inOut',
              onComplete: () => {
                gsap.set(visualSlideRefs.current[0], { visibility: 'hidden', pointerEvents: 'none', zIndex: 1 })
              },
              onReverseComplete: () => {
                gsap.set(visualSlideRefs.current[0], { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 })
              },
            },
            t1Start
          )
        }

        // P1 Narrative Exit
        if (narrativeSlideRefs.current[0]) {
          tl.to(
            narrativeSlideRefs.current[0],
            {
              x: -40,
              opacity: 0,
              duration: t1Duration * 0.8,
              ease: 'power2.in',
              onComplete: () => {
                gsap.set(narrativeSlideRefs.current[0], { visibility: 'hidden', pointerEvents: 'none', zIndex: 1 })
              },
              onReverseComplete: () => {
                gsap.set(narrativeSlideRefs.current[0], { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 })
              },
            },
            t1Start
          )
        }

        // P2 Visual Entrance
        if (visualSlideRefs.current[1]) {
          tl.set(
            visualSlideRefs.current[1],
            { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 },
            t1Start + 0.1
          )
          tl.fromTo(
            visualSlideRefs.current[1],
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: t1Duration, ease: 'power2.inOut' },
            t1Start + 0.1
          )
        }

        // P2 Narrative Entrance
        if (narrativeSlideRefs.current[1]) {
          tl.set(
            narrativeSlideRefs.current[1],
            { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 },
            t1Start + 0.2
          )
          tl.fromTo(
            narrativeSlideRefs.current[1],
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: t1Duration * 0.8, ease: 'power2.out' },
            t1Start + 0.2
          )
        }

        // Update progress rail
        if (indicatorDotRefs?.current) {
          if (indicatorDotRefs.current[0]) {
            tl.to(indicatorDotRefs.current[0], { opacity: 0.35, scale: 1, duration: 0.4 }, t1Start + 0.2)
          }
          if (indicatorDotRefs.current[1]) {
            tl.to(indicatorDotRefs.current[1], { opacity: 1, scale: 1.1, duration: 0.4 }, t1Start + 0.2)
          }
        }
        if (progressLineRef?.current) {
          tl.to(progressLineRef.current, { scaleX: 2 / totalProjects, duration: t1Duration, ease: 'power1.inOut' }, t1Start)
        }

        // ==========================================
        // PHASE 2: PROJECT 02 (NASCON) DEVELOP
        // Subtle scroll parallax while Project 02 is active
        // ==========================================
        const p2Layers = getLayers(visualSlideRefs.current[1])
        const p2ActiveStart = t1Start + t1Duration
        const p2ActiveDur = 1.0

        if (p2Layers.bg) tl.to(p2Layers.bg, { y: 18, ease: 'none', duration: p2ActiveDur }, p2ActiveStart)
        if (p2Layers.deco) tl.to(p2Layers.deco, { x: 12, y: -12, ease: 'none', duration: p2ActiveDur }, p2ActiveStart)
        if (p2Layers.base) tl.to(p2Layers.base, { y: -10, ease: 'none', duration: p2ActiveDur }, p2ActiveStart)
        if (p2Layers.fg) tl.to(p2Layers.fg, { y: -24, ease: 'none', duration: p2ActiveDur }, p2ActiveStart)

        // ==========================================
        // TRANSITION 2: 02 -> 03 (EMAIL ASSISTANT)
        // 66% -> 80%
        // ==========================================
        const t2Start = p2ActiveStart + p2ActiveDur
        const t2Duration = 0.8

        // P2 Visual Exit
        if (visualSlideRefs.current[1]) {
          tl.to(
            visualSlideRefs.current[1],
            {
              scale: 0.92,
              opacity: 0,
              duration: t2Duration,
              ease: 'power2.inOut',
              onComplete: () => {
                gsap.set(visualSlideRefs.current[1], { visibility: 'hidden', pointerEvents: 'none', zIndex: 1 })
              },
              onReverseComplete: () => {
                gsap.set(visualSlideRefs.current[1], { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 })
              },
            },
            t2Start
          )
        }

        // P2 Narrative Exit
        if (narrativeSlideRefs.current[1]) {
          tl.to(
            narrativeSlideRefs.current[1],
            {
              x: -40,
              opacity: 0,
              duration: t2Duration * 0.8,
              ease: 'power2.in',
              onComplete: () => {
                gsap.set(narrativeSlideRefs.current[1], { visibility: 'hidden', pointerEvents: 'none', zIndex: 1 })
              },
              onReverseComplete: () => {
                gsap.set(narrativeSlideRefs.current[1], { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 })
              },
            },
            t2Start
          )
        }

        // P3 Visual Entrance
        if (visualSlideRefs.current[2]) {
          tl.set(
            visualSlideRefs.current[2],
            { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 },
            t2Start + 0.1
          )
          tl.fromTo(
            visualSlideRefs.current[2],
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: t2Duration, ease: 'power2.inOut' },
            t2Start + 0.1
          )
        }

        // P3 Narrative Entrance
        if (narrativeSlideRefs.current[2]) {
          tl.set(
            narrativeSlideRefs.current[2],
            { visibility: 'visible', pointerEvents: 'auto', zIndex: 10 },
            t2Start + 0.2
          )
          tl.fromTo(
            narrativeSlideRefs.current[2],
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: t2Duration * 0.8, ease: 'power2.out' },
            t2Start + 0.2
          )
        }

        // Update progress rail
        if (indicatorDotRefs?.current) {
          if (indicatorDotRefs.current[1]) {
            tl.to(indicatorDotRefs.current[1], { opacity: 0.35, scale: 1, duration: 0.4 }, t2Start + 0.2)
          }
          if (indicatorDotRefs.current[2]) {
            tl.to(indicatorDotRefs.current[2], { opacity: 1, scale: 1.1, duration: 0.4 }, t2Start + 0.2)
          }
        }
        if (progressLineRef?.current) {
          tl.to(progressLineRef.current, { scaleX: 1.0, duration: t2Duration, ease: 'power1.inOut' }, t2Start)
        }

        // ==========================================
        // PHASE 3: PROJECT 03 (EMAIL ASSISTANT) DEVELOP
        // 80% -> 100%: Subtle scroll parallax
        // ==========================================
        const p3Layers = getLayers(visualSlideRefs.current[2])
        const p3ActiveStart = t2Start + t2Duration
        const p3ActiveDur = 1.0

        if (p3Layers.bg) tl.to(p3Layers.bg, { y: 14, ease: 'none', duration: p3ActiveDur }, p3ActiveStart)
        if (p3Layers.deco) tl.to(p3Layers.deco, { y: -16, ease: 'none', duration: p3ActiveDur }, p3ActiveStart)
        if (p3Layers.base) tl.to(p3Layers.base, { y: -8, ease: 'none', duration: p3ActiveDur }, p3ActiveStart)
        if (p3Layers.fg) tl.to(p3Layers.fg, { y: -22, ease: 'none', duration: p3ActiveDur }, p3ActiveStart)
      }
    )

    // 2. MOBILE RESPONSIVE FLOW (max-width: 991px)
    // No sticky pinning to prevent mobile viewport traps.
    // Instead, smooth vertical card reveals.
    mm.add('(max-width: 991px)', () => {
      // Clean up desktop inline styles on mobile
      visualSlideRefs.current.forEach((el) => {
        if (!el) return
        gsap.set(el, { clearProps: 'all' })
      })
      narrativeSlideRefs.current.forEach((el) => {
        if (!el) return
        gsap.set(el, { clearProps: 'all' })
      })

      // Simple mobile entrance trigger per card
      const mobileCards = sectionRef.current.querySelectorAll('.mobile-project-card')
      mobileCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 35,
          duration: 0.7,
          ease: 'power2.out',
        })
      })
    })

    // 3. ACCESSIBILITY: REDUCED MOTION
    // Disables all scrub/pinning and reveals everything statically
    mm.add('(prefers-reduced-motion: reduce)', () => {
      visualSlideRefs.current.forEach((el) => {
        if (!el) return
        gsap.set(el, { clearProps: 'all', opacity: 1, visibility: 'visible', scale: 1 })
      })
      narrativeSlideRefs.current.forEach((el) => {
        if (!el) return
        gsap.set(el, { clearProps: 'all', opacity: 1, visibility: 'visible', x: 0 })
      })
    })
  }, sectionRef)

  // Return context revert for React Strict Mode safety
  return () => ctx.revert()
}
