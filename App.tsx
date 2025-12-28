import React, { useEffect } from 'react';
import Hero from './components/Hero';
import FacebookReviews from './components/FacebookReviews';
import FeaturedVideo from './components/FeaturedVideo';
import AboutInstructor from './components/AboutInstructor';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register standard plugins if available in environment, 
// though we usually import them in the components directly.
gsap.registerPlugin(ScrollTrigger);

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
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>
      </footer>
    </main>
  );
};

export default App;