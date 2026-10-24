import React, { useState } from 'react';
import {
  X,
  AlertTriangle,
  CheckCircle,
  Clock,
  ShieldCheck,
  CreditCard,
  DollarSign,
  Smartphone,
  MapPin,
  User,
  Phone,
  FileText,
  Flame,
  ArrowRight,
  Package,
  Bike
} from 'lucide-react';
import { formatPrice } from '../utils/helpers';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  subtotal,
  onOrderSuccess
}) {
  const [formData, setFormData] = useState({
    name: 'Arjun Sharma',
    phone: '+91 98450 12345',
    address: 'Flat 402, Prestige Hermitage, 12th Main, Indiranagar',
    postalCode: '560038',
    instructions: 'Ring calling bell 402, leave with security guard if unavailable.',
    deliveryOption: 'asap', // 'asap' | 'schedule'
    paymentMethod: 'upi' // 'upi' | 'card' | 'cash'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const tax = subtotal * 0.05;
  const delivery = subtotal >= 1400 ? 0 : 75;
  const packaging = 50; // Thermal handi packaging
  const finalTotal = subtotal + tax + delivery + packaging;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate short network delay for realistic experience
    setTimeout(() => {
      const generatedId = `BG-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderConfirmed(true);
      if (onOrderSuccess) onOrderSuccess();
    }, 900);
  };

  const handleResetOrder = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container checkout-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close checkout modal"
        >
          <X size={20} />
        </button>

        {!orderConfirmed ? (
          <div>
            {/* Prominent Demo Notice Banner */}
            <div className="demo-warning-banner" role="alert">
              <AlertTriangle size={20} className="warning-icon" />
              <div>
                <strong className="warning-heading">DEMO CHECKOUT — NON-PRODUCTION ENVIRONMENT</strong>
                <p className="warning-text">
                  This checkout is an interactive simulation designed for client evaluation.
                  No actual payment, credit card charges, or food delivery dispatch will occur.
                </p>
              </div>
            </div>

            <h2 className="checkout-title">Express Cloud Kitchen Dispatch</h2>
            <p className="checkout-subtitle">
              Review delivery details and complete your demo order.
            </p>

            <form onSubmit={handlePlaceOrder} className="checkout-form-grid">
              {/* Left Column: Form Fields */}
              <div className="checkout-fields-col">
                {/* 1. Recipient Details */}
                <div className="form-card-section">
                  <h3 className="form-card-title">
                    <User size={18} /> 1. Contact Information
                  </h3>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="form-label" htmlFor="checkout-name">Full Name</label>
                      <input
                        type="text"
                        id="checkout-name"
                        name="name"
                        required
                        className="input-control"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="checkout-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="checkout-phone"
                        name="phone"
                        required
                        className="input-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Delivery Address */}
                <div className="form-card-section">
                  <h3 className="form-card-title">
                    <MapPin size={18} /> 2. Delivery Location
                  </h3>
                  <div className="form-field">
                    <label className="form-label" htmlFor="checkout-address">Street Address & Unit</label>
                    <input
                      type="text"
                      id="checkout-address"
                      name="address"
                      required
                      className="input-control"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-row-2" style={{ marginTop: '12px' }}>
                    <div className="form-field">
                      <label className="form-label" htmlFor="checkout-postal">Postal / Zip Code</label>
                      <input
                        type="text"
                        id="checkout-postal"
                        name="postalCode"
                        required
                        className="input-control"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Delivery Hub</label>
                      <div className="static-hub-pill">Indiranagar Cloud Hub #1</div>
                    </div>
                  </div>
                  <div className="form-field" style={{ marginTop: '12px' }}>
                    <label className="form-label" htmlFor="checkout-notes">Courier Notes (Optional)</label>
                    <input
                      type="text"
                      id="checkout-notes"
                      name="instructions"
                      className="input-control"
                      value={formData.instructions}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* 3. Delivery Timing */}
                <div className="form-card-section">
                  <h3 className="form-card-title">
                    <Clock size={18} /> 3. Dispatch Timing
                  </h3>
                  <div className="timing-options-row">
                    <label className={`timing-card ${formData.deliveryOption === 'asap' ? 'timing-selected' : ''}`}>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="asap"
                        checked={formData.deliveryOption === 'asap'}
                        onChange={handleInputChange}
                      />
                      <div>
                        <strong>Express ASAP</strong>
                        <span>Est. 30–35 minutes</span>
                      </div>
                    </label>

                    <label className={`timing-card ${formData.deliveryOption === 'schedule' ? 'timing-selected' : ''}`}>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="schedule"
                        checked={formData.deliveryOption === 'schedule'}
                        onChange={handleInputChange}
                      />
                      <div>
                        <strong>Scheduled Today</strong>
                        <span>Between 7:00 – 7:45 PM</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 4. Payment Simulation */}
                <div className="form-card-section">
                  <h3 className="form-card-title">
                    <CreditCard size={18} /> 4. Payment Simulation (No Real Charge)
                  </h3>
                  <div className="payment-options-row">
                    <label className={`payment-pill ${formData.paymentMethod === 'upi' ? 'payment-selected' : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                      />
                      <Smartphone size={16} />
                      <span>Demo UPI (Google Pay / PhonePe / Paytm)</span>
                    </label>

                    <label className={`payment-pill ${formData.paymentMethod === 'card' ? 'payment-selected' : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                      />
                      <CreditCard size={16} />
                      <span>Demo Credit / Debit Card (Visa, RuPay, MC)</span>
                    </label>

                    <label className={`payment-pill ${formData.paymentMethod === 'cash' ? 'payment-selected' : ''}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                      />
                      <DollarSign size={16} />
                      <span>Demo Cash on Delivery (COD)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary Preview & Button */}
              <div className="checkout-summary-col">
                <div className="summary-sticky-card">
                  <h3 className="summary-title">Order Overview ({totalItems} items)</h3>
                  
                  <ul className="summary-items-list">
                    {cart.map((item) => (
                      <li key={item.id} className="summary-item-line">
                        <span className="summary-item-qty">{item.quantity}x</span>
                        <span className="summary-item-name">{item.name}</span>
                        <span className="summary-item-price">{formatPrice(item.price * item.quantity)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="summary-fees-box">
                    <div className="summary-fee-row">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="summary-fee-row">
                      <span>Express Delivery</span>
                      <span>{delivery === 0 ? 'FREE' : formatPrice(delivery)}</span>
                    </div>
                    <div className="summary-fee-row">
                      <span>Thermal Packaging</span>
                      <span>{formatPrice(packaging)}</span>
                    </div>
                    <div className="summary-fee-row">
                      <span>GST (5%)</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    <div className="summary-divider" />
                    <div className="summary-fee-row grand-total-row">
                      <span>Total Demo Amount</span>
                      <span>{formatPrice(finalTotal)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg btn-place-demo"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Simulating Dispatch...</span>
                    ) : (
                      <>
                        <span>Place Demo Order ({formatPrice(finalTotal)})</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <div className="demo-notice-bottom">
                    <ShieldCheck size={14} color="#1B8A46" />
                    <span>Safe Demo Simulation • Zero charges incurred</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="order-confirmed-view">
            <div className="confirmed-celebration-bubble">
              <CheckCircle size={54} color="#1B8A46" />
            </div>

            <span className="confirmed-pill">Simulated Order Successfully Dispatched</span>
            <h2 className="confirmed-title">Thank You, {formData.name}!</h2>
            <p className="confirmed-sub">
              Your demo order <strong>#{orderId}</strong> has been transmitted to our Indiranagar Cloud Kitchen Hub #1.
            </p>

            {/* Estimated Arrival Banner */}
            <div className="confirmed-eta-banner">
              <Clock size={20} color="#F28C28" />
              <div>
                <span className="eta-title">Estimated Doorstep Arrival</span>
                <span className="eta-time">32 Minutes from now (Hot & Steaming)</span>
              </div>
            </div>

            {/* Simulated Live Order Tracker */}
            <div className="order-tracker-card">
              <h4 className="tracker-heading">Live Kitchen Stage Tracker</h4>
              <div className="tracker-stages-row">
                <div className="tracker-step step-done">
                  <div className="tracker-dot">
                    <CheckCircle size={14} />
                  </div>
                  <span className="step-label">Order Received</span>
                  <span className="step-sub">Confirmed</span>
                </div>
                <div className="tracker-line line-active" />
                <div className="tracker-step step-current">
                  <div className="tracker-dot">
                    <Flame size={14} />
                  </div>
                  <span className="step-label">Station Chefs Cooking</span>
                  <span className="step-sub">In Real-Time</span>
                </div>
                <div className="tracker-line" />
                <div className="tracker-step">
                  <div className="tracker-dot">
                    <Package size={14} />
                  </div>
                  <span className="step-label">Thermal Packaging</span>
                  <span className="step-sub">Insulated Box</span>
                </div>
                <div className="tracker-line" />
                <div className="tracker-step">
                  <div className="tracker-dot">
                    <Bike size={14} />
                  </div>
                  <span className="step-label">Courier En Route</span>
                  <span className="step-sub">35m Transit</span>
                </div>
              </div>
            </div>

            {/* Delivery Destination Snapshot */}
            <div className="confirmed-details-card">
              <div className="detail-row">
                <strong>Delivery Address:</strong>
                <span>{formData.address}, Zip {formData.postalCode}</span>
              </div>
              <div className="detail-row">
                <strong>Contact Phone:</strong>
                <span>{formData.phone}</span>
              </div>
              <div className="detail-row">
                <strong>Payment Mode:</strong>
                <span>Demo {formData.paymentMethod.toUpperCase()} (Simulated)</span>
              </div>
            </div>

            <div className="confirmed-actions-row">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleResetOrder}
              >
                Place Another Demo Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
