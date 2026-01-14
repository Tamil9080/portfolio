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
            
            @keyframes chromaticShift {
              0%, 100% { transform: translate(0, 0); opacity: 1; }
              2% { transform: translate(-2px, 1px); opacity: 0.8; }
              4% { transform: translate(2px, -1px); opacity: 0.8; }
              6% { transform: translate(0, 0); opacity: 1; }
            }

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
              /* Classic 3D comic depth */
              text-shadow: 
                1px 1px 0px #000,
                2px 2px 0px #000,
                3px 3px 0px #000,
                4px 4px 0px #000,
                5px 5px 15px rgba(0,0,0,0.4);
            }

            .high-quality-name::before,
            .high-quality-name::after {
              content: "TAMILSELVAN";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              pointer-events: none;
            }

            /* Red distortion layer */
            .high-quality-name::before {
              color: rgba(230, 36, 41, 0.5);
              animation: chromaticShift 3s infinite linear;
              left: -3px;
            }

            /* Blue distortion layer */
            .high-quality-name::after {
              color: rgba(0, 102, 255, 0.5);
              animation: chromaticShift 3s infinite linear reverse;
              left: 3px;
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
      </div>

      <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <a 
          href="#projects" 
          className="px-8 py-4 glass text-white rounded-2xl font-black hover:border-cyan-400/60 hover:scale-105 transition-all flex items-center gap-2 group relative overflow-hidden"
        >
          <span className="relative z-10">View Missions 🌀</span>
        </a>
        <div className="flex gap-4">
          <a href="#" className="p-4 glass rounded-2xl text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"><FaGithub size={20} /></a>
          <a href="#" className="p-4 glass rounded-2xl text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </section>
  );
}
