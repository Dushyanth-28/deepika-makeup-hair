
import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../constants';

const Transformations: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <section id="transformations" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Real Results</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">THE ART OF TRANSFORMATION</h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Witness how we highlight natural beauty with precision and elegance. Move the slider to see the magic of professional artistry.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-tighter hover:text-white transition-colors">
            See All Stories <span className="material-symbols-outlined">east</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.id} className="group flex flex-col gap-6">
              <div 
                className="relative aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize border border-white/5 shadow-2xl"
                onMouseMove={handleMouseMove}
              >
                {/* After Image */}
                <img 
                  src={t.afterImage} 
                  alt={`${t.title} after`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Before Image with Clipping */}
                <div 
                  className="absolute inset-0 z-10 border-r-4 border-white overflow-hidden shadow-[10px_0_40px_rgba(0,0,0,0.5)]"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img 
                    src={t.beforeImage} 
                    alt={`${t.title} before`} 
                    className="absolute inset-0 h-full w-[100vw] object-cover max-w-none"
                    style={{ width: `${100 / (sliderPos / 100)}%` }}
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-darkBg/60 backdrop-blur-md rounded-lg text-white text-xs font-black uppercase tracking-widest">Before</div>
                </div>

                <div className="absolute top-6 right-6 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-lg text-white text-xs font-black uppercase tracking-widest z-20">After</div>

                {/* Handle UI */}
                <div 
                  className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="size-10 bg-white rounded-full flex items-center justify-center text-darkBg shadow-2xl -ml-5">
                    <span className="material-symbols-outlined">unfold_more</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-black text-white">{t.title}</h3>
                  <p className="text-gray-400 font-medium">{t.description}</p>
                </div>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1">star</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
