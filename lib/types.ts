export interface Car {
  id: string;
  brand: string;
  model: string;
  variant: string;
  price: number;
  priceFormatted: string;
  fuel: string;
  transmission: string;
  year: number;
  mileage: number;
  color: string[];
  images: string[];
  features: string[];
  isNew: boolean;
  isFeatured: boolean;
  branch: string;
}

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  carInterest?: string;
  branch?: string;
  message?: string;
  source: string;
  createdAt: Date;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  embedUrl?: string;
  lat: number;
  lng: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  car: string;
  rating: number;
  review: string;
  videoUrl?: string;
  imageUrl?: string;
}
