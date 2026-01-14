'use client';
import { FaRocket, FaStar } from 'react-icons/fa';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: "AI Chatbot System",
    description: "Intelligent conversational AI using NLP and machine learning for customer support automation.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
    github: "#",
    demo: "#",
    stars: "156"
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-based deep learning model for predicting stock market trends with 85% accuracy.",
    tech: ["Python", "Keras", "Pandas", "Streamlit"],
    github: "#",
    demo: "#",
    stars: "243"
  },
  {
    title: "Image Classification Model",
    description: "CNN model for multi-class image classification with real-time inference capabilities.",
    tech: ["PyTorch", "OpenCV", "Flask", "Docker"],
    github: "#",
    demo: "#",
    stars: "198"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with ML-powered insights.",
    tech: ["Python", "Plotly", "Scikit-learn", "MongoDB"],
    github: "#",
    demo: "#",
    stars: "127"
  }
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className={`reveal-left stagger-1 ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured <span className="text-cyan-400">Missions</span></h2>
          <p className="text-gray-400 max-w-md">Highlighting my journey in AI development and software engineering.</p>
        </div>
        <div className={`text-sm text-red-400 font-mono reveal-right stagger-2 ${isVisible ? 'visible' : ''}`}>/ (04) ITEMS</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`group relative glass-card rounded-[2rem] overflow-hidden reveal-up stagger-${(index % 2) + 1} ${isVisible ? 'visible' : ''}`}>
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-950 p-8 flex items-end relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <FaRocket size={120} className="-rotate-12" />
              </div>
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-xs font-mono text-cyan-500/80 bg-cyan-500/5 px-3 py-1 rounded-full border border-cyan-500/10">0{index + 1}</span>
                   <div className="flex items-center gap-1 text-yellow-500/80 text-sm">
                      <FaStar size={10} /> {project.stars}
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
              <div className="flex gap-4">
                 <a href={project.github} className="flex-1 py-3 glass rounded-xl text-center text-sm font-bold text-white hover:border-white/20 transition-all">Code</a>
                 <a href={project.demo} className="flex-1 py-3 glass rounded-xl text-center text-sm font-bold text-white hover:border-white/20 transition-all">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
