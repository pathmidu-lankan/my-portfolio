'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Arduino 4WD Obstacle Avoiding Car",
    description: "Built an autonomous robot car using HC-SR04 ultrasonic sensor and HW-130 motor driver to detect and dodge obstacles in real time.",
    tags: ["Arduino", "C++", "Robotics", "Hardware"],
    link: "#",
  },
  {
    title: "Python Utility Scripts",
    description: "Collection of automation tools and backend utility scripts built with Python for optimizing local developer workflows.",
    tags: ["Python", "Automation", "Git"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-16 w-full max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/10 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-700/80 text-cyan-400 font-medium border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}