'use client';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const achievements = [
  {
    title: "none AI Hackathon Winner",
    description: "1st Place - AI-powered traffic management system",
    year: "2025",
    icon: <FaTrophy />,
    color: "group-hover:text-amber-400"
  },
  {
    title: "Google Cloud Certified",
    description: "Professional Machine Learning Engineer",
    year: "2025",
    icon: <FaCertificate />,
    color: "group-hover:text-blue-400"
  },
  {
    title: "Research Publication",
    description: "IEEE Conference on Deep Learning Applications",
    year: "2024",
    icon: <FaMedal />,
    color: "group-hover:text-purple-400"
  }
];

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="achievements" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-5xl font-black italic font-[Anton] uppercase tracking-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1px black' }}>
            Multiverse <span className="text-cyan-400">Highlights</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="w-10 h-[2px] bg-red-600"></div>
             <p className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">Tactical_Success_Logs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
         {achievements.map((item, i) => (
           <div 
             key={i} 
             className={`transition-all duration-1000 delay-${i * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}
           >
              <div className="p-[1px] rounded-[2rem] bg-white/5 group-hover:bg-gradient-to-r group-hover:from-red-600/20 group-hover:via-cyan-400/20 group-hover:to-blue-600/20 transition-all overflow-hidden shadow-2xl">
                 <div className="bg-[#0a0a0c]/80 backdrop-blur-md rounded-[1.95rem] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                       {i === 0 ? <FaTrophy size={100} /> : i === 1 ? <FaCertificate size={100} /> : <FaMedal size={100} />}
                    </div>

                    <div className="flex items-center gap-8 relative z-10">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-500 group-hover:border-cyan-400/40">
                          <span className={`${item.color} transition-colors`}>{item.icon}</span>
                       </div>
                       <div>
                          <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">Entry_Rank_{i+1}</p>
                          <h3 className={`text-xl font-bold text-white transition-all uppercase tracking-tight ${item.color}`}>
                             {item.title}
                          </h3>
                          <p className="text-gray-400 mt-1 font-medium">{item.description}</p>
                       </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-end">
                       <div className="text-xs font-mono font-black text-cyan-400/40 tracking-[0.2em]">{item.year}</div>
                       <div className="mt-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-black text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                          Status: Verified_M_Log
                       </div>
                    </div>
                    
                    {/* HUD Corner Decor */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-400/20"></div>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
}
