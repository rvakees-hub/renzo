import React, { useEffect } from 'react';
import Hero from './components/Hero';
import FacebookReviews from './components/FacebookReviews';
import FeaturedVideo from './components/FeaturedVideo';
import AboutInstructor from './components/AboutInstructor';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Instagram } from 'lucide-react';

// Register standard plugins if available in environment, 
// though we usually import them in the components directly.
gsap.registerPlugin(ScrollTrigger);

// Custom TikTok Icon
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.492.52.149 1.025.223 1.173.075.149.332 1.255 1.587 2.39 1.255 1.135 2.508 1.558 3.518 1.966.828.334 1.771.285 2.531.026 1.056-.361 2.378-1.666 2.378-1.666s.296-.297.469-.471c.172-.174.272-.372.272-.62 0-.248-.099-.446-.272-.62-.173-.173-1.015-.99-1.288-1.263-.272-.272-.446-.42-.644-.42-.198 0-.396.074-.545.223-.148.149-.52.52-.718.718-.198.198-.396.198-.594.099s-.891-.42-1.955-1.361c-1.064-.94-1.633-1.633-1.782-1.831-.149-.198-.149-.396-.05-.545.099-.148.371-.47.545-.693.173-.223.247-.371.371-.619.124-.247.074-.47-.025-.668-.099-.198-.891-2.153-1.213-2.945-.322-.792-.643-.693-.891-.693-.247 0-.52.025-.792.025-.272 0-.718.099-1.089.495-.371.396-1.435 1.41-1.435 3.44 0 2.03 1.485 3.985 1.683 4.257.198.272 2.92 4.455 7.078 6.237 2.747 1.178 3.811 1.237 5.197 1.039 1.386-.198 2.97-1.213 3.391-2.376.42-1.163.42-2.153.297-2.376-.124-.223-.445-.346-.94-.594z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.18c5.424 0 9.82 4.396 9.82 9.82 0 1.734-.45 3.364-1.237 4.793l.816 2.977-3.055-.8c-1.373.748-2.923 1.17-4.564 1.17-5.424 0-9.82-4.396-9.82-9.82 0-5.424 4.396-9.82 9.82-9.82zM12 0C5.373 0 0 5.373 0 12c0 2.124.55 4.123 1.506 5.864L.07 23.94l6.19-1.624C7.942 23.368 9.907 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const App: React.FC = () => {
  // Global smooth scroll setup could go here if using Lenis or similar,
  // For now we rely on native smooth scroll via CSS html { scroll-behavior: smooth }

  return (
    <main className="bg-brand-black min-h-screen text-white w-full overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Hero />
      <FacebookReviews />
      <FeaturedVideo />
      <AboutInstructor />
      <Pricing />
      <FinalCTA />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Renzo Academy. Design & Developed by <a href="https://www.upbold.global/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-white transition-colors">UPBOLD</a></p>
        <div className="flex justify-center gap-6 mt-4 items-center">
          <a href="https://www.facebook.com/p/Renzo-Academy-61577952878476/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors hover:scale-110 transform duration-300" aria-label="Facebook">
             <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/renzoacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors hover:scale-110 transform duration-300" aria-label="Instagram">
             <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@renzo.bro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff0050] transition-colors hover:scale-110 transform duration-300" aria-label="TikTok">
             <TikTokIcon size={20} />
          </a>
          <a href="https://whatsapp.com/channel/0029Vaz0qXE6hENuVgR3J71W" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors hover:scale-110 transform duration-300" aria-label="WhatsApp">
             <WhatsAppIcon size={20} />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default App;