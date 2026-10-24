import React, { useEffect, useRef, useState } from 'react';
import { Flame, Sparkles, Users, ShieldCheck, Crown } from 'lucide-react';
import { WHY_CHOOSE_BEGUMS } from '../data/products';

const iconMap = {
  Flame: Flame,
  Sparkles: Sparkles,
  Users: Users,
  ShieldCheck: ShieldCheck
};

export default function WhyChooseUs() {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className={`begums-section why-begums-section section-divider-bottom ${inView ? 'is-inview' : ''}`}
    >
      <div className="container">
        <div className="section-header-compact why-header-box">
          <div className="section-pretitle why-pretitle">
            <Crown size={14} className="pretitle-icon" />
            <span>NIZAMI STANDARDS</span>
          </div>

          <h2 className="section-title font-royal why-heading" aria-label="Why Choose Begum's">
            <span className="why-word why-word-1">Why</span>{' '}
            <span className="why-word why-word-2">Choose</span>{' '}
            <span className="why-word why-word-3 gold-text">Begum's</span>
          </h2>

          <div className="gold-decorative-divider why-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>

          <p className="section-subtitle-compact why-subtitle">
            Preserving centuries of Nawabi cooking techniques so you experience authentic royal hospitality at home.
          </p>
        </div>

        <div className="why-begums-grid">
          {WHY_CHOOSE_BEGUMS.map((item, index) => {
            const IconComp = iconMap[item.icon] || Crown;
            const cardNum = index + 1; // 1: Left, 2: FadeUp, 3: Right, 4: ScaleUp
            return (
              <div key={item.id} className={`why-begums-card why-card-${cardNum}`}>
                <div className="why-card-header">
                  <div className="why-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="why-tag font-royal">{item.tag}</span>
                </div>
                <h3 className="why-card-title font-royal">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
