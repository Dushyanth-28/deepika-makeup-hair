
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Services', value: 'services' },
    { label: 'Transformations', value: 'transformations' },
    { label: 'About', value: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-darkBg/95 backdrop-blur-md border-b border-white/10 h-16' : 'bg-transparent h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-2xl font-bold">brush</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">Urban Chic</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.value} 
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-semibold transition-colors tracking-wide uppercase ${
                currentPage === item.value ? 'text-primary' : 'text-gray-300 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate('book')}
          className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-secondary text-white text-sm font-bold rounded-full transition-all shadow-[0_4px_15px_rgba(236,19,109,0.3)] hover:shadow-primary/50"
        >
          Book Now
        </button>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <button 
              key={item.value} 
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-2 text-lg font-bold uppercase tracking-widest text-white border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigate('book');
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
