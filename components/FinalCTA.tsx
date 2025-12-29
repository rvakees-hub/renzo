import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const FinalCTA: React.FC = () => {
  const handleSecureSpotClick = () => {
    // Use the dual-tracking utility
    trackEvent('InitiateCheckout', {
      content_name: 'Renzo Academy Course',
      status: 'final_cta_click'
    });
    
    // Smooth scroll to pricing
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply opacity-20" />
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=99')] bg-cover bg-center opacity-10 grayscale" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-6">
          Ready to Start Your <br/> Investment Journey?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Don't let another year pass wishing you had started. The best time to plant a tree was 20 years ago. The second best time is now.
        </p>
        
        <button 
          onClick={handleSecureSpotClick}
          className="px-10 py-5 bg-brand-blue text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(33,101,252,0.5)] flex items-center gap-3 mx-auto"
        >
          Secure Your Spot Now <ArrowRight />
        </button>
        
        <p className="mt-6 text-sm text-gray-500">
          Secure Payment • Instant Access • Money-Back Guarantee
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;