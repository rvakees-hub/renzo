import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Star, ShieldCheck, TrendingUp, TrendingDown } from 'lucide-react';
import gsap from 'gsap';
import { HERO_TICKER_ITEMS } from '../constants';

// Declare custom element for TypeScript
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        autoplay?: boolean;
        muted?: boolean;
      };
    }
  }
}

// Also declare in global JSX namespace in case standard React types are used where JSX is global
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        autoplay?: boolean;
        muted?: boolean;
      };
    }
  }
  interface Window {
    fbq: any;
  }
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  // Triple the ticker items to ensure smooth infinite looping
  const tickerItems = [...HERO_TICKER_ITEMS, ...HERO_TICKER_ITEMS, ...HERO_TICKER_ITEMS];

  // Countdown state for Jan 20, 2026
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-01-20T00:00:00');
    const difference = targetDate.getTime() - new Date().getTime();
    
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(videoRef.current,
      { scale: 0.9, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(trustRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

  }, []);

  const handleRegisterClick = () => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Renzo Academy Course',
        status: 'hero_cta_click'
      });
    }
    // Smooth scroll to pricing
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex flex-col items-center pt-24 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Urgency Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-brand-blue/90 backdrop-blur-md text-white text-xs sm:text-sm py-2 flex justify-center items-center font-medium border-b border-white/10 shadow-lg shadow-brand-blue/10">
        <span className="hidden sm:inline font-semibold tracking-wide">🚀 New Batch Starting Soon - Trained 500+ Students</span>
        <span className="sm:hidden font-semibold">🚀 Batch Closing Soon</span>
        <span className="mx-3 text-white/40">|</span>
        <div className="flex items-center gap-2 font-mono font-bold bg-black/30 px-3 py-1 rounded text-yellow-300 border border-white/10">
           <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
           <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
           <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
           <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-12 relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-semibold mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Next Enrollment Ends Jan 20, 2026
        </div>
        
        {/* Headline */}
        <h1 ref={headlineRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-medium leading-[1] tracking-tight mb-6 text-white max-w-5xl drop-shadow-2xl">
          Colombo Stock Market <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white not-italic font-sans font-bold tracking-tighter">Accelerator</span>
        </h1>
        
        {/* Subtitle */}
        <p ref={subRef} className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Learn proven investment strategies,fundamental analysis and technical analysis from <span className="text-white font-medium">Renzo</span> — a professional CSE invester who has helped 500+ Sri Lankan students achieve financial freedom.
        </p>

        {/* Video Section - Centered */}
        <div ref={videoRef} className="w-full max-w-4xl mb-14 relative group z-20">
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-purple-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
           <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-blue/20 bg-brand-gray/50 backdrop-blur-sm">
              <wistia-player media-id="s46leuqw1t" aspect="1.7777777777777777" autoplay></wistia-player>
           </div>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mb-20 flex flex-col items-center z-20">
          <button 
            onClick={handleRegisterClick}
            className="group relative px-12 py-6 bg-brand-blue text-white rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(33,101,252,0.6)] border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative flex items-center gap-3">
              Register Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Limited spots available for Jan 2026 Batch
          </p>
        </div>

        {/* Trust Indicators - Grid */}
        <div ref={trustRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 z-20">
           <TrustCard icon={Users} title="500+ Students" subtitle="Trained & Mentored" />
           <TrustCard icon={Star} title="4.9/5 Rating" subtitle="Average Student Review" />
           <TrustCard icon={ShieldCheck} title="Money-Back" subtitle="30-Day Guarantee" />
        </div>
      </div>

      {/* Floating Glassmorphism Ticker */}
      <div className="absolute bottom-8 w-full z-10 pointer-events-auto">
        <div className="ticker-wrap py-4">
          <div className="ticker">
            {tickerItems.map((item, idx) => {
              const isPositive = item.change.startsWith('+');
              return (
                <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 min-w-[220px] shadow-lg hover:bg-white/10 transition-colors group cursor-default">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:border-brand-blue/30 transition-colors">
                     {isPositive ? <TrendingUp size={18} className="text-green-400" /> : <TrendingDown size={18} className="text-red-400" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-lg leading-none mb-1">{item.symbol}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">CSE Equity</span>
                  </div>
                  <div className="flex flex-col items-end flex-1 ml-2">
                    <span className="text-white font-mono font-medium">{item.price}</span>
                    <span className={`text-xs font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustCard = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
  <div className="glass-card p-6 rounded-2xl flex items-center justify-center gap-5 hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-brand-blue/30 hover:shadow-[0_0_30px_rgba(33,101,252,0.1)]">
    <div className="p-3.5 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <div className="text-left">
      <h3 className="font-bold text-white text-xl leading-tight mb-1">{title}</h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{subtitle}</p>
    </div>
  </div>
);

export default Hero;