
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-12 md:py-24 bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal reveal-up text-center mb-10 md:mb-20 max-w-3xl mx-auto">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4">What We Do</h4>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tighter">OUR SERVICES</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
            From traditional weddings to party looks, we make you look your best.
          </p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <span className="material-symbols-outlined text-lg">swipe_left</span>
          Swipe to explore
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="reveal reveal-up group relative flex flex-col bg-gray-50 dark:bg-surface border border-gray-100 dark:border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-700 hover:-translate-y-3 shadow-sm hover:shadow-2xl min-w-[80vw] md:min-w-0 snap-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 md:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={s.imageUrl}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="p-6 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="size-12 md:size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">{s.icon}</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-widest">{s.price}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-3 md:mb-4 tracking-tight leading-none">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-medium line-clamp-3 md:line-clamp-none">{s.description}</p>

                <button
                  onClick={() => setSelectedService(s)}
                  className="w-full py-3 md:py-4 rounded-2xl border-2 border-primary/20 dark:border-white/10 text-primary dark:text-white font-black text-xs md:text-sm uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2"
                >
                  Learn More
                  <span className="material-symbols-outlined text-lg">info</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
          <div className="absolute inset-0 bg-black/80 glass-effect" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white dark:bg-surface w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-scale-in">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 z-20 size-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="h-64 sm:h-80 overflow-hidden">
              <img src={selectedService.imageUrl} className="w-full h-full object-cover" alt={selectedService.title} />
            </div>

            <div className="p-10 sm:p-14">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs block mb-4">Details</span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 leading-none tracking-tighter">{selectedService.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed italic">"{selectedService.description}"</p>

              <div className="space-y-4 mb-10">
                <h4 className="text-gray-900 dark:text-white font-black uppercase text-sm tracking-widest">What's Included:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span className="font-bold text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all text-sm uppercase tracking-widest">
                  Request Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
