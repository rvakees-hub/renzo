import React, { useState } from 'react';
import { ChevronDown, PlayCircle, Clock } from 'lucide-react';
import { CURRICULUM } from '../constants';

const Curriculum: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Complete Curriculum</h2>
          <p className="text-gray-400 text-lg">Step-by-step path from beginner to profitable trader</p>
        </div>

        <div className="space-y-4">
          {CURRICULUM.map((module) => (
            <div 
              key={module.id} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${openModule === module.id ? 'border-brand-blue/50 bg-brand-blue/5' : 'border-white/10 bg-black/40'}`}
            >
              {/* Header */}
              <button 
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${openModule === module.id ? 'bg-brand-blue text-white' : 'bg-white/5 text-gray-500'}`}>
                    {module.id}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${openModule === module.id ? 'text-white' : 'text-gray-300'}`}>
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span>{module.lessonCount} Lessons</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openModule === module.id ? 'rotate-180 text-brand-blue' : 'text-gray-500'}`} 
                />
              </button>

              {/* Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${openModule === module.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 ml-14 space-y-3">
                  {module.lessons.map((lesson, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-400 p-2 rounded hover:bg-white/5">
                      <PlayCircle size={16} className="text-brand-blue shrink-0" />
                      <span>{lesson}</span>
                      <span className="ml-auto text-xs opacity-50"><Clock size={12} className="inline mr-1" /> 15m</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;