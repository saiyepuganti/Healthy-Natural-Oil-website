import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useCart } from '../context/CartContext'
import './Checkout.css'

export default function Checkout({ open, onClose, onSuccess }) {
  const { items, total, clear } = useCart()
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Guntur',
    pincode: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const orderItems = items.map((i) => ({
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      }))
      const { error: insertError } = await supabase.from('orders').insert({
        ...form,
        items: orderItems,
        total,
      })
      if (insertError) throw insertError
      setStatus('success')
      clear()
    } catch (err) {
      setStatus('idle')
      setError('Something went wrong placing your order. Please try again.')
    }
  }

  const close = () => {
    setStatus('idle')
    setError('')
    onClose()
  }

  if (!open) return null

  return (
    <div className="checkout-overlay" onClick={close}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        {status === 'success' ? (
          <div className="checkout-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>Order Placed!</h2>
            <p>Thank you, {form.customer_name || 'friend'}. We've received your order and will call you shortly to confirm delivery details.</p>
            <button className="btn btn-primary" onClick={onSuccess}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="checkout-header">
              <h2>Checkout</h2>
              <button className="cart-close" onClick={close} aria-label="Close checkout">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <form className="checkout-body" onSubmit={handleSubmit}>
              <div className="checkout-summary">
                <h3>Order Summary</h3>
                {items.map((i) => (
                  <div className="summary-row" key={i.id}>
                    <span>{i.name} × {i.quantity}</span>
                    <span>₹{i.price * i.quantity}</span>
                  </div>
                ))}
                <div className="summary-total">
                  <span>Total</span>
                  <strong>₹{total}</strong>
                </div>
              </div>

              <div className="checkout-form">
                <h3>Delivery Details</h3>
                <div className="form-grid">
                  <label className="field">
                    <span>Full Name *</span>
                    <input type="text" required value={form.customer_name} onChange={update('customer_name')} placeholder="Your name" />
                  </label>
                  <label className="field">
                    <span>Phone *</span>
                    <input type="tel" required value={form.phone} onChange={update('phone')} placeholder="98XXXXXXXX" />
                  </label>
                  <label className="field full">
                    <span>Email *</span>
                    <input type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" />
                  </label>
                  <label className="field full">
                    <span>Address *</span>
                    <textarea required value={form.address} onChange={update('address')} placeholder="House no, street, area" rows="2" />
                  </label>
                  <label className="field">
                    <span>City *</span>
                    <input type="text" required value={form.city} onChange={update('city')} placeholder="Guntur" />
                  </label>
                  <label className="field">
                    <span>Pincode *</span>
                    <input type="text" required value={form.pincode} onChange={update('pincode')} placeholder="522001" maxLength="6" />
                  </label>
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary place-order-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Placing Order…' : `Place Order · ₹${total}`}
                </button>
                <p className="form-note">Cash on delivery available. We'll call to confirm before dispatch.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
