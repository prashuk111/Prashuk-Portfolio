import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="notfound-screen">
          <div className="notfound-ambient-glow" aria-hidden="true"></div>
          <div className="container notfound-container">
            <div className="notfound-badge">
              <span className="eyebrow-accent-bullet">●</span>
              <span className="notfound-brand-name">PRASHUK JAIN</span>
            </div>

            <div className="notfound-eyebrow" style={{ color: '#ff5555' }}>
              <span>SYSTEM EXCEPTION RECOVERED</span>
            </div>

            <h1 className="notfound-title">
              <span>SOMETHING</span>
              <span style={{ color: '#ff5555' }}> WENT WRONG.</span>
            </h1>

            <p className="notfound-desc">
              A runtime anomaly was safely caught. You can reload the portfolio or return to the main view.
            </p>

            {this.state.error && (
              <pre className="error-trace-box">
                {this.state.error.toString()}
              </pre>
            )}

            <div className="notfound-actions">
              <button type="button" onClick={this.handleReload} className="btn-primary notfound-btn">
                <span>RELOAD PORTFOLIO</span>
                <span>↻</span>
              </button>
              <a href="mailto:prashukjainn3@gmail.com" className="btn-secondary notfound-btn">
                <span>REPORT ISSUE</span>
                <span>↗</span>
              </a>
            </div>

            <div className="notfound-specs">
              <span>DIRECT SUPPORT: </span>
              <a href="tel:+919109323622" className="notfound-phone">+91 9109323622</a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
