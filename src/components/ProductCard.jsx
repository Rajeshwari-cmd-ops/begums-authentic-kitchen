import React from 'react';
import { Plus, Minus, Star, Users, Flame } from 'lucide-react';
import { formatPrice, handleImageError } from '../utils/helpers';

export default function ProductCard({
  product,
  cartItem,
  onAddToCart,
  onUpdateQuantity,
  onOpenDetails
}) {
  const {
    id,
    name,
    subtitle,
    price,
    unit = '/kg',
    portion,
    serves,
    rating = 4.9,
    reviewsCount = 120,
    isVeg,
    isSpicy,
    description,
    image,
    badge
  } = product;

  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className={`menu-card reveal ${id.includes('dessert') ? 'menu-card-dessert' : ''}`} id={`product-${id}`}>
      {/* Small Gold Diamond Icon that sparkles once in corner on entrance */}
      <span className="card-corner-sparkle" aria-hidden="true">✦</span>

      {/* Royal Photo Frame: Inset inside card with p-2 padding around it */}
      <div className="menu-card-frame">
        <div
          className="menu-card-media"
          onClick={() => onOpenDetails && onOpenDetails(product)}
          title={`View details of ${name}`}
        >
          <img
            src={image}
            alt={name}
            className="menu-card-img"
            loading="lazy"
            onError={handleImageError}
          />

          {/* Veg / Non-Veg Indicator */}
          <div
            className={`diet-badge ${isVeg ? 'diet-veg' : 'diet-nonveg'}`}
            title={isVeg ? 'Pure Veg' : 'Non-Veg'}
          >
            <span className="diet-dot" />
          </div>

          {/* Serving / Pax Tag */}
          {(serves || portion) && (
            <div className="card-serves-tag">
              <Users size={11} />
              <span>{serves || portion}</span>
            </div>
          )}

          {/* Optional Ribbon Badge */}
          {badge && (
            <span className="card-ribbon-badge">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Small Gold ✦ Ornament Centered Between Image and Name */}
      <div className="menu-card-ornament" aria-hidden="true">
        <span className="ornament-line" />
        <span className="ornament-star">✦</span>
        <span className="ornament-line" />
      </div>

      {/* Card Content: p-4 content */}
      <div className="menu-card-body">
        {/* Name + Rating Header Row */}
        <div className="card-header-row">
          <h3
            className="card-title font-royal"
            onClick={() => onOpenDetails && onOpenDetails(product)}
          >
            {name}
          </h3>
          <div className="card-rating" aria-label={`Rating ${rating.toFixed(1)} out of 5 stars`}>
            <Star size={13} className="rating-star" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Gold Subtitle */}
        {subtitle && <span className="card-subtitle font-serif">{subtitle}</span>}

        {/* Line-clamp-2 Description */}
        <p className="card-desc">{description}</p>

        {/* Card Divider Line */}
        <div className="card-divider-line" aria-hidden="true" />

        {/* Card Footer: Verified Price & Compact Action with mt-auto */}
        <div className="menu-card-footer">
          <div className="card-price-group">
            <span className="card-price font-royal">{formatPrice(price)}</span>
            <span className="card-unit">{unit}</span>
          </div>

          <div className="card-action-group">
            {quantity === 0 ? (
              <button
                type="button"
                className="btn-order-compact"
                onClick={() => onAddToCart(product)}
                aria-label={`Order ${name}`}
              >
                <span>Order Now</span>
                <Plus size={14} />
              </button>
            ) : (
              <div className="card-stepper" role="group" aria-label="Item quantity">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                <span className="stepper-val" aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
