import { Business } from './types';

export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'b1',
    name: 'Addis Ababa Coffee Roasters',
    category: 'Food & Beverage',
    description: 'Premium Ethiopian coffee beans roasted to perfection. We source directly from Yirgacheffe and Sidama regions.',
    address: 'Bole Road, Dembel City Center, Ground Floor',
    city: 'Addis Ababa',
    phone: '+251 911 234 567',
    email: 'info@addiscoffee.com',
    website: 'www.addiscoffee.com',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    logoUrl: 'https://picsum.photos/seed/coffee-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/coffee-cover/1200/400',
    rating: 4.8,
    reviews: 124,
    verified: true,
    products: [
      {
        id: 'p1',
        name: 'Yirgacheffe Light Roast',
        description: 'Floral and citrus notes, 500g',
        price: 450,
        imageUrl: 'https://picsum.photos/seed/coffee1/300/300'
      },
      {
        id: 'p2',
        name: 'Sidama Medium Roast',
        description: 'Chocolate and berry notes, 500g',
        price: 420,
        imageUrl: 'https://picsum.photos/seed/coffee2/300/300'
      }
    ],
    services: [
      {
        id: 's1',
        name: 'Coffee Tasting Event',
        description: 'Weekly coffee tasting and cupping sessions.',
        priceRange: '200 - 500 ETB'
      }
    ]
  },
  {
    id: 'b2',
    name: 'Habesha Traditional Wear',
    category: 'Clothing & Apparel',
    description: 'Authentic Ethiopian traditional clothing, handwoven with high-quality cotton. Custom designs available.',
    address: 'Shiromeda Market, Stall 45',
    city: 'Addis Ababa',
    phone: '+251 922 345 678',
    email: 'sales@habeshawear.com',
    bankAffiliation: 'Dashen Bank',
    logoUrl: 'https://picsum.photos/seed/clothes-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/clothes-cover/1200/400',
    rating: 4.6,
    reviews: 89,
    verified: true,
    products: [
      {
        id: 'p3',
        name: 'Men\\'s Gabi',
        description: 'Thick, warm traditional blanket/wrap',
        price: 1200,
        imageUrl: 'https://picsum.photos/seed/gabi/300/300'
      },
      {
        id: 'p4',
        name: 'Women\\'s Kemis',
        description: 'Beautifully embroidered traditional dress',
        price: 3500,
        imageUrl: 'https://picsum.photos/seed/kemis/300/300'
      }
    ],
    services: [
      {
        id: 's2',
        name: 'Custom Tailoring',
        description: 'Made-to-measure traditional outfits for weddings and holidays.',
        priceRange: '1000 - 5000 ETB'
      }
    ]
  },
  {
    id: 'b3',
    name: 'Ethio-Tech Solutions',
    category: 'Technology',
    description: 'IT consulting, software development, and network installation services for small and medium enterprises.',
    address: 'Kazanchis, Elilly Hotel Area, 3rd Floor',
    city: 'Addis Ababa',
    phone: '+251 933 456 789',
    email: 'contact@ethiotech.net',
    website: 'www.ethiotech.net',
    bankAffiliation: 'Awash Bank',
    logoUrl: 'https://picsum.photos/seed/tech-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/tech-cover/1200/400',
    rating: 4.9,
    reviews: 42,
    verified: true,
    products: [
      {
        id: 'p5',
        name: 'Point of Sale System',
        description: 'Complete POS hardware and software bundle',
        price: 25000,
        imageUrl: 'https://picsum.photos/seed/pos/300/300'
      }
    ],
    services: [
      {
        id: 's3',
        name: 'Network Installation',
        description: 'Office LAN/WAN setup and configuration',
        priceRange: '5000 - 20000 ETB'
      },
      {
        id: 's4',
        name: 'Website Development',
        description: 'Corporate website design and hosting',
        priceRange: '15000 - 50000 ETB'
      }
    ]
  },
  {
    id: 'b4',
    name: 'Lalibela Tour & Travel',
    category: 'Travel & Tourism',
    description: 'Experience the historical and natural wonders of Ethiopia with our guided tours.',
    address: 'Piazza, Arada Sub-city',
    city: 'Addis Ababa',
    phone: '+251 944 567 890',
    email: 'info@lalibelatours.com',
    bankAffiliation: 'Bank of Abyssinia',
    logoUrl: 'https://picsum.photos/seed/tour-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/tour-cover/1200/400',
    rating: 4.7,
    reviews: 215,
    verified: true,
    products: [],
    services: [
      {
        id: 's5',
        name: 'Historical Route Tour',
        description: '7-day tour covering Bahir Dar, Gondar, Axum, and Lalibela.',
        priceRange: 'Contact for pricing'
      },
      {
        id: 's6',
        name: 'Danakil Depression Expedition',
        description: '4-day adventure to the lowest and hottest place on earth.',
        priceRange: 'Contact for pricing'
      }
    ]
  },
  {
    id: 'b5',
    name: 'Dire Dawa Spices',
    category: 'Food & Beverage',
    description: 'Authentic Ethiopian spices, berbere, shiro, and mitmita sourced from the finest ingredients.',
    address: 'Merkato, Spice Market Section',
    city: 'Addis Ababa',
    phone: '+251 955 678 901',
    email: 'sales@diredawaspices.com',
    bankAffiliation: 'Cooperative Bank of Oromia',
    logoUrl: 'https://picsum.photos/seed/spice-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/spice-cover/1200/400',
    rating: 4.5,
    reviews: 312,
    verified: false,
    products: [
      {
        id: 'p6',
        name: 'Premium Berbere',
        description: 'Spicy Ethiopian chili blend, 1kg',
        price: 350,
        imageUrl: 'https://picsum.photos/seed/berbere/300/300'
      },
      {
        id: 'p7',
        name: 'Shiro Powder',
        description: 'Roasted chickpea flour blend, 1kg',
        price: 280,
        imageUrl: 'https://picsum.photos/seed/shiro/300/300'
      }
    ],
    services: []
  },
  {
    id: 'b6',
    name: 'Hawassa Furniture Works',
    category: 'Home & Furniture',
    description: 'High-quality wooden furniture for homes and offices. We use locally sourced timber.',
    address: 'Industrial Zone',
    city: 'Hawassa',
    phone: '+251 462 201 234',
    email: 'info@hawassafurniture.com',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    logoUrl: 'https://picsum.photos/seed/furniture-logo/200/200',
    coverUrl: 'https://picsum.photos/seed/furniture-cover/1200/400',
    rating: 4.4,
    reviews: 56,
    verified: true,
    products: [
      {
        id: 'p8',
        name: 'Dining Table Set',
        description: '6-seater wooden dining table with chairs',
        price: 18000,
        imageUrl: 'https://picsum.photos/seed/table/300/300'
      },
      {
        id: 'p9',
        name: 'Office Desk',
        description: 'Executive office desk with drawers',
        price: 12000,
        imageUrl: 'https://picsum.photos/seed/desk/300/300'
      }
    ],
    services: [
      {
        id: 's7',
        name: 'Custom Furniture Design',
        description: 'Design and build furniture to your specifications.',
        priceRange: 'Varies'
      }
    ]
  }
];

export const CATEGORIES = [
  'All Categories',
  'Food & Beverage',
  'Clothing & Apparel',
  'Technology',
  'Travel & Tourism',
  'Home & Furniture',
  'Health & Beauty',
  'Construction',
  'Agriculture'
];

export const BANKS = [
  'All Banks',
  'Commercial Bank of Ethiopia',
  'Dashen Bank',
  'Awash Bank',
  'Bank of Abyssinia',
  'Cooperative Bank of Oromia',
  'Wegagen Bank',
  'United Bank'
];

export const CITIES = [
  'All Cities',
  'Addis Ababa',
  'Hawassa',
  'Dire Dawa',
  'Mekelle',
  'Bahir Dar',
  'Adama',
  'Gondar'
];
