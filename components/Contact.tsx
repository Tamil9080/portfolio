'use client';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <h2 className={`text-5xl md:text-7xl font-black mb-8 italic tracking-tighter reveal-down stagger-1 ${isVisible ? 'visible' : ''}`}>Signal the <span className="text-gradient">Spider</span></h2>
      <p className={`text-gray-400 text-lg mb-12 reveal-up stagger-2 ${isVisible ? 'visible' : ''}`}>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      
      <div className={`flex flex-col md:flex-row gap-4 justify-center reveal-up stagger-3 ${isVisible ? 'visible' : ''}`}>
         <a href="mailto:your.email@example.com" className="p-8 glass-card rounded-3xl flex-1 flex flex-col items-center gap-4 group">
            <FaEnvelope size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono text-gray-500">Email Me</span>
         </a>
         <a href="#" className="p-8 glass-card rounded-3xl flex-1 flex flex-col items-center gap-4 group">
            <FaLinkedin size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono text-gray-500">LinkedIn</span>
         </a>
         <a href="#" className="p-8 glass-card rounded-3xl flex-1 flex flex-col items-center gap-4 group">
            <FaGithub size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono text-gray-500">GitHub</span>
         </a>
      </div>
    </section>
  );
}
