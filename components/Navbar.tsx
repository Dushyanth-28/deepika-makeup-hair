
import React, { useState, useEffect } from 'react';
import { Page, Theme } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, theme, toggleTheme }) => {
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

  const isLight = theme === 'light';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/95 dark:bg-darkBg/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 h-16 shadow-lg'
      : 'bg-transparent h-20'
      }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-110 overflow-hidden">
            <img
              src="https://deepikamakeupandhair.com/wp-content/uploads/2024/04/Group-93-1.png"
              alt="Deepika Makeup & Hair Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-gray-900 dark:text-white">
            Deepika Makeup & Hair
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-bold transition-all tracking-wide uppercase hover:text-primary ${currentPage === item.value
                ? 'text-primary'
                : 'text-gray-600 dark:text-gray-300'
                }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${isScrolled
              ? 'bg-gray-100 dark:bg-surface text-gray-800 dark:text-yellow-400'
              : 'bg-black/5 dark:bg-white/20 text-gray-900 dark:text-white'
              }`}
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined leading-none">
              {isLight ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('book')}
            className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-secondary text-white text-sm font-black rounded-full transition-all shadow-xl hover:shadow-primary/50"
          >
            Book Now
          </button>

          <button
            className="text-gray-900 dark:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-surface border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/5"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                // Don't close menu so user can see the change
              }}
              className="flex items-center justify-between py-3 text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/5"
            >
              <span>{isLight ? 'Dark Mode' : 'Light Mode'}</span>
              <span className="material-symbols-outlined text-2xl">
                {isLight ? 'dark_mode' : 'light_mode'}
              </span>
            </button>

            <button
              onClick={() => {
                onNavigate('book');
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full py-4 bg-primary text-white font-black rounded-xl uppercase tracking-widest"
            >
              Book Appointment
            </button>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
