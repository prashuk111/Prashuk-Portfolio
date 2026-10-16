import { motion, useMotionValue, useTransform } from 'motion/react'
import { LAYER_DEPTH } from '../../utils/motionConfig'

export function RaasraatriMockup({ offset }) {
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const srcX = offset?.x ?? fallbackX
  const srcY = offset?.y ?? fallbackY

  const bgX = useTransform(srcX, (v) => v * LAYER_DEPTH.BG)
  const bgY = useTransform(srcY, (v) => v * LAYER_DEPTH.BG)
  const decoX = useTransform(srcX, (v) => v * LAYER_DEPTH.DECORATIVE)
  const decoY = useTransform(srcY, (v) => v * LAYER_DEPTH.DECORATIVE)
  const baseX = useTransform(srcX, (v) => v * LAYER_DEPTH.BASE)
  const baseY = useTransform(srcY, (v) => v * LAYER_DEPTH.BASE)
  const fgX = useTransform(srcX, (v) => v * LAYER_DEPTH.ACCENT)
  const fgY = useTransform(srcY, (v) => v * LAYER_DEPTH.ACCENT)

  return (
    <div className="project-canvas mockup-raasraatri">
      {/* Top Chrome Bar */}
      <div className="project-chrome chrome-raas">
        <div className="chrome-left">
          <div className="chrome-dots">
            <span className="dot dot-gold"></span>
            <span className="dot dot-gold"></span>
            <span className="dot dot-gold"></span>
          </div>
          <span className="chrome-url url-gold">raasraatri.live/experience</span>
        </div>
        <div className="chrome-badges">
          <span className="status-gold-dot"></span>
          <span className="chrome-status-gold">2025 FESTIVAL LIVE PORTAL</span>
        </div>
      </div>

      {/* Abstract Event Web Interface with Dark Burgundy, Gold, Cream */}
      <div className="raas-editorial-stage">
        {/* Layer 1: Ambient Burgundy Glow Background */}
        <motion.div data-layer="bg" className="raas-burgundy-glow" style={{ x: bgX, y: bgY }}></motion.div>

        {/* Event Navigation Header */}
        <motion.div data-layer="base" className="raas-nav-bar" style={{ x: baseX, y: baseY }}>
          <div className="raas-brand-title">
            <span className="brand-primary">RAASRAATRI</span>
            <span className="brand-year">&apos;25</span>
          </div>
          <div className="raas-nav-links">
            <span className="nav-item">DEVOTION</span>
            <span className="nav-item">RHYTHM</span>
            <span className="nav-item">PASSES</span>
            <span className="nav-item">LINEUP</span>
          </div>
          <div className="raas-phase-pill">PHASE 2 RESERVATIONS</div>
        </motion.div>

        {/* Main Event Showcase Canvas */}
        <div className="raas-canvas-grid">
          {/* Layer 3: Left Editorial Narrative Pane */}
          <motion.div data-layer="base" className="raas-text-pane" style={{ x: baseX, y: baseY }}>
            <div className="raas-eyebrow-row">
              <span className="cultural-tag">FESTIVAL OF FOLK &amp; CHOREOGRAPHY</span>
              <span className="cultural-date">OCTOBER 18–20 · AHMEDABAD</span>
            </div>

            <h4 className="raas-headline">
              WHERE ANCIENT RHYTHM MEETS CONTEMPORARY CRAFT.
            </h4>

            <p className="raas-body-copy">
              A 3-night celebration uniting 5,000+ dancers. Built with synchronized
              tempo visualizers, spatial audio routing, and low-latency pass reservation.
            </p>

            {/* Countdown Unit */}
            <div className="raas-timer-unit">
              <div className="timer-block">
                <span className="t-val">18</span>
                <span className="t-lbl">DAYS</span>
              </div>
              <span className="t-sep">:</span>
              <div className="timer-block">
                <span className="t-val">06</span>
                <span className="t-lbl">HOURS</span>
              </div>
              <span className="t-sep">:</span>
              <div className="timer-block">
                <span className="t-val">42</span>
                <span className="t-lbl">MINS</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Composition (Layered Decorative Shapes & Foreground Ticket) */}
          <div className="raas-art-pane">
            {/* Layer 2: Cultural Decorative Mandala Motif */}
            <motion.div data-layer="deco" className="raas-mandala-frame" style={{ x: decoX, y: decoY }}>
              <div className="mandala-ring outer"></div>
              <div className="mandala-ring middle"></div>
              <div className="mandala-ring inner"></div>
              <div className="mandala-core">✦</div>
            </motion.div>

            {/* Layer 4: VIP Pass Card in Gold & Cream (Foreground Accent) */}
            <motion.div data-layer="fg" className="raas-gold-ticket" style={{ x: fgX, y: fgY }}>
              <div className="ticket-top">
                <span className="t-class">ALL-ACCESS ROYAL PASS</span>
                <span className="t-code">#RR-25-084</span>
              </div>
              <div className="ticket-mid">
                <span className="t-zone">STAGEFRONT PAVILION</span>
                <span className="t-status">CONFIRMED ACCESS</span>
              </div>
              <div className="ticket-bot">
                <span className="t-date">OCT 18–20 // 7:00 PM TILL DAWN</span>
                <span className="t-barcode">||| | |||| | ||| ||||</span>
              </div>
            </motion.div>

            {/* Layer 4: Audio Rhythm Visualizer Strip */}
            <motion.div data-layer="fg" className="raas-audio-meter" style={{ x: fgX, y: fgY }}>
              <span className="audio-lbl">FOLK ELECTRO BEAT // 138 BPM</span>
              <div className="meter-bars">
                <span className="m-bar mb1"></span>
                <span className="m-bar mb2"></span>
                <span className="m-bar mb3"></span>
                <span className="m-bar mb4"></span>
                <span className="m-bar mb5"></span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Specification Strip */}
        <motion.div className="raas-spec-footer" style={{ x: bgX, y: bgY }}>
          <div className="spec-item">
            <span className="spec-k">FESTIVAL CAPACITY</span>
            <span className="spec-v">5,000+ Attendees</span>
          </div>
          <div className="spec-item">
            <span className="spec-k">AUDIO ARCHITECTURE</span>
            <span className="spec-v">Spatial Web Audio Engine</span>
          </div>
          <div className="spec-item">
            <span className="spec-k">CORE STACK</span>
            <span className="spec-v">React · Vite · Modern CSS</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function NasconMockup({ offset }) {
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const srcX = offset?.x ?? fallbackX
  const srcY = offset?.y ?? fallbackY

  const bgX = useTransform(srcX, (v) => v * LAYER_DEPTH.BG)
  const bgY = useTransform(srcY, (v) => v * LAYER_DEPTH.BG)
  const decoX = useTransform(srcX, (v) => v * LAYER_DEPTH.DECORATIVE)
  const decoY = useTransform(srcY, (v) => v * LAYER_DEPTH.DECORATIVE)
  const baseX = useTransform(srcX, (v) => v * LAYER_DEPTH.BASE)
  const baseY = useTransform(srcY, (v) => v * LAYER_DEPTH.BASE)
  const fgX = useTransform(srcX, (v) => v * LAYER_DEPTH.ACCENT)
  const fgY = useTransform(srcY, (v) => v * LAYER_DEPTH.ACCENT)

  return (
    <div className="project-canvas mockup-nascon">
      {/* Top Chrome Bar */}
      <div className="project-chrome chrome-nascon">
        <div className="chrome-left">
          <div className="chrome-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <span className="chrome-url">nascontechnologies.com/solutions</span>
        </div>
        <div className="chrome-badges">
          <span className="status-live-dot"></span>
          <span className="chrome-status-text">B2B CATALOG &amp; API ACTIVE</span>
        </div>
      </div>

      {/* Industrial Corporate Website Interface */}
      <div className="nascon-stage">
        {/* Corporate Brand Navigation */}
        <motion.div data-layer="base" className="nascon-corporate-nav" style={{ x: baseX, y: baseY }}>
          <div className="nascon-brand-block">
            <span className="nascon-title-mark">NASCON</span>
            <span className="nascon-desc-mark">INDUSTRIAL AUTOMATION &amp; ROBOTICS</span>
          </div>
          <div className="nascon-meta-tags">
            <span className="meta-pill">ISO 9001:2015 REGISTERED</span>
            <span className="meta-pill">EST. 2012</span>
          </div>
        </motion.div>

        {/* Industrial Navigation Tabs: Products & Industries */}
        <motion.div data-layer="deco" className="nascon-nav-categories" style={{ x: decoX, y: decoY }}>
          <span className="nav-cat active">HEAVY CONVEYOR SYSTEMS</span>
          <span className="nav-cat">ROBOTIC WELDING CELLS</span>
          <span className="nav-cat">AUTOMATED PACKAGING</span>
          <span className="nav-cat">CNC MATERIAL HANDLING</span>
          <span className="nav-cat">INDUSTRIES SERVED</span>
        </motion.div>

        {/* Main Product Showcase & CAD Spec Stage */}
        <div className="nascon-product-grid">
          {/* Left CAD Schematic Blueprint View */}
          <div className="nascon-cad-panel">
            <div className="cad-header">
              <motion.span data-layer="fg" className="cad-model-badge" style={{ x: fgX, y: fgY }}>
                SYSTEM CAD // MODEL NTC-940
              </motion.span>
              <span className="cad-spec-dim">DIMENSIONS: 4,800 × 1,200 MM</span>
            </div>

            <div className="cad-viewport">
              {/* Layer 1: Background Blueprint Grid */}
              <motion.div data-layer="bg" className="cad-blueprint-grid" style={{ x: bgX, y: bgY }}></motion.div>

              {/* Layer 2: Technical Conveyor Assembly Graphic */}
              <motion.div data-layer="deco" className="cad-assembly" style={{ x: decoX, y: decoY }}>
                <div className="assembly-roller r1"></div>
                <div className="assembly-roller r2"></div>
                <div className="assembly-roller r3"></div>
                <div className="assembly-roller r4"></div>
                <div className="assembly-belt"></div>
                <div className="dimension-label dim-horizontal">4,800 MM SPAN</div>
                <div className="dimension-label dim-vertical">1,200 MM WIDTH</div>
              </motion.div>
            </div>

            <div className="cad-footer-specs">
              <span>MOTOR: SEW-EURODRIVE 4.0 KW</span>
              <span>PLC: SIEMENS S7-1500 &amp; SCADA</span>
            </div>
          </div>

          {/* Layer 3: Right Technical Specs & RFQ Direct API Inquiry Box */}
          <motion.div data-layer="base" className="nascon-info-panel" style={{ x: baseX, y: baseY }}>
            <div className="info-header">
              <span className="series-tag">SERIES NTC-940 // HEAVY DUTY</span>
              <h4 className="product-title">Automated Pallet Conveyor Line</h4>
              <p className="product-desc">
                Engineered for high-volume automated manufacturing. Features hardened steel
                rollers, programmable acceleration profiles, and real-time telemetry output.
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="product-specs-table">
              <div className="spec-row">
                <span className="k">PAYLOAD CAPACITY</span>
                <span className="v">2,500 KG / PALLET UNIT</span>
              </div>
              <div className="spec-row">
                <span className="k">ROLLER PITCH</span>
                <span className="v">120 MM HARDENED ALLOY</span>
              </div>
              <div className="spec-row">
                <span className="k">SYSTEM VOLTAGE</span>
                <span className="v">415V / 3-PHASE / 50 HZ</span>
              </div>
              <div className="spec-row">
                <span className="k">CONTROL PROTOCOL</span>
                <span className="v">PROFINET / MODBUS TCP</span>
              </div>
            </div>

            {/* Layer 4: Contact / RFQ API Form Trigger (Foreground Accent) */}
            <motion.div data-layer="fg" className="nascon-contact-widget" style={{ x: fgX, y: fgY }}>
              <div className="widget-header">
                <span className="widget-badge">DIRECT RFQ ROUTING API</span>
                <span className="widget-sla">ENGINEERING SLA &lt; 2 HOURS</span>
              </div>
              <button type="button" className="btn-rfq-submit">
                <span>REQUEST ENGINEERING SPEC SHEET &amp; QUOTE</span>
                <span className="arrow-sym">↗</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function EmailAssistantMockup({ offset }) {
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const srcX = offset?.x ?? fallbackX
  const srcY = offset?.y ?? fallbackY

  const bgX = useTransform(srcX, (v) => v * LAYER_DEPTH.BG)
  const bgY = useTransform(srcY, (v) => v * LAYER_DEPTH.BG)
  const decoX = useTransform(srcX, (v) => v * LAYER_DEPTH.DECORATIVE)
  const decoY = useTransform(srcY, (v) => v * LAYER_DEPTH.DECORATIVE)
  const baseX = useTransform(srcX, (v) => v * LAYER_DEPTH.BASE)
  const baseY = useTransform(srcY, (v) => v * LAYER_DEPTH.BASE)
  const fgX = useTransform(srcX, (v) => v * LAYER_DEPTH.ACCENT)
  const fgY = useTransform(srcY, (v) => v * LAYER_DEPTH.ACCENT)

  return (
    <div className="project-canvas mockup-email">
      {/* Top Chrome Bar */}
      <div className="project-chrome chrome-email">
        <div className="chrome-left">
          <div className="chrome-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <span className="chrome-url">mail.google.com // INJECTED CHROME EXTENSION v2.4</span>
        </div>
        <div className="chrome-badges">
          <span className="status-live-dot"></span>
          <span className="chrome-status-text">SPRING BOOT + DOCKER ACTIVE</span>
        </div>
      </div>

      {/* Product Interface: Gmail -> Chrome Extension -> Spring Boot -> AI -> Generated Draft */}
      <div className="email-product-stage">
        {/* Layer 1: Gmail App Bar */}
        <motion.div data-layer="bg" className="gmail-mock-bar" style={{ x: bgX, y: bgY }}>
          <div className="gmail-search-box">Search mail: &quot;Partnership Proposal&quot;</div>
          <div className="gmail-account-info">Prashuk Jain (Software Engineer)</div>
        </motion.div>

        {/* 3-Column Sequential Workflow */}
        <div className="email-workflow-pipeline">
          {/* Layer 1: Phase 1 Incoming Gmail Thread */}
          <motion.div data-layer="bg" className="pipeline-card gmail-thread-pane" style={{ x: bgX, y: bgY }}>
            <div className="pipeline-step-header">
              <span className="step-num">01</span>
              <span className="step-title">GMAIL THREAD CONTEXT</span>
            </div>

            <div className="gmail-message-header">
              <div className="sender-circle">SL</div>
              <div className="sender-meta">
                <span className="s-name">Sarah Lin (VP Operations)</span>
                <span className="s-subj">Urgent: Q3 Architecture Sync &amp; Staging Deploy</span>
              </div>
            </div>

            <div className="gmail-message-body">
              <p>
                &quot;Hi Prashuk, reviewing the technical architecture for the upcoming release.
                Can we confirm the Postgres replica failover test and lock the deployment
                window before Friday morning?&quot;
              </p>
            </div>

            <div className="gmail-timestamp-tag">Received Today at 10:24 AM · Action Required</div>
          </motion.div>

          {/* Layer 2: Phase 2 Injected Chrome Extension & Spring Boot AI Inference */}
          <motion.div data-layer="deco" className="pipeline-card extension-ai-pane" style={{ x: decoX, y: decoY }}>
            <div className="pipeline-step-header highlight">
              <span className="step-num accent">02</span>
              <span className="step-title">CHROME EXTENSION + AI INFERENCE</span>
            </div>

            {/* Layer 3: AI Status Card */}
            <motion.div data-layer="base" className="ai-status-card" style={{ x: baseX, y: baseY }}>
              <div className="ai-icon">✦</div>
              <div>
                <span className="ai-title">Thread Intent Detected</span>
                <span className="ai-backend">Spring Boot API · 180ms Latency</span>
              </div>
            </motion.div>

            <div className="extracted-criteria">
              <span className="criterion">✓ Postgres Failover: Tested &amp; Passed</span>
              <span className="criterion">✓ Target Window: Thursday 4 PM EST</span>
            </div>

            <div className="tone-control-row">
              <span className="tone-label">RESPONSE TONE:</span>
              <div className="tone-switches">
                <span className="tone-btn active">EXECUTIVE</span>
                <span className="tone-btn">TECHNICAL</span>
              </div>
            </div>
          </motion.div>

          {/* Layer 4: Phase 3 Generated Response Draft (Foreground) */}
          <motion.div data-layer="fg" className="pipeline-card generated-draft-pane" style={{ x: fgX, y: fgY }}>
            <div className="pipeline-step-header">
              <span className="step-num">03</span>
              <span className="step-title">GENERATED EMAIL COMPOSER</span>
            </div>

            <div className="draft-editor-box">
              <div className="draft-to">TO: Sarah Lin &lt;sarah@novascale.io&gt;</div>
              <div className="draft-content">
                <p>
                  &quot;Hi Sarah, Postgres replica failover testing passed with 0 packet loss.
                  Staging deployment is scheduled for Thursday at 4:00 PM EST, ahead of Friday&apos;s launch.&quot;
                </p>
              </div>
            </div>

            <div className="draft-actions-bar">
              <button type="button" className="btn-insert-composer">
                <span>INSERT INTO GMAIL COMPOSER</span>
                <span className="btn-arrow">↗</span>
              </button>
              <span className="container-badge">Dockerized Microservice · LLM Pipeline</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function AutomatedImageDesignMockup({ offset }) {
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const srcX = offset?.x ?? fallbackX
  const srcY = offset?.y ?? fallbackY

  const bgX = useTransform(srcX, (v) => v * LAYER_DEPTH.BG)
  const bgY = useTransform(srcY, (v) => v * LAYER_DEPTH.BG)
  const decoX = useTransform(srcX, (v) => v * LAYER_DEPTH.DECORATIVE)
  const decoY = useTransform(srcY, (v) => v * LAYER_DEPTH.DECORATIVE)
  const baseX = useTransform(srcX, (v) => v * LAYER_DEPTH.BASE)
  const baseY = useTransform(srcY, (v) => v * LAYER_DEPTH.BASE)
  const fgX = useTransform(srcX, (v) => v * LAYER_DEPTH.ACCENT)
  const fgY = useTransform(srcY, (v) => v * LAYER_DEPTH.ACCENT)

  return (
    <div className="project-canvas mockup-automated-image">
      {/* Top Chrome Bar */}
      <div className="project-chrome chrome-image">
        <div className="chrome-left">
          <div className="chrome-dots">
            <span className="dot dot-amber"></span>
            <span className="dot dot-amber"></span>
            <span className="dot dot-amber"></span>
          </div>
          <span className="chrome-url">canvas.prashuk.dev // AUTOMATED IMAGE DESIGN</span>
        </div>
        <div className="chrome-badges">
          <span className="status-dev-dot"></span>
          <span className="chrome-status-text">CURRENTLY IN DEVELOPMENT</span>
        </div>
      </div>

      {/* Development Interface */}
      <div className="image-dev-stage">
        {/* Layer 1: App Header */}
        <motion.div data-layer="bg" className="image-dev-header" style={{ x: bgX, y: bgY }}>
          <div className="dev-header-left">
            <span className="dev-brand-title">AUTOMATED IMAGE DESIGN</span>
            <span className="dev-status-tag">SYSTEM IN PROGRESS</span>
          </div>
          <div className="dev-header-right">
            <span>REACT + SPRING BOOT PIPELINE</span>
          </div>
        </motion.div>

        {/* 2-Column Workspace */}
        <div className="image-dev-workspace">
          {/* Left: Canvas Composition Parameters */}
          <motion.div data-layer="base" className="image-layers-pane" style={{ x: baseX, y: baseY }}>
            <div className="pane-header">
              <span className="pane-tag">COMPOSITION ENGINE</span>
              <span className="pane-badge">IN ACTIVE BUILD</span>
            </div>

            <div className="dev-layers-list">
              <div className="dev-layer-item active">
                <span className="layer-bullet">✦</span>
                <span className="layer-name">Dynamic Visual Layout Rules</span>
              </div>
              <div className="dev-layer-item">
                <span className="layer-bullet">✦</span>
                <span className="layer-name">Algorithmic Grid Alignment</span>
              </div>
              <div className="dev-layer-item">
                <span className="layer-bullet">✦</span>
                <span className="layer-name">Asset Generation Pipeline</span>
              </div>
              <div className="dev-layer-item">
                <span className="layer-bullet">✦</span>
                <span className="layer-name">Spring Boot Export Service</span>
              </div>
            </div>

            <div className="dev-pipeline-note">
              <span>ACTIVE DEVELOPMENT: Building programmatic design automation and backend rendering workflows.</span>
            </div>
          </motion.div>

          {/* Right: Visual Canvas Viewport */}
          <motion.div data-layer="fg" className="image-canvas-viewport" style={{ x: fgX, y: fgY }}>
            <div className="canvas-grid-overlay">
              <div className="canvas-crosshair top-l">+</div>
              <div className="canvas-crosshair top-r">+</div>
              <div className="canvas-crosshair bot-l">+</div>
              <div className="canvas-crosshair bot-r">+</div>

              <div className="canvas-composition-preview">
                <motion.div data-layer="deco" className="comp-abstract-box" style={{ x: decoX, y: decoY }}>
                  <div className="comp-circle"></div>
                  <div className="comp-text-mock">
                    <span className="comp-line l1"></span>
                    <span className="comp-line l2"></span>
                  </div>
                </motion.div>
                <div className="comp-status-stamp">
                  <span>CURRENTLY IN DEVELOPMENT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function VibeForgeAIMockup({ offset }) {
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const srcX = offset?.x ?? fallbackX
  const srcY = offset?.y ?? fallbackY

  const bgX = useTransform(srcX, (v) => v * LAYER_DEPTH.BG)
  const bgY = useTransform(srcY, (v) => v * LAYER_DEPTH.BG)
  const decoX = useTransform(srcX, (v) => v * LAYER_DEPTH.DECORATIVE)
  const decoY = useTransform(srcY, (v) => v * LAYER_DEPTH.DECORATIVE)
  const baseX = useTransform(srcX, (v) => v * LAYER_DEPTH.BASE)
  const baseY = useTransform(srcY, (v) => v * LAYER_DEPTH.BASE)
  const fgX = useTransform(srcX, (v) => v * LAYER_DEPTH.ACCENT)
  const fgY = useTransform(srcY, (v) => v * LAYER_DEPTH.ACCENT)

  return (
    <div className="project-canvas mockup-vibeforge">
      {/* Top Chrome Bar */}
      <div className="project-chrome chrome-vibeforge">
        <div className="chrome-left">
          <div className="chrome-dots">
            <span className="dot dot-cyan"></span>
            <span className="dot dot-cyan"></span>
            <span className="dot dot-cyan"></span>
          </div>
          <span className="chrome-url url-cyan">vibeforge.ai/studio // AI WEBSITE GENERATOR &amp; SAAS PLATFORM</span>
        </div>
        <div className="chrome-badges">
          <span className="status-ai-dot"></span>
          <span className="chrome-status-cyan">AI ENGINE v3.2 ACTIVE</span>
        </div>
      </div>

      {/* SaaS Studio Interface */}
      <div className="vibeforge-stage">
        {/* Layer 1: Ambient Cyber Glow Background */}
        <motion.div data-layer="bg" className="vibeforge-ambient-glow" style={{ x: bgX, y: bgY }}></motion.div>

        {/* Studio Top Control Navigation */}
        <motion.div data-layer="base" className="vibeforge-nav-bar" style={{ x: baseX, y: baseY }}>
          <div className="vibeforge-brand">
            <span className="vf-logo-spark">✦</span>
            <span className="vf-brand-name">VIBEFORGE<span className="vf-brand-ai">.AI</span></span>
            <span className="vf-tag-dev">SAAS PLATFORM</span>
          </div>
          <div className="vibeforge-prompt-indicator">
            <span className="prompt-pulse-dot"></span>
            <span className="prompt-text-preview">&ldquo;Build a high-conversion SaaS landing page with dark mode, interactive pricing &amp; auth&rdquo;</span>
          </div>
          <div className="vibeforge-model-pill">
            <span>MODEL: CLAUDE 3.5 + AST ENGINE</span>
          </div>
        </motion.div>

        {/* Main Split Studio Workspace: Left AI Orchestrator + Right Live Preview */}
        <div className="vibeforge-grid">
          {/* Left Column: AI Pipeline & Component Orchestrator */}
          <motion.div data-layer="base" className="vibeforge-pipeline-panel" style={{ x: baseX, y: baseY }}>
            <div className="vf-panel-header">
              <span className="vf-header-title">GENERATION PIPELINE</span>
              <span className="vf-header-status">IN PROGRESS</span>
            </div>

            {/* Pipeline Stage Steps */}
            <div className="vf-steps-list">
              <div className="vf-step-item active">
                <div className="step-badge done">✓</div>
                <div className="step-info">
                  <span className="step-name">01. Intent &amp; Style Tokenizer</span>
                  <span className="step-sub">Analyzed prompt: Modern Dark SaaS · Cyan &amp; Lime accents</span>
                </div>
              </div>

              <div className="vf-step-item active">
                <div className="step-badge done">✓</div>
                <div className="step-info">
                  <span className="step-name">02. AST Layout &amp; Wireframe Synthesizer</span>
                  <span className="step-sub">Generated HeroMesh, FeatureGrid, PricingEngine</span>
                </div>
              </div>

              <div className="vf-step-item current">
                <div className="step-badge processing">●</div>
                <div className="step-info">
                  <span className="step-name">03. Code &amp; Dynamic State Assembly</span>
                  <span className="step-sub">React 19 + Tailwind CSS + GSAP micro-interactions</span>
                </div>
              </div>

              <div className="vf-step-item">
                <div className="step-badge pending">04</div>
                <div className="step-info">
                  <span className="step-name">04. One-Click Cloud Deployment</span>
                  <span className="step-sub">Ready to deploy with custom domain &amp; SSL</span>
                </div>
              </div>
            </div>

            {/* Prompt Action Trigger */}
            <motion.div data-layer="fg" className="vf-prompt-trigger-box" style={{ x: fgX, y: fgY }}>
              <div className="vf-prompt-meta">
                <span>EST. SPEED: 1.2s</span>
                <span>FIDELITY: 99.4%</span>
              </div>
              <button type="button" className="vf-btn-generate">
                <span>✦ REGENERATE LIVE PREVIEW</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Live Interactive Generated Canvas Preview */}
          <div className="vibeforge-preview-col">
            {/* Viewport bar */}
            <motion.div data-layer="deco" className="vf-viewport-bar" style={{ x: decoX, y: decoY }}>
              <div className="viewport-modes">
                <span className="v-mode active">DESKTOP (1440px)</span>
                <span className="v-mode">TABLET</span>
                <span className="v-mode">MOBILE</span>
              </div>
              <div className="viewport-metrics">
                <span className="metric-pill">100/100 SPEED</span>
                <span className="metric-pill">RESPONSIVE</span>
              </div>
            </motion.div>

            {/* Live Generated Page Preview Frame */}
            <div className="vf-live-preview-frame">
              {/* Generated Landing Page Header */}
              <div className="gen-site-nav">
                <span className="gen-logo">✦ NovaScale AI</span>
                <div className="gen-links">
                  <span>Features</span>
                  <span>Pricing</span>
                  <span>Docs</span>
                </div>
                <span className="gen-cta-mini">Get Started →</span>
              </div>

              {/* Generated Hero Section */}
              <motion.div data-layer="fg" className="gen-site-hero" style={{ x: fgX, y: fgY }}>
                <div className="gen-badge">✦ NEXT-GEN AI WEBSITE GENERATION</div>
                <h4 className="gen-headline">
                  Turn Ideas Into Production <span className="gen-gradient-text">Websites in Seconds.</span>
                </h4>
                <p className="gen-sub">
                  Intelligent prompt orchestration, AST code generation, and instant cloud delivery for founders &amp; teams.
                </p>

                <div className="gen-btn-row">
                  <span className="gen-btn-primary">Start Building Free ↗</span>
                  <span className="gen-btn-secondary">View Demo</span>
                </div>
              </motion.div>

              {/* Generated Feature Cards */}
              <motion.div data-layer="base" className="gen-features-row" style={{ x: baseX, y: baseY }}>
                <div className="gen-feat-card">
                  <span className="feat-icon">⚡</span>
                  <span className="feat-title">Real-Time Synthesis</span>
                  <span className="feat-desc">Instant React components with zero bloat.</span>
                </div>
                <div className="gen-feat-card">
                  <span className="feat-icon">🎨</span>
                  <span className="feat-title">Theme Matrix</span>
                  <span className="feat-desc">Light/Dark mode &amp; dynamic color tokens.</span>
                </div>
                <div className="gen-feat-card">
                  <span className="feat-icon">🚀</span>
                  <span className="feat-title">Instant Deploy</span>
                  <span className="feat-desc">Edge CDN with auto SSL &amp; custom domains.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Specification Strip */}
        <motion.div className="vibeforge-spec-footer" style={{ x: bgX, y: bgY }}>
          <div className="spec-item">
            <span className="spec-k">ARCHITECTURE</span>
            <span className="spec-v">AI AST Generator · SaaS Pipeline</span>
          </div>
          <div className="spec-item">
            <span className="spec-k">BACKEND / ORCHESTRATION</span>
            <span className="spec-v">Spring Boot REST · LLM Agents</span>
          </div>
          <div className="spec-item">
            <span className="spec-k">FRONTEND &amp; UI</span>
            <span className="spec-v">React 19 · Vite · CSS Tokens · Tailwind</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
