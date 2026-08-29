export default function Projects() {
  const projects = [
    {
      title: "Arduino 4WD Obstacle Avoiding Car",
      description: "Robotics system using HC-SR04 ultrasonic sensor & HW-130 driver to autonomously navigate around obstacles.",
      tags: ["Arduino", "C++", "Sensors", "Hardware"],
    },
    {
      title: "Python Utility Scripts",
      description: "Custom scripts and algorithmic tools developed for data processing and quick tasks.",
      tags: ["Python", "Algorithms", "Automation"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-100">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-amber-400 rounded-md border border-amber-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}