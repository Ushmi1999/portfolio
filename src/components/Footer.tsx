import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-30">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Ushmi.dev
            </div>
            <p className="text-gray-200 leading-relaxed drop-shadow-sm">
              Full Stack Developer passionate about creating beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold drop-shadow-lg">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-200 hover:text-purple-300 transition-colors duration-300 drop-shadow-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold drop-shadow-lg">Get In Touch</h3>
            <div className="space-y-2 text-gray-200">
              <p className="drop-shadow-sm">nimmiushmi@gmail.com</p>
              <p className="drop-shadow-sm">+94 76 527 5654</p>
              <p className="drop-shadow-sm">Kurunegala , Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-300 transform hover:scale-110 border border-white/20 liquid-button"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-200 flex items-center justify-center gap-2 drop-shadow-sm">
            © {currentYear} Ushmi.dev. Made with <Heart className="text-red-400" size={16} /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;