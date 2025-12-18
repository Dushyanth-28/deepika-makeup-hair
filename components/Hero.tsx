
import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA_kv3Jc6cOx-fHSThIcvSHeH6HyZtIRz0YrtwYAgRTTFvl-sCDTPJrBbZ029StrZ7spilVlVaXg2Bk3wB3B4pb9sAdoI2V4h3xb2t_r_a1MKr0CNcc5cULNzLu2RPPBA_dkZk9AxqNtVa-ws7jCwtco2rmQLZmRDBBwk5M2EHHkVa4JgIYOSTEdnTXJqW06C4VfvZe0qydtW5NMntTYhv27ncoeNG5gef8VXqlTILwuGjFAjNF1rMax2tfa0Q1Ae-o60t0n4SZh78" 
          alt="Professional Indian Bride Transformation"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            Now Booking for Wedding Season '24
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-8">
            REDEFINING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">BEAUTY</span> <br />
            IN BANGALORE
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-10">
            Professional bridal and editorial artistry tailored to your unique style. Experience the Urban Chic transformation with a touch of tradition.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => onNavigate('book')}
              className="px-10 py-5 bg-primary hover:bg-secondary text-white text-lg font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Book Consultation
            </button>
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-10 py-5 bg-white/5 border border-white/20 hover:bg-white/10 text-white text-lg font-bold rounded-2xl transition-all backdrop-blur-md"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-darkBg/50 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-8">
          {[
            { label: 'Brides Styled', val: '500+' },
            { label: 'Years Experience', val: '10+' },
            { label: 'Client Rating', val: '4.9/5' },
            { label: 'Awarded Artist', val: 'Top 10' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl font-black text-white">{stat.val}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
