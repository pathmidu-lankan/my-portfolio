'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl flex justify-between items-center py-4 px-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-lg sticky top-4 z-50"
    >
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('about')}>
        Pathmidu
      </span>
      <div className="flex gap-6 text-sm font-medium text-slate-300">
        <button onClick={() => scrollTo('about')} className="hover:text-cyan-400 transition">
          About
        </button>
        <button onClick={() => scrollTo('skills')} className="hover:text-cyan-400 transition">
          Skills
        </button>
        <button onClick={() => scrollTo('projects')} className="hover:text-cyan-400 transition">
          Projects
        </button>
        <button onClick={() => scrollTo('contact')} className="hover:text-cyan-400 transition">
          Contact
        </button>
      </div>
    </motion.nav>
  );
}