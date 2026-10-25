import React from 'react';
import { Crown, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/helpers';

export default function About() {
  return (
    <section id="heritage" className="begums-section begums-heritage-section mughal-watermark-bg section-divider-bottom">
      {/* Blurred Radial Glows: Deep Indigo/Purple behind Story section */}
      <div className="radial-glow glow-indigo-story blur-3xl" aria-hidden="true" />
      <div className="radial-glow glow-purple-story blur-3xl" aria-hidden="true" />

      {/* Soft Gold Dust Particles Drifting Upward Slowly (5-6 embers) */}
      <div className="heritage-dust-container" aria-hidden="true">
        <span className="gold-ember ember-1" />
        <span className="gold-ember ember-2" />
        <span className="gold-ember ember-3" />
        <span className="gold-ember ember-4" />
        <span className="gold-ember ember-5" />
        <span className="gold-ember ember-6" />
      </div>

      {/* Delicate Gold Corner Ornaments */}
      <div className="corner-ornament top-left" aria-hidden="true">
        <svg viewBox="0 0 80 80" width="60" height="60" fill="none">
          <path d="M4 76 V20 Q4 4 20 4 H76" stroke="rgba(212,169,78,0.35)" strokeWidth="1.2" fill="none" />
          <path d="M10 70 V24 Q10 10 24 10 H70" stroke="rgba(212,169,78,0.2)" strokeWidth="0.8" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="rgba(212,169,78,0.4)" />
          <path d="M4 4 L28 28" stroke="rgba(212,169,78,0.25)" strokeWidth="1" />
        </svg>
      </div>
      <div className="corner-ornament top-right" aria-hidden="true">
        <svg viewBox="0 0 80 80" width="60" height="60" fill="none">
          <path d="M76 76 V20 Q76 4 60 4 H4" stroke="rgba(212,169,78,0.35)" strokeWidth="1.2" fill="none" />
          <path d="M70 70 V24 Q70 10 56 10 H10" stroke="rgba(212,169,78,0.2)" strokeWidth="0.8" fill="none" />
          <circle cx="60" cy="20" r="3.5" fill="rgba(212,169,78,0.4)" />
          <path d="M76 4 L52 28" stroke="rgba(212,169,78,0.25)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container">
        {/* Section Header: Gold Eyebrow, Serif Title & Decorative Gold Divider */}
        <div className="section-header-compact reveal">
          <div className="section-pretitle">
            <Crown size={14} className="text-gold" />
            <span>OUR HERITAGE</span>
          </div>

          <h2 className="section-title font-royal" aria-label="The Story of Begum's">
            The Story of <span className="gold-text">Begum's</span>
          </h2>

          {/* Decorative Gold Divider with Center Emblem */}
          <div className="gold-decorative-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>

          <p className="section-subtext">
            Preserving the timeless culinary traditions of the Nizami Nawabs in Bangalore.
          </p>

          {/* Thin Gold Line that draws itself across on scroll-into-view */}
          <div className="heritage-draw-line-wrap" aria-hidden="true">
            <div className="heritage-draw-line" />
          </div>
        </div>

        {/* 2-Column Responsive Layout: 3-Image Collage on LEFT, Narrative on RIGHT */}
        <div className="heritage-story-grid">
          {/* LEFT: 3-Image Collage with Floating Gold Sparkles & Ken Burns Loop */}
          <div className="heritage-collage-pane reveal">
            <div className="heritage-collage-wrapper">
              {/* Floating Gold ✦ Sparkles with Gentle Bob Animation */}
              <span className="collage-sparkle sparkle-1" aria-hidden="true">✦</span>
              <span className="collage-sparkle sparkle-2" aria-hidden="true">✦</span>
              <span className="collage-sparkle sparkle-3" aria-hidden="true">✦</span>
              <span className="collage-sparkle sparkle-4" aria-hidden="true">✦</span>

              {/* CENTER: Large Main Image (Charminar at dusk with warm golden glow), rounded-3xl, tall */}
              <div className="collage-main-frame">
                <img
                  src="/images/charminar-dusk.jpg"
                  alt="Historic Charminar in Hyderabad at dusk with warm golden lantern illuminations"
                  className="collage-main-img ken-burns-loop"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="collage-vignette-overlay" />
                <div className="collage-main-caption">
                  <Crown size={13} className="text-gold" />
                  <span>Historic Hyderabad • The Seat of Nizami Flavours</span>
                </div>
              </div>

              {/* SMALL IMAGE 1: Royal Dum Biryani Handi Steam close-up (overlapping bottom-left, -3deg) */}
              <div className="collage-thumb-bottom-left">
                <img
                  src="/images/biryani-handi-steam.jpg"
                  alt="Authentic Royal Hyderabadi Dum Biryani handi close-up with aromatic steam"
                  className="collage-thumb-img ken-burns-loop"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="thumb-vignette-overlay" />
                <span className="thumb-badge-tag">Shahi Dum Biryani</span>
              </div>

              {/* SMALL IMAGE 2: Chef's hands serving dum biryani / kebabs on brass plate (overlapping top-right, 3deg) */}
              <div className="collage-thumb-top-right">
                <img
                  src="/images/chef-serving-kebabs.jpg"
                  alt="Royal chef hands serving shahi seekh and shami kebabs on vintage brass platter"
                  className="collage-thumb-img ken-burns-loop"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="thumb-vignette-overlay" />
                <span className="thumb-badge-tag">Heirloom Kebabs</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Italic Gold Serif Subheading, Paragraphs, Curator Card + Urdu Quote Card in Dark Glass */}
          <div className="heritage-narrative-pane reveal">
            <h3 className="story-shahi-heading font-royal">
              The Legacy of Shahi Aghaaz
            </h3>

            <p className="story-narrative-paragraph">
              <span className="heritage-desc-desktop">
                In the heart of Bangalore, where traditions are timeless and flavours are legendary,
                <strong> Begum's Authentic Hyderabadi Kitchen</strong> was born out of a passion to preserve
                the rich culinary heritage of the Nawabs. Our recipes are sacred heirlooms passed down through
                generations—slow-cooked on sealed Dum over fragrant charcoal embers, with patience and the finest
                hand-selected spices.
              </span>
              <span className="heritage-desc-mobile">
                Born out of devotion to royal Nizami traditions, our heirloom recipes are slow-cooked on sealed Dum over fragrant charcoal embers.
              </span>
            </p>

            <p className="story-narrative-sub heritage-sub-desktop">
              Every dish we create is a tribute crafted with royal tehzeeb, bringing the grandeur of Hyderabad’s
              princely dastarkhwans directly to your family table.
            </p>

            {/* Curator Card in Dark Glass (bg-white/5, backdrop-blur-xl, gold left border) */}
            <div className="heritage-glass-card curator-card">
              <div className="glass-card-header">
                <Crown size={15} className="text-gold" />
                <span className="card-label">Curated with Devotion</span>
              </div>
              <h4 className="curator-name font-royal">Tahera Kirmani &amp; Kumail Kirmani</h4>
              <span className="curator-location">Bangalore, India • Custodians of Royal Nizami Recipes</span>
            </div>

            {/* Urdu Quote Card in Dark Glass (bg-white/5, backdrop-blur-xl, gold left border) */}
            <div className="heritage-glass-card quote-card">
              <blockquote className="couplet-text font-royal">
                "Na sirf zaaika, na sirf khushboo ka safar hai,<br />
                Yeh Begum ki rasoi se tehzeeb ka asar hai.<br />
                Jo ek dafa is dastarkhwan ka mehmaan hua,<br />
                Uske dil mein Hyderabad umr bhar basar hai."
              </blockquote>
              <span className="couplet-source">— Begum's Heritage Dastarkhwan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
