'use client';
import { FaRocket, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: "AI Chatbot System",
    description: "Intelligent conversational AI using NLP and machine learning for customer support automation.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    code: "MISSIONS_01",
    color: "group-hover:text-red-500",
    border: "border-red-600/30"
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-based deep learning model for predicting stock market trends with high precision.",
    tech: ["Keras", "Pandas", "Streamlit"],
    code: "MISSIONS_02",
    color: "group-hover:text-cyan-400",
    border: "border-cyan-400/30"
  },
  {
    title: "Image Classification",
    description: "CNN model for multi-class image classification with real-time inference capabilities.",
    tech: ["PyTorch", "OpenCV", "Flask"],
    code: "MISSIONS_03",
    color: "group-hover:text-blue-500",
    border: "border-blue-600/30"
  },
  {
    title: "Data Analytics HUD",
    description: "Interactive dashboard for visualizing complex datasets with ML-powered insights.",
    tech: ["Plotly", "Scikit-learn", "MongoDB"],
    code: "MISSIONS_04",
    color: "group-hover:text-purple-500",
    border: "border-purple-600/30"
  }
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="projects" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-5xl font-black italic font-[Anton] uppercase tracking-tighter">
            Operational <span className="text-red-600">Missions</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md font-medium">Archived data of completed multiverse objectives and deep-learning experiments.</p>
        </div>
        <div className={`transition-all duration-1000 delay-300 font-mono text-[10px] text-white/20 tracking-[0.5em] hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          ARCHIVE_SECTION_42 // 004_RECORDS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} group relative`}
          >
            {/* Project Frame */}
            <div className={`p-[1px] rounded-[2.5rem] bg-white/5 group-hover:bg-gradient-to-br transition-all duration-500 ease-out overflow-hidden h-full ${project.border.replace('30', '50')} hover:shadow-[0_0_50px_rgba(0,0,0,0.3)]`}>
              <div className="bg-[#0a0a0c] rounded-[2.4rem] h-full p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-widest text-white/20 group-hover:text-red-500 transition-colors uppercase">{project.code}</span>
                    <h3 className={`text-2xl font-black italic font-[Anton] uppercase mt-2 tracking-tight transition-colors ${project.color}`}>
                      {project.title}
                    </h3>
                  </div>
                  <FaRocket size={32} className="text-white/5 group-hover:text-white/20 transition-all group-hover:-translate-y-2 group-hover:translate-x-2" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-10 h-12 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/50 tracking-widest uppercase group-hover:border-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 relative z-10">
                  <a href="#" className="flex-1 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95 group/btn">
                    <FaGithub className="text-white group-hover/btn:text-cyan-400 transition-colors" />
                    <span className="text-[10px] font-black tracking-widest text-white">REPOS</span>
                  </a>
                  <a href="#" className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center gap-2 hover:from-red-600/40 hover:to-blue-600/40 transition-all active:scale-95 group/btn">
                    <FaExternalLinkAlt size={12} className="text-white group-hover/btn:text-cyan-400 transition-colors" />
                    <span className="text-[10px] font-black tracking-widest text-white">LIVE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
