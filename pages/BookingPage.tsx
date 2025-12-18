
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: SERVICES[0].id,
    date: '',
    location: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 animate-fade-in">
        <div className="max-w-xl w-full text-center bg-surface p-12 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="size-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="material-symbols-outlined text-6xl">check_circle</span>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">Request Received!</h2>
          <p className="text-gray-400 text-lg mb-8">Thank you, {formData.name.split(' ')[0]}. Anjali's team will contact you within 24 hours to confirm availability and discuss details.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-10 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 pb-24 animate-fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">SECURE YOUR GLOW</h1>
          <p className="text-xl text-gray-400">Fill out the form below to start your artistry journey.</p>
        </div>

        <div className="bg-surface border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-12">
              {[1, 2].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`size-10 rounded-full flex items-center justify-center font-black transition-all ${
                    step >= s ? 'bg-primary text-white' : 'bg-white/5 text-gray-500 border border-white/10'
                  }`}>
                    {s}
                  </div>
                  <span className={`text-xs uppercase tracking-widest font-bold ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                    {s === 1 ? 'Details' : 'Preference'}
                  </span>
                  {s === 1 && <div className="w-16 h-px bg-white/10 hidden sm:block"></div>}
                </div>
              ))}
            </div>

            {step === 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" placeholder="Priya Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Phone Number</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" placeholder="+91 98XXX XXXXX" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" placeholder="priya@example.com" />
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Service Type</label>
                    <select name="serviceId" value={formData.serviceId} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white">
                      {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Event Date</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Event Location</label>
                  <input name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" placeholder="Studio or Destination Address" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-1">Additional Notes</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full bg-darkBg border border-white/10 rounded-2xl p-4 focus:border-primary focus:outline-none transition-all text-white" placeholder="Tell us about your outfit or vision..."></textarea>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all">
                  Back
                </button>
              )}
              {step < 2 ? (
                <button type="button" onClick={() => setStep(step + 1)} className="flex-1 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/20">
                  Next Step
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  ) : (
                    'Confirm Booking Request'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
