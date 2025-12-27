
import { Service, Transformation, PortfolioItem, Testimonial, VideoTestimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Bridal Makeup',
    description: 'Custom bridal makeup for your big day. Includes trial and styling.',
    icon: 'diamond',
    price: 'Consult for Price',
    features: ['HD/Airbrush Makeup', 'Jewelry Styling', 'Premium Lashes', 'Skin Prep'],
    imageUrl: 'https://images.unsplash.com/photo-1673413350047-ea5c0fd58c9e?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's2',
    title: 'Hairstyling',
    description: 'Hairstyling for all occasions. Buns, waves, and more.',
    icon: 'celebration',
    price: 'Consult for Price',
    features: ['Bridal Updos', 'Extensions Styling', 'Floral Accessories', 'Long-lasting Hold'],
    imageUrl: 'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's3',
    title: 'Nail Art',
    description: 'Beautiful nail art. Gel, acrylic, and custom designs.',
    icon: 'brush',
    price: 'Consult for Price',
    features: ['Gel Polish', 'Nail Extensions', 'Bridal Nail Art', 'Manicure'],
    imageUrl: 'https://images.unsplash.com/photo-1605180427725-95e306fc0e9a?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's4',
    title: 'Academy Courses',
    description: 'Makeup and hair courses for beginners and pros.',
    icon: 'school',
    price: 'Consult for Price',
    features: ['Certification', 'Hands-on Practice', 'Product Knowledge', 'Business Guidance'],
    imageUrl: 'https://images.unsplash.com/photo-1583170607643-9fcaba85073c?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's5',
    title: 'Lash Extensions',
    description: 'Semi-permanent lash extensions. Classic and volume styles.',
    icon: 'visibility',
    price: 'Consult for Price',
    features: ['Custom Lengths', 'Natural Look', 'Volume Sets', 'Safe Application'],
    imageUrl: 'https://images.unsplash.com/photo-1605389196941-c3c6595528c3?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's6',
    title: 'Hair Refixing',
    description: 'Hair refixing to add volume and style.',
    icon: 'content_cut',
    price: 'Consult for Price',
    features: ['Volume Restoration', 'Style Correction', 'Damage Assessment', 'Expert Care'],
    imageUrl: 'https://images.unsplash.com/photo-1601658912654-99c1c8ae7ae6?fm=jpg&q=80&w=800&auto=format&fit=crop'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    title: 'Traditional Bridal',
    description: 'Traditional bridal look with bold accents.',
    beforeImage: 'https://images.unsplash.com/photo-1693362029321-eb86dc114bc4?fm=jpg&q=60&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1673413347895-9664451e701e?fm=jpg&q=80&w=800&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't2',
    title: 'Reception Glam',
    description: 'Glamorous reception look with glowing skin.',
    beforeImage: 'https://images.unsplash.com/photo-1686294589996-0d1657b86df7?fm=jpg&q=60&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1665960212519-adcbb5e2ca03?fm=jpg&q=80&w=800&auto=format&fit=crop',
    category: 'Bridal'
  },
  {
    id: 't3',
    title: 'Party Makeover',
    description: 'Modern look for parties.',
    beforeImage: 'https://images.unsplash.com/photo-1688828028702-55d50a360f6f?fm=jpg&q=60&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1760613130027-3959a3eb939c?fm=jpg&q=80&w=800&auto=format&fit=crop',
    category: 'Reception'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Royal Bridal',
    category: 'Bridal',
    location: 'Bangalore',
    description: 'Traditional bridal makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1673413347895-9664451e701e?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p2',
    title: 'Golden Glow',
    category: 'Bridal',
    location: 'Bangalore',
    description: 'Glowing skin for Muhurtham.',
    imageUrl: 'https://images.unsplash.com/photo-1760613130027-3959a3eb939c?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p3',
    title: 'Classic Red',
    category: 'Bridal',
    location: 'Bangalore',
    description: 'Classic red bridal look.',
    imageUrl: 'https://images.unsplash.com/photo-1762201732755-b59e912de5d9?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p4',
    title: 'South Indian Bride',
    category: 'Bridal',
    location: 'Chennai',
    description: 'South Indian bridal makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1672985352725-a64688cb61b7?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p5',
    title: 'Reception Elegance',
    category: 'Party',
    location: 'Bangalore',
    description: 'Elegant evening look.',
    imageUrl: 'https://images.unsplash.com/photo-1665960212519-adcbb5e2ca03?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p6',
    title: 'Sangeet Vibes',
    category: 'Party',
    location: 'Bangalore',
    description: 'Festive Sangeet makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1673413349218-ba4de23c2958?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p7',
    title: 'Glam Night',
    category: 'Party',
    location: 'Mumbai',
    description: 'Glamorous party makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p8',
    title: 'Corporate Headshot',
    category: 'Corporate',
    location: 'Bangalore',
    description: 'Professional corporate makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p9',
    title: 'Business Event',
    category: 'Corporate',
    location: 'Hyderabad',
    description: 'Subtle business look.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p10',
    title: 'Editorial Shoot',
    category: 'Editorial',
    location: 'Studio',
    description: 'Creative editorial makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1583170607643-9fcaba85073c?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p11',
    title: 'Fashion Week',
    category: 'Editorial',
    location: 'Bangalore',
    description: 'Bold runway makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1601658912654-99c1c8ae7ae6?fm=jpg&q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p12',
    title: 'Creative Avant-Garde',
    category: 'Editorial',
    location: 'Studio',
    description: 'Avant-garde makeup.',
    imageUrl: 'https://images.unsplash.com/photo-1605389196941-c3c6595528c3?fm=jpg&q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Happy Bride',
    role: 'Bridal Client',
    content: "Deepika made me look like a dream on my wedding day. Her expertise is unmatched!",
    avatarUrl: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test2',
    name: 'Student',
    role: 'Academy Graduate',
    content: "Learning at Deepika Makeup Academy was the best decision for my career. The hands-on training is excellent.",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test3',
    name: 'Corporate Client',
    role: 'Professional',
    content: "Professional, punctual, and highly skilled. Highly recommend for any event.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'vt1',
    name: 'Client Stories',
    videoUrl: 'https://assets.mixkit.co/videos/33511/33511-360.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop',
    shortQuote: 'Best makeup artist in Bangalore!'
  },
  {
    id: 'vt2',
    name: 'Student Experience',
    videoUrl: 'https://assets.mixkit.co/videos/1215/1215-360.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=500&auto=format&fit=crop',
    shortQuote: 'Learned so much at the academy.'
  },
  {
    id: 'vt3',
    name: 'Bridal Glow',
    videoUrl: 'https://assets.mixkit.co/videos/1296/1296-360.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583994038308-466368d37449?q=80&w=500&auto=format&fit=crop',
    shortQuote: 'Felt like a princess!'
  },
  {
    id: 'vt4',
    name: 'Party Ready',
    videoUrl: 'https://assets.mixkit.co/videos/1221/1221-360.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500&auto=format&fit=crop',
    shortQuote: 'Amazing party look.'
  },
  {
    id: 'vt5',
    name: 'Natural Finish',
    videoUrl: 'https://assets.mixkit.co/videos/33431/33431-360.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop',
    shortQuote: 'So natural and flawless.'
  }
];
