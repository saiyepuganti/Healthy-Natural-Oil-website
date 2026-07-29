import { useState } from 'react'
import './Footer.css'

export default function Footer({ onNavClick }) {
  const [activePolicy, setActivePolicy] = useState(null)
  const quickLinks = [
    { label: 'Shop All Oils', target: 'products' },
    { label: 'Our Story', target: 'about' },
    { label: 'Customer Reviews', target: 'testimonials' },
    { label: 'Contact Us', target: 'contact' },
  ]

  const policyLinks = [
    { label: 'Shipping Policy', content: 'We offer shipping across Andhra Pradesh and Telangana. Standard delivery takes 3-5 business days. Pure, wood-pressed oils are carefully packaged to prevent any leaks during transit.' },
    { label: 'Return & Refund', content: 'As we deal with food products, returns are generally not accepted unless the item is damaged or incorrect. If you receive a damaged product, please contact us within 24 hours of delivery for a replacement or refund.' },
    { label: 'Privacy Policy', content: 'Your privacy is important to us. We only collect essential information required to process your orders and provide a personalized shopping experience. We will never sell your personal data to third parties.' },
    { label: 'Terms of Service', content: 'By using our website, you agree to our terms. All products are subject to availability. We reserve the right to modify prices and product offerings at our discretion.' },
    { label: 'FAQs', content: 'Q: What does "wood-pressed" mean?\nA: Wood-pressing is a traditional extraction method using a wooden mortar and pestle at low temperatures, naturally retaining all nutrients and flavors.\n\nQ: Are your oils refined?\nA: No, our oils are 100% pure, unrefined, and chemical-free, ensuring maximum health benefits.\n\nQ: Can I use these oils for skincare?\nA: Absolutely! Our pure coconut and almond oils are excellent for both cooking and natural body care.' }
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
              Wood-pressed cooking oils and pure hair &amp; skin care from the heart of Guntur. Authentic, chemical-free, and traditionally extracted.
            </p>
            <address className="footer-contact">
              <p>📍 Sanakkayala Factory Rd, Ganeshrao Peta, Kothapeta, Guntur, Andhra Pradesh 522001</p>
              <p>📞  090591 68211</p>
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
              {policyLinks.map((policy) => (
                <li key={policy.label}>
                  <button onClick={() => setActivePolicy(policy)} className="policy-link-btn">{policy.label}</button>
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

      {/* Policy Modal */}
      {activePolicy && (
        <div className="policy-modal-overlay" onClick={() => setActivePolicy(null)}>
          <div className="policy-modal-content" onClick={e => e.stopPropagation()}>
            <button className="policy-close-btn" onClick={() => setActivePolicy(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h2 className="policy-modal-title">{activePolicy.label}</h2>
            <div className="policy-text">
              {activePolicy.content.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
