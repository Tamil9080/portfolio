'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaPaperPlane, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaSpider } from 'react-icons/fa6';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree Integration
      const response = await fetch("https://formspree.io/f/mlgggrqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        alert('Transmission Received! Port 8080 secure.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('Transmission Interrupted. Check your uplink (Formspree ID).');
      }
    } catch {
      alert('Neural link failed. Critical system error.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section ref={ref} id="contact" className="py-32 px-6 max-w-5xl mx-auto relative scroll-mt-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} p-[1px] rounded-[3rem] bg-gradient-to-br from-red-600/20 via-white/5 to-cyan-400/20 relative group overflow-hidden shadow-2xl`}>
        <div className="absolute inset-0 bg-[#0a0a0c] rounded-[2.9rem] m-[1px]" />
        
        <div className="relative z-10 p-8 md:p-20">
          <div className="text-center mb-16">
            <div className="font-mono text-[9px] text-red-500/40 uppercase tracking-[0.4em] mb-4">
              Incoming_Transmission // Port_8080
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 italic font-[Anton] uppercase tracking-normal leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1.5px black' }}>
              Signal the <span className="text-cyan-400">Spider</span>
              <FaSpider className="inline-block ml-4 text-red-600 animate-pulse text-4xl md:text-6xl" />
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Ready to jump through the next portal? Send a tactical transmission below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-20 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Codename_</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Comms_Channel_</label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-600/50 transition-all font-bold"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Data_Payload_</label>
              <textarea 
                placeholder="Message Details..."
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-all font-bold resize-none"
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden relative group/btn disabled:opacity-50 transition-all duration-300 active:scale-[0.95] shadow-[0_0_0_rgba(220,38,38,0)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] border border-white/10 hover:border-white/40"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              
              {/* Animated Scanline */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600/50 -translate-y-full group-hover/btn:animate-[scanline_1.5s_linear_infinite] z-20 pointer-events-none" />
              
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover/btn:text-black transition-colors duration-300">
                {isSubmitting ? (
                  <span className="flex items-center gap-2 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
                    Transmitting...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane size={14} className="group-hover/btn:-translate-y-2 group-hover/btn:translate-x-2 transition-all duration-500 ease-out" />
                    Initiate_Transmission
                  </>
                )}
              </span>
            </button>
          </form>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            <a href="https://github.com/Tamil9080" target="_blank" rel="noopener noreferrer" className="group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-cyan-400/50 shadow-[0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-cyan-400/40">NODE_01</div>
               <FaGithub size={28} className="text-white mb-4 group-hover:scale-110 transition-transform group-hover:rotate-12" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Source_Code</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">GitHub</p>
            </a>

            <a href="https://www.linkedin.com/in/tamil-selvan-301024294/" target="_blank" rel="noopener noreferrer" className="group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-blue-600/50 shadow-[0_0_0_rgba(37,99,235,0)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-blue-600/40">NODE_02</div>
               <FaLinkedin size={28} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform group-hover:-rotate-12" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Cyber_Pulse</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">LinkedIn</p>
            </a>

            <a href="https://www.instagram.com/tamilselvan_30/" target="_blank" rel="noopener noreferrer" className="group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-red-600/50 shadow-[0_0_0_rgba(220,38,38,0)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-red-600/40">NODE_03</div>
               <FaInstagram size={28} className="text-pink-500 mb-4 group-hover:scale-110 transition-transform group-hover:rotate-12" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Visual_Logs</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Instagram</p>
            </a>

            <a href="mailto:bstamilselvanofficial@gmail.com" className="group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-emerald-500/50 shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-emerald-500/40">NODE_04</div>
               <FaEnvelope size={28} className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform group-hover:-rotate-12" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Direct_Uplink</p>
               <p className="text-[10px] font-bold text-white group-hover:text-cyan-400 transition-colors lowercase break-all">bstamilselvanofficial@gmail.com</p>
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Global_Status: Online</span>
              </div>
              <a href="mailto:bstamilselvanofficial@gmail.com" className="text-[10px] font-black text-cyan-400/60 hover:text-cyan-400 transition-colors tracking-widest flex items-center gap-2">
                <span className="w-4 h-[1px] bg-white/10 hidden md:block" />
                bstamilselvanofficial@gmail.com
              </a>
            </div>
            <div className="text-[9px] font-mono text-cyan-400/30 uppercase tracking-[0.2em]">
              Earth_50101_Encryption_Enabled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
