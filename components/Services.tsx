
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-darkBg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">CURATED ARTISTRY</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From traditional weddings to high-fashion editorials, our services are tailored to create a look that's uniquely yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="group relative flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={s.imageUrl} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <span className="text-xs font-black text-primary uppercase">{s.price}</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-3 tracking-tighter">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{s.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-2">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
