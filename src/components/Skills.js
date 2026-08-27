'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', category: 'Languages', color: 'from-blue-500 to-yellow-500' },
  { name: 'C++', category: 'Languages', color: 'from-blue-600 to-cyan-500' },
  { name: 'Next.js', category: 'Web Dev', color: 'from-slate-200 to-slate-400' },
  { name: 'React', category: 'Web Dev', color: 'from-cyan-400 to-blue-500' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'from-teal-400 to-cyan-500' },
  { name: 'Arduino', category: 'Hardware', color: 'from-teal-500 to-emerald-400' },
  { name: 'Git & GitHub', category: 'Tools', color: 'from-orange-500 to-red-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="my-16 w-full max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Tech Stack & Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-4 text-center shadow-lg transition"
          >
            <div className={`h-1 w-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${skill.color}`} />
            <h3 className="text-lg font-bold text-slate-100">{skill.name}</h3>
            <span className="text-xs text-slate-400 font-medium">{skill.category}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}