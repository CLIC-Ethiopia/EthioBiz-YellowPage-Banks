function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const banksSheet = ss.getSheetByName('Banks');
  const businessesSheet = ss.getSheetByName('Businesses');

  if (!banksSheet || !businessesSheet) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Database not initialized' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const banksData = banksSheet.getDataRange().getValues();
  const businessesData = businessesSheet.getDataRange().getValues();

  const banks = rowsToObjects(banksData);
  const businesses = rowsToObjects(businessesData);

  const result = {
    banks: banks,
    businesses: businesses
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function rowsToObjects(data) {
  if (data.length < 2) return [];
  const headers = data[0];
  const rows = data.slice(1);
  
  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      let value = row[index];
      // Try to parse JSON strings for complex objects
      if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Keep as string if parse fails
        }
      }
      obj[header] = value;
    });
    return obj;
  });
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('App Backend')
    .addItem('Setup Database', 'setupDatabase')
    .addToUi();
}

function setupDatabase() {
  createSchema();
  populateData();
}

function createSchema() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Banks Sheet
  let banksSheet = ss.getSheetByName('Banks');
  if (banksSheet) { banksSheet.clear(); } 
  else { banksSheet = ss.insertSheet('Banks'); }
  
  const bankHeaders = ['id', 'name', 'logo', 'color'];
  banksSheet.appendRow(bankHeaders);
  
  // 2. Businesses Sheet
  let busSheet = ss.getSheetByName('Businesses');
  if (busSheet) { busSheet.clear(); }
  else { busSheet = ss.insertSheet('Businesses'); }
  
  const busHeaders = [
    'id', 'name', 'category', 'description', 'address', 'city', 
    'phone', 'email', 'website', 'bankAffiliation', 'bankId', 
    'logoUrl', 'coverUrl', 'rating', 'reviews', 'verified', 
    'verificationTier', 'isClaimed', 'ownerId', 'priceLevel',
    'coordinates', 'gallery', 'products', 'services', 'reviewsList', 'features', 'offers'
  ];
  busSheet.appendRow(busHeaders);
}

function populateData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Banks
  const banksSheet = ss.getSheetByName('Banks');
  // Skip header if already populated (but we cleared it in setupDatabase)
  if (mockBanks.length > 0) {
    const bankRows = mockBanks.map(b => [
      b.id, b.name, b.logo, b.color
    ]);
    banksSheet.getRange(2, 1, bankRows.length, bankRows[0].length).setValues(bankRows);
  }
  
  // Businesses
  const busSheet = ss.getSheetByName('Businesses');
  const allBusinesses = [
    ...mockBusinessesPart1,
    ...mockBusinessesPart2,
    ...mockBusinessesPart3
  ];
  
  if (allBusinesses.length > 0) {
    const busRows = allBusinesses.map(b => [
      b.id, 
      b.name, 
      b.category, 
      b.description, 
      b.address, 
      b.city,
      b.phone, 
      b.email, 
      b.website || '', 
      b.bankAffiliation, 
      b.bankId || '', 
      b.logoUrl, 
      b.coverUrl,
      b.rating, 
      b.reviews, 
      b.verified, 
      b.verificationTier || '', 
      b.isClaimed || false, 
      b.ownerId || '', 
      b.priceLevel || '',
      JSON.stringify(b.coordinates),
      JSON.stringify(b.gallery || []),
      JSON.stringify(b.products || []),
      JSON.stringify(b.services || []),
      JSON.stringify(b.reviewsList || []),
      JSON.stringify(b.features || []),
      JSON.stringify(b.offers || [])
    ]);
    busSheet.getRange(2, 1, busRows.length, busRows[0].length).setValues(busRows);
  }
}

const mockBanks = [
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

const mockBusinessesPart1 = [
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
const mockBusinessesPart2 = [
  {
    id: '21',
    name: 'Ethio Telecom',
    category: 'Technology',
    description: 'The primary telecommunications service provider in Ethiopia.',
    address: 'Churchill Road',
    city: 'Addis Ababa',
    phone: '994',
    email: 'customercare@ethiotelecom.et',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.750 },
    gallery: [],
    products: [],
    services: [{ id: 's21', name: 'Mobile Data', description: '4G and 5G mobile internet.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 5000,
    verified: true,
    features: ['Open Now', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '22',
    name: 'Ethiopian Airlines',
    category: 'Logistics',
    description: 'The flag carrier of Ethiopia, connecting Africa to the world.',
    address: 'Bole International Airport',
    city: 'Addis Ababa',
    phone: '+251 116 65 55 55',
    email: 'reservation@ethiopianairlines.com',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542296332-2e44a996aa0d?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.977, lng: 38.790 },
    gallery: [],
    products: [],
    services: [{ id: 's22', name: 'International Flights', description: 'Flights to over 120 destinations.', priceRange: 'Variable' }],
    rating: 4.8,
    reviews: 8000,
    verified: true,
    verificationTier: 'Platinum',
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$$$'
  },
  {
    id: '23',
    name: 'Ambassa Bus',
    category: 'Logistics',
    description: 'Public bus transport service provider in Addis Ababa.',
    address: 'Megenagna',
    city: 'Addis Ababa',
    phone: '+251 116 62 22 22',
    email: 'info@ambassabus.et',
    bankAffiliation: 'Commercial Bank of Ethiopia',
    bankId: 'cbe',
    logoUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.800 },
    gallery: [],
    products: [],
    services: [{ id: 's23', name: 'City Transport', description: 'Affordable city bus service.', priceRange: 'Low' }],
    rating: 3.8,
    reviews: 150,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$'
  },
  {
    id: '24',
    name: 'MIDROC Gold',
    category: 'Manufacturing',
    description: 'Leading gold mining and exploration company in Ethiopia.',
    address: 'Bisrate Gabriel',
    city: 'Addis Ababa',
    phone: '+251 113 72 82 00',
    email: 'info@midrocgold.com',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.990, lng: 38.730 },
    gallery: [],
    products: [{ id: 'p24', name: 'Gold Bullion', description: 'Refined gold bars.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.5,
    reviews: 40,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '25',
    name: 'Dashen Brewery',
    category: 'Food & Beverage',
    description: 'Brewing fine Ethiopian beer since 2000.',
    address: 'Gondar',
    city: 'Gondar',
    phone: '+251 581 14 04 00',
    email: 'info@dashenbeer.et',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 12.600, lng: 37.460 },
    gallery: [],
    products: [{ id: 'p25', name: 'Dashen Beer', description: 'Lager beer.', price: 50, imageUrl: '' }],
    services: [],
    rating: 4.6,
    reviews: 300,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '26',
    name: 'Legacy General Hospital',
    category: 'Healthcare',
    description: 'Providing comprehensive medical services with state-of-the-art facilities.',
    address: 'Gerji',
    city: 'Addis Ababa',
    phone: '+251 116 29 29 29',
    email: 'info@legacyhospital.com',
    bankAffiliation: 'Dashen Bank',
    bankId: 'dashen',
    logoUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.810 },
    gallery: [],
    products: [],
    services: [{ id: 's26', name: 'Emergency Care', description: '24/7 emergency services.', priceRange: 'Variable' }],
    rating: 4.3,
    reviews: 120,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$$'
  },
  {
    id: '27',
    name: 'Awash Insurance',
    category: 'Finance',
    description: 'Trusted insurance partner for over 25 years.',
    address: 'Awash Towers',
    city: 'Addis Ababa',
    phone: '+251 115 57 00 01',
    email: 'info@awashinsurance.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.015, lng: 38.755 },
    gallery: [],
    products: [],
    services: [{ id: 's27', name: 'Life Insurance', description: 'Comprehensive life coverage.', priceRange: 'Variable' }],
    rating: 4.4,
    reviews: 90,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '28',
    name: 'Sante Medical Center',
    category: 'Healthcare',
    description: 'Specialized medical center focusing on internal medicine and surgery.',
    address: 'Bisrate Gabriel',
    city: 'Addis Ababa',
    phone: '+251 113 72 72 72',
    email: 'info@santemc.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.735 },
    gallery: [],
    products: [],
    services: [{ id: 's28', name: 'Specialist Consultation', description: 'Expert medical advice.', priceRange: '500 ETB' }],
    rating: 4.2,
    reviews: 60,
    verified: true,
    features: ['Open Now'],
    priceLevel: '$$$'
  },
  {
    id: '29',
    name: 'Jupiter International Hotel',
    category: 'Hospitality',
    description: 'Four-star hotel located in Cazanchis and Bole.',
    address: 'Cazanchis',
    city: 'Addis Ababa',
    phone: '+251 115 52 73 33',
    email: 'info@jupiterinternationalhotel.com',
    bankAffiliation: 'Awash Bank',
    bankId: 'awash',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.765 },
    gallery: [],
    products: [],
    services: [{ id: 's29', name: 'Accommodation', description: 'Luxury rooms.', priceRange: '$100/night' }],
    rating: 4.5,
    reviews: 200,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$$'
  },
  {
    id: '30',
    name: 'Abyssinia Steel',
    category: 'Manufacturing',
    description: 'Producing high-quality reinforcement bars and steel products.',
    address: 'Dukem',
    city: 'Dukem',
    phone: '+251 114 32 00 00',
    email: 'sales@abyssiniasteel.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.800, lng: 38.900 },
    gallery: [],
    products: [{ id: 'p30', name: 'Rebar', description: 'Construction steel.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.1,
    reviews: 35,
    verified: true,
    features: [],
    priceLevel: '$$$'
  },
  {
    id: '31',
    name: 'Bole Ambassador Hotel',
    category: 'Hospitality',
    description: 'Modern hotel conveniently located near the airport.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 18 82 82',
    email: 'reservation@boleambassador.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.990, lng: 38.780 },
    gallery: [],
    products: [],
    services: [{ id: 's31', name: 'Room Service', description: '24/7 room service.', priceRange: 'Variable' }],
    rating: 4.3,
    reviews: 180,
    verified: true,
    features: ['Open Now', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '32',
    name: 'Morning Star Mall',
    category: 'Retail',
    description: 'Shopping mall with diverse retail outlets and cinema.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 63 98 98',
    email: 'info@morningstarmall.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1567449303078-57a63695666b?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.785 },
    gallery: [],
    products: [],
    services: [{ id: 's32', name: 'Retail Space', description: 'Shop rentals.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 250,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '33',
    name: 'Abyssinia Flight Services',
    category: 'Logistics',
    description: 'Private air charter service provider.',
    address: 'Bole Airport',
    city: 'Addis Ababa',
    phone: '+251 116 62 06 22',
    email: 'info@abyssiniaflight.com',
    bankAffiliation: 'Bank of Abyssinia',
    bankId: 'abyssinia',
    logoUrl: 'https://images.unsplash.com/photo-1559627755-6f263655553b?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.977, lng: 38.800 },
    gallery: [],
    products: [],
    services: [{ id: 's33', name: 'Air Charter', description: 'Private flights.', priceRange: 'Quote based' }],
    rating: 4.7,
    reviews: 25,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '34',
    name: 'Boston Day Spa',
    category: 'Hospitality',
    description: 'Premium spa and wellness center.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 18 10 10',
    email: 'info@bostondayspa.com',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.990, lng: 38.780 },
    gallery: [],
    products: [],
    services: [{ id: 's34', name: 'Massage', description: 'Full body massage.', priceRange: '1000 ETB' }],
    rating: 4.6,
    reviews: 110,
    verified: true,
    features: ['Open Now', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '35',
    name: 'Kaleb Hotel',
    category: 'Hospitality',
    description: 'Elegant hotel with modern amenities.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 62 22 00',
    email: 'reservation@kalebhotel.com',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.782 },
    gallery: [],
    products: [],
    services: [{ id: 's35', name: 'Conference Hall', description: 'Event hosting.', priceRange: 'Variable' }],
    rating: 4.2,
    reviews: 140,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$$'
  },
  {
    id: '36',
    name: 'Zemen Insurance',
    category: 'Finance',
    description: 'Innovative insurance solutions.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 115 57 58 50',
    email: 'info@zemeninsurance.com',
    bankAffiliation: 'Zemen Bank',
    bankId: 'zemen',
    logoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.775 },
    gallery: [],
    products: [],
    services: [{ id: 's36', name: 'Business Insurance', description: 'Corporate coverage.', priceRange: 'Variable' }],
    rating: 4.3,
    reviews: 55,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '37',
    name: 'Oromia Insurance',
    category: 'Finance',
    description: 'Providing reliable insurance services across Oromia and Ethiopia.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 115 54 04 04',
    email: 'info@oromiainsurance.com',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.005, lng: 38.765 },
    gallery: [],
    products: [],
    services: [{ id: 's37', name: 'Crop Insurance', description: 'Insurance for farmers.', priceRange: 'Variable' }],
    rating: 4.1,
    reviews: 45,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '38',
    name: 'Walia Steel Industry',
    category: 'Manufacturing',
    description: 'Manufacturer of steel pipes and profiles.',
    address: 'Alem Gena',
    city: 'Addis Ababa',
    phone: '+251 113 87 08 44',
    email: 'sales@waliansteel.com',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.920, lng: 38.680 },
    gallery: [],
    products: [{ id: 'p38', name: 'Steel Pipes', description: 'Industrial pipes.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.0,
    reviews: 30,
    verified: true,
    features: [],
    priceLevel: '$$$'
  },
  {
    id: '39',
    name: 'Oromia Water Works',
    category: 'Construction',
    description: 'Water infrastructure construction and engineering.',
    address: 'Kality',
    city: 'Addis Ababa',
    phone: '+251 114 39 02 80',
    email: 'info@owwce.com.et',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.900, lng: 38.740 },
    gallery: [],
    products: [],
    services: [{ id: 's39', name: 'Drilling', description: 'Water well drilling.', priceRange: 'Project based' }],
    rating: 4.2,
    reviews: 20,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '40',
    name: 'Biftu Adugna Business',
    category: 'Retail',
    description: 'Diversified business group involved in export and import.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 61 00 00',
    email: 'info@biftuadugna.com',
    bankAffiliation: 'Cooperative Bank of Oromia',
    bankId: 'coop',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.780 },
    gallery: [],
    products: [],
    services: [{ id: 's40', name: 'Export', description: 'Coffee and sesame export.', priceRange: 'Variable' }],
    rating: 4.3,
    reviews: 50,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$$'
  }
];
const mockBusinessesPart3 = [
  {
    id: '41',
    name: 'United Beverages',
    category: 'Food & Beverage',
    description: 'Producer of Anbessa Beer and other beverages.',
    address: 'Modjo',
    city: 'Modjo',
    phone: '+251 114 32 11 11',
    email: 'info@unitedbeverages.com',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.590, lng: 39.120 },
    gallery: [],
    products: [{ id: 'p41', name: 'Anbessa Beer', description: 'Lager beer.', price: 45, imageUrl: '' }],
    services: [],
    rating: 4.4,
    reviews: 60,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '42',
    name: 'Get-As International',
    category: 'Retail',
    description: 'Major importer and distributor of consumer goods.',
    address: 'Merkato',
    city: 'Addis Ababa',
    phone: '+251 112 75 75 75',
    email: 'info@getasinternational.com',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.030, lng: 38.740 },
    gallery: [],
    products: [],
    services: [{ id: 's42', name: 'Distribution', description: 'Wholesale distribution.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 40,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '43',
    name: 'Glorious PLC',
    category: 'Retail',
    description: 'Distributor of electronics and home appliances.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 62 00 00',
    email: 'sales@gloriousplc.com',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.780 },
    gallery: [],
    products: [{ id: 'p43', name: 'Sony TV', description: 'LED TV.', price: 25000, imageUrl: '' }],
    services: [],
    rating: 4.2,
    reviews: 80,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$$'
  },
  {
    id: '44',
    name: 'Rainbow Foam',
    category: 'Manufacturing',
    description: 'Manufacturer of foam mattresses and furniture.',
    address: 'Kality',
    city: 'Addis Ababa',
    phone: '+251 114 34 00 00',
    email: 'info@rainbowfoam.com',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.900, lng: 38.750 },
    gallery: [],
    products: [{ id: 'p44', name: 'Mattress', description: 'High density foam mattress.', price: 5000, imageUrl: '' }],
    services: [],
    rating: 4.1,
    reviews: 30,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '45',
    name: 'Safeway Supermarket',
    category: 'Retail',
    description: 'Supermarket chain providing quality goods.',
    address: 'CMC',
    city: 'Addis Ababa',
    phone: '+251 116 46 46 46',
    email: 'info@safeway.com.et',
    bankAffiliation: 'Hibret Bank',
    bankId: 'hibret',
    logoUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.820 },
    gallery: [],
    products: [],
    services: [{ id: 's45', name: 'Grocery', description: 'Daily needs.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 100,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '46',
    name: 'Nib Transport',
    category: 'Logistics',
    description: 'Freight transport services.',
    address: 'Kality',
    city: 'Addis Ababa',
    phone: '+251 114 34 34 34',
    email: 'info@nibtransport.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.910, lng: 38.760 },
    gallery: [],
    products: [],
    services: [{ id: 's46', name: 'Cargo Transport', description: 'Heavy duty transport.', priceRange: 'Distance based' }],
    rating: 4.2,
    reviews: 40,
    verified: true,
    features: [],
    priceLevel: '$$$'
  },
  {
    id: '47',
    name: 'Kadisco Chemical Industry',
    category: 'Manufacturing',
    description: 'Manufacturer of paints and adhesives.',
    address: 'Kality',
    city: 'Addis Ababa',
    phone: '+251 114 34 04 04',
    email: 'info@kadisco.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.900, lng: 38.755 },
    gallery: [],
    products: [{ id: 'p47', name: 'Kadisco Paint', description: 'Wall paint.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.3,
    reviews: 60,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '48',
    name: 'Adama Steel Factory',
    category: 'Manufacturing',
    description: 'Steel manufacturing plant in Adama.',
    address: 'Adama',
    city: 'Adama',
    phone: '+251 221 11 00 00',
    email: 'sales@adamasteel.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.550, lng: 39.280 },
    gallery: [],
    products: [{ id: 'p48', name: 'Steel Sheet', description: 'Corrugated sheet.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.1,
    reviews: 25,
    verified: true,
    features: [],
    priceLevel: '$$$'
  },
  {
    id: '49',
    name: 'Nib Real Estate',
    category: 'Construction',
    description: 'Real estate developer.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 63 00 00',
    email: 'info@nibrealestate.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.790 },
    gallery: [],
    products: [],
    services: [{ id: 's49', name: 'Apartment Sales', description: 'Luxury apartments.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 35,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '50',
    name: 'Century Mall',
    category: 'Retail',
    description: 'Shopping and entertainment center.',
    address: 'Gurd Shola',
    city: 'Addis Ababa',
    phone: '+251 116 67 67 67',
    email: 'info@centurymall.com',
    bankAffiliation: 'Nib International Bank',
    bankId: 'nib',
    logoUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1567449303078-57a63695666b?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.800 },
    gallery: [],
    products: [],
    services: [{ id: 's50', name: 'Cinema', description: 'Movie theater.', priceRange: '150 ETB' }],
    rating: 4.4,
    reviews: 300,
    verified: true,
    features: ['Open Now', 'Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '51',
    name: 'Guna Trading House',
    category: 'Retail',
    description: 'Import and export of agricultural and industrial products.',
    address: 'Mexico',
    city: 'Addis Ababa',
    phone: '+251 115 51 00 00',
    email: 'info@gunatrading.com',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.745 },
    gallery: [],
    products: [],
    services: [{ id: 's51', name: 'Export', description: 'Coffee export.', priceRange: 'Variable' }],
    rating: 4.1,
    reviews: 20,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '52',
    name: 'Wegagen Insurance',
    category: 'Finance',
    description: 'General insurance services.',
    address: 'Stadium',
    city: 'Addis Ababa',
    phone: '+251 115 52 52 52',
    email: 'info@wegageninsurance.com',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.012, lng: 38.755 },
    gallery: [],
    products: [],
    services: [{ id: 's52', name: 'Vehicle Insurance', description: 'Car insurance.', priceRange: 'Variable' }],
    rating: 4.2,
    reviews: 55,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '53',
    name: 'Star Business Group',
    category: 'Retail',
    description: 'Conglomerate involved in various sectors including trade and manufacturing.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 61 00 00',
    email: 'info@starbusiness.com',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.780 },
    gallery: [],
    products: [],
    services: [{ id: 's53', name: 'Trading', description: 'General trading.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 30,
    verified: true,
    features: [],
    priceLevel: '$$$'
  },
  {
    id: '54',
    name: 'Afro Tsion Construction',
    category: 'Construction',
    description: 'Grade 1 general contractor.',
    address: '22 Mazoria',
    city: 'Addis Ababa',
    phone: '+251 116 62 00 00',
    email: 'info@afrotsion.com',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.790 },
    gallery: [],
    products: [],
    services: [{ id: 's54', name: 'Construction', description: 'Building construction.', priceRange: 'Project based' }],
    rating: 4.1,
    reviews: 25,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '55',
    name: 'Ghion Hotel',
    category: 'Hospitality',
    description: 'Historic hotel with lush gardens in the city center.',
    address: 'Meskel Square',
    city: 'Addis Ababa',
    phone: '+251 115 51 32 22',
    email: 'info@ghionhotel.com.et',
    bankAffiliation: 'Wegagen Bank',
    bankId: 'wegagen',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.010, lng: 38.760 },
    gallery: [],
    products: [],
    services: [{ id: 's55', name: 'Garden Wedding', description: 'Wedding venue.', priceRange: 'Variable' }],
    rating: 4.0,
    reviews: 180,
    verified: true,
    features: ['Open Now', 'Pay with Tele Birr'],
    priceLevel: '$$'
  },
  {
    id: '56',
    name: 'Oromia Agricultural Coop',
    category: 'Agriculture',
    description: 'Union of agricultural cooperatives.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 61 00 00',
    email: 'info@oromiaagricoop.com',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.000, lng: 38.780 },
    gallery: [],
    products: [{ id: 'p56', name: 'Fertilizer', description: 'Agricultural inputs.', price: 0, imageUrl: '' }],
    services: [],
    rating: 4.3,
    reviews: 40,
    verified: true,
    features: ['Accepts Mobile Money'],
    priceLevel: '$$'
  },
  {
    id: '57',
    name: 'Oda International Hotel',
    category: 'Hospitality',
    description: 'Modern hotel in the heart of the city.',
    address: 'Bole',
    city: 'Addis Ababa',
    phone: '+251 116 18 18 18',
    email: 'info@odahotel.com',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.995, lng: 38.785 },
    gallery: [],
    products: [],
    services: [{ id: 's57', name: 'Accommodation', description: 'Deluxe rooms.', priceRange: '$80/night' }],
    rating: 4.2,
    reviews: 90,
    verified: true,
    features: ['Open Now', 'Pay with Tele Birr'],
    priceLevel: '$$$'
  },
  {
    id: '58',
    name: 'Oromia Roads Authority',
    category: 'Construction',
    description: 'Government body responsible for road construction in Oromia.',
    address: 'Sarbet',
    city: 'Addis Ababa',
    phone: '+251 113 71 71 71',
    email: 'info@oromiaroads.gov.et',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.990, lng: 38.730 },
    gallery: [],
    products: [],
    services: [{ id: 's58', name: 'Road Construction', description: 'Infrastructure development.', priceRange: 'Project based' }],
    rating: 4.0,
    reviews: 20,
    verified: true,
    features: [],
    priceLevel: '$$$$'
  },
  {
    id: '59',
    name: 'Finfinne Transport',
    category: 'Logistics',
    description: 'Public transport service.',
    address: 'Megenagna',
    city: 'Addis Ababa',
    phone: '+251 116 61 61 61',
    email: 'info@finfinnetransport.com',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 9.020, lng: 38.800 },
    gallery: [],
    products: [],
    services: [{ id: 's59', name: 'Bus Service', description: 'City transport.', priceRange: 'Low' }],
    rating: 3.9,
    reviews: 80,
    verified: true,
    features: ['Pay with Tele Birr'],
    priceLevel: '$'
  },
  {
    id: '60',
    name: 'Oromia Broadcasting Network',
    category: 'Technology',
    description: 'Media and broadcasting company.',
    address: 'Adama',
    city: 'Adama',
    phone: '+251 221 10 00 00',
    email: 'info@obn.et',
    bankAffiliation: 'Oromia Bank',
    bankId: 'oromia',
    logoUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200&h=200',
    coverUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=400',
    coordinates: { lat: 8.540, lng: 39.270 },
    gallery: [],
    products: [],
    services: [{ id: 's60', name: 'Advertising', description: 'TV and Radio ads.', priceRange: 'Variable' }],
    rating: 4.5,
    reviews: 200,
    verified: true,
    features: ['Open Now'],
    priceLevel: '$$'
  }
];
