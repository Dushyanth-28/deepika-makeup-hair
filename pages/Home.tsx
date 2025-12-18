
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Transformations from '../components/Transformations';
import Testimonials from '../components/Testimonials';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <Portfolio limit={3} onNavigate={onNavigate} />
      <Transformations />
      <Testimonials />
      
      <section className="py-24 bg-darkBg border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ec136d 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">BECOME THE NEXT <br /><span className="text-primary italic uppercase">Muse</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Ready for your transformation? Let's create a look that's uniquely yours. Limited slots available for the upcoming wedding season.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('book')}
              className="px-12 py-5 bg-primary hover:bg-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
            >
              Book Your Slot Now
            </button>
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all"
            >
              View More Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
