
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';

interface PortfolioPageProps {
  onBookLook?: (look: PortfolioItem) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBookLook }) => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  const categories = ['All', 'Bridal', 'Party', 'Corporate', 'Editorial'];

  return (
    <div className="min-h-screen pb-24 animate-fade-in bg-white dark:bg-darkBg">
      {/* Header */}
      <section className="pt-20 pb-16 bg-gray-50 dark:bg-surface border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-darkBg dark:text-white mb-6 tracking-tighter">THE GALLERY</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">A curated collection of my finest work. Click on any image to learn more about the makeover process.</p>
          
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-primary/50'
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
                onClick={() => setSelectedItem(item)}
                className="group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer bg-white dark:bg-surface border border-gray-100 dark:border-white/5 animate-fade-in shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                  <span className="text-primary text-xs font-black uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white text-2xl font-black leading-tight">{item.title}</h3>
                  <div className="mt-4 flex items-center text-white/70 text-sm font-bold uppercase tracking-widest">
                    <span>View Details</span>
                    <span className="material-symbols-outlined ml-2 text-lg">arrow_outward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 animate-fade-in">
          <div className="absolute inset-0 bg-darkBg/90 backdrop-blur-xl" onClick={() => setSelectedItem(null)}></div>
          <div className="relative bg-white dark:bg-surface w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh]">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-20 size-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white dark:bg-surface overflow-y-auto">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">{selectedItem.category}</span>
              <h2 className="text-4xl md:text-5xl font-black text-darkBg dark:text-white mb-6 leading-tight tracking-tighter">{selectedItem.title}</h2>
              {selectedItem.location && (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8 font-bold">
                  <span className="material-symbols-outlined">location_on</span>
                  {selectedItem.location}
                </div>
              )}
              <div className="prose prose-invert">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{selectedItem.description}"
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onBookLook && onBookLook(selectedItem)}
                  className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary transition-all uppercase tracking-widest text-sm"
                >
                  Book Similar Look
                </button>
                <button className="flex-1 py-4 border border-gray-200 dark:border-white/10 text-darkBg dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                  Share Artistry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
