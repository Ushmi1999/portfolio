import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 92, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS/Cloud', level: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'UI/UX Design', level: 78, color: 'from-pink-500 to-rose-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative" id="about">
      <div className="max-w-6xl mx-auto px-4 relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-lg">
            Passionate developer with 4+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl liquid-card">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">My Journey</h3>
              <p className="text-gray-200 leading-relaxed mb-6 drop-shadow-sm">
                Started as a curious software engineer student, evolved into a full-stack developer who loves solving complex problems with elegant code. I believe in continuous learning and staying ahead of tech trends.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 liquid-item">
                  <Code className="mx-auto mb-2 text-purple-300 drop-shadow-lg" size={24} />
                  <div className="text-sm text-gray-200 font-medium">Frontend</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-white/10 liquid-item">
                  <Server className="mx-auto mb-2 text-green-300 drop-shadow-lg" size={24} />
                  <div className="text-sm text-gray-200 font-medium">Backend</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl backdrop-blur-sm border border-white/10 liquid-item">
                  <Palette className="mx-auto mb-2 text-pink-300 drop-shadow-lg" size={24} />
                  <div className="text-sm text-gray-200 font-medium">Design</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 liquid-item">
                  <Smartphone className="mx-auto mb-2 text-blue-300 drop-shadow-lg" size={24} />
                  <div className="text-sm text-gray-200 font-medium">Mobile</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2 liquid-skill">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200 font-medium drop-shadow-sm">{skill.name}</span>
                  <span className="text-gray-300 text-sm drop-shadow-sm">{skill.level}%</span>
                </div>
                <div className="h-4 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;