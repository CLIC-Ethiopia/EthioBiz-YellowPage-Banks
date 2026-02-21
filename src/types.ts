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

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  website?: string;
  bankAffiliation: string;
  bankId?: string;
  logoUrl: string;
  coverUrl: string;
  products: Product[];
  services: Service[];
  rating: number;
  reviews: number;
  verified: boolean;
}
