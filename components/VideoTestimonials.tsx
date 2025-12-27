
import React, { useRef, useState } from 'react';
import { VIDEO_TESTIMONIALS } from '../constants';

const VideoTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-32 bg-gray-50 dark:bg-darkBg transition-colors overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal reveal-up flex flex-col md:flex-row justify-between items-end gap-6 md:gap-10 mb-10 md:mb-20">
          <div className="max-w-xl text-left">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4 md:mb-6">Client Love</h4>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              HAPPY <span className="text-primary italic font-serif">Brides</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="size-14 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="size-14 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <span className="material-symbols-outlined text-lg">swipe_left</span>
          Swipe to explore
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-2 md:px-0"
        >
          {VIDEO_TESTIMONIALS.map((vt, i) => (
            <div
              key={vt.id}
              className="reveal reveal-up snap-center shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-white dark:bg-surface rounded-[2.5rem] overflow-hidden relative shadow-xl hover:shadow-2xl transition-all group border border-gray-100 dark:border-white/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {activeVideo === vt.id ? (
                <video
                  src={vt.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img src={vt.thumbnailUrl} alt={vt.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <button
                    onClick={() => setActiveVideo(vt.id)}
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    <div className="size-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-5xl">play_arrow</span>
                    </div>
                  </button>
                </div>
              )}

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent text-white pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-8 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center overflow-hidden">
                    <img src={vt.thumbnailUrl} className="w-full h-full object-cover" alt="" />
                  </div>
                  <span className="font-bold text-sm tracking-wide">{vt.name}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed italic opacity-90">"{vt.shortQuote}"</p>
                <div className="mt-4 flex gap-4 text-xs font-black uppercase tracking-widest text-primary">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">favorite</span> 1.2k</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">comment</span> 84</span>
                </div>
              </div>

              {/* Instagram Brand Icon */}
              <div className="absolute top-6 right-6">
                <svg className="size-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
