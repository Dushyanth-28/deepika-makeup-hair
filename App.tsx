
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import TransformationsPage from './pages/TransformationsPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import { PortfolioItem } from './types';

export type Page = 'home' | 'portfolio' | 'services' | 'transformations' | 'about' | 'book';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedLook, setSelectedLook] = useState<PortfolioItem | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Reveal Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentPage]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleBookLook = (look: PortfolioItem) => {
    setSelectedLook(look);
    setCurrentPage('book');
  };

  const handleNavigate = (page: Page) => {
    if (page !== 'book') {
      setSelectedLook(null);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'portfolio': return <PortfolioPage onBookLook={handleBookLook} />;
      case 'services': return <ServicesPage onNavigate={handleNavigate} />;
      case 'transformations': return <TransformationsPage />;
      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'book': return <BookingPage selectedLook={selectedLook} onClearLook={() => setSelectedLook(null)} />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg text-darkBg dark:text-white font-sans theme-transition overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="pt-16 md:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
