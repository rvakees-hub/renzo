import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".video-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Stagger effect for the two columns
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-brand-black relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">Real Stories, Real Results</h2>
                <p className="text-gray-400">Watch how our students are mastering the market</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Video 1 */}
                <div className="video-card relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(33,101,252,0.15)] bg-black/50 backdrop-blur-sm group hover:border-brand-blue/30 transition-colors duration-500">
                    <iframe 
                        src="https://player.vimeo.com/video/1149803204?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        title="20250824_141647_0_COMPRESSED"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>

                {/* Video 2 */}
                <div className="video-card relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(33,101,252,0.15)] bg-black/50 backdrop-blur-sm group hover:border-brand-blue/30 transition-colors duration-500">
                    <iframe 
                        src="https://player.vimeo.com/video/1149802038?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        title="copy_3482326D-AE44-468F-9029-E1A707982D20"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturedVideo;