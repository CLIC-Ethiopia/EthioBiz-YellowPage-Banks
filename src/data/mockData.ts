import { Business, Bank } from '../types';

export const mockBanks: Bank[] = [
  {
    id: 'cbe',
    name: 'Commercial Bank of Ethiopia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Commercial_Bank_of_Ethiopia_logo.svg/1200px-Commercial_Bank_of_Ethiopia_logo.svg.png',
    color: '#63248d'
  },
  {
    id: 'awash',
    name: 'Awash Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Awash_Bank_Logo.png/220px-Awash_Bank_Logo.png',
    color: '#005eb8'
  },
  {
    id: 'dashen',
    name: 'Dashen Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Dashen_Bank_Logo.jpg/640px-Dashen_Bank_Logo.jpg',
    color: '#003366'
  },
  {
    id: 'abyssinia',
    name: 'Bank of Abyssinia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bank_of_Abyssinia_logo.png/640px-Bank_of_Abyssinia_logo.png',
    color: '#fdb913'
  },
  {
    id: 'zemen',
    name: 'Zemen Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Zemen_Bank_logo.svg/1200px-Zemen_Bank_logo.svg.png',
    color: '#ed1c24'
  },
  {
    id: 'coop',
    name: 'Cooperative Bank of Oromia',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Cooperative_Bank_of_Oromia_logo.png/220px-Cooperative_Bank_of_Oromia_logo.png',
    color: '#00a651'
  },
  {
    id: 'hibret',
    name: 'Hibret Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Hibret_Bank_logo.png/220px-Hibret_Bank_logo.png',
    color: '#0097d7'
  },
  {
    id: 'nib',
    name: 'Nib International Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Nib_International_Bank_logo.png/220px-Nib_International_Bank_logo.png',
    color: '#582c83'
  },
  {
    id: 'wegagen',
    name: 'Wegagen Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Wegagen_Bank_logo.png/220px-Wegagen_Bank_logo.png',
    color: '#f58220'
  },
  {
    id: 'oromia',
    name: 'Oromia Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Oromia_International_Bank_logo.png/220px-Oromia_International_Bank_logo.png',
    color: '#8dc63f'
  }
];

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Abyssinia Coffee Roasters',
    category: 'Food & Beverage',
    description: 'Premium Ethiopian coffee roasting and export. We source the finest beans from Yirgacheffe and Sidamo.',
    address: 'Bole Road, near Friendship City Center',
    city: 'Addis Ababa',
    phone: '+251 911 234 567',
    email: 'info@abyssiniacoffee.com',
    website: 'www.abyssiniacoffee.com',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.785 },
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1511537632536-b7a4896840a4?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p1',
        name: 'Yirgacheffe Grade 1',
        description: 'Floral and citrus notes, washed process.',
        price: 450,
        imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400&h=300'
      },
      {
        id: 'p2',
        name: 'Sidamo Natural',
        description: 'Berry and winey notes, natural process.',
        price: 420,
        imageUrl: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [
      {
        id: 's1',
        name: 'Wholesale Supply',
        description: 'Bulk coffee supply for cafes and restaurants.',
        priceRange: 'Negotiable'
      }
    ],
    rating: 4.8,
    reviews: 124,
    verified: true,
    verificationTier: 'Gold',
    isClaimed: true,
    ownerId: 'owner1',
    reviewsList: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Abebe Bikila',
        rating: 5,
        comment: 'Best coffee in town! The Yirgacheffe is a must-try.',
        date: '2024-02-15',
        reply: {
          text: 'Thank you Abebe! We are glad you enjoyed it.',
          date: '2024-02-16'
        }
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sarah Jones',
        rating: 4,
        comment: 'Great atmosphere and friendly staff.',
        date: '2024-02-10'
      }
    ],
    features: ['Open Now', 'Pay with Tele Birr', 'Accepts Mobile Money'],
    priceLevel: '$$',
    offers: [
      {
        id: 'o1',
        title: '10% Off with CBE Birr',
        description: 'Get 10% discount when you pay using CBE Birr mobile wallet.',
        discount: '10%',
        expiryDate: '2024-12-31'
      }
    ]
  },
  {
    id: '2',
    name: 'Habesha Textiles',
    category: 'Manufacturing',
    description: 'Traditional Ethiopian clothing and modern textile manufacturing. We produce high-quality cotton garments.',
    address: 'Piassa, Arada Sub-city',
    city: 'Addis Ababa',
    phone: '+251 912 345 678',
    email: 'sales@habeshatextiles.et',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.030, lng: 38.740 },
    gallery: [
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p3',
        name: 'Traditional Dress (Habesha Kemis)',
        description: 'Handwoven cotton dress with intricate embroidery.',
        price: 3500,
        imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [
      {
        id: 's2',
        name: 'Custom Tailoring',
        description: 'Made-to-measure clothing services.',
        priceRange: '500 - 2000 ETB'
      }
    ],
    rating: 4.5,
    reviews: 89,
    verified: true,
    verificationTier: 'Gold',
    isClaimed: false,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '3',
    name: 'Blue Nile Construction',
    category: 'Construction',
    description: 'General contractor specializing in residential and commercial buildings. Quality construction with modern standards.',
    address: 'Megenagna, Bole Sub-city',
    city: 'Addis Ababa',
    phone: '+251 116 123 456',
    email: 'contact@bluenileconstruction.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.015, lng: 38.800 },
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's3',
        name: 'Building Construction',
        description: 'Full-service construction for residential and commercial projects.',
        priceRange: 'Project based'
      },
      {
        id: 's4',
        name: 'Architectural Design',
        description: 'Modern architectural planning and design.',
        priceRange: 'Project based'
      }
    ],
    rating: 4.2,
    reviews: 45,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$$'
  },
  {
    id: '4',
    name: 'Lalibela Tour & Travel',
    category: 'Tourism',
    description: 'Experience the historic wonders of Ethiopia. We organize tours to Lalibela, Axum, Gondar, and the Omo Valley.',
    address: 'Meskel Square, Kirkos Sub-city',
    city: 'Addis Ababa',
    phone: '+251 911 111 222',
    email: 'tours@lalibelatravel.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1523538290024-47b5fd5def70?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.760 },
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's5',
        name: 'Historical Route Tour',
        description: '10-day tour covering the northern historical circuit.',
        priceRange: 'Starting from $1200'
      },
      {
        id: 's6',
        name: 'Car Rental',
        description: '4x4 vehicle rental with driver.',
        priceRange: '$100/day'
      }
    ],
    rating: 4.9,
    reviews: 210,
    verified: true,
    verificationTier: 'Platinum',
    features: ['Open Now', 'Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$',
    offers: [
      {
        id: 'o2',
        title: 'Free Airport Transfer',
        description: 'Complimentary airport pickup for bookings over $500.',
        discount: 'Free'
      }
    ]
  },
  {
    id: '5',
    name: 'Entoto Tech Solutions',
    category: 'Technology',
    description: 'Software development and IT consultancy. We build websites, mobile apps, and enterprise software.',
    address: 'Bole Medhanialem',
    city: 'Addis Ababa',
    phone: '+251 900 888 999',
    email: 'hello@entototech.com',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.990, lng: 38.790 },
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p4',
        name: 'POS System',
        description: 'Point of sale software for retail shops.',
        price: 15000,
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [
      {
        id: 's7',
        name: 'Web Development',
        description: 'Custom website design and development.',
        priceRange: 'Starting from 10,000 ETB'
      }
    ],
    rating: 4.6,
    reviews: 32,
    verified: false,
    verificationTier: 'Silver',
    features: ['Pay with Tele Birr', 'Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '6',
    name: 'Rift Valley Agro',
    category: 'Agriculture',
    description: 'Export of oilseeds, pulses, and spices. Sustainable farming practices in the Rift Valley region.',
    address: 'Adama',
    city: 'Adama',
    phone: '+251 221 112 233',
    email: 'export@riftvalleyagro.com',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.540, lng: 39.270 },
    gallery: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p5',
        name: 'Sesame Seeds',
        description: 'High quality whitish Humera sesame seeds.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [],
    rating: 4.3,
    reviews: 18,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$'
  },
  // New Businesses
  {
    id: '7',
    name: 'Addis Cardiac Center',
    category: 'Healthcare',
    description: 'Specialized cardiac care center providing world-class heart treatment and surgery.',
    address: 'Gotera, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 114 420 420',
    email: 'info@addiscardiac.com',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.980, lng: 38.760 },
    gallery: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's8',
        name: 'Cardiac Surgery',
        description: 'Open heart surgery and bypass procedures.',
        priceRange: 'Consultation required'
      },
      {
        id: 's9',
        name: 'Cardiology Consultation',
        description: 'Expert consultation with heart specialists.',
        priceRange: '1000 - 2000 ETB'
      }
    ],
    rating: 4.7,
    reviews: 156,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '8',
    name: 'Unity University',
    category: 'Education',
    description: 'Leading private university in Ethiopia offering undergraduate and graduate programs.',
    address: 'Gerji, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 116 29 81 58',
    email: 'registrar@unity.edu.et',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.005, lng: 38.800 },
    gallery: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's10',
        name: 'Undergraduate Programs',
        description: 'Degrees in Business, Computer Science, and Engineering.',
        priceRange: 'Semester based'
      }
    ],
    rating: 4.1,
    reviews: 340,
    verified: true,
    verificationTier: 'Gold',
    features: ['Pay with Tele Birr', 'Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '9',
    name: 'Awash Wine',
    category: 'Food & Beverage',
    description: 'Ethiopia\'s oldest winemaker, producing fine wines from locally grown grapes.',
    address: 'Lideta, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 115 51 58 20',
    email: 'info@awashwine.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.740 },
    gallery: [
      'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p6',
        name: 'Axumit Sweet Red Wine',
        description: 'Sweet red wine with rich fruity flavors.',
        price: 350,
        imageUrl: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [],
    rating: 4.4,
    reviews: 98,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '10',
    name: 'Queens Supermarket',
    category: 'Retail',
    description: 'Modern supermarket chain offering groceries, household items, and fresh produce.',
    address: 'Bole, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 116 62 12 34',
    email: 'service@queens.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.790 },
    gallery: [
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's11',
        name: 'Home Delivery',
        description: 'Grocery delivery service within Addis Ababa.',
        priceRange: '50 - 200 ETB'
      }
    ],
    rating: 4.0,
    reviews: 215,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '11',
    name: 'Sheraton Addis',
    category: 'Hospitality',
    description: 'A Luxury Collection Hotel, Addis Ababa. Experience unparalleled luxury and service.',
    address: 'Taitu Street, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 115 17 17 17',
    email: 'reservations.addis@luxurycollection.com',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.018, lng: 38.752 },
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's12',
        name: 'Luxury Accommodation',
        description: '5-star rooms and suites.',
        priceRange: 'Starting from $300/night'
      },
      {
        id: 's13',
        name: 'Event Hosting',
        description: 'Grand ballroom and meeting spaces.',
        priceRange: 'Contact for quote'
      }
    ],
    rating: 4.9,
    reviews: 540,
    verified: true,
    verificationTier: 'Platinum',
    reviewsList: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'John Doe',
        rating: 5,
        comment: 'Absolutely stunning hotel. The service is impeccable.',
        date: '2024-01-20',
        reply: {
          text: 'Thank you for your kind words, John. We look forward to welcoming you back.',
          date: '2024-01-21'
        }
      }
    ],
    features: ['Open Now', 'Pay with Tele Birr', 'Accepts Mobile Money'],
    priceLevel: '$$$$',
    offers: [
      {
        id: 'o3',
        title: 'Weekend Getaway',
        description: 'Special rates for weekend stays with Dashen Bank cards.',
        discount: '15%',
        expiryDate: '2024-12-31'
      }
    ]
  },
  {
    id: '12',
    name: 'National Motors',
    category: 'Automotive',
    description: 'Authorized dealer for major automotive brands. Sales, service, and spare parts.',
    address: 'Debrezeit Road, Addis Ababa',
    city: 'Addis Ababa',
    phone: '+251 114 42 11 11',
    email: 'sales@nationalmotors.com.et',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.970, lng: 38.760 },
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p7',
        name: 'Isuzu NPR',
        description: 'Reliable light-duty truck.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [
      {
        id: 's14',
        name: 'Vehicle Maintenance',
        description: 'Full service and repair.',
        priceRange: 'Service based'
      }
    ],
    rating: 4.3,
    reviews: 67,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$$'
  },
  {
    id: '13',
    name: 'Habesha Cement',
    category: 'Manufacturing',
    description: 'Producing high-quality cement for the growing construction industry in Ethiopia.',
    address: 'Holeta',
    city: 'Holeta',
    phone: '+251 111 23 45 67',
    email: 'info@habeshacement.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.070, lng: 38.480 },
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p8',
        name: 'Portland Cement',
        description: 'High strength cement for structural use.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [],
    rating: 4.1,
    reviews: 42,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '14',
    name: 'Ride Transport',
    category: 'Technology',
    description: 'Ethiopia\'s leading ride-hailing service provider. Safe, reliable, and convenient.',
    address: 'Sheger Building, Bole',
    city: 'Addis Ababa',
    phone: '8294',
    email: 'support@ride.et',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1468817170550-029c95562018?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.780 },
    gallery: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1468817170550-029c95562018?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's15',
        name: 'Ride Hailing',
        description: 'On-demand taxi service.',
        priceRange: 'Meter based'
      }
    ],
    rating: 4.5,
    reviews: 1200,
    verified: true,
    verificationTier: 'Gold',
    features: ['Open Now', 'Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$'
  },
  {
    id: '15',
    name: 'Kuriftu Resorts',
    category: 'Hospitality',
    description: 'Premier resort destinations in Bishoftu, Bahir Dar, and Entoto.',
    address: 'Bishoftu',
    city: 'Bishoftu',
    phone: '+251 114 33 00 00',
    email: 'booking@kurifturesorts.com',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.750, lng: 38.980 },
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's16',
        name: 'Spa & Wellness',
        description: 'Full service spa treatments.',
        priceRange: '1500 - 5000 ETB'
      }
    ],
    rating: 4.7,
    reviews: 310,
    verified: true,
    verificationTier: 'Platinum',
    features: ['Open Now', 'Pay with Tele Birr', 'Accepts Mobile Money'],
    priceLevel: '$$$$',
    offers: [
      {
        id: 'o4',
        title: 'Spa Day Package',
        description: '20% off spa treatments for Zemen Bank customers.',
        discount: '20%',
        expiryDate: '2024-12-31'
      }
    ]
  },
  {
    id: '16',
    name: 'Oromia Coffee Farmers Union',
    category: 'Agriculture',
    description: 'Union of coffee farmers cooperatives in Oromia region. Fair trade and organic coffee.',
    address: 'Akaki Kality',
    city: 'Addis Ababa',
    phone: '+251 114 34 20 32',
    email: 'info@oromiacoffeeunion.org',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1511537632536-b7a4896840a4?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.900, lng: 38.750 },
    gallery: [
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1511537632536-b7a4896840a4?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p9',
        name: 'Organic Green Coffee',
        description: 'Certified organic coffee beans for export.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1552346991-0298091f8aeb?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [],
    rating: 4.6,
    reviews: 56,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '17',
    name: 'United Insurance',
    category: 'Finance',
    description: 'Providing general and life insurance services across Ethiopia.',
    address: 'Tewodros Square',
    city: 'Addis Ababa',
    phone: '+251 111 56 56 56',
    email: 'info@unitedinsurance.com.et',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.750 },
    gallery: [
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's17',
        name: 'Motor Insurance',
        description: 'Comprehensive vehicle insurance.',
        priceRange: 'Variable'
      }
    ],
    rating: 4.2,
    reviews: 78,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '18',
    name: 'Nib Insurance',
    category: 'Finance',
    description: 'Reliable insurance partner for businesses and individuals.',
    address: 'Dembel City Center',
    city: 'Addis Ababa',
    phone: '+251 115 52 81 95',
    email: 'contact@nibinsurance.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.770 },
    gallery: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's18',
        name: 'Property Insurance',
        description: 'Protection for commercial and residential properties.',
        priceRange: 'Variable'
      }
    ],
    rating: 4.1,
    reviews: 65,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '19',
    name: 'Selam Bus',
    category: 'Logistics',
    description: 'Safe and comfortable cross-country bus transportation service.',
    address: 'Meskel Square',
    city: 'Addis Ababa',
    phone: '+251 115 54 88 88',
    email: 'info@selambus.com',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.760 },
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [],
    services: [
      {
        id: 's19',
        name: 'Passenger Transport',
        description: 'Daily trips to major cities in Ethiopia.',
        priceRange: 'Ticket based'
      }
    ],
    rating: 4.4,
    reviews: 320,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '20',
    name: 'Finfinne Furniture Factory',
    category: 'Manufacturing',
    description: 'Manufacturer of home and office furniture.',
    address: 'Kality',
    city: 'Addis Ababa',
    phone: '+251 114 39 00 00',
    email: 'sales@finfinnefurniture.com',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.910, lng: 38.740 },
    gallery: [
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    products: [
      {
        id: 'p10',
        name: 'Office Desk',
        description: 'Modern wooden office desk.',
        price: 8500,
        imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400&h=300'
      }
    ],
    services: [],
    rating: 4.0,
    reviews: 28,
    verified: true,
    features: ['Accepts Mobile Money', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  }
];
