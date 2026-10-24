// Utility helpers for Begum's Authentic Hyderabadi Kitchen (Bangalore)

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const FALLBACK_FOOD_IMAGE = '/images/begums-dum-biryani.jpg';

export const handleImageError = (e) => {
  if (e.target.src !== FALLBACK_FOOD_IMAGE && !e.target.src.includes('begums-dum-biryani.jpg')) {
    e.target.src = FALLBACK_FOOD_IMAGE;
  }
};
