export interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  reply?: {
    text: string;
    date: string;
  };
}

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  website?: string;
  bankAffiliation: string;
  bankId?: string;
  logoUrl: string;
  coverUrl: string;
  gallery?: string[];
  products: Product[];
  services: Service[];
  rating: number;
  reviews: number;
  verified: boolean;
  verificationTier?: 'Silver' | 'Gold' | 'Platinum';
  reviewsList?: Review[];
  features?: string[];
  priceLevel?: '$' | '$$' | '$$$' | '$$$$';
  offers?: {
    id: string;
    title: string;
    description: string;
    discount?: string;
    expiryDate?: string;
  }[];
}
