
import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../constants';

const TransformationsPage: React.FC = () => {
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>(
    TRANSFORMATIONS.reduce((acc, curr) => ({ ...acc, [curr.id]: 50 }), {})
  );

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPositions(prev => ({
      ...prev,
      [id]: Math.min(Math.max(x, 0), 100)
    }));
  };

  return (
    <div className="min-h-screen pb-24 animate-fade-in bg-white dark:bg-darkBg">
      <section className="pt-20 pb-16 bg-gray-50 dark:bg-surface border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-darkBg dark:text-white mb-6 tracking-tighter uppercase">REAL RESULTS</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Witness the authenticity of our work. No heavy filters, just expert color correction and precision skin-work for a truly photo-realistic result.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.id} className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div 
                  className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden cursor-ew-resize border border-gray-100 dark:border-white/10 shadow-2xl bg-gray-100"
                  onMouseMove={(e) => handleMouseMove(t.id, e)}
                >
                  {/* After */}
                  <img src={t.afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* Before */}
                  <div 
                    className="absolute inset-0 z-10 border-r-4 border-white overflow-hidden"
                    style={{ width: `${sliderPositions[t.id]}%` }}
                  >
                    <img 
                      src={t.beforeImage} 
                      alt="Before" 
                      className="absolute inset-0 h-full w-[100vw] object-cover max-w-none grayscale-[0.2]"
                      style={{ width: `${100 / (sliderPositions[t.id] / 100)}%` }}
                    />
                    <div className="absolute top-10 left-10 px-6 py-3 bg-darkBg/60 backdrop-blur-xl border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-widest">Natural Texture</div>
                  </div>

                  <div className="absolute top-10 right-10 px-6 py-3 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-widest z-20">Artistry Glow</div>

                  {/* Handle */}
                  <div 
                    className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPositions[t.id]}%` }}
                  >
                    <div className="size-16 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl -ml-8 border-4 border-primary/10">
                      <span className="material-symbols-outlined text-4xl font-black">swap_horiz</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm block mb-4">{t.category} SCENARIO</span>
                <h2 className="text-4xl md:text-6xl font-black text-darkBg dark:text-white mb-8 leading-tight tracking-tighter">{t.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">{t.description}</p>
                
                <div className="space-y-6">
                  <div className="p-8 bg-gray-50 dark:bg-surface border border-gray-200 dark:border-white/5 rounded-[2rem]">
                    <h4 className="text-darkBg dark:text-white font-bold text-xl mb-3 flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                      The Challenge
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Maintaining authentic skin texture while ensuring full coverage for high-resolution photography. We focused on neutralising discoloration without creating a 'cakey' finish.
                    </p>
                  </div>
                  <div className="p-8 bg-gray-50 dark:bg-surface border border-gray-200 dark:border-white/5 rounded-[2rem]">
                    <h4 className="text-darkBg dark:text-white font-bold text-xl mb-3 flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                      The Technique
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      Micro-concealing and ultra-thin layering of HD pigments. For {t.category === 'Corporate' ? 'professional' : 'bridal'} looks, we prioritized matte versus luminous finishes respectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TransformationsPage;
