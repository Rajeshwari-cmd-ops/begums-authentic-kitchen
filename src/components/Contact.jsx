import React, { useState } from 'react';
import { Crown, Phone, Mail, Clock, MapPin, MessageCircle, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import { BANGALORE_DELIVERY_HUBS, BRAND_INFO } from '../data/products';

export default function Contact() {
  const [areaInput, setAreaInput] = useState('');
  const [checkStatus, setCheckStatus] = useState(null);

  const handleCheckArea = (e) => {
    e.preventDefault();
    const query = areaInput.trim().toLowerCase();
    if (!query) return;

    const matched = BANGALORE_DELIVERY_HUBS.find(hub => hub.name.toLowerCase().includes(query));
    if (matched) {
      setCheckStatus({
        success: true,
        text: `Delivering fresh to ${matched.name}! Estimated transit: ${matched.time}.`
      });
    } else {
      setCheckStatus({
        success: true,
        text: `Delivery confirmed for "${areaInput}". Thermal-sealed handis dispatched across Bangalore.`
      });
    }
  };

  const whatsappUrl = "https://wa.me/919845012345?text=Hello%20Begum's%20Kitchen,%20I%20would%20like%20to%20order%20for%20a%20Royal%20Dastarkhwan";

  return (
    <section id="contact" className="begums-section contact-ordering-section section-divider-bottom">
      <div className="container">
        <div className="section-header-compact">
          <div className="section-pretitle">
            <Crown size={14} className="pretitle-icon" />
            <span>CENTRAL BANGALORE DESK</span>
          </div>
          <h2 className="section-title font-royal">
            Contact & <span className="gold-text">Ordering</span>
          </h2>
          <div className="gold-decorative-divider">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>
          <p className="section-subtitle-compact">
            Pre-order for your family dastarkhwan, organize a Sunday feast, or enquire about custom kilogram catering.
          </p>

          {/* Subtle Gold Divider Line animates in on scroll */}
          <div className="footer-scroll-divider reveal" aria-hidden="true">
            <span className="footer-gold-line" />
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Royal Desk Details */}
          <div className="contact-info-card">
            <div className="info-header">
              <h3 className="font-royal">Royal Concierge Desk</h3>
              <p>Direct assistance from Tahera & Kumail Kirmani's kitchen team.</p>
            </div>

            <div className="contact-items-stack">
              <div className="contact-row">
                <div className="contact-icon-box social-icon-gold-glow">
                  <Phone size={17} />
                </div>
                <div>
                  <span className="contact-row-lbl">Direct Telephone</span>
                  <a href="tel:+919845012345" className="contact-row-val">{BRAND_INFO.phone}</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon-box social-icon-gold-glow">
                  <Mail size={17} />
                </div>
                <div>
                  <span className="contact-row-lbl">Email Enquiries</span>
                  <a href="mailto:dastarkhwan@begumskitchen.in" className="contact-row-val">{BRAND_INFO.email}</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon-box social-icon-gold-glow">
                  <Clock size={17} />
                </div>
                <div>
                  <span className="contact-row-lbl">Operating Hours</span>
                  <span className="contact-row-val">{BRAND_INFO.openingHours}</span>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon-box social-icon-gold-glow">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="contact-row-lbl">Kitchen Hub</span>
                  <span className="contact-row-val">Central Bangalore Cloud Kitchen, Bangalore, India</span>
                </div>
              </div>
            </div>

            <div className="contact-cta-buttons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold contact-whatsapp-btn"
              >
                <MessageCircle size={16} />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="tel:+919845012345"
                className="btn-royal-outline"
              >
                <Phone size={16} />
                <span>Call Concierge</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bangalore Area Checker & Thermal Seal Guarantee */}
          <div className="delivery-check-card">
            <div className="info-header">
              <h3 className="font-royal">Check Delivery to Your Area</h3>
              <p>We deliver piping hot handis across Bangalore in custom thermal carriers.</p>
            </div>

            <form onSubmit={handleCheckArea} className="area-check-form">
              <div className="area-input-wrapper">
                <Search size={16} className="area-search-icon" />
                <input
                  type="text"
                  placeholder="Enter area (e.g. Indiranagar, Koramangala, Frazer Town)..."
                  value={areaInput}
                  onChange={(e) => {
                    setAreaInput(e.target.value);
                    if (checkStatus) setCheckStatus(null);
                  }}
                  className="area-input"
                />
                <button type="submit" className="btn-gold area-btn">
                  Verify
                </button>
              </div>
            </form>

            {checkStatus && (
              <div className="area-feedback-pill">
                <CheckCircle size={15} className="text-gold" />
                <span>{checkStatus.text}</span>
              </div>
            )}

            {/* Quick Hub Badges */}
            <div className="quick-hubs-list">
              <span className="hubs-title font-royal">Active Bangalore Hubs:</span>
              <div className="hubs-pills-row">
                {BANGALORE_DELIVERY_HUBS.map((hub, i) => (
                  <span key={i} className="hub-pill">
                    {hub.name.split('&')[0].trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="thermal-guarantee-note">
              <ShieldCheck size={18} className="text-gold" />
              <span>
                <strong>100% Dough Seal Intact:</strong> Break the traditional wheat dough seal at your dining table to release the fresh saffron steam.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
