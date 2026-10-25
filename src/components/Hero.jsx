import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Crown, ShieldCheck, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/helpers';

const HERO_DISHES = [
  {
    id: 'mutton-biryani',
    title: 'Shahi Mutton Dum Biryani',
    portion: '1 kg Handi • Serves 5–6 pax',
    price: '₹2,800',
    tag: 'Royal Signature',
    image: '/images/mutton-biryani.jpg',
    alt: "Begum's Royal Mutton Dum Biryani slow cooked in hammered copper handi"
  },
  {
    id: 'chicken-biryani',
    title: 'Shahi Chicken Dum Biryani',
    portion: '1 kg Handi • Serves 5–6 pax',
    price: '₹1,400',
    tag: 'Family Favourite',
    image: '/images/chicken-biryani.jpg',
    alt: "Begum's Chicken Dum Biryani with caramelized onions and saffron rice"
  },
  {
    id: 'pepper-chops',
    title: 'Mutton Pepper Chops',
    portion: '1 kg Platter • Serves 8–10 pax',
    price: '₹2,400',
    tag: 'Chef Signature',
    image: '/images/begums-pepper-chops.jpg',
    alt: 'Mutton Pepper Chops roasted to perfection with Malabar peppercorns'
  },
  {
    id: 'mutton-nihari',
    title: 'Hyderabadi Mutton Nihari',
    portion: 'Tender Marrow Stew + Taftoon Roti',
    price: '₹349',
    tag: 'Nizami Breakfast',
    image: '/images/mutton-nihari.jpg',
    alt: 'Velvety Mutton Nihari shank stew with ginger juliennes and lemon'
  }
];

export default function Hero({ onExploreMenu }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const whatsappUrl = "https://wa.me/919845012345?text=Hello%20Begum's%20Kitchen,%20I%20would%20like%20to%20order%20for%20a%20Royal%20Dastarkhwan";

  // Preload all hero images so transitions are instant & buttery
  useEffect(() => {
    HERO_DISHES.forEach((dish) => {
      const img = new Image();
      img.src = dish.image;
    });
  }, []);

  // Safe slide transition preserving previous index for smooth crossfade
  const goToSlide = (nextIndex) => {
    if (nextIndex === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(nextIndex);
  };

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % HERO_DISHES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const activeDish = HERO_DISHES[activeIndex];

  return (
    <section id="hero" className="begums-hero-section mughal-watermark-bg section-divider-bottom">
      {/* Blurred Radial Glows: Warm Gold (8-10% opacity) behind Hero */}
      <div className="radial-glow glow-gold-hero-primary blur-3xl" aria-hidden="true" />
      <div className="radial-glow glow-gold-hero-secondary blur-3xl" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="hero-text-col">
            <div className="hero-pretitle hero-eyebrow-slide-down">
              <Crown size={15} className="text-gold" />
              <span>Bangalore's Royal Cloud Kitchen</span>
            </div>

            {/* Clean rise-in entrance under 1s; Luxury gold shimmer + soft glow on 'of Hyderabad' */}
            <h1 className="hero-headline hero-heading-entrance">
              <span className="hero-heading-white">Royal Flavours</span>
              <br />
              <span className="hero-gold-shimmer-wrap">
                <span className="hero-gold-shimmer-text">of Hyderabad</span>
                {/* 3 tiny twinkling gold sparkles */}
                <span className="gold-sparkle sparkle-top" aria-hidden="true">✦</span>
                <span className="gold-sparkle sparkle-mid" aria-hidden="true">✦</span>
                <span className="gold-sparkle sparkle-bot" aria-hidden="true">✦</span>
              </span>
            </h1>

            {/* Mobile-only thin gold divider ornament */}
            <div className="gold-decorative-divider hero-mobile-divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-emblem">❖</span>
              <span className="divider-line" />
            </div>

            {/* Mobile-only subtle floating gold diamond particles */}
            <span className="hero-mobile-particle hero-mobile-particle-1" aria-hidden="true">✦</span>
            <span className="hero-mobile-particle hero-mobile-particle-2" aria-hidden="true">✦</span>
            <span className="hero-mobile-particle hero-mobile-particle-3" aria-hidden="true">✦</span>

            <p className="hero-lead-desc hero-desc-fade-up">
              <span className="hero-desc-desktop">
                Experience authentic Hyderabadi cuisine, prepared with tradition and served with royalty.
                Slow-cooked Dum Biryanis, Shahi Kebabs, and feasts crafted from generation-old heirloom recipes.
              </span>
              <span className="hero-desc-mobile">
                Slow-cooked Dum Biryanis & heirloom royal feasts, served with authentic Nawabi tradition.
              </span>
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-gold hero-primary-btn hero-btn-bounce-1"
                onClick={onExploreMenu}
                id="hero-explore-menu-btn"
              >
                <span>Explore Menu</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-outline hero-whatsapp-btn hero-btn-bounce-2"
              >
                <MessageCircle size={17} className="whatsapp-icon" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Chips Below */}
            <div className="hero-highlights hero-highlights-fade">
              <div className="highlight-item">
                <span className="highlight-dot" />
                <span>Slow-Cooked on Dum</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot" />
                <span>1kg+ Family Handis</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot" />
                <span>Bangalore Express Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arch-Top Frame with Smooth Crossfading Dish Carousel */}
          <div className="hero-image-col">
            <div
              className="hero-arch-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Arch-Top Mughal Frame with Simultaneous 650ms Crossfade */}
              <div className="hero-arch-frame">
                {HERO_DISHES.map((dish, idx) => {
                  const isActive = idx === activeIndex;
                  const isPrev = idx === prevIndex;
                  return (
                    <div
                      key={dish.id}
                      className={`hero-carousel-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev-slide' : ''}`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={dish.image}
                        alt={dish.alt}
                        className="hero-carousel-img"
                        onError={handleImageError}
                        loading="eager"
                      />
                      <div className="hero-slide-overlay" />
                    </div>
                  );
                })}

                {/* Chef Signature Badge: Gentle continuous 3s pulse glow */}
                <div className="hero-arch-top-badge chef-signature-pulse">
                  <Sparkles size={13} className="text-gold" />
                  <span key={`tag-${activeDish.id}`} className="dish-sync-text">
                    {activeDish.tag}
                  </span>
                </div>

                {/* Gold Dot Indicators (Active = wider gold pill, clickable) */}
                <div className="hero-carousel-dots" role="tablist" aria-label="Hero carousel navigation">
                  {HERO_DISHES.map((dish, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={dish.id}
                        type="button"
                        className={`hero-carousel-dot ${isActive ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`View ${dish.title}`}
                        role="tab"
                        aria-selected={isActive}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Floating Glassmorphism Price/Dish Badge Card: Synced with slide, positioned cleanly with NO overlap */}
              <div
                className="hero-floating-badge hero-floating-badge-spring"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="floating-badge-crown">
                  <Crown size={16} className="text-gold" />
                </div>
                <div key={`info-${activeDish.id}`} className="floating-badge-info dish-sync-text">
                  <span className="floating-badge-title font-royal">{activeDish.title}</span>
                  <span className="floating-badge-sub">{activeDish.portion}</span>
                </div>
                <div key={`price-${activeDish.id}`} className="floating-badge-price-wrap dish-sync-text">
                  <span className="floating-badge-price font-royal">{activeDish.price}</span>
                  <span className="floating-badge-seal">
                    <ShieldCheck size={12} />
                    <span>Sealed Handi</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
