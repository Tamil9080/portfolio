'use client';
import { FaTrophy } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`md:col-span-3 glass-card p-10 rounded-[2.5rem] reveal-left stagger-1 ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            Origin <span className="text-cyan-400">Story</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-lg">
            <p>
              I am a B.Tech student specializing in Artificial Intelligence and Data Science, with a strong interest in building real-world, impactful tech solutions. I enjoy working on AI-driven applications, data analysis, and modern web development.
            </p>
            <p>
              I actively participate in hackathons and projects that help me apply theory into practice, and I’m continuously improving my skills in Python, machine learning, and React. I’m looking for opportunities where I can learn, grow, and contribute as a developer.
            </p>
          </div>
        </div>
        
        <div className={`glass-card p-8 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group reveal-right stagger-2 ${isVisible ? 'visible' : ''}`}>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
             <FaTrophy size={100} />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-cyan-400 font-medium">B.Tech in AI & DS</p>
            <p className="text-sm text-white-500">R.M.K College of Engineering and Technology</p>
            <p className="text-sm text-gray-500">2023-2027</p>
            <p className="text-cyan-400 font medium">Higher Education</p>
            <p className="text-sm text-white-500">Vidya Mandir Matriculation Higher Secondary School</p>
            <p className="text-sm text-gray-500">2021-2023</p>
          </div>
          <div className="pt-8 border-t border-white/5 relative z-10">
            <p className="text-sm text-gray-400 italic font-serif">"Turning complex data into simple, actionable insights."</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:col-span-3">
           <div className="glass-card p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Projects</div>
           </div>
           <div className="glass-card p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Hackathons</div>
           </div>
           <div className="glass-card p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-white mb-1">6+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Certs</div>
           </div>
        </div>
      </div>
    </section>
  );
}
