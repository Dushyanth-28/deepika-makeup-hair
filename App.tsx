
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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
    <div className="relative min-h-screen bg-darkBg text-white font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16 md:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
