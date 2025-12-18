
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

export type Page = 'home' | 'portfolio' | 'services' | 'transformations' | 'about' | 'book';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'portfolio': return <PortfolioPage />;
      case 'services': return <ServicesPage onNavigate={setCurrentPage} />;
      case 'transformations': return <TransformationsPage />;
      case 'about': return <AboutPage onNavigate={setCurrentPage} />;
      case 'book': return <BookingPage />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg text-darkBg dark:text-white font-sans theme-transition overflow-x-hidden">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main className="pt-16 md:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
