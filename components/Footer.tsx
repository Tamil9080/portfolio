'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <footer ref={ref} className="py-20 text-center relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />
       
       <div className="max-w-4xl mx-auto px-6 relative">
         <div className="p-10 border-t border-white/5 relative group">
           {/* Section Deco */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
           
           <p className={`text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             Terminal_Closed // Earth_50101_Sync_Success
           </p>
           
           <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="text-white font-black italic font-[Anton] text-4xl mb-4 tracking-normal uppercase select-none group-hover:text-red-600 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '0.8px black' }}>
               Tamilselvan <span className="text-cyan-400">B S</span>
             </div>
             
             <div className="flex justify-center items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
               <span>Loc: Chennai_IN</span>
               <span className="w-1 h-1 rounded-full bg-white/20" />
               <span>Ver: 2026.1.14</span>
               <span className="w-1 h-1 rounded-full bg-white/20" />
               <span className="text-red-500/50 animate-pulse">Connection: Secure</span>
             </div>
           </div>
         </div>
         
         <div className="mt-12 text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">
           &quot;With great data, comes great insight.&quot;
         </div>

         <div className="mt-8 text-[9px] font-bold text-white/20 uppercase tracking-widest flex flex-col items-center justify-center gap-4">
           <div className="flex items-center gap-2">
             <span>&copy; {new Date().getFullYear()}</span>
             <span className="w-1 h-1 rounded-full bg-white/10" />
             <span>Tamilselvan B S</span>
           </div>
           <div className="text-[7px] tracking-[0.3em] font-black text-white/5 group-hover:text-white/20 transition-colors">
             Built & deployed with Vercel
           </div>
         </div>
       </div>
    </footer>
  );
}
