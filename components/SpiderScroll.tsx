'use client';

import React, { useState, useEffect, useRef } from 'react';

const SpiderScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [isMounted, setIsMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      const percentage = (currentScroll / documentHeight) * 90; // Keep it within 90% of screen
      setScrollPercentage(percentage);
      
      if (currentScroll > lastScrollY.current) {
        setDirection('down');
      } else if (currentScroll < lastScrollY.current) {
        setDirection('up');
      }
      lastScrollY.current = currentScroll;

      // show after some scroll
      if (currentScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (window.scrollY < 300) {
      // If near top, scroll to the first section (About)
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getActionLabel = () => {
    if (!isMounted) return 'Dive In';
    if (window.scrollY < 300) return 'Dive In';
    return direction === 'up' ? 'Swing Up' : 'Keep Going';
  };

  return (
    <div 
      className={`hidden sm:block fixed right-4 md:right-8 top-0 h-full z-[150] pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ width: '50px' }}
    >
      <style>{`
        @keyframes dangling {
          0% { transform: rotate(-5deg) translateX(-50%); }
          50% { transform: rotate(5deg) translateX(-50%); }
          100% { transform: rotate(-5deg) translateX(-50%); }
        }
        .spider-web-vibrate {
          animation: dangling 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      {/* Web Line */}
      <div 
        className="absolute top-0 left-1/2 w-[1.5px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-white/80 transition-all duration-300 ease-out"
        style={{ height: `${scrollPercentage + 5}%`, transform: 'translateX(-50%)' }}
      ></div>

      {/* Spider */}
      <button
        onClick={handleClick}
        className="absolute left-1/2 pointer-events-auto cursor-pointer group spider-web-vibrate"
        style={{ 
          top: `${scrollPercentage + 5}%`, 
          transition: 'top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        title={getActionLabel()}
      >
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 100 100" 
          className={`drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300 ${direction === 'up' ? 'scale-110' : 'scale-100'}`}
        >
          <defs>
            <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E62429" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>
            <filter id="spiderGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <g transform={`rotate(${direction === 'up' ? '0' : '180'} 50 50)`} className="transition-transform duration-500 ease-in-out">
            {/* Spider body */}
            <circle cx="50" cy="50" r="14" fill="url(#spiderGradient)" filter="url(#spiderGlow)" />
            {/* Spider head */}
            <circle cx="50" cy="36" r="9" fill="url(#spiderGradient)" filter="url(#spiderGlow)" />
            
            {/* Legs - Simple and clean */}
            <g stroke="url(#spiderGradient)" strokeWidth="3" fill="none">
              <path d="M40,42 Q25,30 15,42" />
              <path d="M38,50 Q15,50 10,65" />
              <path d="M40,58 Q25,75 15,85" />
              
              <path d="M60,42 Q75,30 85,42" />
              <path d="M62,50 Q85,50 90,65" />
              <path d="M60,58 Q75,75 85,85" />
            </g>

            {/* Eyes */}
            <circle cx="46" cy="33" r="2.5" fill="white" />
            <circle cx="54" cy="33" r="2.5" fill="white" />
          </g>
        </svg>

        {/* Action text */}
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-cyan-400 whitespace-nowrap uppercase tracking-tighter">
            {getActionLabel()}
          </span>
        </div>
      </button>

      {/* Progress Line Glow */}
      <div 
        className="absolute bottom-0 left-1/2 w-[2px] bg-cyan-400/20 blur-sm pointer-events-none"
        style={{ top: `${scrollPercentage + 5}%`, transform: 'translateX(-50%)' }}
      ></div>

      {/* Scroll indicator text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rotate-90 origin-center whitespace-nowrap opacity-10">
        <span className="text-[10px] font-bold text-white tracking-[0.5em] uppercase">
          Scroll
        </span>
      </div>
    </div>
  );
};

export default SpiderScroll;
