import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight, Facebook } from 'lucide-react';
import { FACEBOOK_REVIEWS } from '../constants';

const FacebookReviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible to run animation only once
          if (containerRef.current) {
             observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-brand-black" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <div className="flex items-center justify-center gap-1 mb-4">
             {[...Array(5)].map((_, i) => (
               <Star key={i} size={20} className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
             ))}
           </div>
           <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-white">What Our Students Say</h2>
           <p className="text-gray-400 text-lg">Real results from real traders in Sri Lanka</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FACEBOOK_REVIEWS.map((review, index) => (
            <div 
              key={review.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`
                bg-white/5 backdrop-blur-md rounded-xl border border-white/5 hover:border-brand-blue/50 
                hover:shadow-[0_0_30px_rgba(33,101,252,0.15)] transition-all duration-700 ease-out overflow-hidden group 
                hover:scale-[1.02] hover:-translate-y-1 relative
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              {/* Card Header (Optional, if we want native feel over iframe) */}
              <div className="w-full bg-white rounded-t-lg rounded-b-md overflow-hidden relative">
                 {/* Embed Container to maintain layout stability */}
                 <div className="relative w-full overflow-hidden bg-white">
                    <iframe 
                      src={review.src} 
                      width="100%" 
                      height={review.height} 
                      style={{border:'none', overflow:'hidden'}} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      className="w-full"
                      title={`Facebook Review by ${review.name}`}
                    ></iframe>
                     {/* Overlay to prevent interaction jank if needed, though usually desirable to let users scroll/click embedded posts */}
                 </div>
              </div>
              
              <div className="p-3 bg-white/5 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-400 group-hover:text-brand-blue transition-colors uppercase tracking-wider">{review.name}</span>
                <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-full bg-[#1877F2]/20">
                        <Facebook size={10} className="text-[#1877F2] fill-[#1877F2]" />
                    </div>
                    <span className="text-[10px] text-gray-500">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacebookReviews;