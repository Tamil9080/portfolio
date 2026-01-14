'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Hyperspeed = dynamic(() => import('./Hyperspeed.jsx'), { ssr: false });

interface GrandEntranceProps {
  onComplete?: () => void;
}

export default function GrandEntrance({ onComplete }: GrandEntranceProps) {
  const [phase, setPhase] = useState<'typing' | 'typed' | 'hyperspeed' | 'fade'>('typing');
  const [displayText, setDisplayText] = useState('');
  const exitTimer = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fullText = '> launch multiverse.env';

  useEffect(() => {
    // Phase 1: Type in text
    let charIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        setPhase('typed');
      }
    }, 50); // 50ms per character

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const handleAction = () => {
    if (phase !== 'typed') return;
    setPhase('hyperspeed');
    // Let hyperspeed run (3.5s) then quick fade
    exitTimer.current = setTimeout(() => {
      setPhase('fade');
      // Quick fade out to reveal portfolio fast
      setTimeout(() => {
        onComplete?.();
      }, 600);
    }, 3500);
  };

  // Handle actions (key press or click)
  useEffect(() => {
    const handleEvents = () => {
      if (phase === 'typed') {
        handleAction();
      }
    };

    window.addEventListener('keydown', handleEvents);
    return () => window.removeEventListener('keydown', handleEvents);
  }, [phase, onComplete]);

  const handleSpeedUp = () => {
    // Optional: Add any effects when speed increases
  };

  const handleSlowDown = () => {
    // Triggered by hyperspeed
  };

  return (
    <div
      aria-hidden
      onClick={handleAction}
      className={`fixed inset-0 z-[9999] overflow-hidden ${
        phase === 'fade' ? 'opacity-0' : 'opacity-100'
      } ${phase === 'typed' ? 'cursor-pointer' : ''}`}
      style={{
        background: '#000000',
        transition: phase === 'fade' ? 'opacity 0.8s ease-out' : 'opacity 0.3s ease-out',
      }}
    >
      {/* Hyperspeed Effect - Only visible during hyperspeed phase */}
      {phase === 'hyperspeed' && (
      <div className="absolute inset-0 opacity-100">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: handleSpeedUp,
            onSlowDown: handleSlowDown,
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x00ffff,
              brokenLines: 0x00ffff,
              leftCars: [0xff00ff, 0xD856BF, 0xC247AC],
              rightCars: [0x00ffff, 0x03B3C3, 0x0E5EA5],
              sticks: 0x00ffff,
            }
          }}
        />
        
        {/* Spider-Verse Web-Catching Effect */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          style={{
            animation: 'webCatchFade 0.4s ease-out 3s forwards',
          }}
        >
          <defs>
            <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(255, 0, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0.4)" />
            </linearGradient>
            <filter id="webGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Left web strands */}
          <line x1="50" y1="200" x2="400" y2="500" stroke="url(#webGradient)" strokeWidth="3" filter="url(#webGlow)" className="web-strand web-strand-1" />
          <line x1="100" y1="100" x2="450" y2="450" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" className="web-strand web-strand-2" />
          <line x1="80" y1="400" x2="420" y2="600" stroke="url(#webGradient)" strokeWidth="2" filter="url(#webGlow)" className="web-strand web-strand-3" />
          
          {/* Right web strands */}
          <line x1="950" y1="200" x2="600" y2="500" stroke="url(#webGradient)" strokeWidth="3" filter="url(#webGlow)" className="web-strand web-strand-1" />
          <line x1="900" y1="100" x2="550" y2="450" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" className="web-strand web-strand-2" />
          <line x1="920" y1="400" x2="580" y2="600" stroke="url(#webGradient)" strokeWidth="2" filter="url(#webGlow)" className="web-strand web-strand-3" />
          
          {/* Center web burst lines */}
          <line x1="500" y1="300" x2="500" y2="150" stroke="url(#webGradient)" strokeWidth="2" filter="url(#webGlow)" className="web-strand web-strand-2" />
          <line x1="500" y1="700" x2="500" y2="850" stroke="url(#webGradient)" strokeWidth="2" filter="url(#webGlow)" className="web-strand web-strand-2" />
          
          {/* Spider Logo */}
          <g className="spider-logo" style={{animation: 'spiderDrop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 2.8s forwards', opacity: 0}}>
            {/* Spider body */}
            <circle cx="500" cy="500" r="25" fill="url(#webGradient)" filter="url(#webGlow)" />
            {/* Spider head */}
            <circle cx="500" cy="475" r="15" fill="url(#webGradient)" filter="url(#webGlow)" />
            {/* Left legs */}
            <line x1="475" y1="490" x2="420" y2="460" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
            <line x1="475" y1="510" x2="420" y2="540" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
            <line x1="480" y1="520" x2="440" y2="570" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
            {/* Right legs */}
            <line x1="525" y1="490" x2="580" y2="460" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
            <line x1="525" y1="510" x2="580" y2="540" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
            <line x1="520" y1="520" x2="560" y2="570" stroke="url(#webGradient)" strokeWidth="2.5" filter="url(#webGlow)" />
          </g>
        </svg>
        
        {/* Portal Structure at the end */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            animation: 'portalAppear 1s ease-out 2.5s forwards',
            opacity: 0,
          }}
        >
          <div className="relative w-64 h-64">
            {/* Outer portal rings */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-cyan-400/60"
              style={{
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.8), inset 0 0 40px rgba(0, 255, 255, 0.4)',
                animation: 'spin 8s linear infinite',
              }}
            />
            <div 
              className="absolute inset-8 rounded-full border-2 border-fuchsia-400/60"
              style={{
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.8)',
                animation: 'spin 6s linear reverse infinite',
              }}
            />
            <div 
              className="absolute inset-16 rounded-full border-2 border-cyan-400/40"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
                animation: 'spin 4s linear infinite',
              }}
            />
            
            {/* Portal center glow */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(255, 0, 255, 0.2) 50%, transparent 70%)',
                filter: 'blur(20px)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            
            {/* Portal text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-center font-mono text-sm text-cyan-400 opacity-60"
                style={{
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
                }}
              >
                PORTAL
              </span>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Terminal-style typing text overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${
          phase === 'hyperspeed' || phase === 'fade' ? 'opacity-0 scale-95 blur-lg' : 'opacity-100'
        }`}
      >
        <div className="relative max-w-4xl px-8">
          {/* Terminal window */}
          <div 
            className="relative bg-black/60 backdrop-blur-md rounded-lg border border-cyan-500/30 p-8 shadow-2xl"
            style={{
              boxShadow: '0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(0, 255, 255, 0.1)',
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-cyan-500/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-3 text-cyan-400/60 text-sm font-mono">multiverse.terminal</span>
            </div>
            
            {/* Typing text */}
            <div className="font-mono text-2xl md:text-4xl lg:text-5xl mb-6 relative">
              <style>{`
                @keyframes terminalGlitch {
                  0%, 100% { transform: translate(0); text-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
                  2% { transform: translate(-2px, 1px); text-shadow: -3px 0 #ff00ff; }
                  4% { transform: translate(2px, -1px); text-shadow: 3px 0 #00ffff; }
                }
              `}</style>
              <span 
                className="text-cyan-400 relative z-10"
                style={{
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  animation: phase === 'typed' ? 'terminalGlitch 4s infinite' : 'none',
                }}
              >
                {displayText}
              </span>
              {phase === 'typing' && (
                <span 
                  className="inline-block w-3 h-8 md:h-10 lg:h-12 ml-1 bg-cyan-400 animate-pulse"
                  style={{
                    animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                  }}
                />
              )}
            </div>

            {/* Action hint */}
            {phase === 'typed' && (
              <div className="text-center font-mono text-sm md:text-base text-fuchsia-400/80 animate-bounce"
                style={{
                  textShadow: '0 0 10px rgba(255, 0, 255, 0.6)',
                }}
              >
                Press <span className="bg-fuchsia-500/30 px-2 py-1 rounded border border-fuchsia-400/50 uppercase">Any Key</span> or <span className="bg-cyan-500/30 px-2 py-1 rounded border border-cyan-400/50 uppercase">Tap</span> to continue...
              </div>
            )}

            {/* Scanline effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.3) 2px, rgba(0, 255, 255, 0.3) 4px)',
              }}
            />
          </div>

          {/* Glow effect behind terminal */}
          <div 
            className="absolute inset-0 -z-10 blur-3xl opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(255, 0, 255, 0.2) 50%, transparent 70%)',
            }}
          />
        </div>
      </div>

      {/* Vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
}
