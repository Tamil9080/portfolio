'use client';
import { useState } from 'react';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const achievements = [
  {
    title: "Google Gandhinagar Hackathon",
    description: "Selected team (Offline)",
    year: "2025",
    icon: FaTrophy,
    color: "group-hover:text-emerald-400",
    category: "hackathon"
  },
  {
    title: "MSME Hackathon 5.0",
    description: "AI chatbot project (VaaniBot)",
    year: "2024",
    icon: FaMedal,
    color: "group-hover:text-pink-400",
    category: "hackathon"
  },
  {
    title: "Tuticorin Police Hackathon",
    description: "Real-world problem-solving project",
    year: "2024",
    icon: FaTrophy,
    color: "group-hover:text-indigo-400",
    category: "hackathon"
  },
  {
    title: "Oracle Certified",
    description: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
    year: "2025",
    icon: FaCertificate,
    color: "group-hover:text-blue-400",
    category: "certification"
  },
  {
    title: "Research Publication",
    description:"SMART SUPPLY CHAIN EXECUTION SYSTEMS FOR MSMEs",
    year: "2024",
    icon: FaMedal,
    color: "group-hover:text-purple-400",
    category: "research"
  }
];

const categories = [
  { id: 'hackathon', label: 'Hackathons', icon: <FaTrophy className="text-cyan-400" /> },
  { id: 'certification', label: 'Certifications', icon: <FaCertificate className="text-blue-400" /> },
  { id: 'research', label: 'Research', icon: <FaMedal className="text-purple-400" /> }
];

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('hackathon');
  
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

        {/* Category Selector Buttons */}
        <div className={`flex flex-wrap gap-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border ${
                activeCategory === cat.id 
                ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={activeCategory === cat.id ? 'text-black' : ''}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {achievements
          .filter(item => item.category === activeCategory)
          .map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className={`transition-all duration-500 delay-${i * 100} group`}
              >
                <div className="p-[1px] rounded-2xl bg-white/5 group-hover:bg-gradient-to-r group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-all overflow-hidden shadow-xl">
                  <div className="bg-[#0a0a0c]/90 backdrop-blur-md rounded-[0.95rem] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-all duration-500 group-hover:border-cyan-400/40">
                        <span className={`${item.color} transition-colors`}><Icon /></span>
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold text-white transition-all uppercase tracking-tight ${item.color}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-0.5 font-medium">{item.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-end">
                      <div className="text-xs font-mono font-black text-cyan-400/30 tracking-[0.2em]">{item.year}</div>
                      <div className="mt-1 px-2 py-0.5 bg-white/5 rounded-full border border-white/10 text-[7px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-cyan-400/50 transition-colors">
                        M_ENTRY_LOG_{i+1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
