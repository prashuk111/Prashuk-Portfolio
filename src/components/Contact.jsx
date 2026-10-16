import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const ctaRef = useRef(null)
  const channelsRef = useRef(null)
  const auraRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ----------------------------------------------------
      // DESKTOP CHOREOGRAPHY (>= 768px)
      // ----------------------------------------------------
      mm.add('(min-width: 768px)', () => {
        const finaleTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })

        // Ambient background aura expand
        if (auraRef.current) {
          finaleTl.fromTo(
            auraRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 0.14, scale: 1.2, duration: 1.2, ease: 'power2.out' },
            0
          )
        }

        // Eyebrow
        finaleTl.from(
          '.contact-eyebrow',
          { opacity: 0, y: 15, duration: 0.5, ease: 'power2.out' },
          0.1
        )

        // Monumental Headline lines scale and reveal
        finaleTl.from(
          '.contact-finale-line',
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.15,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.2
        )

        // Supporting statement
        finaleTl.from(
          '.contact-lead-statement',
          { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )

        // Primary CTA button
        finaleTl.from(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.92,
            y: 20,
            duration: 0.65,
            ease: 'back.out(1.4)',
          },
          '-=0.3'
        )

        // Communication channels grid
        finaleTl.from(
          '.channel-box',
          {
            opacity: 0,
            y: 25,
            stagger: 0.08,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.3'
        )
      })

      // ----------------------------------------------------
      // MOBILE RESPONSIVE CHOREOGRAPHY (< 768px)
      // Preserves: Cinematic entrance with calibrated mobile displacements
      // ----------------------------------------------------
      mm.add('(max-width: 767px)', () => {
        const finaleTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        })

        if (auraRef.current) {
          finaleTl.fromTo(
            auraRef.current,
            { opacity: 0, scale: 0.85 },
            { opacity: 0.12, scale: 1.1, duration: 1.0, ease: 'power2.out' },
            0
          )
        }

        finaleTl.from(
          '.contact-eyebrow',
          { opacity: 0, y: 10, duration: 0.45, ease: 'power2.out' },
          0.1
        )

        finaleTl.from(
          '.contact-finale-line',
          {
            opacity: 0,
            y: 28,
            scale: 0.96,
            stagger: 0.12,
            duration: 0.75,
            ease: 'power3.out',
          },
          0.15
        )

        finaleTl.from(
          '.contact-lead-statement',
          { opacity: 0, y: 14, duration: 0.5, ease: 'power2.out' },
          '-=0.35'
        )

        finaleTl.from(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.94,
            y: 14,
            duration: 0.55,
            ease: 'back.out(1.3)',
          },
          '-=0.25'
        )

        finaleTl.from(
          '.channel-box',
          {
            opacity: 0,
            y: 16,
            stagger: 0.06,
            duration: 0.45,
            ease: 'power2.out',
          },
          '-=0.25'
        )
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" ref={sectionRef} className="contact-editorial-section">
      <div className="section-anchor"></div>

      {/* Ambient glowing lime aura background */}
      <div ref={auraRef} className="contact-ambient-aura"></div>

      <div className="container contact-container">
        {/* Top Eyebrow */}
        <div className="contact-eyebrow">
          <span className="eyebrow-accent-bullet">●</span>
          <span>INITIATE COLLABORATION // DESTINATION</span>
        </div>

        {/* Monumental Headline */}
        <div ref={headlineRef} className="contact-headline-block">
          <h2 className="contact-monumental-title">
            <span className="title-row contact-finale-line">HAVE AN IDEA?</span>
            <span className="title-row highlight-lime contact-finale-line">LET&apos;S BUILD SOMETHING.</span>
          </h2>

          <p className="contact-lead-statement">
            If you have a website, software, automation or AI idea, let&apos;s turn it into a working product.
          </p>
        </div>

        {/* Primary CTA Button */}
        <div ref={ctaRef} className="contact-cta-wrapper">
          <a
            href="mailto:prashukjainn3@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Prashuk%20Jain"
            className="btn-contact-talk"
          >
            <span>Let&apos;s Build Something</span>
            <span className="contact-arrow">↗</span>
          </a>
          <span className="contact-direct-hint">Direct email response within 24 business hours</span>
        </div>

        {/* Connection Channels Grid */}
        <div ref={channelsRef} className="contact-channels-grid">
          <div className="channel-box">
            <span className="channel-label">DIRECT INBOX</span>
            <a href="mailto:prashukjainn3@gmail.com" className="channel-link">
              prashukjainn3@gmail.com
            </a>
          </div>

          <div className="channel-box">
            <span className="channel-label">DIRECT CALL / WHATSAPP</span>
            <div className="channel-contact-row">
              <a href="tel:+919109323622" className="channel-link channel-phone-link">
                +91 9109323622
              </a>

            </div>
          </div>

          <div className="channel-box">
            <span className="channel-label">PROFESSIONAL NETWORK</span>
            <a
              href="https://www.linkedin.com/in/prashukjain01"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-link"
            >
              LinkedIn ↗
            </a>
          </div>


          <div className="channel-box">
            <span className="channel-label">COLLABORATION</span>
            <span className="channel-text">Open for Projects &amp; Software Opportunities</span>
          </div>
        </div>

        {/* Bottom Editorial Footer */}
        <div className="editorial-footer-bar">
          <div className="footer-copyright">
            <div className="footer-brand-sign" aria-hidden="true">
              <svg className="footer-sign-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="90" height="90" rx="22" fill="#0d0f14" stroke="rgba(216, 255, 62, 0.4)" strokeWidth="3" />
                <path d="M30 22 V74" stroke="#d8ff3e" strokeWidth="7.5" strokeLinecap="round" />
                <path d="M30 24 H52 C64 24 71 31 71 40 C71 49 64 54 52 54 H30" stroke="#ffffff" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M52 42 V62 C52 72 44 78 34 78 C25 78 19 73 17 67" stroke="#d8ff3e" strokeWidth="7.5" strokeLinecap="round" />
                <circle cx="72" cy="70" r="4.5" fill="#d8ff3e" />
              </svg>
            </div>
            <span className="brand-micro">PRASHUK JAIN</span>
            <span className="copyright-sep">/</span>
            <span> Copyright Reserved © 2026</span>


          </div>

          <button type="button" className="btn-back-top" onClick={scrollToTop}>
            <span>BACK TO TOP</span>
            <span className="top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
