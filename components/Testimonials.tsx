
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-darkBg transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal reveal-up text-center mb-24">
          <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Authentic Praise</h4>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">OUR BEAUTIFUL <br /><span className="text-primary italic font-serif">Muses</span></h2>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-16 hide-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {TESTIMONIALS.map((test, i) => (
            <div 
              key={test.id}
              className="reveal reveal-up snap-center shrink-0 w-[320px] md:w-[500px] bg-gray-50 dark:bg-surface border border-gray-100 dark:border-white/5 p-12 rounded-[3rem] relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute top-0 right-0 size-48 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex gap-1 text-primary mb-8">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-lg">star</span>
                ))}
              </div>

              <blockquote className="text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium leading-relaxed mb-10 relative z-10 italic">
                "{test.content}"
              </blockquote>

              <div className="flex items-center gap-5 relative z-10 pt-8 border-t border-gray-200 dark:border-white/10">
                <img 
                  src={test.avatarUrl} 
                  alt={test.name} 
                  className="size-16 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-black text-xl leading-none mb-1">{test.name}</h4>
                  <p className="text-primary text-xs font-black uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
