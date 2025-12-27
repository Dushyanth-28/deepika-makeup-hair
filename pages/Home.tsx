
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Transformations from '../components/Transformations';
import Testimonials from '../components/Testimonials';
import VideoTestimonials from '../components/VideoTestimonials';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-x-hidden theme-transition">
      <Hero onNavigate={onNavigate} />
      <Services />
      
      {/* Portfolio Preview with better text visibility */}
      <Portfolio limit={3} onNavigate={onNavigate} />
      
      <Transformations />
      
      {/* New Video Testimonials Section */}
      <VideoTestimonials />

      <Testimonials />
      
      {/* CTA Section Optimized for Light Mode */}
      <section className="py-32 bg-gray-50 dark:bg-darkBg border-y border-gray-100 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ec136d 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 reveal reveal-up">
          <h2 className="text-6xl md:text-9xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-none">BECOME THE NEXT <br /><span className="text-primary italic font-serif uppercase">Muse</span></h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Ready for your transformation? Let's create a look that's uniquely yours. Limited availability for the upcoming wedding season.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('book')}
              className="px-12 py-5 bg-primary hover:bg-secondary text-white font-black rounded-3xl shadow-2xl shadow-primary/30 transition-all hover:-translate-y-2 uppercase tracking-widest"
            >
              Book Your Slot Now
            </button>
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-12 py-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-black rounded-3xl transition-all shadow-sm uppercase tracking-widest"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
