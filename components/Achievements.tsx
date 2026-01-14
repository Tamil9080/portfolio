import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: "none AI Hackathon Winner",
    description: "1st Place - AI-powered traffic management system",
    year: "2025"
  },
  {
    title: "Google Cloud Certified",
    description: "Professional Machine Learning Engineer",
    year: "2025"
  },
  {
    title: "Research Publication",
    description: "IEEE Conference on Deep Learning Applications",
    year: "2024"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-16">Multiverse <span className="text-cyan-400">Highlights</span></h2>
      <div className="space-y-4">
         {achievements.map((item, i) => (
           <div key={i} className="group glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <FaTrophy size={20} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                 </div>
              </div>
              <div className="text-sm font-mono text-gray-600">{item.year}</div>
           </div>
         ))}
      </div>
    </section>
  );
}
