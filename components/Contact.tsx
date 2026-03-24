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
      <style>{`
        @keyframes contact-glitch-skew {
          0% { transform: skew(0deg); }
          10% { transform: skew(10deg); }
          20% { transform: skew(-10deg); }
          30% { transform: skew(0deg); }
          40% { transform: skew(5deg); }
          50% { transform: skew(-5deg); }
          100% { transform: skew(0deg); }
        }
        .contact-glitch-text {
          position: relative;
          display: inline-block;
          color: #00ffff;
          animation: contact-glitch-skew 5s infinite linear alternate-reverse;
        }
        .contact-glitch-text::before,
        .contact-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .contact-glitch-text::before {
          left: -2px;
          text-shadow: 2px 0 #E62429;
          clip-path: inset(20% 0 80% 0);
          animation: contact-glitch-1 2s infinite linear alternate-reverse;
        }
        .contact-glitch-text::after {
          left: 2px;
          text-shadow: -2px 0 #0066FF;
          clip-path: inset(10% 0 60% 0);
          animation: contact-glitch-2 3s infinite linear alternate-reverse;
        }
        @keyframes contact-glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }
        @keyframes contact-glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
          60% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, -2px); }
          80% { clip-path: inset(20% 0 50% 0); transform: translate(2px, 1px); }
          100% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, -1px); }
        }
        @keyframes web-bg-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100px 100px; }
        }
        .contact-web-bg {
          background-image: 
            radial-gradient(circle at 50% 0%, transparent 40%, rgba(230, 36, 41, 0.03) 41%, transparent 42%),
            radial-gradient(circle at 100% 50%, transparent 60%, rgba(0, 255, 255, 0.03) 61%, transparent 62%),
            radial-gradient(circle at 0% 100%, transparent 80%, rgba(0, 102, 255, 0.03) 81%, transparent 82%);
          background-size: 150px 150px;
          animation: web-bg-flow 20s infinite linear;
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .node-card {
          animation: nodeFloat 6s ease-in-out infinite;
        }
        .node-card:nth-child(2) { animation-delay: -1.5s; }
        .node-card:nth-child(3) { animation-delay: -3s; }
        .node-card:nth-child(4) { animation-delay: -4.5s; }
        
        .spider-input:focus {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2), inset 0 0 10px rgba(0, 255, 255, 0.05);
          animation: inputPulse 2s infinite alternate;
        }
        @keyframes inputPulse {
          0% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.2), inset 0 0 10px rgba(0, 255, 255, 0.05); }
          100% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.4), inset 0 0 15px rgba(0, 255, 255, 0.1); }
        }
      `}</style>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} p-[1px] rounded-[3rem] bg-gradient-to-br from-red-600/20 via-white/5 to-cyan-400/20 relative group overflow-hidden shadow-[0_0_50px_rgba(230,36,41,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.15)]`}>
        <div className="absolute inset-0 bg-[#0a0a0c] rounded-[2.9rem] m-[1px] contact-web-bg" />
        
        <div className="relative z-10 p-8 md:p-20">
          <div className="text-center mb-16">
            <div className="font-mono text-[9px] text-red-500/40 uppercase tracking-[0.4em] mb-4 group-hover:text-red-500/80 transition-colors animate-pulse">
              Incoming_Transmission // Port_8080
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 italic font-[Anton] uppercase tracking-normal leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1.5px black' }}>
              Signal the <span className="contact-glitch-text" data-text="Spider">Spider</span>
              <FaSpider className="inline-block ml-4 text-red-600 animate-pulse text-4xl md:text-6xl hover:scale-125 transition-transform duration-300 hover:text-cyan-400 cursor-pointer" />
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium transition-colors hover:text-white">
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
                  className="spider-input w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-all font-bold"
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
                  className="spider-input w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-600/50 transition-all font-bold"
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
                className="spider-input w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-all font-bold resize-none"
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="group/btn relative w-full h-[70px] bg-[#0a0a0c] text-[10px] text-cyan-400 font-black uppercase tracking-[0.4em] disabled:opacity-50 transition-all duration-300 active:scale-[0.98] border border-cyan-400/30 hover:border-red-600/80 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(230,36,41,0.4)] overflow-hidden"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              {/* Background gradient grid animation */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(230,36,41,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] animate-[slide_10s_linear_infinite] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              
              {/* Animated glowing border edges */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 group-hover/btn:bg-red-600 transition-colors duration-500 shadow-[0_0_10px_rgba(0,255,255,0.8)] group-hover/btn:shadow-[0_0_15px_rgba(230,36,41,1)]" />
              <div className="absolute right-0 top-0 bottom-0 w-[3px] border-l border-cyan-400/50 group-hover/btn:border-red-600/50 group-hover/btn:bg-red-600 transition-colors duration-500" />

              {/* Glitch Overlay line triggered on hover */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-10px] w-[120%] h-[1px] bg-red-600 shadow-[0_0_10px_#E62429] opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[contact-glitch-skew_0.5s_infinite]" />

              <span className="relative z-10 flex items-center justify-center gap-3 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] group-hover/btn:drop-shadow-[0_0_12px_rgba(230,36,41,0.8)] group-hover/btn:text-white">
                {isSubmitting ? (
                  <span className="flex items-center gap-3 animate-pulse text-red-500">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-none animate-ping" />
                    [ opening _ portal ]
                  </span>
                ) : (
                  <>
                    <span className="text-[8px] text-cyan-400/50 group-hover/btn:text-red-500/80 mr-1 transition-colors">[SYS_BOOT]</span>
                    <FaPaperPlane size={14} className="group-hover/btn:opacity-0 group-hover/btn:translate-x-4 transition-all duration-300 absolute left-[calc(50%-100px)]" />
                    <span className="group-hover/btn:tracking-[0.6em] transition-all duration-300 ease-out z-10 relative">Initiate_Transmission</span>
                    {/* Futuristic arrow suffix */}
                    <span className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 -translate-x-4 transition-all duration-300 text-red-500 font-bold">
                      {'>_'}
                    </span>
                  </>
                )}
              </span>
            </button>
          </form>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            <a href="https://github.com/Tamil9080" target="_blank" rel="noopener noreferrer" className="node-card group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-cyan-400/50 shadow-[0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-cyan-400/40">NODE_01</div>
               <FaGithub size={28} className="text-white mb-4 group-hover:scale-125 transition-transform group-hover:rotate-12 duration-300" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1 group-hover:tracking-[0.3em] transition-all">Source_Code</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">GitHub</p>
            </a>

            <a href="https://www.linkedin.com/in/tamil-selvan-301024294/" target="_blank" rel="noopener noreferrer" className="node-card group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-blue-600/50 shadow-[0_0_0_rgba(37,99,235,0)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-blue-600/40">NODE_02</div>
               <FaLinkedin size={28} className="text-blue-500 mb-4 group-hover:scale-125 transition-transform group-hover:-rotate-12 duration-300" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1 group-hover:tracking-[0.3em] transition-all">Cyber_Pulse</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">LinkedIn</p>
            </a>

            <a href="https://www.instagram.com/_tamilselvanofficial/" target="_blank" rel="noopener noreferrer" className="node-card group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-red-600/50 shadow-[0_0_0_rgba(220,38,38,0)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
               <div className="absolute top-2 right-4 text-[7px] font-black text-white/5 uppercase tracking-[0.2em] group-hover:text-red-600/40">NODE_03</div>
               <FaInstagram size={28} className="text-pink-500 mb-4 group-hover:scale-125 transition-transform group-hover:rotate-12 duration-300" />
               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1 group-hover:tracking-[0.3em] transition-all">Visual_Logs</p>
               <p className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Instagram</p>
            </a>

            <a href="mailto:bstamilselvanofficial@gmail.com" className="node-card group relative p-5 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:border-emerald-500/50 shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] text-center flex flex-col items-center justify-center min-h-[160px]">
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
