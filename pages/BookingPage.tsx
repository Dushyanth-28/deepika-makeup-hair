
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { PortfolioItem } from '../types';

interface BookingPageProps {
  selectedLook: PortfolioItem | null;
  onClearLook: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ selectedLook, onClearLook }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: SERVICES[0].id,
    date: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the WhatsApp Message
    const selectedService = SERVICES.find(s => s.id === formData.serviceId);
    let waMessage = `Hi Deepika! I'd like to book a session. 
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${selectedService?.title}
Date: ${formData.date}
Location: ${formData.location || 'Studio'}
Message: ${formData.message}`;

    if (selectedLook) {
      waMessage += `\n\nI'm specifically interested in the look: "${selectedLook.title}"\nLook Description: ${selectedLook.description}`;
    }

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/919113585961?text=${encodedMessage}`; // Replace with actual business number

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Open WhatsApp
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 animate-fade-in bg-white dark:bg-darkBg">
        <div className="max-w-xl w-full text-center bg-gray-50 dark:bg-surface p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-2xl">
          <div className="size-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="material-symbols-outlined text-6xl">check_circle</span>
          </div>
          <h2 className="text-4xl font-black text-darkBg dark:text-white mb-4">Request Sent!</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Thank you, {formData.name.split(' ')[0]}. We've opened WhatsApp for you to finalize the details.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-10 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-lg uppercase tracking-widest text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 pb-24 animate-fade-in bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-darkBg dark:text-white mb-4 tracking-tighter">SECURE YOUR GLOW</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">Complete the form to start your transformation via WhatsApp.</p>
        </div>

        {selectedLook && (
          <div className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 reveal reveal-up active">
            <div className="size-32 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-primary/20">
              <img src={selectedLook.imageUrl} alt={selectedLook.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-primary font-black uppercase text-xs tracking-widest block mb-1">Booking similar look to:</span>
              <h3 className="text-2xl font-black text-darkBg dark:text-white mb-2">{selectedLook.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 italic">"{selectedLook.description}"</p>
            </div>
            <button
              onClick={onClearLook}
              className="px-6 py-2 border border-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary/10 transition-all"
            >
              Clear Selection
            </button>
          </div>
        )}

        <div className="bg-white dark:bg-surface border border-gray-100 dark:border-white/5 rounded-[3.5rem] p-8 md:p-16 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">auto_fix_high</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">What's your name?</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium" placeholder="Ex: Priya Sharma" />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">Contact Number</label>
                <input required name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium" placeholder="+91 98XXX XXXXX" />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">Select Service</label>
                <select name="serviceId" value={formData.serviceId} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium">
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title} ({s.price})</option>)}
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">Preferred Date</label>
                <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium" />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">Event Venue / Studio Booking?</label>
                <input name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium" placeholder="Studio Location or Venue Address" />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 ml-1">Additional Vision</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full bg-gray-50 dark:bg-darkBg border border-gray-200 dark:border-white/10 rounded-2xl p-5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-darkBg dark:text-white font-medium" placeholder="Tell us about your outfit, theme, or any special requests..."></textarea>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-primary hover:bg-secondary text-white font-black rounded-3xl transition-all shadow-2xl shadow-primary/30 disabled:opacity-50 flex items-center justify-center gap-4 text-xl uppercase tracking-widest">
              {isSubmitting ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
              ) : (
                <>
                  <span>Confirm Booking via WhatsApp</span>
                  <span className="material-symbols-outlined">send</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
