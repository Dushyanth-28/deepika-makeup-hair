
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-2xl opacity-20"></div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84zhoCaGAx8CqMM5hVYznR0093YPxwkTP7pn7KAX2qg8MUjavfx8B0f2LFnn_jR3K76lpEL1y_U6oHu1oqOkZyUQwD9vY-IpEJYctzwd46OGP1dBpblQs06-uEsUGSgsHEfrrXt2ZEx4lmBjq5eZZ4sZWPmo0hB--bclq52GJLMbxVk_fJn9z8siiw-2b1rsCeKwa5L-fco-NdMOA_DgoI5VD3OGIjcUq_YPX0sFUY2E7ZdiYtnCsVnPQ4DUufWo8qKlURnoXqzJz" 
                alt="Meet Anjali - Lead Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Meet the Artist</h4>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">ANJALI NAIR</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
              <p>
                With over a decade of redefining beauty standards, I specialize in blending traditional Indian aesthetics with modern "Urban Chic" vibes. My journey started with a simple belief: makeup should celebrate your features, not mask them.
              </p>
              <p>
                Certified by the <span className="text-white font-bold">London School of Makeup</span>, my portfolio spans across destination weddings, high-fashion editorials, and commercial shoots for India's leading brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-surface border border-white/5 p-6 rounded-2xl">
                <span className="text-primary font-black block mb-1">CERTIFIED</span>
                <span className="text-gray-400 text-sm">London School of Makeup</span>
              </div>
              <div className="bg-surface border border-white/5 p-6 rounded-2xl">
                <span className="text-primary font-black block mb-1">FEATURED IN</span>
                <span className="text-gray-400 text-sm">Vogue India, Elle, Femina</span>
              </div>
            </div>

            <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest group">
              <span className="px-8 py-4 bg-primary rounded-xl group-hover:bg-secondary transition-colors">Start Your Journey</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
