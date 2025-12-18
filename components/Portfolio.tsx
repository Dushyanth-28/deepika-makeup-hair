
import React from 'react';
import { PORTFOLIO } from '../constants';
import { Page } from '../App';

interface PortfolioProps {
  limit?: number;
  onNavigate: (page: Page) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit, onNavigate }) => {
  const items = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;

  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal reveal-up flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-xl">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Artistic Showcase</h4>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.9]">THE <span className="text-primary italic font-serif">Curated</span> <br />GALLERY</h2>
          </div>
          <button 
            onClick={() => onNavigate('portfolio')}
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white"
          >
            Explore All Work
            <div className="size-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-white">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div 
              key={item.id} 
              className="reveal reveal-up group relative rounded-[3rem] overflow-hidden cursor-pointer bg-gray-100 dark:bg-surface border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => onNavigate('portfolio')}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-darkBg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3">{item.category}</span>
                <h3 className="text-white text-3xl font-black tracking-tight leading-none mb-4">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {item.location || 'Bangalore Studio'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
