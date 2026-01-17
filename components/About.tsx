'use client';
import { FaGraduationCap, FaMicrochip, FaCode } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  
  const stats = [
    { label: 'Missions', value: '5+', colorPath: 'from-red-600/50', accent: 'group-hover:text-red-500', bar: 'bg-red-500' },
    { label: 'Collisions', value: '3+', colorPath: 'from-cyan-400/50', accent: 'group-hover:text-cyan-400', bar: 'bg-cyan-400' },
    { label: 'Upgrades', value: '6+', colorPath: 'from-blue-600/50', accent: 'group-hover:text-blue-500', bar: 'bg-blue-500' },
    { label: 'Hackathons', value: '2+', colorPath: 'from-purple-500/50', accent: 'group-hover:text-purple-500', bar: 'bg-purple-500' }
  ];

  return (
    <section ref={ref} id="about" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24">
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Dossier Card */}
        <div className={`md:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} p-[1px] rounded-[3rem] bg-gradient-to-br from-red-600/30 via-white/5 to-blue-600/30 relative group overflow-hidden`}>
          <div className="absolute inset-0 bg-[#0a0a0c] rounded-[2.9rem] m-[1px]" />
          <div className="relative z-10 p-10">
            {/* Multiverse Data Highlight */}
            <div className="hidden md:flex absolute top-8 right-12 text-[10px] font-black italic font-[Anton] text-white/20 uppercase tracking-widest flex-col items-end gap-1 text-right">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span> Data Stream: Active</span>
              <span>Universe: Earth-50101</span>
              <span className="text-cyan-400">Target Identity: Tamil Selvan Affinity</span>
              <span className="text-[8px] text-white/10 mt-1 font-mono tracking-normal">LATENCY: 12ms // STABLE</span>
            </div>

            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-red-600/50 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-600/50 rounded-br-[2.5rem]" />
            
            <h2 className="text-4xl font-black mb-10 italic font-[Anton] uppercase tracking-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_0_rgb(0_0_0)]" style={{ WebkitTextStroke: '1px black' }}>
              Origin <span className="text-cyan-400">Story</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-gray-300 relative z-10">
              <div className="space-y-4">
                <p className="text-lg">I am a <span className="text-white font-bold underline decoration-red-600/50">B.Tech student specializing in AI & DS</span>, navigating technology to build solutions.</p>
                <p className="text-lg">I focus on <span className="text-cyan-400 font-medium">AI-driven applications</span> that bridge data and user intuition.</p>
              </div>
              <div className="space-y-6">
                <p className="border-l-2 border-white/10 pl-4 italic text-sm text-gray-400">I participate in hackathons to apply theory into practice, evolving skills in ML and React.</p>
                <div className="flex gap-3">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1 text-center group/icon transition-all hover:bg-white/10">
                     <FaCode size={24} className="mx-auto text-blue-500 mb-2" />
                     <span className="text-[10px] font-black tracking-widest text-white/50 group-hover/icon:text-white">WEB</span>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1 text-center group/icon transition-all hover:bg-white/10">
                     <FaMicrochip size={24} className="mx-auto text-red-500 mb-2" />
                     <span className="text-[10px] font-black tracking-widest text-white/50 group-hover/icon:text-white">AI/ML</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Tactical Identity */}
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
              <div className="absolute top-0 right-0 w-12 h-[1px] bg-red-600/30" />
              <div>
                <p className="text-[10px] text-red-500/80 uppercase font-black tracking-widest flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-600 rounded-full" /> Designation
                </p>
                <p className="text-white text-sm font-bold tracking-tight">Full Stack Dev</p>
              </div>
              <div>
                <p className="text-[10px] text-blue-500/80 uppercase font-black tracking-widest flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-600 rounded-full" /> Operations
                </p>
                <p className="text-white text-sm font-bold tracking-tight">Tamil Nadu</p>
              </div>
              <div>
                <p className="text-[10px] text-cyan-400/80 uppercase font-black tracking-widest flex items-center gap-1">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" /> Specialty
                </p>
                <p className="text-white text-sm font-bold tracking-tight">AI & Data Sci</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Status
                </p>
                <p className="text-white text-sm font-bold tracking-tight">Active_Duty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Sidebar */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} p-[1px] rounded-[2.5rem] bg-gradient-to-b from-blue-600/30 to-purple-600/30 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[#0a0a0c] rounded-[2.4rem] m-[1px]" />
          <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
            <FaGraduationCap size={80} className="absolute top-4 right-4 text-white/5" />
            <div>
              <h3 className="text-2xl font-black mb-8 italic font-[Anton] uppercase text-white tracking-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '0.5px black' }}>Education</h3>
              <div className="space-y-8">
                <div className="relative pl-4 border-l-2 border-cyan-400/30 group">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  <p className="text-[10px] font-black text-cyan-400 mb-1">2023 - 2027</p>
                  <p className="text-base font-bold text-white leading-tight">B.Tech AI & DS</p>
                  <p className="text-[10px] text-gray-500 mt-1">RMK College of Engineering</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/10 group">
                   <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-red-600 transition-colors" />
                   <p className="text-[10px] font-black text-white/20 mb-1">2021 - 2023</p>
                   <p className="text-base font-bold text-white leading-tight">High School</p>
                   <p className="text-[10px] text-gray-600 mt-1 uppercase">Vidya Mandir School</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-[9px] text-cyan-400/20 uppercase tracking-widest">
              Log: Academia_Link_Established
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="md:col-span-4 mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} p-[1px] rounded-3xl bg-white/5 hover:bg-gradient-to-br hover:${s.colorPath} transition-all group relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[#0a0a0c] rounded-[1.75rem] m-[1px]" />
              <div className="relative z-10 p-6 text-center">
                <div className="text-4xl font-black text-white mb-1 font-[Anton] italic tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{s.value}</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}