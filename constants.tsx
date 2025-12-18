
import { Service, Transformation, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Royal Bridal Signature',
    description: 'Our flagship transformation for the modern Indian bride. Includes multi-day consultations, trial session, and on-day luxury styling.',
    icon: 'diamond',
    price: 'Starts at ₹25,000',
    features: ['HD Airbrush Foundation', 'Jewelry Styling & Draping', 'Premium Mink Lashes', 'Skin Prep Mask Session'],
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 's2',
    title: 'Party & Festive Glam',
    description: 'Sophisticated cocktail and reception looks focusing on jewel tones, smokey eyes, and long-wear precision contouring.',
    icon: 'celebration',
    price: 'Starts at ₹12,000',
    features: ['Hollywood Waves Styling', 'Strobe & Highlight Finish', 'Waterproof Precision Liner', 'Festive Glitter Application'],
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 's3',
    title: 'Fashion Editorial',
    description: 'High-concept makeup for brand campaigns, magazine editorials, and professional portfolio shoots.',
    icon: 'camera_alt',
    price: 'Starts at ₹18,000 / day',
    features: ['Avant-Garde Textures', 'On-set Retouching', 'Concept Collaboration', 'Photography Lighting Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 's4',
    title: 'Corporate Professional',
    description: 'Subtle, polished makeup for high-profile business meetings, speaker events, and professional headshots.',
    icon: 'work',
    price: 'Starts at ₹6,500',
    features: ['Minimalist Professional Look', 'Matte Finish Skin', 'Natural Lip Tones', 'Anti-Glare for Video'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    title: 'Royal Indian Bride',
    description: 'Traditional heritage makeup with deep kohl eyes and radiant gold skin-work.',
    beforeImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't2',
    title: 'Corporate Polished',
    description: 'Enhancing professional features with a clean, confident, and long-lasting matte finish.',
    beforeImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    category: 'Corporate'
  },
  {
    id: 't3',
    title: 'Editorial High Fashion',
    description: 'Avant-garde skin-prep and bold color application for runway-ready results.',
    beforeImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop',
    category: 'Editorial'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Heritage Silk Bride',
    category: 'Bridal',
    location: 'Taj West End, Bangalore',
    description: 'A deep red traditional look using authentic Kanjeevaram styling and antique temple jewelry.',
    imageUrl: 'https://images.unsplash.com/photo-1610030469614-46c592398555?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p5',
    title: 'North Indian Royal',
    category: 'Bridal',
    location: 'Umaid Bhawan, Jodhpur',
    description: 'A regal pastel look with heavy contouring and bold kohl eyes.',
    imageUrl: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p3',
    title: 'Rose Gold Reception',
    category: 'Party',
    location: 'Leela Palace',
    description: 'Soft-glam with shimmering rose-gold lids and a voluminous Hollywood wave.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p10',
    title: 'Executive Presence',
    category: 'Corporate',
    description: 'Minimalist but impactful. Precision sculpting for high-level meetings.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p11',
    title: 'Leadership Headshot',
    category: 'Corporate',
    description: 'Matte-finish skin-work optimized for professional studio lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p12',
    title: 'Gala Night Leadership',
    category: 'Corporate',
    description: 'An elevated professional look featuring a soft winged liner.',
    imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Priya Iyer',
    role: 'Bridal Client',
    content: "Anjali truly understands South Indian skin tones. My muhurtham makeup was so lightweight and natural. She is a magician!",
    avatarUrl: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test2',
    name: 'Aditi Verma',
    role: 'Fashion Designer',
    content: "As a designer, I'm very picky about the aesthetic. Anjali's work on our last lookbook was impeccable.",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test3',
    name: 'Deepika Rao',
    role: 'Corporate Leader',
    content: "Needed a clean, powerful look for my TEDx talk. Anjali delivered a professional style that felt like 'me' but elevated.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];
