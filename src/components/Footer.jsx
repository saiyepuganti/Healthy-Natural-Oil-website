import './Footer.css'

export default function Footer({ onNavClick }) {
  const quickLinks = [
    { label: 'Shop All Oils', target: 'products' },
    { label: 'Our Story', target: 'about' },
    { label: 'Customer Reviews', target: 'testimonials' },
    { label: 'Contact Us', target: 'contact' },
  ]

  const policyLinks = [
    'Shipping Policy',
    'Return & Refund',
    'Privacy Policy',
    'Terms of Service',
    'FAQs'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Healthy Homes</strong>
                <span>Natural Oils</span>
              </div>
            </div>
            <p className="footer-desc">
              Wood-pressed cooking oils, pure hair &amp; skin care, and A2 desi ghee from the heart of Guntur. Authentic, chemical-free, and traditionally extracted.
            </p>
            <address className="footer-contact">
              <p>📍 12-4-56, Main Bazar, Guntur, AP, 522001</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ support@healthyhomesoils.com</p>
            </address>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.target}>
                  <button onClick={() => onNavClick(l.target)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="footer-col">
            <h3>Legal &amp; Support</h3>
            <ul>
              {policyLinks.map((label) => (
                <li key={label}>
                  <a href="#footer">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="footer-col">
            <h3>Stay Updated</h3>
            <p className="newsletter-text">Subscribe to get special offers, free giveaways, and traditional wellness tips.</p>
      
            <div className="social-links">
              <a href="#footer" aria-label="Facebook">
                 <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#footer" aria-label="Instagram">
                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#footer" aria-label="WhatsApp">
                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Healthy Homes Natural Oils. Local to Guntur, Andhra Pradesh.</span>
          <div className="payment-icons">
             <span className="pay-badge">UPI</span>
             <span className="pay-badge">Visa</span>
             <span className="pay-badge">MasterCard</span>
             <span className="pay-badge">COD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
