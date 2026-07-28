import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

export default function Navbar({ onCartClick, onNavClick }) {
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Products', target: 'products' },
    { label: 'Reviews', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ]

  const handleNav = (target) => {
    setMenuOpen(false)
    onNavClick(target)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button className="navbar-brand" onClick={() => handleNav('hero')}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">Healthy Homes</span>
            <span className="brand-tag">Natural Oils · Guntur</span>
          </span>
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <button key={l.target} className="nav-link" onClick={() => handleNav(l.target)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2 3h3l2.5 13h12l2-9H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
