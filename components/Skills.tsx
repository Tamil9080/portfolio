'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillsCategories = {
  "Core Systems": [
    { name: "Python", level: 60 },
    { name: "JavaScript", level: 50 },
    { name: "SQL", level: 40 },
    { name: "Java", level: 40 },
    { name: "C++", level: 30 }
  ],
  "Inter-Web": [
    { name: "React", level: 50 },
    { name: "Next.js", level: 50 },
    { name: "Node.js", level: 60 },
    { name: "FastAPI", level: 70 },
  ],
  "Neural Nets": [
    { name: "TensorFlow", level: 55 },
    { name: "PyTorch", level: 50 },
    { name: "OpenCV", level: 40 }
  ],
  "Fabrication": [
    { name: "Git", level: 85 },
    { name: "MongoDB", level: 60 },
    {name:"Vscode", level: 90},
    { name: "AWS", level: 35 }
  ]
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="skills" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="hidden sm:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-5xl font-black italic font-[Anton] uppercase tracking-normal text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1px black' }}>
              Combat <span className="text-cyan-400">Abilities</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-red-600"></span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">Neural_Sync_Ready</span>
              <span className="w-8 h-[2px] bg-blue-600"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsCategories).map(([category, skills], i) => (
            <div 
              key={i} 
              className={`transition-all duration-1000 delay-${i * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}
            >
              <div className="p-[1px] rounded-3xl bg-white/5 group-hover:bg-gradient-to-b group-hover:from-white/20 group-hover:to-transparent transition-all h-full">
                <div className="bg-[#0a0a0c]/80 backdrop-blur-xl rounded-[1.4rem] h-full p-8 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[40px] text-white/5 font-black group-hover:text-white/10 transition-colors">0{i+1}</div>
                  
                  <h3 className="text-xs font-black italic font-[Anton] text-cyan-400 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">{category}</h3>
                  <ul className="space-y-4">
                    {skills.map((skill, si) => (
                      <li key={si} className="group/skill flex items-center justify-between transition-all">
                        <div className="flex flex-col">
                          <span className="text-sm font-black font-[Anton] italic uppercase tracking-wider text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{skill.name}</span>
                          <span className="text-[8px] font-mono text-cyan-400/50 uppercase tracking-widest">{skill.level}% Sync</span>
                        </div>
                        <div className="flex gap-1">
                           {[20, 40, 60, 80, 100].map((threshold) => (
                             <div 
                               key={threshold} 
                               className={`w-1.5 h-1.5 rounded-sm rotate-45 transition-all duration-500 ${
                                 skill.level >= threshold 
                                   ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                                   : 'bg-white/10'
                               }`} 
                             />
                           ))}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-white/5">
                     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-1000"
                          style={{ width: `${skills.reduce((acc, curr) => acc + curr.level, 0) / skills.length}%` }} 
                        />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
