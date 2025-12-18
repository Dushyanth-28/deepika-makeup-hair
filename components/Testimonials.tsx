
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Love From Clients</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">HAPPY MUSES</h2>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x snap-mandatory">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="snap-center shrink-0 w-[350px] md:w-[450px] bg-darkBg border border-white/5 p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-sm">star</span>
                ))}
              </div>

              <p className="text-gray-300 text-lg italic leading-relaxed mb-8 relative z-10">
                "{test.content}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={test.avatarUrl} 
                  alt={test.name} 
                  className="size-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{test.name}</h4>
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
