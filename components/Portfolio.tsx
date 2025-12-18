
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
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">THE GALLERY</h2>
          </div>
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {['All', 'Bridal', 'Reception', 'Editorial'].map(cat => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                    cat === 'All' ? 'bg-primary text-white' : 'border border-white/10 text-gray-400 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer bg-darkBg border border-white/5"
              onClick={() => onNavigate('portfolio')}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-primary text-xs font-black uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white text-2xl font-black">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-12 py-5 border border-white/10 rounded-2xl text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Explore Full Gallery
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
