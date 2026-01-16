'use client';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="contact" className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} p-[1px] rounded-[3rem] bg-gradient-to-br from-red-600/20 via-white/5 to-cyan-400/20 relative group overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0a0a0c] rounded-[2.9rem] m-[1px]" />
        
        <div className="relative z-10 p-12 md:p-20 text-center">
          <div className="absolute top-8 left-12 font-mono text-[9px] text-red-500/40 uppercase tracking-[0.4em] hidden md:block">
            Incoming_Transmission // Port_8080
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic font-[Anton] uppercase tracking-normal leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1.5px black' }}>
            Signal the <span className="text-cyan-400">Spider</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-medium">
            Ready to jump through the next portal? I'm always open to discussing new projects, tactical ideas or opportunities to be part of your vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:bstamilselvanofficial@gmail.com" className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-red-600/30">
               <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
               <FaEnvelope size={28} className="mx-auto text-red-500 mb-4 group-hover:scale-110 transition-transform" />
               <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Email</p>
               <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Direct Link</p>
            </a>
            
            <a href="https://linkedin.com/in/tamilselvan-bs" target="_blank" rel="noopener noreferrer" className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-blue-600/30">
               <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
               <FaLinkedin size={28} className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
               <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Network</p>
               <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">LinkedIn</p>
            </a>
            
            <a href="https://github.com/Tamil9080" target="_blank" rel="noopener noreferrer" className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-cyan-400/30">
               <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
               <FaGithub size={28} className="mx-auto text-white mb-4 group-hover:scale-110 transition-transform" />
               <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Source</p>
               <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">GitHub</p>
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Global_Status: Online</span>
            </div>
            <div className="text-[9px] font-mono text-cyan-400/30 uppercase tracking-[0.2em]">
              Earth_616_Encryption_Enabled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
