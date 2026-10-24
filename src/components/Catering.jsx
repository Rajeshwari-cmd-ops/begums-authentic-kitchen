import React, { useEffect, useRef, useState } from 'react';
import { Crown, CheckCircle2, MessageCircle, Phone, ArrowRight, Users, Sparkles } from 'lucide-react';
import { CATERING_PACKAGES } from '../data/products';

const FALLING_DIAMONDS = [
  { id: 1, left: '10%', size: '14px', delay: '0s', duration: '9s' },
  { id: 2, left: '22%', size: '10px', delay: '2.5s', duration: '11s' },
  { id: 3, left: '36%', size: '18px', delay: '1s', duration: '10s' },
  { id: 4, left: '50%', size: '12px', delay: '4s', duration: '8.5s' },
  { id: 5, left: '64%', size: '20px', delay: '1.8s', duration: '12s' },
  { id: 6, left: '76%', size: '9px', delay: '3.2s', duration: '9.5s' },
  { id: 7, left: '88%', size: '16px', delay: '5s', duration: '10.5s' },
  { id: 8, left: '96%', size: '11px', delay: '2s', duration: '8s' }
];

export default function Catering() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const curr = sectionRef.current;
    if (curr) observer.observe(curr);

    return () => {
      if (curr) observer.unobserve(curr);
    };
  }, []);

  const whatsappCateringUrl = "https://wa.me/919845012345?text=Hello%20Begum's%20Kitchen,%20I%20would%20like%20to%20enquire%20about%20catering%20and%20events";

  return (
    <section
      id="catering"
      ref={sectionRef}
      className={`begums-section catering-section section-divider-bottom mughal-watermark-bg ${inView ? 'is-inview' : ''}`}
    >
      {/* Warm Gold Radial Glow Emerging from Top */}
      <div className="radial-glow glow-gold-catering-top blur-3xl" aria-hidden="true" />

      {/* Falling Gold ✦ Diamonds: Continuous, GPU-Friendly, Pauses on Hover */}
      <div className="falling-diamonds-container" aria-hidden="true">
        {FALLING_DIAMONDS.map((d) => (
          <span
            key={d.id}
            className="falling-diamond"
            style={{
              left: d.left,
              fontSize: d.size,
              animationDuration: d.duration,
              animationDelay: d.delay
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="container">
        <div className="section-header-compact">
          <div className="section-pretitle">
            <Crown size={14} className="pretitle-icon" />
            <span>ROYAL DAAWAT CONCIERGE</span>
          </div>
          <h2 className="section-title font-royal">
            Catering & <span className="gold-text">Events</span>
          </h2>
          <div className="gold-decorative-divider">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>
          <p className="section-subtitle-compact">
            Bring the grandeur of a Nizami feast to your celebrations. Hand-sealed multi-kilogram handis,
            fresh starter platters, and dedicated royal hospitality support across Bangalore.
          </p>
        </div>

        {/* 3 Catering Cards */}
        <div className="catering-cards-grid">
          {CATERING_PACKAGES.map((pkg, cardIndex) => {
            const cardNum = cardIndex + 1;
            const isFeatured = cardNum === 2; // Center card (Shahi Royal Feast)

            return (
              <div
                key={pkg.id}
                className={`catering-card catering-card-${cardNum} ${isFeatured ? 'catering-card-featured' : ''}`}
              >
                {/* Gold Diamond Burst when Card Lands */}
                <div className="card-diamond-burst" aria-hidden="true">
                  <span className="burst-diamond burst-1">✦</span>
                  <span className="burst-diamond burst-2">✦</span>
                  <span className="burst-diamond burst-3">✦</span>
                  <span className="burst-diamond burst-4">✦</span>
                  <span className="burst-diamond burst-5">✦</span>
                </div>

                {/* Corner Twinkle Diamonds on Hover */}
                <span className="corner-twinkle twinkle-top-right" aria-hidden="true">✦</span>
                <span className="corner-twinkle twinkle-bottom-left" aria-hidden="true">✦</span>

                <div className="catering-card-top">
                  <span className="catering-badge font-royal">{pkg.badge}</span>
                  <div className="catering-serves-pill">
                    <Users size={13} />
                    <span>{pkg.serves}</span>
                  </div>
                </div>

                <h3 className="catering-title font-royal">{pkg.title}</h3>
                <p className="catering-highlight">{pkg.highlight}</p>

                <div className="catering-inclusions-wrap">
                  <span className="inclusions-label font-royal">Curated Daawat Inclusions:</span>
                  <ul className="inclusions-list">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className={`inclusion-item-${idx + 1}`}>
                        <CheckCircle2 size={14} className="inclusion-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="catering-action-wrap">
                  <a
                    href={whatsappCateringUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold btn-block catering-btn"
                  >
                    <MessageCircle size={15} />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Event Concierge Banner */}
        <div className="catering-concierge-strip">
          <div className="concierge-strip-left">
            <Sparkles size={20} className="text-gold" />
            <div>
              <strong className="font-royal">Planning an intimate dinner or grand wedding?</strong>
              <p>Speak directly with our banquet desk for customized kilogram menu planning and delivery schedules.</p>
            </div>
          </div>
          <div className="concierge-strip-right">
            <a href="tel:+919845012345" className="btn-royal-outline concierge-call-btn">
              <Phone size={15} />
              <span>Call +91 98450 12345</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
