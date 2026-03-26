'use client';
import React, { useState } from 'react';
import { FaRocket, FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: "Portfolio Website",
    shortDescription: "A modern, responsive personal portfolio built with Next.js 14.",
    fullDescription: "Features smooth scroll animations, dynamic project showcases, and interactive UI components. Includes responsive design for all devices, optimized performance with Next.js 14 server components, SEO optimization, custom animations using Tailwind CSS, and a clean, professional interface to showcase projects and technical expertise.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    code: "MISSIONS_01",
    color: "group-hover:text-red-500",
    border: "border-red-600/30",
    github: "https://github.com/Tamil9080/portfolio"
  },
  {
    title: "Attendance App",
    shortDescription: "A comprehensive attendance management system with real-time tracking.",
    fullDescription: "Enables student/employee check-ins with automated time logging, detailed reporting dashboards for analytics, export functionality for record keeping, customizable attendance rules and notifications, real-time attendance status updates, date range filtering and search capabilities, and visual statistics with charts and graphs for tracking attendance patterns over time.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    code: "MISSIONS_02",
    color: "group-hover:text-cyan-400",
    border: "border-cyan-400/30",
    github: "https://github.com/Tamil9080/attendance-app"
  },
  {
    title: "Trip Agent",
    shortDescription: "An intelligent travel planning assistant powered by Python.",
    fullDescription: "Integrates with multiple travel APIs for comprehensive trip planning. Features route optimization for efficient travel paths, destination recommendations based on preferences, budget tracking and expense management, itinerary management with day-by-day planning, real-time updates on weather and travel conditions, and travel insights including best times to visit and local tips.",
    tech: ["Python", "Travel Logic", "API Integration"],
    code: "MISSIONS_03",
    color: "group-hover:text-blue-500",
    border: "border-blue-600/30",
    github: "https://github.com/Tamil9080/trip-agent"
  },
  {
    title: "PDF Atelier",
    shortDescription: "A professional-grade PDF toolkit built with Next.js and TypeScript.",
    fullDescription: "Offers client-side PDF merging and combining multiple documents, splitting PDFs into separate pages or ranges, compression to reduce file sizes, rotation and reordering of pages, metadata editing for document properties, drag-and-drop interface for easy file management, and privacy-focused processing with zero server uploads ensuring all operations happen locally in your browser for complete data security.",
    tech: ["Next.js", "TypeScript", "PDF.js", "Tailwind CSS"],
    code: "MISSIONS_04",
    color: "group-hover:text-green-500",
    border: "border-green-600/30",
    github: "https://github.com/Tamil9080/pdf-atelier",
    live: "https://pdf-atelier.vercel.app//"
  },
  {
    title: "Quick Pick",
    shortDescription: "An advanced decision-making tool for rapid selection and choice optimization.",
    fullDescription: "Will feature AI-powered recommendations based on historical data and preferences, customizable criteria weighting for personalized decision-making, real-time comparison analytics with side-by-side views, decision history tracking and learning, multi-factor evaluation system, and visual decision trees to help streamline complex decision processes and make confident choices faster.",
    tech: ["Upcoming", "In Development"],
    code: "UPCOMING_MISSION",
    color: "group-hover:text-purple-500",
    border: "border-purple-600/30"
  }
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  
  return (
    <section ref={ref} id="projects" className="py-32 px-6 max-w-7xl mx-auto relative scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-5xl font-black italic font-[Anton] uppercase tracking-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ WebkitTextStroke: '1.2px black' }}>
            Operational <span className="text-red-600">Missions</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md font-medium">Archived data of completed multiverse objectives and deep-learning experiments.</p>
        </div>
        <div className={`transition-all duration-1000 delay-300 font-mono text-[10px] text-white/20 tracking-[0.5em] hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          ARCHIVE_SECTION_42 // 004_RECORDS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const isFlipped = flippedCards.includes(index);
          
          return (
            <div 
              key={index} 
              className={`transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} group relative h-[450px]`}
              style={{ perspective: '1000px' }}
            >
              {/* Flip Container */}
              <div 
                className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div 
                  className="absolute w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="p-[1px] rounded-[2.5rem] bg-white/5 border border-white/5 transition-all duration-500 ease-out overflow-hidden h-full shadow-xl">
                    <div className="bg-[#0a0a0c] rounded-[2.4rem] h-full p-8 relative overflow-hidden flex flex-col">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">{project.code}</span>
                          <h3 className="text-2xl font-black italic font-[Anton] uppercase mt-2 tracking-wide text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                            {project.title}
                          </h3>
                        </div>
                        <FaRocket size={32} className="text-white/5 group-hover:text-white/20 transition-all group-hover:-translate-y-2 group-hover:translate-x-2" />
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/50 tracking-widest uppercase group-hover:border-white/20 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-3 relative z-10 mt-auto">
                        <div className="flex gap-3">
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex-1 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.96] group/btn hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                            >
                              <FaGithub className="text-white group-hover/btn:text-red-500 group-hover/btn:-translate-y-0.5 transition-all" />
                              <span className="text-[10px] font-black tracking-widest text-white">REPOS</span>
                            </a>
                          )}
                          {project.live ? (
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600/10 to-blue-600/10 border border-white/10 flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-blue-600/20 transition-all active:scale-[0.96] group/btn hover:border-blue-600/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            >
                              <FaExternalLinkAlt size={12} className="text-white group-hover/btn:text-blue-400 group-hover/btn:-translate-y-0.5 transition-all" />
                              <span className="text-[10px] font-black tracking-widest text-white">LIVE</span>
                            </a>
                          ) : project.github && (
                            <div className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600/10 to-blue-600/10 border border-white/5 flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                              <FaExternalLinkAlt size={12} className="text-white/30" />
                              <span className="text-[10px] font-black tracking-widest text-white/30">NO LIVE</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Info Button */}
                        <button
                          onClick={() => toggleFlip(index)}
                          className="w-full py-3 px-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.96] hover:border-purple-600/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        >
                          <FaInfoCircle className="text-white" />
                          <span className="text-[10px] font-black tracking-widest text-white">MORE INFO</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div 
                  className="absolute w-full h-full"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="p-[1px] rounded-[2.5rem] bg-white/5 border border-white/5 transition-all duration-500 ease-out overflow-hidden h-full shadow-xl">
                    <div className="bg-[#0a0a0c] rounded-[2.4rem] h-full p-8 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                      
                      {/* Back Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">{project.code}</span>
                          <h3 className="text-2xl font-black italic font-[Anton] uppercase mt-2 tracking-wide text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Full Description */}
                      <div className="mb-6">
                        <h4 className="text-xs font-black tracking-widest text-white/40 uppercase mb-3">What It Can Do</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-xs font-black tracking-widest text-white/40 uppercase mb-3">Tech Arsenal</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/50 tracking-widest uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Back Button */}
                      <button
                        onClick={() => toggleFlip(index)}
                        className="w-full py-3 px-4 rounded-2xl bg-purple-600/20 border border-purple-600/30 flex items-center justify-center gap-2 hover:bg-purple-600/30 transition-all active:scale-[0.96] hover:border-purple-600/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] mt-auto"
                      >
                        <span className="text-[10px] font-black tracking-widest text-white">FLIP BACK</span>
                      </button>
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
