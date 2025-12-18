
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-darkBg pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">brush</span>
              </div>
              <span className="text-xl font-black italic text-white uppercase tracking-tighter">Urban Chic</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating the beauty standards of Bangalore with professional artistry and bespoke transformations for every occasion.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'youtube'].map((social) => (
                <a key={social} href="#" className="size-10 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-xl">{social === 'instagram' ? 'photo_camera' : social === 'facebook' ? 'groups' : 'play_circle'}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: 'The Gallery', val: 'portfolio' },
                { label: 'Our Experiences', val: 'services' },
                { label: 'Transformations', val: 'transformations' },
                { label: 'About Anjali', val: 'about' }
              ].map(link => (
                <li key={link.val}>
                  <button 
                    onClick={() => onNavigate(link.val as Page)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                hello@glowbyanjali.com
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Indiranagar Studio,<br />Bangalore, KA 560038</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Booking Status</h4>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl mb-4">
               <p className="text-xs text-primary font-bold mb-1 uppercase tracking-widest">Bridal Slots</p>
               <p className="text-sm text-gray-300">Wedding Season '24: <span className="text-white font-bold">80% Full</span></p>
            </div>
            <button 
              onClick={() => onNavigate('book')}
              className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-widest"
            >
              Book Consultation
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-medium tracking-widest uppercase">
          <p>© 2024 GLOW BY ANJALI ARTISTRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
