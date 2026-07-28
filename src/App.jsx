import { useCallback, useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Checkout from './components/Checkout'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const openCheckout = () => {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  return (
    <CartProvider>
      <Navbar
        onCartClick={() => setCartOpen(true)}
        onNavClick={scrollTo}
      />
      <main>
        <Hero
          onShopNow={() => scrollTo('products')}
          onLearnMore={() => scrollTo('about')}
        />
        <About />
        <Products onBuyNow={openCheckout} />
        <Testimonials />
        <Contact />
      </main>
      <Footer onNavClick={scrollTo} />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={openCheckout}
      />
      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={() => setCheckoutOpen(false)}
      />
    </CartProvider>
  )
}

export default App
