import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutInstructor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
      gsap.from(".instructor-content", {
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image with effects */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
           <div className="absolute inset-0 bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
           <div ref={imageRef} className="relative z-10 w-full max-w-md h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
             <img src="https://res.cloudinary.com/duhqg4u4k/image/upload/v1766867306/Clients/20251227_135137_dg6vip.jpg" alt="Renzo" className="w-full h-full object-cover" />
             <div className="absolute bottom-8 left-8 z-20">
               <p className="font-serif italic text-3xl mb-1">Renzo</p>
               <p className="text-brand-blue font-medium tracking-wide text-sm uppercase">Pro CSE Trader</p>
             </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 instructor-content">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Meet Your Mentor</h2>
          <p className="text-xl text-white font-light mb-6">
            "My goal is simple: To empower Sri Lankans to achieve financial freedom through proper stock market education, not gambling."
          </p>
          
          <div className="space-y-4 text-gray-400 mb-8 leading-relaxed">
            <p>
              With over 8 years of active trading experience in the Colombo Stock Exchange, I've built a profitable portfolio from the ground up using purely technical analysis and disciplined risk management.
            </p>
            <p>
              I don't just teach theory. I show you exactly how I trade, how I analyze charts, and how I manage my emotions when real money is on the line.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {["1,500+ Students Trained", "LKR 50M+ Student Profits", "8+ Years Experience", "4.9/5 Average Rating"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle className="text-brand-blue shrink-0" size={20} />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 bg-white text-black hover:bg-brand-blue hover:text-white transition-colors rounded-xl font-bold text-lg">
            Learn from Renzo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;