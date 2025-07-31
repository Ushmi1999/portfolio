import React from 'react';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/80 to-pink-900/60"></div>
      
      {/* Animated liquid blobs with enhanced movement */}
      <div className="absolute inset-0">
        {/* Large flowing blobs with complex movement */}
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-liquid-orbit liquid-blob"></div>
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-pink-500/25 to-purple-600/30 rounded-full blur-3xl animate-liquid-spiral liquid-blob animation-delay-500"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-600/20 to-pink-400/25 rounded-full blur-3xl animate-liquid-figure-eight liquid-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-pink-600/30 to-purple-500/20 rounded-full blur-3xl animate-liquid-pendulum liquid-blob animation-delay-1500"></div>
        
        {/* Medium floating elements with serpentine movement */}
        <div className="absolute top-1/3 left-1/2 w-[450px] h-[450px] bg-gradient-to-r from-purple-400/25 to-pink-500/30 rounded-full blur-2xl animate-liquid-serpentine liquid-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/6 w-[400px] h-[400px] bg-gradient-to-l from-pink-500/20 to-purple-600/25 rounded-full blur-2xl animate-liquid-zigzag liquid-blob animation-delay-2500"></div>
        <div className="absolute top-1/6 right-1/3 w-[500px] h-[500px] bg-gradient-to-b from-purple-500/30 to-pink-400/20 rounded-full blur-2xl animate-liquid-infinity liquid-blob animation-delay-3000"></div>
        
        {/* Small accent blobs with rapid movement */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-pink-400/35 to-purple-500/25 rounded-full blur-xl animate-liquid-tornado liquid-blob animation-delay-3500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-[350px] h-[350px] bg-gradient-to-bl from-purple-600/30 to-pink-500/20 rounded-full blur-xl animate-liquid-vortex liquid-blob animation-delay-4000"></div>
        <div className="absolute top-3/4 left-2/3 w-[250px] h-[250px] bg-gradient-to-t from-pink-500/40 to-purple-400/30 rounded-full blur-xl animate-liquid-helix liquid-blob animation-delay-4500"></div>
        
        {/* Tiny floating particles with erratic movement */}
        <div className="absolute top-1/5 left-3/4 w-[180px] h-[180px] bg-gradient-to-r from-purple-300/40 to-pink-600/35 rounded-full blur-lg animate-liquid-chaos liquid-blob animation-delay-5000"></div>
        <div className="absolute bottom-1/5 left-1/3 w-[200px] h-[200px] bg-gradient-to-l from-pink-400/45 to-purple-500/30 rounded-full blur-lg animate-liquid-butterfly liquid-blob animation-delay-5500"></div>
        <div className="absolute top-2/5 right-1/5 w-[150px] h-[150px] bg-gradient-to-b from-purple-500/50 to-pink-300/40 rounded-full blur-lg animate-liquid-tremor liquid-blob animation-delay-6000"></div>
        
        {/* Additional micro elements for richness */}
        <div className="absolute top-1/8 left-1/2 w-[120px] h-[120px] bg-gradient-to-tr from-pink-300/50 to-purple-400/45 rounded-full blur-md animate-liquid-flutter liquid-blob animation-delay-6500"></div>
        <div className="absolute bottom-1/8 right-2/3 w-[140px] h-[140px] bg-gradient-to-bl from-purple-400/45 to-pink-500/40 rounded-full blur-md animate-liquid-shimmer liquid-blob animation-delay-7000"></div>
        <div className="absolute top-3/8 left-1/8 w-[100px] h-[100px] bg-gradient-to-t from-pink-500/55 to-purple-300/50 rounded-full blur-md animate-liquid-ripple liquid-blob animation-delay-7500"></div>
        <div className="absolute bottom-3/8 right-1/8 w-[160px] h-[160px] bg-gradient-to-r from-purple-500/40 to-pink-400/45 rounded-full blur-md animate-liquid-pulse-complex liquid-blob animation-delay-8000"></div>
      </div>

      {/* Floating Liquid Particles Layer */}
      <div className="absolute inset-0">
        {/* Large floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`large-particle-${i}`}
            className="absolute w-8 h-8 bg-gradient-to-r from-purple-400/60 to-pink-400/50 rounded-full blur-sm animate-liquid-float liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Medium floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`medium-particle-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-pink-300/50 to-purple-300/40 rounded-full blur-sm animate-liquid-drift liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 600}ms`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Small floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`small-particle-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-200/40 to-pink-200/35 rounded-full blur-sm animate-liquid-flutter liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 400}ms`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Micro particles for depth */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`micro-particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-100/30 to-purple-100/25 rounded-full blur-xs animate-liquid-shimmer liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 300}ms`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`glow-orb-${i}`}
            className="absolute w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/25 rounded-full blur-lg animate-liquid-pulse-complex liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1200}ms`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          />
        ))}

        {/* Trailing particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`trail-particle-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-pink-400/40 to-purple-400/35 rounded-full blur-sm animate-liquid-serpentine liquid-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 500}ms`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Sparkle particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-300/60 to-pink-300/50 rounded-full animate-liquid-ripple"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced overlay for depth and atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-800/5 to-pink-800/5"></div>
    </div>
  );
};

export default GlobalBackground;