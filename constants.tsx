
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
    title: 'Traditional Red Heritage',
    description: 'A complete traditional bridal makeover featuring bold kohl-rimmed eyes, a classic red bindi, and precision-contoured skin for high-definition photography.',
    beforeImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't2',
    title: 'Golden Royal Muhurtham',
    description: 'Focusing on a luminous "lit-from-within" glow paired with traditional gold temple jewelry and a sophisticated warm-toned eye shadow palette.',
    beforeImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't3',
    title: 'Minimalist North Indian Reception',
    description: 'A contemporary take on bridal glam featuring soft cut-crease eye work, nude lips, and airbrushed skin for a lightweight feel.',
    beforeImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=1000&auto=format&fit=crop',
    category: 'Reception'
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
    id: 'p2',
    title: 'Golden Hour Muhurtham',
    category: 'Bridal',
    location: 'Lalit Ashok, Bangalore',
    description: 'Warm gold tones paired with a traditional silk saree. Focus on glowing, sun-kissed skin.',
    imageUrl: 'https://images.unsplash.com/photo-1603968700000-68334057881c?q=80&w=1000&auto=format&fit=crop'
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
    id: 'p4',
    title: 'Vibrant Sangeet Glow',
    category: 'Party',
    location: 'The Oberoi, Bangalore',
    description: 'Breathable, sweat-resistant festive makeup with a pops of jewel-toned eyeliner.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
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
    id: 'p6',
    title: 'Editorial Edge',
    category: 'Editorial',
    location: 'Vogue India Shoot',
    description: 'Experimental editorial work featuring wet-look skin and sharp, graphic liner.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p7',
    title: 'Modern Minimalist Bride',
    category: 'Bridal',
    location: 'Destination - Goa',
    description: 'Dewy skin and nude lips for a beach-side sunset wedding. Effortlessly chic.',
    imageUrl: 'https://images.unsplash.com/photo-1591154133230-0708688ca057?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p8',
    title: 'High-Fashion Portrait',
    category: 'Editorial',
    location: 'Elle Magazine Shoot',
    description: 'Soft focus textures and monochromatic tones for high-fashion digital portraiture.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p9',
    title: 'Evening Cocktail Glam',
    category: 'Party',
    location: 'ITC Gardenia',
    description: 'Dramatic smokey eyes and a bold oxblood lip. Perfect for high-end gala evenings.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p10',
    title: 'Executive Presence',
    category: 'Corporate',
    location: 'EGL Business Park',
    description: 'Minimalist but impactful. Precision sculpting for high-level meetings.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p11',
    title: 'Leadership Headshot',
    category: 'Corporate',
    location: 'Manyata Tech Park',
    description: 'Matte-finish skin-work optimized for professional studio lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p12',
    title: 'Gala Night Leadership',
    category: 'Corporate',
    location: 'JW Marriott, Bangalore',
    description: 'An elevated professional look featuring a soft winged liner.',
    imageUrl: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p13',
    title: 'Timeless Temple Bride',
    category: 'Bridal',
    location: 'Mysore Palace',
    description: 'Classic South Indian bridal look with bold red lips and traditional gold jewelry.',
    imageUrl: 'https://images.unsplash.com/photo-1615214592453-22872659e99a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p14',
    title: 'Editorial Glow',
    category: 'Editorial',
    location: 'Studio Session',
    description: 'Hyper-realistic skin texture focus. Minimal makeup, maximum impact.',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p15',
    title: 'Starlight Reception',
    category: 'Party',
    location: 'Conrad Bangalore',
    description: 'Glitter cut-crease eye makeup and satin skin for a festive evening celebration.',
    imageUrl: 'https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p16',
    title: 'Professional Profile',
    category: 'Corporate',
    location: 'Whitefield',
    description: 'Natural, clean, and confident. A polished look for corporate headshots.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop'
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
