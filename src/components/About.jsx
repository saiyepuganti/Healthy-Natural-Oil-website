import './About.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Wood-Pressed',
    text: 'Traditional wooden ghani extracts oil at low temperatures, preserving nutrients and natural aroma.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Chemical-Free',
    text: 'No preservatives, no additives, no refining. Just the pure oil pressed from farm-sourced seeds.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: 'Locally Sourced',
    text: 'Seeds and nuts sourced directly from farmers around Guntur and across Andhra Pradesh.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Family Trusted',
    text: 'Trusted by over 5000 families for daily cooking, hair care, and ayurvedic wellness.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-main">
              <img
                src="/images/about_ghani.png"
                alt="Traditional wooden ghani oil pressing process"
                loading="lazy"
              />
            </div>
            <div className="about-img-sub">
              <img
                src="/images/about_craft.png"
                alt="Craft natural oil bottles and seeds"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-content">
            <span className="about-eyebrow">Our Story</span>
            <h2 className="about-title">
              From Guntur's heart to your healthy home
            </h2>
            <p className="about-text">
              Healthy Homes Natural Oils began in 2015 with a simple belief:
              the oils our grandparents used were better for us than anything
              sold in a supermarket. We set up our first wooden ghani in Guntur
              and started pressing oil the slow, honest way.
            </p>
            <p className="about-text">
              A decade later, we still press in small batches, source directly
              from local farmers, and never touch a chemical. Every bottle is a
              promise of purity — for your cooking, your hair, your skin, and
              your family's health.
            </p>
            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f.title}>
                  <div className="about-feature-icon">{f.icon}</div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
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
