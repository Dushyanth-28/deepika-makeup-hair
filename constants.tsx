
import { Service, Transformation, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Royal Bridal Signature',
    description: 'Our flagship transformation for the modern Indian bride. Includes multi-day consultations, trial session, and on-day luxury styling.',
    icon: 'diamond',
    price: 'Starts at ₹25,000',
    features: ['HD Airbrush Foundation', 'Jewelry Styling & Draping', 'Premium Mink Lashes', 'Skin Prep Mask Session'],
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 's2',
    title: 'The Reception Glam',
    description: 'Sophisticated cocktail and reception looks focusing on jewel tones, smokey eyes, and long-wear precision contouring.',
    icon: 'celebration',
    price: 'Starts at ₹12,000',
    features: ['Hollywood Waves Styling', 'Strobe & Highlight Finish', 'Waterproof Precision Liner', 'Nail Color Application'],
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
    title: 'Occasion & Sangeet',
    description: 'Vibrant, festive looks designed to withstand the energy of the dance floor. Glow-focused and sweat-resistant.',
    icon: 'face_retouching_natural',
    price: 'Starts at ₹8,500',
    features: ['Messy Braid Styling', 'Glitter Cut-Crease', 'High-Shine Gloss', '12hr Setting Mist'],
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    title: 'Temple Wedding Glow',
    description: 'Color correction and skin-like HD finish for a traditional South Indian Muhurtham.',
    beforeImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't2',
    title: 'Night Reception Luxe',
    description: 'Transforming a daytime look into a bold, evening-ready reception glam with deep tones.',
    beforeImage: 'https://images.unsplash.com/photo-1503910367177-3e1c0c66286b?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop',
    category: 'Reception'
  },
  {
    id: 't3',
    title: 'Editorial Clarity',
    description: 'Skin prep and editorial lighting optimization for a fashion brand campaign.',
    beforeImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1610030469614-46c592398555?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p2',
    title: 'Midnight Velvet',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p3',
    title: 'Rose Gold Reception',
    category: 'Reception',
    location: 'Leela Palace',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p4',
    title: 'Summer Sangeet',
    category: 'Sangeet',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p5',
    title: 'North Indian Royal',
    category: 'Bridal',
    location: 'Umaid Bhawan (Destination)',
    imageUrl: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p6',
    title: 'Contemporary Drape',
    category: 'Reception',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p7',
    title: 'Sun-Kissed Mehndi',
    category: 'Sangeet',
    imageUrl: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Priya Iyer',
    role: 'Bridal Client',
    content: "Anjali truly understands South Indian skin tones. My muhurtham makeup was so lightweight and natural, yet looked flawless in every single photo. She is a magician!",
    avatarUrl: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test2',
    name: 'Rohan Mehta',
    role: 'Creative Director',
    content: "We've worked with Urban Chic on multiple couture campaigns. Anjali's speed and precision on set are unmatched. Her editorial work is world-class.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test3',
    name: 'Sneha Kapoor',
    role: 'Reception Client',
    content: "I wanted a bold, unconventional look for my cocktail night. Anjali created a stunning blue-gold smokey eye that was the talk of the evening!",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];
