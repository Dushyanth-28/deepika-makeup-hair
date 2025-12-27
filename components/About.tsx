
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-darkBg overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="relative w-full lg:w-1/2 reveal reveal-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-2xl opacity-10 dark:opacity-20"></div>
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
              <img
                src="/assets/instagram/insta_2.jpg"
                alt="Meet Deepika - Lead Artist Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 reveal reveal-right">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">About Me</h4>
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-none">DEEPIKA</h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              <p>
                I have over 10 years of experience in creating beautiful makeup looks. I love mixing traditional styles with modern trends.
              </p>
              <p>
                I am a certified makeup artist. I have worked on many weddings and fashion shoots.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 dark:bg-surface border border-gray-100 dark:border-white/5 p-8 rounded-[2rem] shadow-sm">
                <span className="text-primary font-black block mb-2 uppercase text-xs tracking-widest">Certified</span>
                <span className="text-gray-900 dark:text-white font-bold text-lg">Internationally Certified</span>
              </div>
              <div className="bg-gray-50 dark:bg-surface border border-gray-100 dark:border-white/5 p-8 rounded-[2rem] shadow-sm">
                <span className="text-primary font-black block mb-2 uppercase text-xs tracking-widest">Featured</span>
                <span className="text-gray-900 dark:text-white font-bold text-lg">Featured in Vogue & Elle</span>
              </div>
            </div>

            <button className="group flex items-center gap-4 text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm">
              <span className="px-10 py-5 bg-primary text-white rounded-2xl group-hover:bg-secondary transition-all shadow-xl shadow-primary/20">Read My Full Story</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-3 text-primary">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
