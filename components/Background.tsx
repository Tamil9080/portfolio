export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Background base with slight noise */}
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>

      {/* Spider-Verse Web Pattern (Geometric) */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="web-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="white" />
              {/* Converging web lines */}
              <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.2" strokeDasharray="2,2" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.2" strokeDasharray="2,2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web-grid)" />
        </svg>
      </div>

      {/* Dynamic Glitch Orbs (Spider-Verse Colors) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep Red Orb - Top Right */}
        <div 
          className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen" 
          style={{ animationDuration: '8s' }}
        ></div>
        
        {/* Electric Blue Orb - Bottom Left */}
        <div 
          className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse mix-blend-screen" 
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        ></div>

        {/* Cyan Contrast Orb - Center Left */}
        <div 
          className="absolute top-1/2 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" 
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        ></div>
      </div>

      {/* Chromatic Aberration Lines (Flash effects) */}
      <div className="absolute inset-0">
        <style>{`
          @keyframes glitch-line {
            0% { transform: translateY(-100%) scaleX(1); opacity: 0; }
            5% { opacity: 0.5; }
            10% { transform: translateY(100vh) scaleX(1.5); opacity: 0; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          .glitch-bar {
            position: absolute;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(230, 36, 41, 0.3), rgba(0, 102, 255, 0.3), transparent);
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
            animation: glitch-line 12s infinite linear;
          }
        `}</style>
        <div className="glitch-bar" style={{ animationDelay: '0s' }}></div>
        <div className="glitch-bar" style={{ animationDelay: '4s', top: '20%' }}></div>
        <div className="glitch-bar" style={{ animationDelay: '8s', top: '50%' }}></div>
      </div>

      {/* Scanning Overlay (Dossier Look) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    </div>
  );
}
