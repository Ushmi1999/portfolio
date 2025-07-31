import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Liquid background blobs for navbar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse animation-delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo with liquid design */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 liquid-card hover:border-purple-400/50 transition-all duration-300">
              <div className="p-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl">
                <Code className="text-white drop-shadow-lg" size={20} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                Ushmi.dev
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 liquid-card">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-200 hover:text-white hover:bg-white/20 px-4 py-2 rounded-xl font-medium transition-all duration-300 liquid-button relative group"
                >
                  {item.label}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 bg-gradient-to-r from-purple-600/50 to-blue-600/50 hover:from-purple-600/70 hover:to-blue-600/70 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/20 liquid-button"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white transition-colors duration-300 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 liquid-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl liquid-card">
            {/* Mobile menu background blobs */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-300"></div>
            </div>
            
            <div className="px-6 pt-4 pb-6 space-y-2 relative">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium py-3 px-4 rounded-2xl liquid-button relative group"
                >
                  {item.label}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 hover:from-purple-600/70 hover:to-blue-600/70 text-white px-6 py-4 rounded-2xl font-semibold mt-4 backdrop-blur-xl border border-white/20 liquid-button transform hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;