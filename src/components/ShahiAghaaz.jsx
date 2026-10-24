import React, { useState } from 'react';
import { Crown, Plus, Check, Utensils, MessageCircle } from 'lucide-react';

const SHAHI_DISHES = [
  {
    id: 'starter-chicken-kebab',
    name: 'CHICKEN KEBAB',
    tag: 'House Special',
    description: 'Succulent chicken marinated overnight with royal spices and grilled to perfection.',
    price: 1400,
    priceLabel: '₹1,400',
    unit: '/kg',
    portion: 'Serves 8-10 pax',
    servesNote: '1 kg Platter • Serves 8-10 pax',
    portionAlt: 'Also ₹690/pax',
    image: '/images/begums-chicken-kebab.jpg',
  },
  {
    id: 'starter-chilli-chicken',
    name: 'CHILLI CHICKEN DRY',
    tag: 'Spicy Delight',
    description: 'Tender chicken tossed in aromatic peppers & bold Hyderabadi spices.',
    price: 1400,
    priceLabel: '₹1,400',
    unit: '/kg',
    portion: 'Serves 8-10 pax',
    servesNote: '1 kg Platter • Serves 8-10 pax',
    portionAlt: 'Special Wok-tossed',
    image: '/images/shahi-chilli-chicken.jpg',
  },
  {
    id: 'starter-pepper-chops',
    name: 'MUTTON PEPPER CHOPS',
    tag: 'Chef Signature',
    description: 'Premium mutton chops infused with crushed black pepper, slow roasted.',
    price: 2400,
    priceLabel: '₹2,400',
    unit: '/kg',
    portion: 'Serves 8-10 pax',
    servesNote: '1 kg Platter • Serves 8-10 pax',
    portionAlt: 'Also ₹450/serve',
    image: '/images/begums-pepper-chops.jpg',
  },
  {
    id: 'starter-shami-kebab',
    name: 'MUTTON SHAMI KEBAB (BONELESS)',
    tag: 'Nizami Heirloom',
    description: 'A royal delicacy of minced mutton & lentils, blended with secret spices, shallow fried.',
    price: 2800,
    priceLabel: '₹2,800',
    unit: '/kg',
    portion: 'Serves 8-10 pax',
    servesNote: '1 kg Platter • Serves 8-10 pax',
    portionAlt: 'Also ₹325/serve',
    image: '/images/begums-shami-kebab.jpg',
  },
];

function DishImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="shahi-image-placeholder" aria-label={alt}>
        <Utensils size={28} className="placeholder-gold-icon" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="shahi-dish-img"
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

export default function ShahiAghaaz({ onAddToCart, cart = [] }) {
  const whatsappUrl = (dishName) =>
    `https://wa.me/919845012345?text=Hello%20Begum's,%20I%20would%20like%20to%20order%20${encodeURIComponent(dishName)}%20from%20Shahi%20Aghaaz`;

  return (
    <section id="shahi-aghaaz" className="begums-section shahi-aghaaz-section mughal-watermark-bg section-divider-bottom">
      {/* Blurred Radial Glows: Warm Gold (8-10% opacity) behind Shahi Aghaaz */}
      <div className="radial-glow glow-gold-shahi blur-3xl" aria-hidden="true" />
      <div className="radial-glow glow-gold-shahi-subtle blur-3xl" aria-hidden="true" />

      <div className="container">
        {/* Centered Gold Serif Heading + 'THE ROYAL BEGINNING' Subtitle with ─ ❖ ─ Divider */}
        <div className="section-header-compact reveal">
          <div className="section-pretitle">
            <Crown size={14} className="text-gold" />
            <span>THE ROYAL BEGINNING</span>
          </div>

          <h2 className="section-title font-royal">
            SHAHI AGHAAZ
          </h2>

          <div className="gold-decorative-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>

          <p className="section-subtitle-compact">
            Royal Hyderabadi appetizers to awaken the palate before the grand Dum Biryani dastarkhwan.
          </p>
        </div>

        {/* 2-Column Grid of 4 Dark-Glass Dish Rows */}
        <div className="shahi-dish-grid">
          {SHAHI_DISHES.map((dish) => {
            const inCart = cart.find((item) => item.id === dish.id);
            return (
              <div key={dish.id} className="shahi-dish-card reveal">
                {/* Left: AI-generated moody food image (rounded-xl, ~150px) */}
                <div className="shahi-dish-image-wrapper">
                  <DishImage src={dish.image} alt={dish.name} />
                  <span className="shahi-dish-tag">{dish.tag}</span>
                </div>

                {/* Right: Info, Price, Serves and Actions */}
                <div className="shahi-dish-content">
                  <div className="shahi-dish-header">
                    <h3 className="shahi-dish-name font-royal">{dish.name}</h3>
                    <div className="shahi-price-serves">
                      <span className="shahi-price font-royal">
                        {dish.priceLabel}
                        <small className="shahi-unit">{dish.unit}</small>
                      </span>
                      <span className="shahi-serves">{dish.portion}</span>
                    </div>
                  </div>

                  <p className="shahi-dish-desc">{dish.description}</p>

                  <div className="shahi-dish-footer">
                    <span className="shahi-single-note">{dish.portionAlt}</span>
                    <div className="shahi-actions">
                      {onAddToCart && (
                        <button
                          type="button"
                          className={`shahi-add-btn ${inCart ? 'in-cart' : ''}`}
                          onClick={() => onAddToCart(dish)}
                          aria-label={`Add ${dish.name} to order`}
                        >
                          {inCart ? (
                            <>
                              <Check size={14} />
                              <span>Added ({inCart.quantity})</span>
                            </>
                          ) : (
                            <>
                              <Plus size={14} />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      )}
                      <a
                        href={whatsappUrl(dish.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shahi-wa-btn"
                        title="Order via WhatsApp"
                        aria-label={`Order ${dish.name} on WhatsApp`}
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
