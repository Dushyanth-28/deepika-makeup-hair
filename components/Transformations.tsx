
import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../constants';

const Transformations: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  const t = TRANSFORMATIONS[0]; // Spotlight the first one

  return (
    <section id="transformations" className="py-32 bg-gray-50 dark:bg-surface transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 reveal reveal-left">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Interactive Reveal</h4>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter mb-10">
              THE POWER OF <br /> <span className="text-primary italic font-serif font-normal">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              Drag the slider to see how we enhance natural features while maintaining a photo-realistic, lightweight skin texture. 
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Technique', val: 'HD Airbrush Micro-pigmentation', icon: 'auto_fix_high' },
                { label: 'Skin Focus', val: 'Texture Retention & Color Correction', icon: 'face' },
                { label: 'Longevity', val: '18HR Water-Resistant Finish', icon: 'timer' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-darkBg rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-gray-900 dark:text-white font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 reveal reveal-right">
            <div 
              className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden cursor-ew-resize border border-gray-100 dark:border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] bg-gray-200"
              onMouseMove={handleMouseMove}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                setSliderPos(Math.min(Math.max(x, 0), 100));
              }}
            >
              {/* After Image */}
              <img 
                src={t.afterImage} 
                alt={`${t.title} after`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Before Image with Clipping */}
              <div 
                className="absolute inset-0 z-10 border-r-4 border-white/80 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src={t.beforeImage} 
                  alt={`${t.title} before`} 
                  className="absolute inset-0 h-full w-[100vw] object-cover max-w-none"
                  style={{ width: `${100 / (sliderPos / 100)}%` }}
                />
                <div className="absolute top-10 left-10 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest">Natural State</div>
              </div>

              <div className="absolute top-10 right-10 px-6 py-3 bg-primary/80 backdrop-blur-xl border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest z-20">Artistry Glow</div>

              {/* Handle UI */}
              <div 
                className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="size-20 bg-white rounded-full flex flex-col items-center justify-center text-primary shadow-2xl -ml-10 border-8 border-primary/10">
                  <span className="material-symbols-outlined text-3xl font-black">unfold_more</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-12 text-center opacity-50">
               <div className="flex flex-col">
                 <span className="text-xl font-black text-gray-900 dark:text-white uppercase">Before</span>
                 <span className="text-xs font-bold text-gray-500 uppercase">Skin Raw</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-black text-primary uppercase">After</span>
                 <span className="text-xs font-bold text-gray-500 uppercase">The Glow</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
