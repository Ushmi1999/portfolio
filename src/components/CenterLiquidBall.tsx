import React, { useEffect, useState, useRef } from 'react';

const CenterLiquidBall: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized to -1 to 1)
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;
      
      setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1);
      
      setScrollY(scrollProgress);
      
      // Hide ball when scrolled significantly
      setIsVisible(scrollPosition < window.innerHeight * 0.8);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate dynamic styles based on mouse and scroll
  const ballStyle = {
    transform: `
      translate(-50%, -50%) 
      translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)
      scale(${1 - scrollY * 0.3})
      rotate(${scrollY * 360}deg)
    `,
    opacity: isVisible ? 1 - scrollY * 0.7 : 0,
  };

  const innerBallStyle = {
    transform: `
      scale(${1 + Math.abs(mousePosition.x) * 0.2 + Math.abs(mousePosition.y) * 0.2})
      rotate(${-scrollY * 180}deg)
    `,
  };

  const pulseStyle = {
    transform: `
      scale(${1.5 + Math.abs(mousePosition.x) * 0.5 + Math.abs(mousePosition.y) * 0.5})
      rotate(${scrollY * 270}deg)
    `,
    opacity: 0.6 - scrollY * 0.4,
  };

  return (
    <div
      ref={ballRef}
      className="fixed top-1/2 left-1/2 pointer-events-none z-20 transition-all duration-300 ease-out"
      style={ballStyle}
    >
      {/* Outer pulsing ring */}
      <div
        className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl animate-liquid-pulse-complex"
        style={pulseStyle}
      />
      
      {/* Middle morphing layer */}
      <div
        className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-600/25 blur-xl animate-liquid-morph"
        style={{
          transform: `
            scale(${1.2 + Math.abs(mousePosition.x) * 0.3})
            rotate(${mousePosition.x * 45 + scrollY * 180}deg)
          `,
          borderRadius: `
            ${50 + mousePosition.x * 20}% 
            ${50 - mousePosition.x * 20}% 
            ${50 + mousePosition.y * 20}% 
            ${50 - mousePosition.y * 20}% / 
            ${50 - mousePosition.y * 15}% 
            ${50 + mousePosition.y * 15}% 
            ${50 - mousePosition.x * 15}% 
            ${50 + mousePosition.x * 15}%
          `,
        }}
      />
      
      {/* Core liquid ball */}
      <div
        className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/40 to-pink-500/35 blur-lg animate-liquid-float liquid-blob"
        style={innerBallStyle}
      />
      
      {/* Inner glowing core */}
      <div
        className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-pink-300/50 to-purple-400/45 blur-md animate-liquid-shimmer"
        style={{
          transform: `
            scale(${0.8 + Math.abs(mousePosition.x) * 0.4 + Math.abs(mousePosition.y) * 0.4})
            rotate(${-mousePosition.x * 60 - scrollY * 90}deg)
          `,
        }}
      />
      
      {/* Central bright core */}
      <div
        className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-200/60 to-pink-200/55 blur-sm animate-liquid-ripple"
        style={{
          transform: `
            scale(${0.6 + Math.abs(mousePosition.x) * 0.6 + Math.abs(mousePosition.y) * 0.6})
            rotate(${mousePosition.y * 90 + scrollY * 45}deg)
          `,
        }}
      />
      
      {/* Micro particles around the ball */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-300/70 to-pink-300/60 blur-sm animate-liquid-flutter"
          style={{
            top: '50%',
            left: '50%',
            transform: `
              translate(-50%, -50%)
              rotate(${i * 45 + scrollY * 360}deg)
              translateY(${-120 - Math.abs(mousePosition.x) * 20 - Math.abs(mousePosition.y) * 20}px)
              scale(${0.5 + Math.abs(mousePosition.x) * 0.5 + Math.abs(mousePosition.y) * 0.5})
            `,
            animationDelay: `${i * 200}ms`,
          }}
        />
      ))}
      
      {/* Orbital rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full border border-purple-300/20 animate-liquid-orbit"
          style={{
            width: `${200 + i * 60}px`,
            height: `${200 + i * 60}px`,
            top: '50%',
            left: '50%',
            transform: `
              translate(-50%, -50%)
              rotate(${mousePosition.x * 30 + scrollY * 180 + i * 120}deg)
              scale(${1 + Math.abs(mousePosition.y) * 0.2})
            `,
            animationDelay: `${i * 1000}ms`,
            animationDuration: `${20 + i * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CenterLiquidBall;