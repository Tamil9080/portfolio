"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Multiverse Developer",
    "AI & Web Engineer",
    "Creative Web Developer",
    "AI & Data Science"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] pt-20 md:pt-40 flex flex-col items-center justify-center px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-cyan-400 text-xs font-medium mb-12 animate-fade-in text-nowrap border-2 border-cyan-400/40">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        🕷️🕸️ Welcome to the Spider-Verse🕸️🕷️
      </div>
      <div className="rounded-3xl p-8 md:p-10 mb-8 max-w-4xl w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {/* Name - Refined and Subtle */}
        <div className="mb-4 relative">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;700;800&display=swap');
            
            @keyframes subtleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            
            .high-quality-name {
              font-family: 'Anton', sans-serif;
              color: #E62429;
              font-size: clamp(3rem, 12vw, 6.5rem);
              line-height: 0.9;
              position: relative;
              display: inline-block;
              text-transform: uppercase;
              letter-spacing: -0.02em;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
              /* Clean 3D shadow for depth without stroke */
              text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
            }
            
            .greeting-text {
              font-family: 'Plus Jakarta Sans', sans-serif;
              color: #94a3b8;
              font-size: 0.875rem;
              font-weight: 700;
              letter-spacing: 0.4em;
              text-transform: uppercase;
              margin-bottom: 1rem;
              display: block;
              opacity: 0.8;
            }

            .hero-title-container {
              margin-top: 2rem;
              position: relative;
              padding: 0.75rem 2rem;
              background: rgba(0, 0, 0, 0.2);
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(10px);
              box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
              animation: subtleFloat 4s ease-in-out infinite;
            }

            .high-quality-title {
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-size: clamp(0.875rem, 3vw, 1.125rem);
              font-weight: 800;
              color: #fff;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .spider-accent {
              position: absolute;
              bottom: -1px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 2px;
              background: linear-gradient(90deg, transparent, #E62429, #0066FF, transparent);
            }
          `}</style>
          <span className="greeting-text">Incoming Transmission</span>
          <h2 className="high-quality-name">
            TAMILSELVAN
          </h2>
        </div>
        
        {/* Main Title - Rotating Skills */}
        <div className="hero-title-container mb-8">
          <span className="high-quality-title block text-center">
            {titles[titleIndex]}
          </span>
          <div className="spider-accent"></div>
        </div>
        
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
          Bridging dimensions of AI, Data Science, and Web Development to create impactful solutions across the multiverse.
        </p>

        {/* Multiverse Coordinate Badge */}
        <div className="mt-8 flex justify-center">
          <div className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 group/coord hover:border-red-500/30 transition-all cursor-crosshair">
            <div className="flex flex-col items-start leading-none">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest group-hover/coord:text-red-500/50 transition-colors">Coordinate</span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-tighter">Lat: 13.0827° N // Lon: 80.2707° E</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">
              Universe: <span className="text-white group-hover/coord:text-cyan-400">Earth-616</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center animate-fade-in relative z-10" style={{ animationDelay: '0.4s' }}>
        <a 
          href="#projects" 
          className="px-10 py-5 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl font-black text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(230,36,41,0.4)] transition-all flex items-center gap-3 group relative overflow-hidden active:scale-95"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <span className="relative z-10 uppercase tracking-tighter italic">Enter the Breach</span>
          <span className="text-xl group-hover:rotate-12 transition-transform">🌀</span>
        </a>
        
        <div className="flex gap-4">
          <a href="https://github.com/tamilselvan-bs" target="_blank" className="p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all group/soc">
            <FaGithub size={24} className="group-hover/soc:rotate-[360deg] transition-transform duration-500" />
          </a>
          <a href="https://linkedin.com/in/tamilselvan-bs" target="_blank" className="p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:text-blue-500 hover:border-blue-500/40 hover:-translate-y-1 transition-all group/soc">
            <FaLinkedin size={24} className="group-hover/soc:rotate-[360deg] transition-transform duration-500" />
          </a>
        </div>
      </div>

      <div className="mt-20 animate-bounce">
         <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent opacity-20 mx-auto" />
      </div>
    </section>
  );
}
