export default function Skills() {
  const skills = [
    { name: "Python", category: "Languages", level: "Advanced" },
    { name: "C++", category: "Languages", level: "Intermediate" },
    { name: "Next.js", category: "Web Dev", level: "Intermediate" },
    { name: "React", category: "Web Dev", level: "Intermediate" },
    { name: "Tailwind CSS", category: "Styling", level: "Intermediate" },
    { name: "Arduino", category: "Robotics", level: "Hardware" },
    { name: "Git & GitHub", category: "Tools", level: "Workflow" },
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-100">
        Tech Stack &amp; Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all group"
          >
            <div className="w-8 h-1 bg-teal-500 rounded-full mb-3 group-hover:w-12 transition-all" />
            <h3 className="font-semibold text-slate-100 text-lg">{skill.name}</h3>
            <p className="text-xs text-slate-400 mt-1">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}