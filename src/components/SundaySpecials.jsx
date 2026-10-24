import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SUNDAY_SPECIALS, BRAND_INFO } from '../data/products';
import { formatPrice, handleImageError } from '../utils/helpers';

export default function SundaySpecials({ cart = [], onAddToCart }) {
  // Track selected portion option per dish (keyed by dish id)
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initial = {};
    SUNDAY_SPECIALS.forEach((dish) => {
      if (dish.options && dish.options.length > 0) {
        initial[dish.id] = dish.options[0].id;
      }
    });
    return initial;
  });

  const handleSelectOption = (dishId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [dishId]: optionId
    }));
  };

  const getSelectedOption = (dish) => {
    const optId = selectedOptions[dish.id];
    return dish.options?.find((o) => o.id === optId) || dish.options?.[0];
  };

  const generateWhatsAppUrl = (dish, option) => {
    const phone = '919845012345';
    const message = `Hello Begum's Kitchen, I would like to pre-order for Sunday:\n\n` +
      `• Dish: ${dish.title}\n` +
      `• Portion: ${option.name} (${option.desc})\n` +
      `• Price: ₹${option.price}/-\n` +
      `• Delivery: Sunday Lunch (Bangalore)\n\n` +
      `Please confirm availability.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const generateBannerWhatsAppUrl = () => {
    const phone = '919845012345';
    const message = `Hello Begum's Kitchen, I would like to reserve our family's Sunday Feast Pre-Order. Please confirm availability.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="sunday-specials" className="begums-section sunday-section section-divider-bottom">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-compact">
          <div className="section-pretitle">
            <Sparkles size={13} className="text-gold" />
            <span>AUTHENTIC HYDERABADI DAAWAT</span>
          </div>

          <h2 className="section-title font-royal">
            A Feast Worth Gathering For
          </h2>

          <div className="gold-decorative-divider">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>

          <p className="section-subtitle-compact">
            Discover authentic Hyderabadi favourites, made for your Sunday table.
          </p>

          <div className="sunday-meta-strip">
            <span className="sunday-meta-item">
              <Clock size={13} className="text-gold" /> Pre-orders close Saturday Midnight
            </span>
            <span className="meta-sep">•</span>
            <span className="sunday-meta-item">
              <ShieldCheck size={13} className="text-gold" /> 100% Halal Prime Cuts
            </span>
            <span className="meta-sep">•</span>
            <span className="sunday-meta-item">
              Fresh Sunday Lunch Delivery (Bangalore)
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Dishes Grid */}
        <div className="sunday-grid">
          {SUNDAY_SPECIALS.map((dish, index) => {
            const currentOption = getSelectedOption(dish);
            const cartItemId = `${dish.id}-${currentOption?.id || 'default'}`;
            const cartItem = cart.find((i) => i.id === cartItemId || i.id === dish.id);

            return (
              <article
                key={dish.id}
                className={`sunday-card ${dish.isDessert ? 'sunday-card-dessert' : ''}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Compact, Controlled Image Container */}
                <div className={`sunday-media ${dish.isDessert ? 'sunday-media-dessert' : ''}`}>
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="sunday-img"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  {dish.tag && <span className="sunday-tag">{dish.tag}</span>}
                </div>

                {/* Card Content with Clean Layout */}
                <div className="sunday-content">
                  <div className="sunday-row-top">
                    <h3 className="sunday-dish-name">{dish.title}</h3>
                    <div className="sunday-price-wrap">
                      <span className="sunday-price">
                        {formatPrice(currentOption?.price || dish.basePrice)}
                      </span>
                    </div>
                  </div>

                  <p className="sunday-dish-desc">{dish.desc}</p>

                  {/* Clean Portion Selector Pills */}
                  {dish.options && dish.options.length > 1 && (
                    <div className="sunday-options">
                      <span className="sunday-options-title">Portion / Combo:</span>
                      <div className="sunday-pills">
                        {dish.options.map((option) => {
                          const isSelected = currentOption?.id === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              className={`sunday-pill ${isSelected ? 'active' : ''}`}
                              onClick={() => handleSelectOption(dish.id, option.id)}
                            >
                              <span>{option.name}</span>
                              <strong className="pill-price">{formatPrice(option.price)}</strong>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Inclusions note */}
                  {currentOption && currentOption.desc && (
                    <div className="sunday-inclusion">
                      <span className="inclusion-bullet">✦</span>
                      <span>{currentOption.desc}</span>
                    </div>
                  )}

                  {/* Actions Row: WhatsApp and Add to Order */}
                  <div className="sunday-actions">
                    <a
                      href={generateWhatsAppUrl(dish, currentOption || dish.options?.[0])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sunday-wa"
                      title="Direct WhatsApp pre-order"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp Order</span>
                    </a>

                    <button
                      type="button"
                      className={`btn-sunday-cart ${cartItem ? 'in-cart' : ''}`}
                      onClick={() => {
                        if (onAddToCart) {
                          onAddToCart({
                            id: cartItemId,
                            name: `${dish.title} - ${currentOption?.name || 'Standard'}`,
                            price: currentOption?.price || dish.basePrice,
                            portion: currentOption?.desc || dish.title,
                            image: dish.image,
                            category: 'sunday-specials',
                            isSundaySpecial: true
                          });
                        }
                      }}
                    >
                      <ShoppingBag size={14} />
                      <span>
                        {cartItem ? `In Order (${cartItem.quantity})` : 'Add to Order'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Promotional Banner: "Your Sunday Feast Awaits" */}
        <div className="sunday-promo">
          <div className="sunday-promo-body">
            <span className="sunday-promo-tag">LIMITED SUNDAY EMBERS</span>
            <h3 className="sunday-promo-title gold-shimmer-sweep">Your Sunday Feast Awaits</h3>
            <p className="sunday-promo-text">
              Every Sunday morning, our master Bawarchis slow-simmer tender mutton paya, velvety Nihari,
              and seal copper handis with fresh dough over charcoal embers. Reserve before Saturday midnight
              to guarantee your family's royal feast.
            </p>
            <div className="sunday-promo-features">
              <span><Check size={13} className="text-gold" /> Sunday Lunch Dispatch</span>
              <span><Check size={13} className="text-gold" /> Thermal Sealed Handis</span>
              <span><Check size={13} className="text-gold" /> Bangalore Delivery</span>
            </div>
          </div>

          <div className="sunday-promo-cta-box">
            <a
              href={generateBannerWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sunday-reserve"
            >
              <span>Reserve Sunday Handi</span>
              <ArrowRight size={16} className="reserve-arrow" />
            </a>
            <span className="sunday-promo-phone">
              Concierge: <strong>{BRAND_INFO.phone}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
