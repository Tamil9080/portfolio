'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <footer ref={ref} className="py-12 text-center">
       <div className="max-w-4xl mx-auto px-6">
         <div className="glass rounded-2xl px-6 py-8">
           <p className={`text-gray-400 text-xs uppercase tracking-widest mb-4 reveal-up stagger-1 ${isVisible ? 'visible' : ''}`}>© 2026 Crafted with Passion</p>
           <div className={`text-white font-bold text-3xl select-none reveal-up stagger-2 ${isVisible ? 'visible' : ''}`}>Tamil Selvan B S</div>
         </div>
       </div>
    </footer>
  );
}
