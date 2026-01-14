'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillsCategories = {
  "Languages": ["Python", "JavaScript", "SQL", "Java", "C++"],
  "Web Technologies": ["React", "Next.js", "Node.js", "FastAPI", "Flask"],
  "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
  "Tools & Platforms": ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS"]
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  return (
   <section ref={ref} id="skills" className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className={`text-3xl font-black mb-16 text-center reveal-down stagger-1 ${isVisible ? 'visible' : ''}`}>Multiverse <span className="text-cyan-400">Abilities</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(skillsCategories).map(([category, skills], i) => (
          <div key={i} className={`glass-card rounded-2xl p-6 space-y-6 reveal-up stagger-${(i % 2) + 1} ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">{category}</h3>
            <ul className="space-y-3">
              {skills.map((skill, si) => (
               <li key={si} className="text-lg font-medium text-gray-300 flex items-center gap-2">
                 <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                 {skill}
               </li>
              ))}
            </ul>
          </div>
            ))}
         </div>
      </div>
    </section>
  );
}
