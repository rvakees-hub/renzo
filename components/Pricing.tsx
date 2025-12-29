import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_DATA } from '../constants';
import { trackEvent } from '../utils/analytics';

const Pricing: React.FC = () => {
  const { originalPrice, currentPrice, discount } = PRICING_DATA;

  const handleEnrollClick = () => {
    // Use the dual-tracking utility
    trackEvent('InitiateCheckout', {
      content_name: 'Renzo Academy Course',
      value: currentPrice,
      currency: 'LKR',
      status: 'pricing_enroll_click'
    });

    // Redirect logic would go here, e.g., window.location.href = 'payment_link';
    console.log("Redirecting to payment...");
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Invest in Your Future</h2>
          <p className="text-gray-400 text-lg">Join the academy today and start your journey to financial freedom</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-1 border-t border-white/20 shadow-[0_0_50px_rgba(33,101,252,0.15)]">
            <div className="bg-[#080808] rounded-[22px] p-8 md:p-12 flex flex-col lg:flex-row gap-12">
              
              {/* Left Side: Offer */}
              <div className="flex-1">
                <div className="inline-block bg-red-500/20 text-red-500 font-bold px-3 py-1 rounded text-sm mb-6 animate-pulse">
                  Flash Sale: {discount}% OFF
                </div>
                
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl font-bold text-white">LKR {currentPrice.toLocaleString()}</span>
                  <span className="text-xl text-gray-500 line-through">LKR {originalPrice.toLocaleString()}</span>
                </div>
                <p className="text-gray-400 mb-8 text-sm">One-time payment. Lifetime access.</p>

                <button 
                  onClick={handleEnrollClick}
                  className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-brand-blue/90 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(33,101,252,0.4)] mb-4"
                >
                  Enroll Now & Start investment
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-8">
                   <ShieldCheck size={14} /> 30-Day Money-Back Guarantee
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                   <p className="text-sm text-gray-300 text-center">
                     "My First Month of Dividend Income" <br/>
                     <span className="text-brand-blue font-bold mt-2 block">- Amuthan, Colombo</span>
                   </p>
                </div>
              </div>

              {/* Right Side: Features */}
              <div className="flex-1 border-l border-white/10 lg:pl-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {[
                    "Full Live Course",
                    "Lifetime Access to Materials",
                    "Private WhatsApp Community Access",
                    "Weekly Live Q&A Sessions",
                    "Investment Templates & Checklists",
                    "Bonus: Stock Screener Tool",
                    "Bonus: Investment Plan Workbook",
                    "Certificate of Completion"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-brand-blue" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;