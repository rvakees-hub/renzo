import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { VIDEO_TESTIMONIALS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoTestimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".video-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.2)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-white">Student Success Stories</h2>
          <p className="text-gray-400 text-lg">Watch how Renzo's students transformed their finances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div key={video.id} className="video-card group relative rounded-2xl overflow-hidden cursor-pointer bg-brand-dark/50 shadow-xl border border-white/5 hover:border-brand-blue/30 transition-all duration-300">
              {/* Thumbnail */}
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img src={video.thumbnailUrl} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-[0_0_30px_rgba(33,101,252,0.3)]">
                     <Play className="fill-white text-white ml-1" />
                   </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-mono border border-white/10">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-1 group-hover:text-brand-blue transition-colors text-white">{video.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{video.location}</p>
                <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-lg">
                  <p className="text-brand-blue font-semibold text-sm">"{video.result}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;