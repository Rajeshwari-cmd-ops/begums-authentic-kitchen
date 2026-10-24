import React from 'react';
import { Crown, Sparkles, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function CTA({ onOrderNow }) {
  return (
    <section id="royal-cta" className="section-padding begums-cta-section">
      <div className="container">
        <div className="royal-cta-card">
          <div className="cta-inner-arch" />
          
          <div className="cta-content-wrap">
            <div className="cta-royal-badge">
              <Crown size={15} />
              <span>BEGUM'S AUTHENTIC HYDERABADI KITCHEN</span>
            </div>

            <h2 className="cta-heading font-royal">
              Host a Royal <span className="gold-text">Dastarkhwan</span> at Home
            </h2>

            <p className="cta-subheading">
              Whether it is a grand Sunday family lunch or an intimate celebratory feast, bring the regal flavours
              of Hyderabad to your dining room. Generous 1kg handis serving 5–10 guests, prepared with love, patience, and heirloom recipes.
            </p>

            <div className="cta-action-row">
              <button
                type="button"
                className="btn-gold cta-main-btn"
                onClick={onOrderNow}
              >
                <span>Order Royal Dastarkhwan Now</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#sunday-specials"
                className="btn-royal-outline"
              >
                <Sparkles size={16} className="text-gold" />
                <span>Reserve Sunday Handis</span>
              </a>
            </div>

            <div className="cta-assurances-row">
              <div className="assurance-item">
                <Flame size={16} className="text-gold" />
                <span>Dough-Sealed Dum Cooking</span>
              </div>
              <div className="assurance-sep">•</div>
              <div className="assurance-item">
                <ShieldCheck size={16} className="text-gold" />
                <span>Heavy Thermal Heat Retention</span>
              </div>
              <div className="assurance-sep">•</div>
              <div className="assurance-item">
                <Crown size={16} className="text-gold" />
                <span>Heirloom Nawabi Recipes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
