
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  const categories = ['All', 'Bridal', 'Reception', 'Editorial', 'Sangeet'];

  return (
    <div className="min-h-screen pb-24 animate-fade-in">
      {/* Header */}
      <section className="pt-20 pb-16 bg-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">THE GALLERY</h1>
          <p className="text-xl text-gray-400 max-w-2xl">A curated collection of my finest work. From traditional heritage looks to avant-garde editorial concepts.</p>
          
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer bg-surface border border-white/5 animate-fade-in"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                  <span className="text-primary text-xs font-black uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white text-2xl font-black leading-tight">{item.title}</h3>
                  {item.location && (
                    <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
