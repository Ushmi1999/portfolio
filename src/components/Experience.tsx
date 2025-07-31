import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: ExperienceItem[] = [
 
    {
      id: 1,
      type: 'work',
      title: 'Software Engineer Intern',
      company: 'Lankatech Innovations PVT.LTD ',
      location: 'Kandy Sri Lanka',
      period: '2025 May - October',
      description: [
        
        'Worked with senior engineers on infrastructure projects',
        'Participated in code reviews and technical discussions',
        'Gained experience with large-scale distributed systems'
      ]
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 relative" id="experience">
      <div className="max-w-4xl mx-auto px-4 relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-200 text-lg drop-shadow-lg">
            Professional experience and educational background that shaped my career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400 rounded-full shadow-lg"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-white/20 z-10 shadow-lg">
                  {item.current && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 shadow-2xl liquid-card">
                    <div className="flex items-center gap-2 mb-3">
                      {item.type === 'work' ? (
                        <Briefcase size={20} className="text-purple-300 drop-shadow-lg" />
                      ) : (
                        <GraduationCap size={20} className="text-blue-300 drop-shadow-lg" />
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20 ${
                        item.type === 'work' 
                          ? 'bg-purple-500/20 text-purple-200' 
                          : 'bg-blue-500/20 text-blue-200'
                      }`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                      {item.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs backdrop-blur-sm border border-white/20">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                    <div className="text-purple-200 font-medium mb-1 drop-shadow-sm">{item.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-200 text-sm mb-4">
                      <div className="flex items-center gap-1 drop-shadow-sm">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1 drop-shadow-sm">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-200 text-sm flex items-start gap-2 drop-shadow-sm">
                          <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;