
import React from 'react';
import { Page } from '../App';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pb-32 animate-fade-in bg-white dark:bg-darkBg transition-colors duration-500">
      {/* Immersive Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-darkBg via-white/50 dark:via-darkBg/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1594744803329-a584af1cae24?q=80&w=2000&auto=format&fit=crop" 
            alt="Anjali Nair - Professional Portrait"
            className="w-full h-full object-cover object-[center_15%] scale-105"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl reveal reveal-left active">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 block">Master Artist & Founder</span>
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.85]">
              ANJALI <br /> <span className="font-serif italic font-normal text-primary">Nair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              Merging London's technical precision with the soulful heritage of South Asian artistry to create timeless, high-definition elegance.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2 reveal reveal-left">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-tight">
                THE <span className="text-primary italic font-serif font-normal">Legacy</span> <br /> OF EXCELLENCE
              </h2>
              <div className="space-y-8 text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                <p>
                  My journey into the world of artistry began in the vibrant streets of Bangalore, fueled by a deep-seated passion for the transformative power of beauty. After refining my craft at the prestigious <span className="text-gray-900 dark:text-white font-bold">London School of Makeup</span>, I returned to India with a singular mission: to redefine the "Bridal Glow."
                </p>
                <p>
                  Over the past 12 years, I have had the privilege of styling over 600 brides across the globe. My philosophy is simple: <span className="italic">"True beauty isn't about covering up; it's about revealing the most radiant version of you."</span>
                </p>
                <p>
                  Urban Chic Artistry was born out of this desire for authenticity. We prioritize skin health, use only the world's most premium luxury kits, and treat every face as a unique canvas of heritage and modern spirit.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 reveal reveal-right">
              <div className="col-span-1 space-y-6 pt-12">
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:-rotate-2 border border-gray-100 dark:border-white/5">
                  <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Editorial Work" />
                </div>
                <div className="aspect-square rounded-[2rem] bg-primary/5 flex flex-col justify-center p-8 border border-primary/10">
                  <span className="text-5xl font-black text-primary mb-2">12+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Years of Artistry</span>
                </div>
              </div>
              <div className="col-span-1 space-y-6">
                <div className="aspect-square rounded-[2rem] bg-gray-50 dark:bg-surface p-8 border border-gray-200 dark:border-white/5 flex flex-col justify-center shadow-sm">
                   <span className="text-5xl font-black text-gray-900 dark:text-white mb-2">650+</span>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Happy Muses</span>
                </div>
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:rotate-2 border border-gray-100 dark:border-white/5">
                  <img src="https://images.unsplash.com/photo-1610030469614-46c592398555?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Bridal Detail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Studio Sanctuary - Background Image Section */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:scale-105" 
            alt="Luxury Makeup Studio" 
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto reveal reveal-up">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Inside the Atelier</h4>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">THE STUDIO <span className="font-serif italic font-normal">Sanctuary</span></h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mb-12">
              Located in the heart of Indiranagar, our studio is designed to be a haven of tranquility and luxury. With ergonomic seating, 5500K daylight-balanced lighting, and a fully sanitized environment, we ensure your transformation happens in absolute comfort.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: 'Studio Hours', val: '10AM - 7PM' },
                 { label: 'Privacy', val: 'VIP Suites' },
                 { label: 'Hygiene', val: '100% Sanitized' },
                 { label: 'Beverages', val: 'Champagne Bar' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                   <span className="text-primary font-black text-2xl mb-1">{item.val}</span>
                   <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Step-by-Step */}
      <section className="py-32 bg-white dark:bg-darkBg transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal reveal-up mb-20">
             <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">The Process</h4>
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">YOUR JOURNEY TO <br /><span className="text-primary italic font-serif">Radiance</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: '01', 
                title: 'Bespoke Consultation', 
                text: 'We begin with a deep dive into your skin type, outfit colors, and event theme to create a cohesive vision.' 
              },
              { 
                step: '02', 
                title: 'High-Prep Skin Canvas', 
                text: 'Makeup is only as good as the skin beneath. We utilize luxury masks and lymphatic massage to prep your face.' 
              },
              { 
                step: '03', 
                title: 'The Signature Reveal', 
                text: 'Using multi-layered HD techniques, we reveal a look that is breathable, long-lasting, and camera-perfect.' 
              }
            ].map((step, i) => (
              <div key={i} className="reveal reveal-up group p-12 bg-gray-50 dark:bg-surface border border-gray-100 dark:border-white/5 rounded-[3rem] hover:border-primary transition-all duration-500" style={{ transitionDelay: `${i * 150}ms` }}>
                <span className="text-6xl font-black text-primary/20 group-hover:text-primary transition-colors block mb-6">{step.step}</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Kit Detail */}
      <section className="py-32 bg-gray-50 dark:bg-surface transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 reveal reveal-left">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">OUR <span className="text-primary italic font-serif">Global</span> <br />LUXURY KIT</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-12">
                We believe in compromising on nothing. Every product in Anjali's kit is curated from the finest brands across London, Paris, and NYC.
              </p>
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                 {['MAC Cosmetics', 'Charlotte Tilbury', 'Dior Backstage', 'Pat McGrath Labs', 'Huda Beauty', 'Tom Ford Beauty'].map(brand => (
                   <div key={brand} className="flex items-center gap-3 text-gray-900 dark:text-white font-black text-sm uppercase tracking-widest">
                      <span className="size-2 rounded-full bg-primary"></span>
                      {brand}
                   </div>
                 ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 reveal reveal-right">
               <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl border border-gray-100 dark:border-white/10">
                  <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Makeup Brushes and Kit" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-32 bg-white dark:bg-darkBg border-y border-gray-100 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6 block">Accreditations & Honors</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-20 tracking-tighter">A REPUTATION BUILT ON <br /><span className="text-primary italic font-serif">Quality</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2023', title: 'Best Bridal Artist', org: 'Vogue India Weddings', icon: 'workspace_premium' },
              { year: '2022', title: 'Industry Leadership', org: 'Elle Beauty Awards', icon: 'military_tech' },
              { year: '2021', title: 'Top 10 Innovators', org: 'Femina Power List', icon: 'trending_up' },
              { year: 'Master', title: 'Certified Artistry', org: 'London School of Makeup', icon: 'school' }
            ].map((award, i) => (
              <div key={i} className="reveal reveal-up group p-10 bg-white dark:bg-darkBg rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <span className="material-symbols-outlined text-4xl">{award.icon}</span>
                </div>
                <span className="text-primary font-black text-xs uppercase tracking-widest block mb-2">{award.year}</span>
                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-none">{award.title}</h4>
                <p className="text-gray-500 text-sm font-medium">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center reveal reveal-up">
          <h3 className="text-3xl md:text-5xl font-serif italic text-gray-900 dark:text-white mb-12 leading-relaxed">
            "Every woman is a masterpiece. My role is simply to provide the light that lets her brilliance shine."
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('book')}
              className="px-16 py-6 bg-primary hover:bg-secondary text-white font-black rounded-3xl text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-2 uppercase tracking-widest"
            >
              Start Your Transformation
            </button>
            <button 
              onClick={() => onNavigate('portfolio')}
              className="px-16 py-6 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-black rounded-3xl text-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all uppercase tracking-widest"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
