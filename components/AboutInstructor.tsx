import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Clock, Facebook, Instagram } from 'lucide-react';

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

const AboutInstructor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats Counter Animation
      const stats = document.querySelectorAll('.stat-card');
      stats.forEach((stat) => {
        const valueDisplay = stat.querySelector('.stat-value');
        const targetValue = parseInt(stat.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        
        if (valueDisplay && targetValue > 0) {
            gsap.to(obj, {
                val: targetValue,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: stat,
                    start: "top 90%",
                },
                onUpdate: () => {
                   valueDisplay.textContent = Math.floor(obj.val).toLocaleString() + "+";
                }
            });
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const statsList = [
    { label: "Students Trained", value: 500, icon: Users, color: "text-brand-blue" },
    { label: "Years Experience", value: 5, icon: Clock, color: "text-purple-400" },
    { label: "TikTok Followers", value: 35000, icon: TikTokIcon, color: "text-[#ff0050]" },
    { label: "Facebook Followers", value: 20000, icon: Facebook, color: "text-[#1877F2]" },
    { label: "Instagram Followers", value: 1000, icon: Instagram, color: "text-[#E1306C]" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
           <div className="absolute inset-0 bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
           <div ref={imageRef} className="relative z-10 w-full max-w-md h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
             {/* Optimization: Added f_auto,q_auto,w_800 to URL and loading=lazy */}
             <img 
                src="https://res.cloudinary.com/duhqg4u4k/image/upload/f_auto,q_auto,w_800/v1766867306/Clients/20251227_135137_dg6vip.jpg" 
                alt="Renzo" 
                className="w-full h-full object-cover" 
                loading="lazy"
                width="600"
                height="800"
             />
             <div className="absolute bottom-8 left-8 z-20">
               <p className="font-serif italic text-3xl mb-1">Kantharuban Isaiyalan </p>
               <p className="text-brand-blue font-medium tracking-wide text-sm uppercase">Investment strategist & Financial Educator</p>
             </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 instructor-content">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Meet Your Mentor</h2>
          <p className="text-xl text-white font-light mb-6">
            "My goal is simple: To empower Sri Lankans to achieve financial freedom through proper stock market education."
          </p>
          
          <div className="space-y-4 text-gray-400 mb-8 leading-relaxed">
            <p>
              With over 5 years of active investment experience in Srilanka Stock Market, I've built a profitable portfolio from the ground up using purely fundamental analysis and disciplined risk management.
            </p>
            <p>
              I don't just teach theory. I show you exactly how I Invest, how I analyze fundamentals, and how I manage my emotions when real money is on the line.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {statsList.map((stat, i) => (
              <div 
                key={i} 
                className="stat-card p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300 group flex flex-col justify-between h-full"
                data-target={stat.value}
              >
                <div className={`${stat.color} mb-3 p-2 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform`}>
                   <stat.icon size={20} />
                </div>
                <div>
                   <div className="stat-value text-2xl md:text-3xl font-bold font-serif text-white mb-1">0+</div>
                   <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 bg-white text-black hover:bg-brand-blue hover:text-white transition-colors rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(33,101,252,0.5)] transform hover:scale-105 duration-300">
            Learn from Renzo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;