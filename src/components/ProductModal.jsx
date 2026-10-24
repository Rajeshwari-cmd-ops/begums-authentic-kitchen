import React from 'react';
import { X, Star, Users, Flame, ShieldCheck, Plus, Minus, Crown, Check } from 'lucide-react';
import { formatPrice, handleImageError } from '../utils/helpers';

export default function ProductModal({
  product,
  cartItem,
  onClose,
  onAddToCart,
  onUpdateQuantity
}) {
  if (!product) return null;

  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container royal-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          <div className="modal-image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="modal-product-img"
              onError={handleImageError}
            />
            <div className={`modal-diet-badge ${product.isVeg ? 'diet-veg' : 'diet-nonveg'}`}>
              <span className="dot-inner" />
              <span>{product.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</span>
            </div>
            {product.badge && (
              <span className="modal-badge-float">
                <Crown size={12} /> {product.badge}
              </span>
            )}
          </div>

          <div className="modal-info-col">
            <div className="modal-meta-row">
              <span className="modal-serves-pill">
                <Users size={14} className="text-gold" />
                <span>{product.serves || product.portion}</span>
              </span>
              <div className="product-rating">
                <Star size={14} fill="#D4AF37" color="#D4AF37" />
                <span>{product.rating?.toFixed(1) || '4.9'}</span>
                <span className="review-count">({product.reviewsCount || 150} reviews)</span>
              </div>
            </div>

            <h2 className="modal-product-title font-royal">{product.name}</h2>
            {product.subtitle && (
              <span className="modal-product-subtitle font-serif">{product.subtitle}</span>
            )}

            <p className="modal-product-desc">{product.description}</p>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="modal-ingredients-section">
                <h4 className="font-royal">Royal Spices & Ingredients:</h4>
                <div className="modal-tags-list">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="ingredient-tag">
                      <Check size={12} className="text-gold" /> {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Packaging Note */}
            <div className="modal-packaging-perk">
              <ShieldCheck size={16} className="text-gold" />
              <span>Dispatched in sealed handi / thermal platter with fresh accompaniment options.</span>
            </div>

            {/* Price & Add Block */}
            <div className="modal-action-footer">
              <div className="modal-price-wrap">
                <span className="modal-price-amount font-royal">{formatPrice(product.price)}</span>
                <span className="modal-price-unit">{product.unit || '/kg'}</span>
              </div>

              <div className="modal-btn-wrap">
                {quantity === 0 ? (
                  <button
                    type="button"
                    className="btn-gold modal-add-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    <span>Add to Dastarkhwan</span>
                    <Plus size={16} />
                  </button>
                ) : (
                  <div className="royal-qty-stepper" role="group" aria-label="Item quantity">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-val" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
