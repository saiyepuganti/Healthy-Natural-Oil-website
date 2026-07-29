import './Testimonials.css'

const testimonials = [
  {
    name: 'Lakshmi Prasad',
    location: 'Guntur',
    rating: 5,
    text: 'The cold-pressed coconut oil tastes exactly like the one my grandmother used. My family switched completely from store-bought oils after trying Healthy Homes.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Vijayawada',
    rating: 5,
    text: 'Ordered the Flaxseed oil and sesame oil. Quality is top-notch and delivery was quick. The flaxseed oil aroma is wonderful.',
  },
  {
    name: 'Anita Reddy',
    location: 'Guntur',
    rating: 5,
    text: 'I use their castor and amla oils for my hair regularly. Visible difference in texture and reduced hair fall. Highly recommend for natural care.',
  },
  {
    name: 'Suresh Babu',
    location: 'Mangalagiri',
    rating: 4,
    text: 'Honest products at fair prices. The groundnut oil makes dosas taste amazing. Wish they had bigger 1L bottles available.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <span className="about-eyebrow" style={{ display: 'block', textAlign: 'center' }}>Reviews</span>
        <h2 className="section-title">Trusted by families across the state</h2>
        <p className="section-subtitle">
          Real words from real customers who made the switch to natural oils.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill={i <= t.rating ? 'var(--accent-400)' : 'none'} stroke="var(--accent-400)" strokeWidth="1.5">
                    <path d="M12 2l3 6.5 7 .5-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9l7-.5L12 2z" strokeLinejoin="round" />
                  </svg>
                ))}
              </div>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
