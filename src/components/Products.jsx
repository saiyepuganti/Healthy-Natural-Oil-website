import { useMemo, useState } from 'react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'
import './Products.css'

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill={i <= Math.round(rating) ? 'var(--accent-400)' : 'none'} stroke="var(--accent-400)" strokeWidth="1.5">
          <path d="M12 2l3 6.5 7 .5-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9l7-.5L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </span>
  )
}

export default function Products({ onBuyNow }) {
  const [active, setActive] = useState('All')
  const [added, setAdded] = useState(null)
  const { add } = useCart()

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  const handleAdd = (product) => {
    add(product)
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1400)
  }

  const handleBuyNow = (product) => {
    add(product)
    if (onBuyNow) {
      onBuyNow(product)
    }
  }

  return (
    <section id="products" className="section products">
      <div className="container">
        <span className="about-eyebrow" style={{ display: 'block', textAlign: 'center' }}>Our Products</span>
        <h2 className="section-title">Explore our natural oils</h2>
        <p className="section-subtitle">
          Cold-pressed in small batches. Choose from cooking oils and hair &amp;
          skin oils — each one made without chemicals.
        </p>

        <div className="product-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filtered.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-image">
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.badge && (
                  <span className={`badge badge-${p.badge.toLowerCase()}`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="product-body">
                <span className="product-category">{p.category}</span>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>
                <div className="product-foot">
                  <div className="product-price">
                    <span className="price">₹{p.price}</span>
                    <span className="unit">/ {p.unit}</span>
                  </div>
                  <Stars rating={p.rating} />
                </div>
                <div className="product-actions">
                  <button
                    className={`btn btn-outline add-btn ${added === p.id ? 'added' : ''}`}
                    onClick={() => handleAdd(p)}
                  >
                    {added === p.id ? (
                      <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Added
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                        Cart
                      </>
                    )}
                  </button>
                  <button
                    className="btn btn-primary buy-btn"
                    onClick={() => handleBuyNow(p)}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 10V3L4 14h7v8l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Buy Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
