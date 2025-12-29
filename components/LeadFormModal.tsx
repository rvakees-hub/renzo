import React, { useState } from 'react';
import { X, Loader2, Lock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Connected to your SheetDB API
  const SHEET_DB_URL = 'https://sheetdb.io/api/v1/e435yenqk08be';

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = async () => {
      try {
        // 1. Send data to Google Sheets via SheetDB
        await fetch(SHEET_DB_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              "Date": new Date().toLocaleString(),
              "Name": formData.name,
              "Email": formData.email,
              "Phone": formData.phone
            }
          })
        });

        // 2. Track Event (Facebook CAPI/Pixel)
        await trackEvent('Lead', {
            content_name: 'Renzo Academy Course Interest',
            user_data: {
                em: formData.email,
                ph: formData.phone
            },
            custom_data: {
                name: formData.name
            }
        });
      } catch (error) {
        console.error("Data submission error:", error);
        // We catch errors here so the redirect below still executes
      }
    };

    // FAIL-SAFE:
    // Run the data submission, but if it takes longer than 2 seconds, 
    // proceed to redirect anyway so the user doesn't get stuck.
    await Promise.race([
        submitData(),
        new Promise(resolve => setTimeout(resolve, 2000))
    ]);

    // 3. Redirect to PayHere
    // We purposely do NOT close the modal so the "Redirecting..." spinner remains visible 
    // while the browser handles the navigation.
    window.location.href = "https://payhere.lk/pay/o6e4bc6cd";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-brand-blue/10 transform transition-all animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">Secure Your Spot</h2>
            <p className="text-gray-400 text-sm">Fill in your details to start your journey to financial freedom.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
            <input 
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
              placeholder="e.g. Kantharuban Isaiyalan"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
            <input 
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
              placeholder="e.g. Isaiyalan@email.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
            <input 
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
              placeholder="e.g. 077 123 4567"
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 hover:shadow-brand-blue/40 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
                <>
                    <Loader2 size={20} className="animate-spin" /> Redirecting to Payment...
                </>
            ) : (
                'Proceed to Payment'
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
             <Lock size={12} /> Your information is securely encrypted
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadFormModal;