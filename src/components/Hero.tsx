import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-30 px-4 max-w-4xl mx-auto relative">
        {/* Main content with liquid glass effect */}
        <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl liquid-card mb-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ushmi</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-200 h-12 flex items-center justify-center drop-shadow-lg mb-6">
              <span>{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 drop-shadow-lg">
            Passionate about creating beautiful, functional digital experiences with modern technologies and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 animate-fade-in-up animation-delay-600">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600/50 to-blue-600/50 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20 liquid-button"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-gray-200 px-8 py-4 rounded-full font-semibold hover:border-purple-400/50 hover:text-purple-300 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 liquid-button"
            >
              View My Work
            </a>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up animation-delay-900">
            <a 
                  href="https://github.com/Ushmi1999"
             
              className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition-all duration-300 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 hover:bg-purple-500/20 liquid-button"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ushmi-nimsara-6a30042a8/" 
              className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 liquid-button"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:nimmiushmi@gmail.com" 
              className="text-gray-300 hover:text-green-400 transform hover:scale-110 transition-all duration-300 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-green-400/50 hover:bg-green-500/20 liquid-button"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Floating achievement badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in-up animation-delay-900">
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 liquid-card">
            <div className="text-2xl font-bold text-purple-300 drop-shadow-lg">4+</div>
            <div className="text-gray-200 text-sm drop-shadow-sm">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 liquid-card">
            <div className="text-2xl font-bold text-blue-300 drop-shadow-lg">05+</div>
            <div className="text-gray-200 text-sm drop-shadow-sm">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 liquid-card">
            <div className="text-2xl font-bold text-cyan-300 drop-shadow-lg">100%</div>
            <div className="text-gray-200 text-sm drop-shadow-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with liquid design */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 liquid-button">
          <ChevronDown size={32} className="text-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;