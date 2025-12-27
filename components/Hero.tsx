
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] md:min-h-screen w-full flex flex-col overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(1.1) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.4s cubic-bezier(0.1, 0, 0, 1)'
        }}
      >
        {/* Overlay for Contrast - Essential for Light Mode Visibility */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10 transition-colors duration-500"></div>
        <img
          src="/assets/images/image_1.jpg"
          alt="Luxury Indian Bridal Makeup"
          className="w-full h-full object-cover object-[center_25%]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div
          className="max-w-3xl pt-20"
          style={{
            transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="reveal reveal-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-white backdrop-blur-xl">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            Elevating Beauty in Bangalore
          </div>

          <h1 className="reveal reveal-up [transition-delay:100ms] text-6xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white mb-8 drop-shadow-2xl">
            <span className="font-serif italic font-normal text-primary">Deepika</span> <br />
            Makeup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">& Hair</span>
          </h1>

          <p className="reveal reveal-up [transition-delay:200ms] text-lg md:text-2xl text-white max-w-xl leading-relaxed mb-12 font-medium drop-shadow-md">
            Looking for the perfect bridal look? We create stunning makeovers for your special day.
          </p>

          <div className="reveal reveal-up [transition-delay:300ms] flex flex-wrap gap-6">
            <button
              onClick={() => onNavigate('book')}
              className="group relative overflow-hidden px-12 py-5 bg-primary text-white text-lg font-black rounded-2xl transition-all shadow-2xl shadow-primary/40"
            >
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">calendar_month</span>
                Book Your Session
              </span>
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="group px-12 py-5 bg-white/10 border border-white/20 hover:border-primary text-white text-lg font-black rounded-2xl transition-all backdrop-blur-md flex items-center gap-2"
            >
              View Portfolio
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="reveal reveal-up [transition-delay:500ms] relative z-30 bg-white/90 dark:bg-darkBg/60 backdrop-blur-3xl border-t border-gray-100 dark:border-white/10 py-12 transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-y-10 gap-x-16">
          {[
            { label: 'Happy Brides', val: '650+', icon: 'favorite' },
            { label: 'Experience', val: '12 Yrs', icon: 'workspace_premium' },
            { label: 'Rating', val: '5.0/5', icon: 'stars' },
            { label: 'Awards Won', val: '18', icon: 'trophy' }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-5 group">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">{stat.val}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
