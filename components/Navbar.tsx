'use client';
import GooeyNav from './GooeyNav.jsx';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 py-4 md:px-10 ${isScrolled ? 'py-2 md:py-2' : 'py-4 md:py-6'}`}>
      <div className={`mx-auto w-full max-w-6xl transition-all duration-500 rounded-2xl flex items-center justify-between px-6 py-2 ${isScrolled ? 'glass border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-lg' : 'bg-white/5 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none'} relative z-50`}>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img src="/logo.png" alt="Logo" className="relative w-8 h-8 object-contain rounded-lg border border-white/10" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-tighter text-white">TAMILSELVAN B S</span>
            <span className="text-[10px] text-cyan-400/80 font-bold tracking-[0.2em] leading-none uppercase">Multiverse Dev</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center" style={{ height: '50px', position: 'relative' }}>
          <GooeyNav items={navItems} particleCount={21} />
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-blue-600/20 hover:from-red-600/30 hover:to-blue-600/30 border border-white/10 glass rounded-xl text-white text-[10px] font-black tracking-widest transition-all hover:scale-105 hover:border-cyan-400/40 uppercase">
            Resume
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative group p-2 text-white overflow-hidden rounded-xl border border-white/5 bg-white/5 active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Menu size={20} />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <X size={20} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-[20px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full gap-6 transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {navItems.map((item, index) => (
            <Link 
              key={item.label}
              href={item.href}
              className="group relative px-8 py-2 overflow-hidden"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-cyan-400/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tighter uppercase">
                {item.label}
              </span>
            </Link>
          ))}
          <a 
            href="#" 
            className="mt-8 px-10 py-4 bg-white/5 border border-white/10 glass rounded-2xl text-white font-black tracking-widest hover:border-red-500/50 hover:text-red-500 transition-all uppercase text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
