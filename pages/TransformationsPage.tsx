
import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../constants';

const TransformationsPage: React.FC = () => {
  const [activeSlider, setActiveSlider] = useState<string | null>(TRANSFORMATIONS[0].id);
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
    <div className="min-h-screen pb-24 animate-fade-in">
      <section className="pt-20 pb-16 bg-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">Magic Happens</h1>
          <p className="text-xl text-gray-400 max-w-2xl">See the power of professional skin-work, precision contouring, and heritage styling. Use the sliders to interact with the transformations.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.id} className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div 
                  className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl bg-darkBg"
                  onMouseMove={(e) => handleMouseMove(t.id, e)}
                  onClick={() => setActiveSlider(t.id)}
                >
                  {/* After */}
                  <img src={t.afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* Before */}
                  <div 
                    className="absolute inset-0 z-10 border-r-4 border-white overflow-hidden shadow-2xl"
                    style={{ width: `${sliderPositions[t.id]}%` }}
                  >
                    <img 
                      src={t.beforeImage} 
                      alt="Before" 
                      className="absolute inset-0 h-full w-[100vw] object-cover max-w-none"
                      style={{ width: `${100 / (sliderPositions[t.id] / 100)}%` }}
                    />
                    <div className="absolute top-8 left-8 px-6 py-3 bg-darkBg/60 backdrop-blur-md rounded-xl text-white text-xs font-black uppercase tracking-widest">Natural State</div>
                  </div>

                  <div className="absolute top-8 right-8 px-6 py-3 bg-primary/90 backdrop-blur-md rounded-xl text-white text-xs font-black uppercase tracking-widest z-20">The Glow</div>

                  {/* Handle */}
                  <div 
                    className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPositions[t.id]}%` }}
                  >
                    <div className="size-14 bg-white rounded-full flex items-center justify-center text-darkBg shadow-2xl -ml-7 border-4 border-primary">
                      <span className="material-symbols-outlined font-black">unfold_more</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm block mb-4">Case Study: {t.category}</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{t.title}</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">{t.description}</p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-surface border border-white/5 rounded-2xl">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">face</span>
                      The Challenge
                    </h4>
                    <p className="text-gray-400 text-sm">Uneven skin tone, pigmentation around the eyes, and need for a high-definition finish that lasts 12+ hours under heavy lighting.</p>
                  </div>
                  <div className="p-6 bg-surface border border-white/5 rounded-2xl">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                      The Technique
                    </h4>
                    <p className="text-gray-400 text-sm">Color correction using peach neutralizers followed by ultra-thin HD foundation layers and precision spot concealing.</p>
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
