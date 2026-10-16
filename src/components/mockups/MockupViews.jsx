export function WebExperiencesMockup() {
  return (
    <div className="mockup-canvas mockup-web-exp">
      {/* Mini Browser Bar */}
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="chrome-url">prashuk.studio/digital-experience</div>
        <div className="chrome-status">
          <span className="status-indicator"></span>
          <span>120 FPS</span>
        </div>
      </div>

      {/* Mini Website Content */}
      <div className="mini-site-body">
        <div className="mini-site-nav">
          <span className="mini-site-brand">NEXUS · 01</span>
          <div className="mini-site-links">
            <span>INDEX</span>
            <span>WORKS</span>
            <span>JOURNAL</span>
          </div>
          <span className="mini-site-cta">ENQUIRE ↗</span>
        </div>

        <div className="mini-site-hero">
          <div className="mini-site-left">
            <span className="mini-badge">FEATURED RELEASE</span>
            <h4 className="mini-site-title">ARCHITECTURAL DIGITAL EXPERIENCES</h4>
            <p className="mini-site-desc">
              High-conversion web platforms engineered with spatial typography,
              zero-latency page loads and micro-interactions.
            </p>
            <div className="mini-site-actions">
              <span className="mini-btn-accent">VIEW CASE STUDY</span>
              <span className="mini-btn-ghost">LIVE PREVIEW</span>
            </div>
          </div>

          <div className="mini-site-right">
            <div className="abstract-card">
              <div className="abstract-grid"></div>
              <div className="abstract-geometry">
                <div className="geo-circle"></div>
                <div className="geo-line"></div>
              </div>
              <div className="floating-metric">
                <span className="metric-accent">99.8%</span>
                <span className="metric-caption">Core Web Vitals</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-site-footer">
          <div className="mini-stat">
            <span className="mini-stat-num">0.24s</span>
            <span className="mini-stat-label">FIRST PAINT</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-num">+42%</span>
            <span className="mini-stat-label">CONVERSION</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-num">100/100</span>
            <span className="mini-stat-label">SEO RATING</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WebApplicationsMockup() {
  return (
    <div className="mockup-canvas mockup-app">
      {/* App Chrome */}
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="chrome-url">app.prashuk-systems.io/dashboard</div>
        <div className="chrome-status">
          <span className="status-indicator"></span>
          <span>SYNCED</span>
        </div>
      </div>

      <div className="mini-app-body">
        {/* App Mini Sidebar */}
        <div className="mini-app-sidebar">
          <div className="app-logo-badge">PS</div>
          <div className="app-nav-icon active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <div className="app-nav-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div className="app-nav-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        {/* App Main Area */}
        <div className="mini-app-main">
          {/* Header */}
          <div className="mini-app-header">
            <div>
              <span className="app-team-tag">ENTERPRISE CLUSTER · PROD</span>
              <h4 className="app-title">Operations &amp; SaaS Control Center</h4>
            </div>
            <div className="app-filter-pill">Filter: Last 30 Days ▼</div>
          </div>

          {/* Metric Cards Row */}
          <div className="app-metrics-row">
            <div className="app-metric-card">
              <span className="metric-tag">RECURRING REVENUE</span>
              <div className="metric-val-row">
                <span className="metric-val">$148,200</span>
                <span className="metric-change">+28.4%</span>
              </div>
            </div>

            <div className="app-metric-card">
              <span className="metric-tag">ACTIVE WORKSPACES</span>
              <div className="metric-val-row">
                <span className="metric-val">3,842</span>
                <span className="metric-change">+14.2%</span>
              </div>
            </div>

            <div className="app-metric-card">
              <span className="metric-tag">P99 LATENCY</span>
              <div className="metric-val-row">
                <span className="metric-val">12ms</span>
                <span className="metric-badge-ok">HEALTHY</span>
              </div>
            </div>
          </div>

          {/* Mini Chart Visualization */}
          <div className="app-chart-box">
            <div className="chart-header">
              <span>THROUGHPUT ANALYTICS</span>
              <span className="chart-live-dot">LIVE FEED</span>
            </div>
            <svg className="app-svg-chart" viewBox="0 0 400 70" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D8FF3E" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#D8FF3E" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q40,30 80,42 T160,25 T240,38 T320,15 T400,20 L400,70 L0,70 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,50 Q40,30 80,42 T160,25 T240,38 T320,15 T400,20"
                fill="none"
                stroke="#D8FF3E"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Mini Table Rows */}
          <div className="app-table-mini">
            <div className="app-table-row">
              <span className="row-id">#ORD-9021</span>
              <span className="row-client">Linear Enterprise Tier</span>
              <span className="row-val">$18,400</span>
              <span className="row-status status-success">COMPLETED</span>
            </div>
            <div className="app-table-row">
              <span className="row-id">#ORD-9022</span>
              <span className="row-client">Vercel Fleet Sync</span>
              <span className="row-val">$8,250</span>
              <span className="row-status status-success">COMPLETED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AISolutionsMockup() {
  return (
    <div className="mockup-canvas mockup-ai">
      {/* AI Chrome */}
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="chrome-url">agent.prashuk-ai.internal/workflow</div>
        <div className="chrome-status">
          <span className="status-indicator ai-indicator"></span>
          <span>MODEL: PRASHUK-v4.2</span>
        </div>
      </div>

      <div className="mini-ai-body">
        {/* Agent Info Header */}
        <div className="ai-agent-header">
          <div className="ai-avatar">✦</div>
          <div className="ai-agent-meta">
            <span className="ai-agent-name">Autonomous Workflow Agent</span>
            <span className="ai-agent-desc">Continuous Inference &amp; Pipeline Synthesis</span>
          </div>
          <div className="ai-mode-pill">REASONING ACTIVE</div>
        </div>

        {/* Conversation Stream */}
        <div className="ai-chat-thread">
          {/* User Prompt */}
          <div className="chat-bubble user-bubble">
            <span className="bubble-sender">USER PROMPT</span>
            <p>
              &quot;Analyze onboarding funnel drop-offs and generate an automated
              recovery workflow with API triggers.&quot;
            </p>
          </div>

          {/* Reasoning pill */}
          <div className="ai-thought-pill">
            <span className="thought-sparkle">✦</span>
            <span>Parsed 14,800 telemetry events across 3 user cohorts (0.18s)</span>
          </div>

          {/* Assistant Response */}
          <div className="chat-bubble ai-bubble">
            <span className="bubble-sender ai-sender">PRASHUK INTELLIGENCE AGENT</span>
            <p>
              Identified 22% abandonment at workspace configuration. I have synthesized
              a dynamic multi-channel recovery pipeline:
            </p>

            {/* Generated Node Sequence */}
            <div className="ai-nodes-sequence">
              <div className="ai-node">
                <span className="node-num">01</span>
                <span className="node-text">Detect Inactivity (&gt;4m)</span>
              </div>
              <span className="node-arrow">→</span>
              <div className="ai-node node-active">
                <span className="node-num">02</span>
                <span className="node-text">AI Intent Scoring</span>
              </div>
              <span className="node-arrow">→</span>
              <div className="ai-node">
                <span className="node-num">03</span>
                <span className="node-text">Auto-Trigger Setup</span>
              </div>
            </div>

            <div className="ai-bubble-actions">
              <span className="ai-action-btn">DEPLOY WORKFLOW ↗</span>
              <span className="ai-action-ghost">VIEW LATENCY METRICS</span>
            </div>
          </div>
        </div>

        {/* Prompt Input */}
        <div className="ai-input-bar">
          <span className="ai-input-placeholder">
            Ask assistant to modify workflow parameters or integrate API...
          </span>
          <span className="ai-send-icon">↗</span>
        </div>
      </div>
    </div>
  )
}

export function EcommerceMockup() {
  return (
    <div className="mockup-canvas mockup-ecom">
      {/* Store Chrome */}
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="chrome-url">store.monolith-edition.com/chrono-01</div>
        <div className="chrome-status">
          <span className="status-indicator"></span>
          <span>STRIPE SECURE</span>
        </div>
      </div>

      <div className="mini-ecom-body">
        {/* Store Nav */}
        <div className="ecom-nav">
          <span className="ecom-brand">MONOLITH / OBJECTS</span>
          <div className="ecom-nav-right">
            <span className="ecom-curr">USD ($)</span>
            <span className="ecom-bag">BAG (01)</span>
          </div>
        </div>

        {/* Product Stage */}
        <div className="ecom-product-stage">
          {/* Left Visual Card */}
          <div className="ecom-visual-col">
            <div className="ecom-product-art">
              <div className="art-silhouette">
                <div className="chrono-dial">
                  <div className="chrono-center"></div>
                  <div className="chrono-hand"></div>
                </div>
              </div>
              <div className="ecom-stock-badge">
                <span className="badge-bullet">●</span>
                <span>LIMITED STUDIO DROP (48/100)</span>
              </div>
            </div>
          </div>

          {/* Right Spec & Buy Col */}
          <div className="ecom-spec-col">
            <span className="ecom-edition-tag">SERIES 01 // BESPOKE HARDWARE</span>
            <h4 className="ecom-prod-title">CHRONO-SPEC TITANIUM</h4>
            <div className="ecom-price-row">
              <span className="ecom-price">$850.00</span>
              <span className="ecom-tax">INCL. GLOBAL TAX &amp; DUTIES</span>
            </div>

            <p className="ecom-prod-desc">
              Grade 5 titanium chassis, sapphire crystal display, custom real-time
              haptic feedback module. Assembled with micron-level tolerance.
            </p>

            {/* Selectors */}
            <div className="ecom-variants">
              <span className="variant-label">FINISH:</span>
              <div className="variant-options">
                <span className="variant-pill active">ANODIZED BLACK</span>
                <span className="variant-pill">RAW TITANIUM</span>
              </div>
            </div>

            {/* Buy Button */}
            <div className="ecom-actions">
              <button type="button" className="btn-buy-primary">
                <span>ADD TO BAG</span>
                <span className="buy-arrow">↗</span>
              </button>
              <div className="ecom-guarantee">
                <span>✓ 30-Day Evaluation</span>
                <span>·</span>
                <span>✓ Express Air Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CloudAutomationMockup() {
  return (
    <div className="mockup-canvas mockup-cloud">
      {/* Cloud Chrome */}
      <div className="mockup-chrome">
        <div className="chrome-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="chrome-url">infra.prashuk-cloud.io/topology</div>
        <div className="chrome-status">
          <span className="status-indicator"></span>
          <span>99.995% UPTIME</span>
        </div>
      </div>

      <div className="mini-cloud-body">
        {/* Topology Banner */}
        <div className="cloud-header">
          <div>
            <span className="cloud-cluster-badge">PRODUCTION TOPOLOGY</span>
            <h4 className="cloud-title">Resilient Cloud &amp; Continuous Deployment</h4>
          </div>
          <div className="cloud-regions-pill">MULTI-REGION: US-EAST / EU-CENTRAL</div>
        </div>

        {/* Sequential Architecture Graph: Frontend → API → Backend → Database → Cloud */}
        <div className="architecture-pipeline">
          {/* Node 1 */}
          <div className="arch-node">
            <div className="node-icon-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span className="node-stage">01 FRONTEND</span>
            <span className="node-name">Edge SSR / Next</span>
            <span className="node-metric">4ms Latency</span>
          </div>

          <div className="arch-connector">
            <span className="connector-line"></span>
            <span className="connector-arrow">→</span>
          </div>

          {/* Node 2 */}
          <div className="arch-node">
            <div className="node-icon-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <span className="node-stage">02 API</span>
            <span className="node-name">Gateway &amp; Auth</span>
            <span className="node-metric">14.2k req/s</span>
          </div>

          <div className="arch-connector">
            <span className="connector-line"></span>
            <span className="connector-arrow">→</span>
          </div>

          {/* Node 3 */}
          <div className="arch-node node-highlight">
            <div className="node-icon-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <span className="node-stage">03 BACKEND</span>
            <span className="node-name">Go / Node Cluster</span>
            <span className="node-metric">16 Pods OK</span>
          </div>

          <div className="arch-connector">
            <span className="connector-line"></span>
            <span className="connector-arrow">→</span>
          </div>

          {/* Node 4 */}
          <div className="arch-node">
            <div className="node-icon-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <span className="node-stage">04 DATABASE</span>
            <span className="node-name">Postgres + Redis</span>
            <span className="node-metric">Replica Live</span>
          </div>

          <div className="arch-connector">
            <span className="connector-line"></span>
            <span className="connector-arrow">→</span>
          </div>

          {/* Node 5 */}
          <div className="arch-node">
            <div className="node-icon-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <span className="node-stage">05 CLOUD</span>
            <span className="node-name">Docker &amp; CI/CD</span>
            <span className="node-metric">Auto-Deploy</span>
          </div>
        </div>

        {/* Telemetry / Pipeline Status */}
        <div className="cloud-telemetry-row">
          <div className="telemetry-box">
            <span className="tele-label">CI/CD PIPELINE</span>
            <div className="tele-val-box">
              <span className="pipeline-bullet">✓</span>
              <span className="tele-val">Build #492 Passed (1m 14s)</span>
            </div>
          </div>

          <div className="telemetry-box">
            <span className="tele-label">CONTAINER RUNTIME</span>
            <div className="tele-val-box">
              <span className="pipeline-bullet">●</span>
              <span className="tele-val">Docker Swarm / Zero Drift</span>
            </div>
          </div>

          <div className="telemetry-box">
            <span className="tele-label">AUTOMATED BACKUPS</span>
            <div className="tele-val-box">
              <span className="pipeline-bullet">✓</span>
              <span className="tele-val">Point-in-Time Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
