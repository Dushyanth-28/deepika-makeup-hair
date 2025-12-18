
import React from 'react';
import { Page } from '../App';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pb-24 animate-fade-in">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3K6qH_S7z1O9GvY_J0-0n-pL0V4yL0N7-o8j1_L_r_r-V_o_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r_v_e-r" 
          alt="Studio Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/80 to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black text-white mb-4 tracking-tighter">THE ARTIST</h1>
          <p className="text-primary font-bold uppercase tracking-[0.5em] text-lg">Anjali Nair</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">CRAFTING TIMELESS <br /><span className="text-primary italic">Artistry</span></h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Based in the heart of Bangalore, Anjali Nair is a premier makeup artist dedicated to bringing out the radiant, authentic version of every bride. Her philosophy centers on "Skin-First Artistry" — creating looks that breathe, glow, and look just as stunning in person as they do in high-definition photography.
                </p>
                <p>
                  With a master certification from the <span className="text-white font-bold">London School of Makeup</span>, she combines international techniques with a deep understanding of Indian heritage styling. Whether it's the regal drapes of a Kanjeevaram or the bohemian flair of a destination wedding, Anjali's touch is unmistakable.
                </p>
                <p>
                  Urban Chic Artistry was founded to bridge the gap between traditional expectations and modern, editorial aesthetics. We don't just apply makeup; we curate an experience of luxury and confidence.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Our Philosophy", content: "Beauty is an emotion. We focus on enhancing your features rather than masking them.", icon: "spa" },
                    { title: "Hygiene First", content: "Strict sanitation protocols. Single-use applicators and sanitized premium brushes for every client.", icon: "sanitizer" },
                    { title: "Premium Kits", content: "Exclusive use of luxury labels. No compromise on skin health and product longevity.", icon: "shopping_bag" },
                    { title: "Expert Team", content: "A dedicated team of senior hair stylists and drape experts accompany every booking.", icon: "groups" }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-surface border border-white/5 rounded-[2rem] hover:border-primary/30 transition-all group">
                      <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12">Proudly Certified & Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['VOGUE', 'ELLE', 'FEMINA', 'BRIDES', 'GRAZIA'].map(brand => (
              <span key={brand} className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <button 
          onClick={() => onNavigate('book')}
          className="px-16 py-6 bg-primary hover:bg-secondary text-white font-black rounded-full text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-105"
        >
          Book Your Transformation
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
