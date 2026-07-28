import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const { error: insertError } = await supabase.from('contact_messages').insert(form)
      if (insertError) throw insertError
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('idle')
      setError('Could not send your message. Please try again or call us directly.')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="about-eyebrow">Get in Touch</span>
          <h2 className="contact-title">Have a question? We'd love to hear from you.</h2>
          <p className="contact-text">
            Whether you want to ask about a product, place a bulk order, or
            learn more about our process — reach out and we'll get back to you
            within a day.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <strong>Visit Us</strong>
                <span>Sanakkayala Factory Rd, Ganeshrao Peta, Kothapeta, Guntur, Andhra Pradesh 522001</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Call Us</strong>
                <span> 090591 68211 · Mon–Sat, 9am–7pm</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" strokeLinejoin="round" />
                  <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Email Us</strong>
                <span>hello@healthyhomes.in</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="contact-success">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Thank you! Your message has been sent. We'll be in touch soon.
            </div>
          )}
          <div className="form-grid">
            <label className="field">
              <span>Name *</span>
              <input type="text" required value={form.name} onChange={update('name')} placeholder="Your name" />
            </label>
            <label className="field">
              <span>Phone</span>
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="98XXXXXXXX" />
            </label>
            <label className="field full">
              <span>Email *</span>
              <input type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" />
            </label>
            <label className="field full">
              <span>Message *</span>
              <textarea required value={form.message} onChange={update('message')} placeholder="Tell us how we can help…" rows="4" />
            </label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn btn-primary send-btn" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
