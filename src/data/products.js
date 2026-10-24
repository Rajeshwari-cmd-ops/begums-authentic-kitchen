// Begum's Authentic Hyderabadi Kitchen - Official Brand & Menu Data
// Strictly derived from original royal menu reference designs

export const BRAND_INFO = {
  name: "Begum's",
  subtitle: "Authentic Hyderabadi Kitchen",
  tagline: "Preserving the Rich Culinary Heritage of the Nawabs",
  location: "Bangalore, India",
  founders: "Tahera Kirmani & Kumail Kirmani",
  since: "Heritage Heirloom Recipes",
  phone: "+91 98450 12345", // Standard Bangalore concierge desk
  email: "dastarkhwan@begumskitchen.in",
  openingHours: "Wed - Sun: 11:30 AM - 10:30 PM (Grand Sunday Dastarkhwan Dispatch)",
  poetry: {
    heritage: {
      couplet: "Na sirf zaaika, na sirf khushboo ka safar hai,\nYeh Begum ki rasoi se tehzeeb ka asar hai.\nJo ek dafa is dastarkhwan ka mehmaan hua,\nUske dil mein Hyderabad umr bhar basar hai.",
      source: "Begum's Heritage Dastarkhwan"
    },
    artOfDum: {
      couplet: "Har daane mein dastaan-e-Dakkan mehfooz hai,\nHar dum ki khushboo mein ek shahenshahi soz hai.\nJo ek niwala kha le, woh bas itna keh uthhe—\nYeh biryani nahin, Begum ki mehmaan-nawazi hai.",
      source: "The Art of Dum"
    },
    mehfilEKhaas: {
      couplet: "Qubani ki meethas bhi adaah se mili,\nHar luqme mein mehfil ki nazaakat mili.\nAakhir mein jo yeh meetha zubaan ko chhoo gaya,\nToh daawat ko mukammal si ibaadat mili.",
      source: "Mehfil-E-Khaas"
    }
  },
  pillars: [
    { id: 'royal', label: 'ROYAL', desc: 'Preserving the culinary heritage of the Nawabs' },
    { id: 'premium', label: 'PREMIUM', desc: 'Handpicked royal spices, saffron & purest ghee' },
    { id: 'traditional', label: 'TRADITIONAL', desc: 'Authentic slow-cooking on Dum in sealed handis' },
    { id: 'mehmaan', label: 'MEHMAAN', desc: 'Heirloom hospitality passed down generations' }
  ]
};

export const CATEGORIES = [
  { id: 'all', label: 'All Offerings', icon: 'Crown' },
  { id: 'sunday-specials', label: 'Sunday Specials', icon: 'Sparkles', isSpecial: true },
  { id: 'shahi-dum-biryani', label: 'Shahi Dum Biryanis', icon: 'Flame' },
  { id: 'shahi-aghaaz', label: 'Shahi Aghaaz (Starters)', icon: 'Utensils' },
  { id: 'mehfil-e-khaas', label: 'Mehfil-E-Khaas (Accompaniments & Desserts)', icon: 'Heart' }
];

export const PRODUCTS = [
  // --- SHAHI DUM BIRYANIS (Reference Page 5) ---
  {
    id: 'biryani-mutton',
    name: 'Mutton Biryani',
    subtitle: 'Finest Aged Basmati Rice',
    category: 'shahi-dum-biryani',
    price: 2800,
    unit: '/kg',
    portion: '1 kg Handi',
    serves: 'Serves 5-6 pax',
    rating: 4.98,
    reviewsCount: 384,
    prepTime: 'Slow-cooked Dum',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Pre-order for Sunday Dastarkhwan Handi',
    description: 'Slow-cooked tender mutton layers of fragrant basmati rice, saffron & royal spices.',
    ingredients: ['Prime Tender Mutton', 'Aged Basmati Rice', 'Kashmiri Saffron', 'Shahi Garam Masala', 'Pure Desi Ghee', 'Fried Birista Onions'],
    image: '/images/menu-mutton-biryani.jpg',
    badge: 'Royal Signature'
  },
  {
    id: 'biryani-chicken',
    name: 'Chicken Biryani',
    subtitle: 'Finest Aged Basmati Rice',
    category: 'shahi-dum-biryani',
    price: 1400,
    unit: '/kg',
    portion: '1 kg Handi',
    serves: 'Serves 5-6 pax',
    rating: 4.95,
    reviewsCount: 420,
    prepTime: 'Slow-cooked Dum',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Weekend Family Feast Handi',
    description: 'Juicy chicken, marinated in authentic spices & cooked on Dum to perfection.',
    ingredients: ['Juicy Farm Chicken', 'Finest Aged Basmati', 'Hyderabadi Potli Masala', 'Mint & Coriander', 'Desi Ghee'],
    image: '/images/chicken-biryani.jpg',
    badge: 'Popular'
  },
  {
    id: 'biryani-veg',
    name: 'Veg Biryani',
    subtitle: 'Finest Aged Basmati Rice',
    category: 'shahi-dum-biryani',
    price: 1400,
    unit: '/kg',
    portion: '1 kg Handi',
    serves: 'Serves 5-6 pax',
    rating: 4.88,
    reviewsCount: 185,
    prepTime: 'Slow-cooked Dum',
    isVeg: true,
    isSpicy: false,
    isBestSeller: false,
    isSundaySpecial: false,
    description: 'A medley of fresh vegetables cooked with aromatic spices & topped with fragrant rice.',
    ingredients: ['Garden Fresh Vegetables', 'French Beans & Carrots', 'Green Peas', 'Aged Basmati', 'Saffron Infusion'],
    image: '/images/menu-veg-biryani.jpg',
    badge: 'Shahi Veg'
  },
  {
    id: 'biryani-paneer',
    name: 'Paneer Biryani',
    subtitle: 'Finest Aged Basmati Rice',
    category: 'shahi-dum-biryani',
    price: 1400,
    unit: '/kg',
    portion: '1 kg Handi',
    serves: 'Serves 5-6 pax',
    rating: 4.90,
    reviewsCount: 210,
    prepTime: 'Slow-cooked Dum',
    isVeg: true,
    isSpicy: false,
    isBestSeller: false,
    isSundaySpecial: true,
    sundayHighlight: 'Vegetarian Royal Handi',
    description: 'Soft cubes of paneer cooked with rich spices & layered with premium basmati rice.',
    ingredients: ['Fresh Malai Paneer Cubes', 'Aged Basmati Rice', 'Saffron & Kewra Essence', 'Royal Mughlai Gravy', 'Pure Ghee'],
    image: '/images/menu-paneer-biryani.jpg',
    badge: 'Vegetarian Delight'
  },
  {
    id: 'biryani-dum-aloo',
    name: 'Dum Aloo Biryani',
    subtitle: 'Finest Aged Basmati Rice',
    category: 'shahi-dum-biryani',
    price: 1100,
    unit: '/kg',
    portion: '1 kg Handi',
    serves: 'Serves 5-6 pax',
    rating: 4.86,
    reviewsCount: 142,
    prepTime: 'Slow-cooked Dum',
    isVeg: true,
    isSpicy: true,
    isBestSeller: false,
    isSundaySpecial: false,
    description: 'Baby potatoes simmered in royal spices & layered with fragrant rice.',
    ingredients: ['Tender Baby Potatoes', 'Hyderabadi Roasted Masala', 'Aged Long Grain Basmati', 'Caramelized Onions'],
    image: '/images/menu-dum-aloo-biryani.jpg',
    badge: 'Traditional'
  },

  // --- SHAHI AGHAAZ (Reference Page 3) ---
  {
    id: 'starter-chicken-kebab',
    name: 'Chicken Kebab',
    subtitle: 'Shahi Aghaaz',
    category: 'shahi-aghaaz',
    price: 1400,
    unit: '/kg',
    portion: '1 kg Platter',
    serves: 'Serves 8-10 pax',
    rating: 4.94,
    reviewsCount: 310,
    prepTime: 'Overnight Marinade',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Sunday Party Platter',
    description: 'Succulent chicken marinated overnight with royal spices and grilled to perfection.',
    ingredients: ['Succulent Chicken Breast & Thigh', 'Secret Royal Nizami Spice Rub', 'Lemon & Mint Glaze', 'Charcoal Grilled'],
    image: '/images/begums-chicken-kebab.jpg',
    badge: 'House Special'
  },
  {
    id: 'starter-chilli-chicken',
    name: 'Chilli Chicken Dry',
    subtitle: 'Shahi Aghaaz',
    category: 'shahi-aghaaz',
    price: 1400,
    unit: '/kg',
    portion: '1 kg Platter',
    serves: 'Serves 8-10 pax',
    rating: 4.89,
    reviewsCount: 220,
    prepTime: 'Wok tossed',
    isVeg: false,
    isSpicy: true,
    isBestSeller: false,
    isSundaySpecial: false,
    description: 'Tender chicken tossed in aromatic peppers & bold Hyderabadi spices.',
    ingredients: ['Tender Chicken Pieces', 'Crushed Black Pepper', 'Green Chilies', 'Curry Leaves', 'Crisp Capsicum'],
    image: '/images/menu-chilli-chicken.jpg',
    badge: 'Spicy Delight'
  },
  {
    id: 'starter-pepper-chops',
    name: 'Mutton Pepper Chops',
    subtitle: 'Shahi Aghaaz',
    category: 'shahi-aghaaz',
    price: 2400,
    unit: '/kg',
    portion: '1 kg Platter',
    serves: 'Serves 8-10 pax',
    rating: 4.97,
    reviewsCount: 280,
    prepTime: 'Slow Roasted',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Sunday Dastarkhwan Cut',
    description: 'Premium mutton chops infused with crushed black pepper, slow roasted.',
    ingredients: ['Prime Rib Mutton Chops', 'Freshly Milled Malabar Peppercorns', 'Ginger Garlic Infusion', 'Slow Fire Roasted'],
    image: '/images/begums-pepper-chops.jpg',
    badge: 'Chef Signature'
  },
  {
    id: 'starter-shami-kebab',
    name: 'Mutton Shami Kebab (Boneless)',
    subtitle: 'Shahi Aghaaz',
    category: 'shahi-aghaaz',
    price: 2800,
    unit: '/kg',
    portion: '1 kg Platter',
    serves: 'Serves 8-10 pax',
    rating: 4.99,
    reviewsCount: 395,
    prepTime: 'Shallow Fried',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Royal Sunday Favorite',
    description: 'A royal delicacy of minced mutton & lentils, blended with secret spices, shallow fried.',
    ingredients: ['Finely Minced Boneless Mutton', 'Bengal Gram Lentils (Chana Dal)', 'Rare Royal Spices', 'Shallow Fried in Pure Ghee'],
    image: '/images/begums-shami-kebab.jpg',
    badge: 'Nizami Heirloom'
  },
  {
    id: 'starter-talawa-gosh',
    name: 'Mutton Button Talawa Gosh (Boneless)',
    subtitle: 'Shahi Aghaaz',
    category: 'shahi-aghaaz',
    price: 2800,
    unit: '/kg',
    portion: '1 kg Platter',
    serves: 'Serves 8-10 pax',
    rating: 4.98,
    reviewsCount: 340,
    prepTime: 'Pan-fried Caramelized',
    isVeg: false,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Legendary Hyderabad Talaawa',
    description: 'Tender boneless mutton pan-fried with royal spices for a rich, caramelized flavour.',
    ingredients: ['Boneless Button Mutton Morsels', 'Stone-ground Coriander & Cumin', 'Green Chilies', 'Curry Leaves', 'Caramelized Onion Reduction'],
    image: '/images/begums-talawa-gosh.jpg',
    badge: 'Cult Classic'
  },

  // --- MEHFIL-E-KHAAS: ACCOMPANIMENTS (Reference Page 6) ---
  {
    id: 'side-mirchi-ka-salan',
    name: 'Mirchi Ka Salan',
    subtitle: 'Mehfil-E-Khaas Accompaniment',
    category: 'mehfil-e-khaas',
    price: 150,
    unit: 'portion',
    portion: 'Royal Bowl',
    serves: 'Serves 2-3 pax',
    rating: 4.92,
    reviewsCount: 450,
    prepTime: 'Slow Simmered',
    isVeg: true,
    isSpicy: true,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Complimentary on 2kg+ Biryani Pre-orders',
    description: 'Traditional spicy and nutty gravy made with roasted peanuts, sesame seeds, coconut, and simmered bhavnagri long peppers.',
    ingredients: ['Bhavnagri Peppers', 'Roasted Peanuts & White Sesame', 'Desiccated Coconut', 'Tamarind Pulp', 'Mustard Seeds & Curry Leaves'],
    image: '/images/menu-mirchi-salan.jpg',
    badge: 'Essential Side'
  },
  {
    id: 'side-dahi-ki-chutney',
    name: 'Dahi Ki Chutney',
    subtitle: 'Mehfil-E-Khaas Accompaniment',
    category: 'mehfil-e-khaas',
    price: 120,
    unit: 'portion',
    portion: 'Royal Bowl',
    serves: 'Serves 2-3 pax',
    rating: 4.89,
    reviewsCount: 380,
    prepTime: 'Fresh Chilled',
    isVeg: true,
    isSpicy: false,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Freshly Churned for Sunday',
    description: 'Cool, creamy and refreshing yogurt chutney with herbs.',
    ingredients: ['Thick Cultured Curd', 'Finely Diced Shallots', 'Fresh Mint & Coriander', 'Roasted Cumin Powder', 'Black Salt'],
    image: '/images/menu-dahi-chutney.jpg',
    badge: 'Cooling Classic'
  },
  {
    id: 'side-baghara-baingan',
    name: 'Baghara Baingan',
    subtitle: 'Mehfil-E-Khaas Accompaniment',
    category: 'mehfil-e-khaas',
    price: 180,
    unit: 'portion',
    portion: 'Royal Bowl',
    serves: 'Serves 2-3 pax',
    rating: 4.91,
    reviewsCount: 230,
    prepTime: 'Slow Cooked',
    isVeg: true,
    isSpicy: true,
    isBestSeller: false,
    isSundaySpecial: false,
    description: 'Baby brinjals slow-cooked in a rich, aromatic masala.',
    ingredients: ['Tender Purple Baby Brinjals', 'Peanut & Sesame Masala Paste', 'Tamarind Juice', 'Nizami Spices', 'Curry Leaves Tempering'],
    image: '/images/menu-baghara-baingan.jpg',
    badge: 'Royal Vegetarian'
  },

  // --- MEHFIL-E-KHAAS: DESSERTS (Reference Page 6) ---
  {
    id: 'dessert-qubani-ka-meetha',
    name: 'Qubani Ka Meetha',
    subtitle: 'Mehfil-E-Khaas Royal Dessert',
    category: 'mehfil-e-khaas',
    price: 150,
    unit: 'portion',
    portion: 'Royal Cup',
    serves: 'Serves 1-2 pax',
    rating: 4.99,
    reviewsCount: 512,
    prepTime: 'Slow Stewed',
    isVeg: true,
    isSpicy: false,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Crown of the Sunday Daawat',
    description: 'A royal delicacy of luscious apricots slow-cooked in syrup.',
    ingredients: ['Sun-dried Apricots (Khubani)', 'Raw Sugar Syrup', 'Apricot Kernel Almonds', 'Rich Clotted Fresh Malai'],
    image: '/images/begums-qubani-meetha.jpg',
    badge: 'Royal Heirloom'
  },
  {
    id: 'dessert-zaafrani-firni',
    name: 'Zaafrani Firni',
    subtitle: 'Mehfil-E-Khaas Royal Dessert',
    category: 'mehfil-e-khaas',
    price: 150,
    unit: 'portion',
    portion: 'Earthen Kasora',
    serves: 'Serves 1-2 pax',
    rating: 4.96,
    reviewsCount: 460,
    prepTime: 'Chilled in Clay',
    isVeg: true,
    isSpicy: false,
    isBestSeller: true,
    isSundaySpecial: true,
    sundayHighlight: 'Handcrafted Saffron Pudding',
    description: 'Silky smooth rice pudding flavoured with saffron & rose.',
    ingredients: ['Stone-ground Basmati Rice', 'Full Cream Milk', 'Pure Kashmiri Saffron Strands', 'Cardamom & Rose Water', 'Silver Vark & Pistachio Slices'],
    image: '/images/begums-zaafrani-firni.jpg',
    badge: 'Royal Favorite'
  }
];

// Reference Page 4: "THE ART OF DUM - A LEGACY OF PATIENCE"
export const ART_OF_DUM_PILLARS = [
  {
    step: '01',
    title: 'SLOW COOKED TO PERFECTION',
    description: 'Food is layered and cooked on low heat, allowing the flavours to blend beautifully.',
    icon: 'Flame',
    highlight: 'Patience over haste'
  },
  {
    step: '02',
    title: 'FINEST AGED BASMATI RICE',
    description: 'We use only the finest aged basmati rice for long grains, exquisite aroma and perfect texture.',
    icon: 'Wheat',
    highlight: '2-year aged grains'
  },
  {
    step: '03',
    title: 'ROYAL INGREDIENTS',
    description: 'Handpicked spices, saffron, dried fruits and the purest ghee.',
    icon: 'Sparkles',
    highlight: '100% authentic potli'
  },
  {
    step: '04',
    title: 'SEALED WITH LOVE',
    description: 'Each handi is sealed with dough to trap the aroma and create magic in every bite.',
    icon: 'ShieldCheck',
    highlight: 'Ata dough purdah'
  }
];

// Sunday Specials Showcase Data (Derived directly from official Begum's Sunday Pre-Order posters)
export const SUNDAY_SPECIALS = [
  {
    id: 'sunday-mutton-paya',
    title: 'Hyderabadi Mutton Paya',
    category: 'sunday-specials',
    tag: 'Sunday Dawn Special',
    desc: 'Tender goat trotters slow-simmered for 12 hours with whole spices, aromatics, and rich bone broth. Served with freshly baked tandoori taftoon roti.',
    image: '/images/sunday-paya-photo.jpg',
    basePrice: 280,
    options: [
      { id: 'single', name: 'Single Combo', desc: '1 Pc Paya With Soup + 1 Large Taftoon Roti', price: 280 },
      { id: 'couple', name: 'Couple Combo', desc: '2 Pcs Paya With Soup + 2 Large Taftoon Roti', price: 550 },
      { id: 'family', name: 'Family Combo', desc: '4 Pcs Paya With Soup + 4 Large Taftoon Roti', price: 1100 },
      { id: 'half-dozen', name: 'Half Dozen', desc: '6 Pcs Paya With Soup', price: 1499 },
      { id: 'one-dozen', name: 'One Dozen', desc: '12 Pcs Paya With Soup', price: 2499 }
    ]
  },
  {
    id: 'sunday-mutton-nihari',
    title: 'Hyderabadi Mutton Nihari',
    category: 'sunday-specials',
    tag: 'Nizami Breakfast',
    desc: 'Slow-cooked prime mutton shank in velvety, spiced marrow stew finished with cardamom, mace, and royal saffron. Served alongside crisp tandoori roti.',
    image: '/images/sunday-nihari-photo.jpg',
    basePrice: 349,
    options: [
      { id: 'nihari-combo', name: 'Nihari & Roti Combo', desc: 'Mutton Nihari Stew with Bone Marrow + Fresh Tandoori Roti', price: 349 }
    ]
  },
  {
    id: 'sunday-mutton-biryani',
    title: 'Hyderabadi Mutton Biryani',
    category: 'sunday-specials',
    tag: 'Charcoal Dum',
    desc: 'Tender marinated prime mutton layered with aged basmati, pure desi ghee, and royal saffron, sealed with dough and slow-cooked over wood and charcoal embers.',
    image: '/images/sunday-mutton-biryani-studio.jpg',
    basePrice: 249,
    options: [
      { id: 'mb-1pc', name: '1 Piece Feast', desc: '1 Succulent Mutton Piece + Saffron Basmati Rice', price: 249 },
      { id: 'mb-2pc', name: '2 Pieces Feast', desc: '2 Succulent Mutton Pieces + Saffron Basmati Rice', price: 399 },
      { id: 'mb-3pc', name: '3 Pieces Feast', desc: '3 Succulent Mutton Pieces + Saffron Basmati Rice', price: 449 }
    ]
  },
  {
    id: 'sunday-chicken-biryani',
    title: 'Hyderabadi Chicken Biryani',
    category: 'sunday-specials',
    tag: 'Family Table Classic',
    desc: 'Tender farm chicken marinated overnight in curd, mint, and royal spices, layered with aged basmati and golden fried birista onions on authentic Dum.',
    image: '/images/sunday-chicken-biryani-studio.jpg',
    basePrice: 199,
    options: [
      { id: 'cb-1pc', name: '1 Piece Feast', desc: '1 Juicy Chicken Cut + Saffron Basmati Rice', price: 199 },
      { id: 'cb-2pc', name: '2 Pieces Feast', desc: '2 Juicy Chicken Cuts + Saffron Basmati Rice', price: 299 },
      { id: 'cb-3pc', name: '3 Pieces Feast', desc: '3 Juicy Chicken Cuts + Saffron Basmati Rice', price: 349 }
    ]
  },
  {
    id: 'sunday-qubani-meetha',
    title: 'Qubani Ka Meetha',
    category: 'sunday-specials',
    isDessert: true,
    tag: 'Royal Dessert',
    desc: 'Authentic Hyderabadi delicacy of slow-stewed dried apricots cooked to a luscious compote, finished with blanched almonds and fresh clotted cream.',
    image: '/images/sunday-qubani-studio.jpg',
    basePrice: 150,
    options: [
      { id: 'single', name: 'Royal Serving', desc: 'Stewed Apricot Compote with Almond Slivers & Malai', price: 150 }
    ]
  },
  {
    id: 'sunday-zaafrani-firni',
    title: 'Zaafrani Firni',
    category: 'sunday-specials',
    isDessert: true,
    tag: 'Royal Dessert',
    desc: 'Traditional slow-cooked ground rice and creamy milk dessert infused with pure Kashmiri saffron threads, green cardamom, and toasted pistachios.',
    image: '/images/sunday-zaafrani-studio.jpg',
    basePrice: 150,
    options: [
      { id: 'single', name: 'Royal Serving', desc: 'Kashmiri Saffron Rice Pudding with Pistachios', price: 150 }
    ]
  }
];

export const KITCHEN_STATS = [
  { value: '100% Authentic', label: 'Hyderabadi Dum Recipes', icon: 'Crown' },
  { value: '₹1400 /kg', label: 'Starting Royal Biryani Portions', icon: 'Award' },
  { value: '5-10 Pax', label: 'Generous Family Feasting Sizes', icon: 'Users' },
  { value: 'Bangalore', label: 'Fresh Thermal Sealed Dispatch', icon: 'MapPin' }
];

export const BANGALORE_DELIVERY_HUBS = [
  { name: 'Indiranagar & Domlur', time: '30-40 mins', status: 'Active Dispatch', radius: 'Hub 1' },
  { name: 'Koramangala & HSR Layout', time: '30-45 mins', status: 'Active Dispatch', radius: 'Hub 2' },
  { name: 'Frazer Town & Benson Town', time: '25-35 mins', status: 'Active Dispatch', radius: 'Hub 3' },
  { name: 'CBD (MG Road, Lavelle Road)', time: '25-35 mins', status: 'Active Dispatch', radius: 'Hub 4' },
  { name: 'Whitefield & Marathahalli', time: '40-50 mins', status: 'Active Dispatch', radius: 'Hub 5' },
  { name: 'Sadashivanagar & Malleshwaram', time: '35-45 mins', status: 'Active Dispatch', radius: 'Hub 6' }
];

export const ROYAL_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Syed Farhan Razvi',
    locality: 'Frazer Town, Bangalore',
    rating: 5,
    dish: 'Mutton Biryani (1kg Handi) & Shami Kebab',
    text: "As someone born and raised in Hyderabad, I was sceptical about finding true Dum biryani in Bangalore. Begum's is the real deal. The meat fell apart, the saffron aroma hit the room the moment we cut the dough seal, and the Shami kebab has that melt-in-mouth texture.",
    date: 'Last Sunday'
  },
  {
    id: 'rev-2',
    author: 'Ayesha & Kumail Qureshi',
    locality: 'Indiranagar, Bangalore',
    rating: 5,
    dish: 'Sunday Shahi Dastarkhwan Special',
    text: 'We hosted 12 guests for Sunday lunch and ordered two 1kg handis of Mutton Biryani along with Button Talaawa Gosh and Qubani Ka Meetha. Every guest was blown away. Truly royal Nizami hospitality delivered at home!',
    date: '2 weeks ago'
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Rao',
    locality: 'Koramangala, Bangalore',
    rating: 5,
    dish: 'Chicken Biryani & Mutton Pepper Chops',
    text: 'The 1kg serving size is so refreshing compared to standard restaurant single-plates. 6 of us ate lavishly. The Pepper Chops have an incredible peppery punch and the Basmati rice grain length was remarkable.',
    date: '3 days ago'
  }
];

export const WHY_CHOOSE_BEGUMS = [
  {
    id: 'why-1',
    title: 'Authentic Dum Tradition',
    description: 'Layered and slow-cooked on gentle heat, hermetically sealed with dough to lock every drop of natural aroma and saffron essence.',
    icon: 'Flame',
    tag: 'Legacy Method'
  },
  {
    id: 'why-2',
    title: 'Finest Aged Basmati & Pure Ghee',
    description: 'We use exclusively 2-year aged slender basmati rice, handpicked royal spices, and purest desi ghee without artificial flavours.',
    icon: 'Sparkles',
    tag: 'Pure Ingredients'
  },
  {
    id: 'why-3',
    title: 'Generous Dastarkhwan Portions',
    description: 'Portioned generously by the kilogram (serving 5 to 10 guests) so family gatherings can feast lavishly without compromise.',
    icon: 'Users',
    tag: 'Feast Sizing'
  },
  {
    id: 'why-4',
    title: 'Sealed Thermal Handi Dispatch',
    description: 'Delivered in specialized insulated thermal packaging across Bangalore, arriving piping hot at 65°C+ ready for your dining table.',
    icon: 'ShieldCheck',
    tag: 'Piping Hot'
  }
];

export const CATERING_PACKAGES = [
  {
    id: 'catering-family',
    title: 'Family Dastarkhwan Daawat',
    serves: '10–15 Guests',
    highlight: 'Ideal for weekend family gatherings & celebrations',
    inclusions: [
      '2 kg Shahi Dum Biryani (Mutton or Chicken)',
      '1 kg Mutton Shami Kebab or Chicken Kebab',
      'Mirchi Ka Salan & Dahi Ki Chutney Bowls',
      '1 kg Royal Qubani Ka Meetha with Clotted Malai'
    ],
    badge: 'Most Popular'
  },
  {
    id: 'catering-shahi',
    title: 'Shahi Royal Feast',
    serves: '25–40 Guests',
    highlight: 'Complete Nawabi banquet with multiple handis & starters',
    inclusions: [
      'Multi-kg Handis: Mutton Biryani + Chicken Biryani',
      'Platters of Mutton Pepper Chops & Button Talaawa Gosh',
      'Baghara Baingan, Mirchi Ka Salan & Dahi Ki Chutney',
      'Dual Royal Desserts: Qubani Ka Meetha + Zaafrani Firni'
    ],
    badge: 'Grand Feast'
  },
  {
    id: 'catering-custom',
    title: 'Bespoke Dastarkhwan & Weddings',
    serves: '50+ Guests',
    highlight: 'Live handi presentation and personalized royal menu curation',
    inclusions: [
      'Custom menu curated with Founders Tahera & Kumail Kirmani',
      'Traditional hand-sealed copper handis & tableware setup',
      'Dedicated delivery concierge & banquet timing coordination',
      'Complimentary royal welcome drink options'
    ],
    badge: 'Bespoke'
  }
];

