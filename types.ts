
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
  category: 'Bridal' | 'Reception' | 'Editorial' | 'Party';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Reception' | 'Editorial' | 'Sangeet';
  imageUrl: string;
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
