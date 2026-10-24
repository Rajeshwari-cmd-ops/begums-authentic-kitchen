import React from 'react';
import { Flame, Sparkles, ShieldCheck, Wheat, Crown } from 'lucide-react';
import { ART_OF_DUM_PILLARS, BRAND_INFO } from '../data/products';

export default function HowItWorks() {
  const iconMap = {
    Flame: <Flame size={26} />,
    Wheat: <Wheat size={26} />,
    Sparkles: <Sparkles size={26} />,
    ShieldCheck: <ShieldCheck size={26} />
  };

  return (
    <section id="art-of-dum" className="section-padding art-of-dum-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pretitle">
            <Crown size={14} />
            <span>A LEGACY OF PATIENCE</span>
          </div>
          <h2 className="section-title">
            The Art of <span className="gold-text">Dum</span>
          </h2>
          <p className="section-subtitle font-serif">
            "Dum is not just a cooking technique, it is a royal tradition."
          </p>
          <div className="royal-divider">
            <span>✦ ❖ ✦</span>
          </div>
        </div>

        {/* 4 Dum Pillars Grid */}
        <div className="dum-pillars-grid">
          {ART_OF_DUM_PILLARS.map((pillar) => (
            <div key={pillar.step} className="dum-card">
              <div className="dum-card-top">
                <span className="dum-step-badge font-royal">{pillar.step}</span>
                <div className="dum-icon-circle">
                  {iconMap[pillar.icon] || <Sparkles size={26} />}
                </div>
              </div>

              <h3 className="dum-card-title">{pillar.title}</h3>
              <p className="dum-card-desc">{pillar.description}</p>

              <div className="dum-card-footer">
                <span className="dum-highlight-tag">✦ {pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Page 4 Urdu Couplet Card */}
        <div className="urdu-couplet-card dum-couplet">
          <div className="urdu-couplet-text">
            "Har daane mein dastaan-e-Dakkan mehfooz hai,<br />
            Har dum ki khushboo mein ek shahenshahi soz hai.<br />
            Jo ek niwala kha le, woh bas itna keh uthhe—<br />
            Yeh biryani nahin, Begum ki mehmaan-nawazi hai."
          </div>
          <div className="urdu-couplet-source">— The Art of Dum</div>
        </div>
      </div>
    </section>
  );
}
