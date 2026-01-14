export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Multiverse gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/30 to-black"></div>
      
      {/* Animated Multiverse Portal Effect */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glitch">
              <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="2" />
              <feDisplacementMap in="SourceGraphic" scale="15" />
            </filter>
            <pattern id="multiverse-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,0,255,0.05)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="2" fill="rgba(0,255,255,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#multiverse-grid)" filter="url(#glitch)" />
        </svg>
      </div>
      
      {/* Cyan glow orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      {/* Magenta glow orb */}
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      
      {/* Blue accent orb */}
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150"></div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}
