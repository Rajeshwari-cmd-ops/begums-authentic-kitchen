import React, { useState, useMemo } from 'react';
import { Crown, Sparkles, Flame, Utensils, Heart, Search, X } from 'lucide-react';
import { CATEGORIES, BRAND_INFO } from '../data/products';
import ProductCard from './ProductCard';

const categoryIconMap = {
  Crown: <Crown size={16} />,
  Sparkles: <Sparkles size={16} />,
  Flame: <Flame size={16} />,
  Utensils: <Utensils size={16} />,
  Heart: <Heart size={16} />
};

export default function Menu({
  products,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onOpenDetails
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category, diet, and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      let categoryMatch = true;
      if (activeCategory === 'sunday-specials') {
        categoryMatch = product.isSundaySpecial === true;
      } else if (activeCategory !== 'all') {
        categoryMatch = product.category === activeCategory;
      }

      // Diet match
      let dietMatch = true;
      if (dietFilter === 'veg') dietMatch = product.isVeg === true;
      if (dietFilter === 'non-veg') dietMatch = product.isVeg === false;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      let searchMatch = true;
      if (query) {
        const inName = product.name.toLowerCase().includes(query);
        const inDesc = product.description.toLowerCase().includes(query);
        const inIng = product.ingredients
          ? product.ingredients.some((ing) => ing.toLowerCase().includes(query))
          : false;
        searchMatch = inName || inDesc || inIng;
      }

      return categoryMatch && dietMatch && searchMatch;
    });
  }, [products, activeCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="begums-section begums-menu-section section-divider-bottom">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-compact">
          <div className="section-pretitle">
            <Crown size={14} className="text-gold" />
            <span>AUTHENTIC HYDERABADI TASTE</span>
          </div>
          <h2 className="section-title font-royal">
            Shahi Dastarkhwan <span className="gold-text">Menu</span>
          </h2>
          <div className="gold-decorative-divider">
            <span className="divider-line" />
            <span className="divider-emblem">❖</span>
            <span className="divider-line" />
          </div>
          <p className="section-subtitle-compact">
            Every dish is prepared using heirloom royal recipes from Hyderabad. Order generous kilogram
            family portions for your home dastarkhwan, delivered steaming hot across Bangalore.
          </p>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="royal-filter-controls">
          {/* Search Box */}
          <div className="royal-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="royal-search-input"
              placeholder="Search biryani, shami kebab, pepper chops, qubani..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search dishes"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="diet-filter-pills" role="radiogroup" aria-label="Dietary preferences">
            <button
              type="button"
              className={`diet-pill ${dietFilter === 'all' ? 'pill-active' : ''}`}
              onClick={() => setDietFilter('all')}
            >
              All Royal Dishes
            </button>
            <button
              type="button"
              className={`diet-pill pill-veg ${dietFilter === 'veg' ? 'pill-active' : ''}`}
              onClick={() => setDietFilter('veg')}
            >
              <span className="veg-dot" /> Pure Veg
            </button>
            <button
              type="button"
              className={`diet-pill pill-nonveg ${dietFilter === 'non-veg' ? 'pill-active' : ''}`}
              onClick={() => setDietFilter('non-veg')}
            >
              <span className="nonveg-dot" /> Non-Veg
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="royal-category-nav" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`cat-tab-btn ${activeCategory === cat.id ? 'cat-active' : ''} ${cat.isSpecial ? 'cat-special' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon-wrap">
                {categoryIconMap[cat.icon] || <Sparkles size={16} />}
              </span>
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Mehfil-E-Khaas Couplet Banner if active */}
        {activeCategory === 'mehfil-e-khaas' && (
          <div className="urdu-couplet-card mehfil-couplet-box">
            <div className="urdu-couplet-text">
              "Qubani ki meethas bhi adaah se mili,<br />
              Har luqme mein mehfil ki nazaakat mili.<br />
              Aakhir mein jo yeh meetha zubaan ko chhoo gaya,<br />
              Toh daawat ko mukammal si ibaadat mili."
            </div>
            <div className="urdu-couplet-source">— Mehfil-E-Khaas</div>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="royal-products-grid">
            {filteredProducts.map((product) => {
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
        ) : (
          <div className="royal-no-results">
            <Crown size={48} className="no-results-icon" />
            <h3 className="no-results-title font-royal">No Royal Delicacies Found</h3>
            <p className="no-results-desc">
              We couldn't find any dishes matching "{searchQuery}". Try selecting "All Royal Dishes" or clearing the search.
            </p>
            <button
              type="button"
              className="btn-gold"
              onClick={() => {
                setActiveCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
            >
              View Full Menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
