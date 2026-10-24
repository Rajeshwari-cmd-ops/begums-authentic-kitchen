import React from 'react';
import { Crown, Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellers({
  products,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onOpenDetails,
  onViewAllMenu
}) {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="signatures" className="section-padding begums-bestsellers-section">
      <div className="container">
        <div className="section-header">
          <div className="section-pretitle">
            <Crown size={14} />
            <span>HEIRLOOM CROWN JEWELS</span>
          </div>
          <h2 className="section-title">
            Shahi <span className="gold-text">Signatures</span>
          </h2>
          <p className="section-subtitle">
            The dishes that define Begum's legacy — from our slow-cooked Mutton Dum Biryani in copper handis
            to silky Mutton Shami Kebabs and luscious Qubani Ka Meetha.
          </p>
          <div className="royal-divider">
            <span>✦ ❖ ✦</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="royal-products-grid">
          {bestSellers.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                cartItem={cartItem}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
                onOpenDetails={onOpenDetails}
              />
            );
          })}
        </div>

        <div className="bestsellers-cta-wrap">
          <button
            type="button"
            className="btn-gold"
            onClick={onViewAllMenu}
          >
            <span>Explore All Shahi Offerings</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
