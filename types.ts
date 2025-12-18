
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  features: string[];
  imageUrl: string;
}

export interface Transformation {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: 'Bridal' | 'Reception' | 'Editorial' | 'Corporate' | 'Professional';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party' | 'Corporate' | 'Editorial';
  imageUrl: string;
  description: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
}
