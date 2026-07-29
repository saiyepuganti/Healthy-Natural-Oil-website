import './Hero.css'

export default function Hero({ onShopNow, onLearnMore }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content fade-up">
          <span className="hero-eyebrow">
            <span className="dot" /> Wood-pressed in Guntur since 2021
          </span>
          <h1 className="hero-title">
            Pure Natural Oils, <br />
            <span className="hero-accent">Pressed the Traditional Way</span>
          </h1>
          <p className="hero-text">
            Healthy Homes brings you cold-pressed cooking oils and nourishing hair
            &amp; skin oils — made without chemicals,
            preservatives, or shortcuts. Just honest oil, the way nature
            intended.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onShopNow}>
              Shop Oils
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn btn-outline" onClick={onLearnMore}>
              Our Story
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>10+</strong>
              <span>Years of Trust</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <strong>12</strong>
              <span>Natural Products</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <strong>5000+</strong>
              <span>Happy Families</span>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-up">
          <div className="hero-image-wrap">
            <img
              src="/images/hero.png"
              alt="Freshly pressed natural oil showcase"
              loading="eager"
            />
            <div className="hero-card">
              <div className="hero-card-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>100% Pure</strong>
                <span>No chemicals, no preservatives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
