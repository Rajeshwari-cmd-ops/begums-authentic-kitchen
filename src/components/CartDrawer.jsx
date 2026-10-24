import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Crown,
  Sparkles,
  Tag,
  ShieldCheck,
  Check
} from 'lucide-react';
import { formatPrice, handleImageError } from '../utils/helpers';

const FREE_DELIVERY_THRESHOLD = 1400; // 1 kg handi threshold

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCheckout
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const discountAmount = subtotal * appliedDiscount;
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = subtotal === 0 ? 0 : isFreeDelivery ? 0 : 75;
  const royalPackaging = subtotal === 0 ? 0 : 50; // Insulated handi packaging
  const gstTax = (subtotal - discountAmount) * 0.05; // 5% GST
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee + royalPackaging + gstTax);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'ROYALBEGUM' || clean === 'SUNDAY') {
      setAppliedDiscount(0.10);
      setCouponStatus({ type: 'success', message: 'Nizami code applied: 10% Royal Privilege!' });
    } else {
      setCouponStatus({ type: 'error', message: 'Use code ROYALBEGUM for 10% privilege.' });
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedDiscount(0);
    setCouponCode('');
    setCouponStatus(null);
  };

  return (
    <div className="cart-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="royal-cart-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <Crown size={20} className="text-gold" />
            <div>
              <h2 className="font-royal">Your Dastarkhwan</h2>
              <span className="cart-count-sub">
                {itemsCount} {itemsCount === 1 ? 'royal selection' : 'royal selections'}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="royal-delivery-progress-wrap">
          <div className="delivery-progress-text">
            {isFreeDelivery ? (
              <span className="free-unlocked">
                <Sparkles size={14} className="text-gold" /> Free Royal Bangalore Handi Delivery Unlocked!
              </span>
            ) : (
              <span>
                Add {formatPrice(FREE_DELIVERY_THRESHOLD - subtotal)} more for <strong>Free Bangalore Delivery</strong>
              </span>
            )}
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-cart-icon">
                <Crown size={48} />
              </div>
              <h3 className="font-royal">Your Dastarkhwan is Empty</h3>
              <p>Select our slow-cooked Dum biryanis, Shahi kebabs, or Sunday specials to begin your royal feast.</p>
              <button
                type="button"
                className="btn-gold"
                onClick={onClose}
              >
                Browse Shahi Menu
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-thumb"
                    onError={handleImageError}
                  />

                  <div className="cart-item-details">
                    <div className="item-name-top">
                      <h4 className="item-title font-royal">{item.name}</h4>
                      <button
                        type="button"
                        className="item-remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        title="Remove dish"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <span className="item-portion-tag">
                      {item.portion || item.serves || 'Royal Portion'}
                    </span>

                    <div className="item-bottom-row">
                      <div className="item-price-calc font-royal">
                        {formatPrice(item.price * item.quantity)}
                      </div>

                      <div className="royal-qty-stepper cart-stepper">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Bill Breakdown */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="coupon-form-royal">
              <div className="coupon-input-wrap">
                <Tag size={15} className="coupon-icon" />
                <input
                  type="text"
                  placeholder="Enter code ROYALBEGUM"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={appliedDiscount > 0}
                  className="coupon-input"
                />
                {appliedDiscount > 0 ? (
                  <button
                    type="button"
                    className="coupon-remove-btn"
                    onClick={handleRemoveCoupon}
                  >
                    Remove
                  </button>
                ) : (
                  <button type="submit" className="coupon-apply-btn">
                    Apply
                  </button>
                )}
              </div>
              {couponStatus && (
                <div className={`coupon-msg ${couponStatus.type}`}>
                  {couponStatus.type === 'success' ? <Check size={13} /> : null}
                  <span>{couponStatus.message}</span>
                </div>
              )}
            </form>

            {/* Bill Summary */}
            <div className="cart-bill-summary">
              <div className="bill-row">
                <span>Dastarkhwan Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="bill-row discount-row">
                  <span>Royal Privilege (10%)</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="bill-row">
                <span>Insulated Handi Packaging</span>
                <span>{formatPrice(royalPackaging)}</span>
              </div>

              <div className="bill-row">
                <span>Bangalore Delivery</span>
                <span>{isFreeDelivery ? <strong className="text-gold">FREE</strong> : formatPrice(deliveryFee)}</span>
              </div>

              <div className="bill-row">
                <span>GST (5%)</span>
                <span>{formatPrice(gstTax)}</span>
              </div>

              <div className="bill-divider" />

              <div className="bill-row total-row">
                <span className="total-label font-royal">Grand Total</span>
                <span className="total-amount font-royal gold-text">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              type="button"
              className="btn-gold btn-block cart-checkout-btn"
              onClick={onOpenCheckout}
            >
              <span>Proceed to Royal Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
