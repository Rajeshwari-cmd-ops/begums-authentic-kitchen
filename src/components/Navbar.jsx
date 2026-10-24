import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles, Phone } from 'lucide-react';
import { formatPrice } from '../utils/helpers';

export default function Navbar({
  cartItemsCount = 0,
  cartSubtotal = 0,
  onOpenCart
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartBouncing, setIsCartBouncing] = useState(false);

  const prevCountRef = useRef(cartItemsCount);
  const prevSubtotalRef = useRef(cartSubtotal);

  // Quick bounce animation when count or price updates
  useEffect(() => {
    if (prevCountRef.current !== cartItemsCount || prevSubtotalRef.current !== cartSubtotal) {
      setIsCartBouncing(true);
      prevCountRef.current = cartItemsCount;
      prevSubtotalRef.current = cartSubtotal;
      const timer = setTimeout(() => setIsCartBouncing(false), 420);
      return () => clearTimeout(timer);
    }
  }, [cartItemsCount, cartSubtotal]);

  // Track scroll position to shift from transparent to darker with subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Heritage', href: '#heritage' },
    { label: 'Shahi Aghaaz', href: '#shahi-aghaaz' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Sunday Specials', href: '#sunday-specials', isSpecial: true },
    { label: "Why Begum's", href: '#why-us' },
    { label: 'Catering', href: '#catering' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`begums-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          className="navbar-brand-link"
          onClick={(e) => handleLinkClick(e, '#hero')}
          aria-label="Begum's Authentic Hyderabadi Kitchen Home"
        >
          <img
            src="/images/begums-logo.png"
            alt="Begum's Authentic Hyderabadi Kitchen"
            className="navbar-logo-img"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links-row">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link-anchor ${link.isSpecial ? 'nav-link-special' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.isSpecial && <Sparkles size={13} className="special-sparkle-icon" />}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Cart Button with Pop Bounce, Pulsing Order Now Button, & Mobile Hamburger */}
        <div className="navbar-actions-group">
          {/* Cart Pill with Pop Bounce on Price/Count Update */}
          <button
            type="button"
            className={`navbar-cart-pill ${isCartBouncing ? 'cart-pill-pop' : ''}`}
            onClick={onOpenCart}
            aria-label={`Open Cart with ${cartItemsCount} items, total ${formatPrice(cartSubtotal)}`}
          >
            <div className="cart-icon-wrap">
              <ShoppingBag size={17} />
              {cartItemsCount > 0 && (
                <span className="cart-counter-bubble">{cartItemsCount}</span>
              )}
            </div>
            <span className="cart-amount-text">{formatPrice(cartSubtotal)}</span>
          </button>

          {/* Primary Gold Order Now Button with Subtle Glow Pulse & Hover Lift */}
          <button
            type="button"
            className="btn-gold nav-order-btn"
            onClick={(e) => handleLinkClick(e, '#menu')}
          >
            Order Now
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Smooth Drop-Down Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-nav-link ${link.isSpecial ? 'mobile-special' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.label}</span>
                {link.isSpecial && <Sparkles size={14} className="text-gold" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-bottom">
          <button
            type="button"
            className="btn-gold btn-block"
            onClick={(e) => handleLinkClick(e, '#menu')}
          >
            Order Now
          </button>
          <a
            href="tel:+919845012345"
            className="mobile-call-link"
          >
            <Phone size={14} /> +91 98450 12345 (Concierge)
          </a>
        </div>
      </div>
    </header>
  );
}
