import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Crown } from 'lucide-react';
import { ROYAL_REVIEWS } from '../data/products';

function getInitials(name) {
  if (!name) return 'B';
  const parts = name.split(/[\s&]+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function parseDishChips(dishStr) {
  if (!dishStr) return [];
  return dishStr.split(/\s*&\s*/).map((s) => s.trim()).filter(Boolean);
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default center card active
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const total = ROYAL_REVIEWS.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // Auto-rotate every 6s with smooth transition + pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // In-view observer for entrance animations
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

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className={`begums-section reviews-section section-divider-bottom mughal-watermark-bg ${inView ? 'is-inview' : ''}`}
    >
      {/* Background: Soft Gold & Deep Indigo Radial Glows */}
      <div className="radial-glow glow-gold-reviews blur-3xl" aria-hidden="true" />
      <div className="radial-glow glow-indigo-reviews blur-3xl" aria-hidden="true" />

      <div className="container">
        {/* Section Header - Retained As-Is */}
        <div className="section-header-compact">
          <div className="section-pretitle">
            <Crown size={14} className="pretitle-icon" />
            <span>GUEST EXPERIENCES</span>
          </div>
          <h2 className="section-title font-royal">
            Voices of the <span className="gold-text">Dastarkhwan</span>
          </h2>
          <div className="gold-decorative-divider">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>
          <p className="section-subtitle-compact">
            Real feedback from Bangalore families and patrons who celebrate our authentic Dum cooking.
          </p>
        </div>

        {/* 3 Testimonial Cards Layout (grid-cols-3 on desktop, slider on mobile) */}
        <div
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="reviews-cards-grid">
            {ROYAL_REVIEWS.map((review, idx) => {
              const isActive = idx === currentIndex;
              const cardEntranceClass = `review-card-${idx + 1}`;
              const chips = parseDishChips(review.dish);
              const initials = getInitials(review.author);

              return (
                <article
                  key={review.id}
                  className={`review-card ${cardEntranceClass} ${isActive ? 'card-center-active' : 'card-side-dimmed'}`}
                  onClick={() => setCurrentIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Testimonial from ${review.author}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setCurrentIndex(idx);
                    }
                  }}
                >
                  {/* Top-Left Gold Quote Mark */}
                  <div className="review-quote-top-left" aria-hidden="true">
                    <Quote size={24} className="review-gold-quote-icon" />
                  </div>

                  {/* 5 Stars Staggered Pop-In */}
                  <div className="review-stars-strip" aria-label={`Rating ${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={15}
                        className={`review-star star-pop-${starIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* 'Ordered:' items shown as small gold pill chips */}
                  <div className="review-ordered-section">
                    <span className="ordered-label">Ordered:</span>
                    <div className="ordered-chips-list">
                      {chips.map((chip, cIdx) => (
                        <span key={cIdx} className="ordered-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote Text */}
                  <blockquote className="review-quote-body font-serif">
                    "{review.text}"
                  </blockquote>

                  {/* Customer Info with Circular Gold Glass Initial Avatar */}
                  <div className="review-signature-row">
                    <div className="review-avatar-circle font-royal" aria-hidden="true">
                      {initials}
                    </div>
                    <div className="review-author-meta">
                      <strong className="signature-name font-royal">{review.author}</strong>
                      <span className="signature-meta">{review.locality} • {review.date}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows + Dots */}
          <div className="review-nav-bar">
            <button
              type="button"
              className="review-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="review-bullets" role="tablist" aria-label="Testimonial slides">
              {ROYAL_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`bullet-btn ${idx === currentIndex ? 'bullet-active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  role="tab"
                  aria-selected={idx === currentIndex}
                />
              ))}
            </div>

            <button
              type="button"
              className="review-arrow-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
