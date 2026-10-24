import React, { useState } from 'react';
import { MapPin, CheckCircle, ShieldCheck, Clock, Search, ArrowRight, Sparkles } from 'lucide-react';
import { BANGALORE_DELIVERY_HUBS } from '../data/products';

export default function DeliveryAreas({ onStartOrder }) {
  const [areaQuery, setAreaQuery] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    const q = areaQuery.trim().toLowerCase();
    if (!q) return;

    const found = BANGALORE_DELIVERY_HUBS.find(
      (hub) => hub.name.toLowerCase().includes(q)
    );

    if (found) {
      setCheckResult({
        available: true,
        message: `Royal delivery is available to ${found.name}! Estimated transit time: ${found.time}.`
      });
    } else {
      setCheckResult({
        available: true,
        message: `Royal delivery confirmed for "${areaQuery}". Hand-sealed handis dispatched across Greater Bangalore.`
      });
    }
  };

  return (
    <section id="delivery" className="section-padding begums-delivery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pretitle">
            <MapPin size={14} />
            <span>BANGALORE COVERAGE</span>
          </div>
          <h2 className="section-title">
            Royal Delivery <span className="gold-text">Across Bangalore</span>
          </h2>
          <p className="section-subtitle">
            To ensure the delicate aroma and steam of our Dum handis remain untouched, Begum's dispatches
            in heavy-duty insulated thermal carriers directly from our central Bangalore royal kitchen.
          </p>
          <div className="royal-divider">
            <span>✦ ❖ ✦</span>
          </div>
        </div>

        {/* Pincode & Locality Checker */}
        <div className="royal-delivery-card">
          <div className="delivery-search-box">
            <h3 className="search-box-title font-royal">Check Your Bangalore Locality</h3>
            <p className="search-box-desc">
              Enter your neighborhood (e.g. Indiranagar, Koramangala, Frazer Town, Whitefield, HSR)
            </p>

            <form onSubmit={handleCheck} className="delivery-form">
              <div className="delivery-input-group">
                <MapPin size={18} className="input-pin-icon" />
                <input
                  type="text"
                  placeholder="Enter Bangalore locality or area..."
                  value={areaQuery}
                  onChange={(e) => {
                    setAreaQuery(e.target.value);
                    if (checkResult) setCheckResult(null);
                  }}
                  className="delivery-text-input"
                />
                <button type="submit" className="btn-gold delivery-submit-btn">
                  Check Delivery
                </button>
              </div>
            </form>

            {checkResult && (
              <div className="delivery-result-banner">
                <CheckCircle size={18} className="text-gold" />
                <span>{checkResult.message}</span>
              </div>
            )}
          </div>

          {/* Active Bangalore Delivery Hubs Grid */}
          <div className="delivery-hubs-grid">
            {BANGALORE_DELIVERY_HUBS.map((hub, idx) => (
              <div key={idx} className="hub-card">
                <div className="hub-top">
                  <span className="hub-tag font-royal">{hub.radius}</span>
                  <div className="hub-pulse-dot" />
                </div>
                <h4 className="hub-name">{hub.name}</h4>
                <div className="hub-meta">
                  <Clock size={13} className="text-gold" />
                  <span>{hub.time}</span>
                  <span className="hub-meta-sep">•</span>
                  <span className="hub-status">{hub.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Three Royal Packaging Guarantees */}
          <div className="delivery-perks-row">
            <div className="perk-col">
              <ShieldCheck size={24} className="text-gold" />
              <div>
                <h5>Intact Dough Purdah</h5>
                <p>Arrives sealed with traditional wheat dough seal. You break the seal at your table.</p>
              </div>
            </div>
            <div className="perk-col">
              <Clock size={24} className="text-gold" />
              <div>
                <h5>Piping Hot at 65°C+</h5>
                <p>Heavy-duty multi-layer thermal packaging keeps heat trapped for up to 90 minutes.</p>
              </div>
            </div>
            <div className="perk-col">
              <Sparkles size={24} className="text-gold" />
              <div>
                <h5>Sunday Pre-Order Guarantee</h5>
                <p>Guaranteed on-time arrival for family Sunday lunch and dinner dastarkhwan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
