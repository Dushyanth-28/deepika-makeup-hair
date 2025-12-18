
import React from 'react';
import { SERVICES } from '../constants';
import { Page } from '../App';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pb-24 animate-fade-in">
      <section className="pt-20 pb-16 bg-darkBg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">EXPERIENCES</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">Tailored artistry sessions designed for life's most significant moments. We use only premium international kits (MAC, Dior, Huda Beauty) for every client.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 group">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                  <img 
                    src={s.imageUrl} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                     <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl mb-4">
                        <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                     </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
                  Featured Service
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{s.title}</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">{s.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {s.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                      </div>
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-surface border border-white/10 rounded-3xl mb-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <span className="text-gray-500 uppercase text-xs font-black tracking-widest">Investment</span>
                    <p className="text-3xl font-black text-white">{s.price}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('book')}
                    className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-sm"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-24 bg-surface mt-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black text-white mb-12">COMMON QUESTIONS</h3>
          <div className="space-y-6 text-left">
            {[
              { q: "Do you provide on-location services?", a: "Yes, we travel for bridal bookings across India and international destination weddings." },
              { q: "What brands are in your kit?", a: "Only high-end luxury brands like Estée Lauder, Charlotte Tilbury, Tom Ford, and Pat McGrath." },
              { q: "How early should I book?", a: "For the wedding season (Oct-Feb), we recommend booking 6-8 months in advance." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-darkBg border border-white/5 rounded-2xl">
                <h4 className="text-lg font-bold text-primary mb-2">Q: {faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
