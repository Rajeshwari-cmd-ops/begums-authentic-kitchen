import React, { useState, useEffect } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ShahiAghaaz from './components/ShahiAghaaz';
import Menu from './components/Menu';
import SundaySpecials from './components/SundaySpecials';
import WhyChooseUs from './components/WhyChooseUs';
import Catering from './components/Catering';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { formatPrice } from './utils/helpers';
import useScrollReveal from './utils/useScrollReveal';
import './App.css';

export default function App() {
  useScrollReveal();

  // Guarantee every refresh starts from the top (header / hero)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
      };
      window.addEventListener('beforeunload', handleBeforeUnload);

      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 50);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        clearTimeout(timer);
      };
    }
  }, []);

  // Local cart state with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('begums_cart_v2');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (err) {
      console.error('Failed to parse cart from localStorage:', err);
      return [];
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('begums_cart_v2', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err);
    }
  }, [cart]);

  // Derived cart numbers
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Toast feedback helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to your Dastarkhwan order`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Navigation helpers
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Checkout flow handlers
  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
    showToast('Your Royal order has been received! Preparing Dum handis.');
  };

  return (
    <div className="begums-app-wrapper">
      {/* Navigation */}
      <Navbar
        cartItemsCount={cartItemsCount}
        cartSubtotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections: 1 to 8 in specified order */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* 2. Our Heritage */}
        <About />

        {/* 2b. Shahi Aghaaz - The Royal Beginning */}
        <ShahiAghaaz
          onAddToCart={handleAddToCart}
          cart={cart}
        />

        {/* 3. Signature Menu */}
        <Menu
          products={PRODUCTS}
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenDetails={(p) => setSelectedProduct(p)}
        />

        {/* 4. Sunday Specials */}
        <SundaySpecials
          cart={cart}
          onAddToCart={handleAddToCart}
          onOpenDetails={(p) => setSelectedProduct(p)}
        />

        {/* 5. Why Choose Begum's */}
        <WhyChooseUs />

        {/* 6. Catering and Events */}
        <Catering />

        {/* 7. Customer Reviews */}
        <Reviews />

        {/* 8. Contact and Ordering */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobile Floating Sticky Cart Bar */}
      {cartItemsCount > 0 && !isCartOpen && !isCheckoutOpen && (
        <aside className="mobile-floating-cart-bar" aria-label="Quick cart view">
          <button
            type="button"
            className="mobile-cart-action-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="mobile-cart-left">
              <span className="mobile-cart-badge">{cartItemsCount}</span>
              <span className="mobile-cart-title">View Dastarkhwan</span>
            </div>
            <div className="mobile-cart-right">
              <span className="mobile-cart-sum">{formatPrice(cartSubtotal)}</span>
              <ShoppingBag size={17} />
            </div>
          </button>
        </aside>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          cartItem={cart.find((i) => i.id === selectedProduct.id)}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Demo Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        subtotal={cartSubtotal}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="royal-toast-pill" role="alert" aria-live="assertive">
          <div className="royal-toast-icon">
            <Check size={14} />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
