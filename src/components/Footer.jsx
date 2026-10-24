import React from 'react';
import { Crown, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function Footer() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/919845012345?text=Hello%20Begum's%20Kitchen,%20I%20would%20like%20to%20order";

  return (
    <footer className="begums-footer-wrap">
      <div className="container">
        {/* Subtle Gold Divider Line animates in on scroll */}
        <div className="footer-scroll-divider reveal" aria-hidden="true">
          <span className="footer-gold-line" />
        </div>

        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <img
                src="/images/begums-logo.png"
                alt="Begum's Authentic Hyderabadi Kitchen"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-desc">
              In the heart of Bangalore, preserving the timeless culinary heritage of the Nawabs.
              Heirloom recipes, slow-cooked Dum biryanis, and royal dastarkhwan feasts passed down through generations.
            </p>
            <div className="footer-founders-strip font-serif">
              <span>Curated by</span>
              <strong>{BRAND_INFO.founders}</strong>
            </div>

            {/* Social & Concierge Icons with Tiny Gold Glow on Hover */}
            <div className="footer-social-row" aria-label="Social links">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon social-icon-gold-glow"
                aria-label="WhatsApp Concierge"
                title="WhatsApp Concierge"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="tel:+919845012345"
                className="footer-social-icon social-icon-gold-glow"
                aria-label="Telephone Concierge"
                title="Telephone Concierge"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon social-icon-gold-glow"
                aria-label="Royal Instagram"
                title="Royal Instagram"
              >
                <Crown size={15} />
              </a>
            </div>

            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={15} className="footer-icon-gold" />
                <span>Central Bangalore Royal Kitchen Hub, Bangalore</span>
              </div>
              <div className="contact-item">
                <Clock size={15} className="footer-icon-gold" />
                <span>Wed – Sun: 11:30 AM – 10:30 PM (Grand Sunday Dispatch)</span>
              </div>
              <div className="contact-item">
                <Phone size={15} className="footer-icon-gold" />
                <span>Bangalore Concierge: +91 98450 12345</span>
              </div>
            </div>
          </div>

          {/* Shahi Menu Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading font-royal">Signature Menu</h4>
            <ul className="footer-links-list">
              <li><a href="#menu" onClick={scrollTo('#menu')}>Mutton Biryani (1kg Handi)</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Chicken Biryani (1kg Handi)</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Mutton Shami Kebab</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Mutton Pepper Chops</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Button Talaawa Gosh</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Mirchi Ka Salan</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Qubani Ka Meetha</a></li>
              <li><a href="#menu" onClick={scrollTo('#menu')}>Zaafrani Firni</a></li>
            </ul>
          </div>

          {/* Royal Experience Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading font-royal">Royal Experience</h4>
            <ul className="footer-links-list">
              <li><a href="#heritage" onClick={scrollTo('#heritage')}>Our Heritage & Story</a></li>
              <li><a href="#sunday-specials" onClick={scrollTo('#sunday-specials')}>Dedicated Sunday Specials</a></li>
              <li><a href="#why-us" onClick={scrollTo('#why-us')}>Why Choose Begum's</a></li>
              <li><a href="#catering" onClick={scrollTo('#catering')}>Catering & Events</a></li>
              <li><a href="#reviews" onClick={scrollTo('#reviews')}>Customer Reviews</a></li>
              <li><a href="#contact" onClick={scrollTo('#contact')}>Contact & Ordering</a></li>
            </ul>
          </div>

          {/* Concierge & Ordering */}
          <div className="footer-links-col">
            <h4 className="footer-heading font-royal">Quick Ordering</h4>
            <p className="footer-order-text">
              Reserve your handi or pre-order on WhatsApp for immediate concierge support.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold footer-whatsapp-btn"
            >
              <MessageCircle size={15} />
              <span>Order on WhatsApp</span>
            </a>
            <div className="footer-pax-tag">
              <span>Feast Portions: 5–10 Pax per Handi</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Begum's Authentic Hyderabadi Kitchen. All rights reserved. Bangalore, India.
          </p>
          <div className="footer-badges">
            <span className="badge-chip">⚜️ Authentic Dum</span>
            <span className="badge-chip">🌾 Aged Basmati</span>
            <span className="badge-chip">🍲 Sealed Handis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
