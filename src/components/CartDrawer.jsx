import { useCart } from '../context/CartContext'
import './CartDrawer.css'

export default function CartDrawer({ open, onClose, onCheckout }) {
  const { items, total, increment, decrement, remove, count } = useCart()

  return (
    <>
      <div
        className={`cart-overlay ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`cart-drawer ${open ? 'open' : ''}`} aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Your Cart {count > 0 && <span className="cart-count-pill">{count}</span>}</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--neutral-300)" strokeWidth="1.5">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2 3h3l2.5 13h12l2-9H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Your cart is empty</p>
            <span>Add some natural oils to get started.</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <span className="cart-item-unit">{item.unit} · ₹{item.price}</span>
                    <div className="qty-control">
                      <button onClick={() => decrement(item.id)} aria-label="Decrease quantity">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(item.id)} aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-total">₹{item.price * item.quantity}</span>
                    <button className="cart-remove" onClick={() => remove(item.id)} aria-label="Remove item">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total-row">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>
              <div className="cart-payment-methods">
                <p className="cart-note">We accept UPI, Cards, and Cash on Delivery.</p>
                <div className="cart-payment-icons">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h18M7 15h.01M11 15h2M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2zM18 19V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <button className="btn btn-primary checkout-btn" onClick={onCheckout}>
                Proceed to Checkout
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
