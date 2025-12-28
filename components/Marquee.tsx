import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LOGOS = [
  "Colombo Stock Exchange",
  "Central Depository Systems",
  "TradingView",
  "MetaTrader 5",
  "Investing.com",
  "Bloomberg",
  "DirectFN",
  "ATrad"
];

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple continuous scroll using GSAP
    // We duplicate content to make it seamless
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 border-y border-white/5 bg-black overflow-hidden relative" ref={marqueeRef}>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="marquee-inner flex whitespace-nowrap w-max">
        {/* Render twice for seamless loop */}
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <div key={idx} className="mx-8 lg:mx-16 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
             <div className="text-xl font-bold font-serif tracking-widest text-white/60 uppercase">
                {logo}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;