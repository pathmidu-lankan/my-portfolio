export default function Projects() {
  const projectList = [
    { title: "Arduino Obstacle Avoiding Car", desc: "Built a 4WD robot car using HC-SR04 ultrasonic sensors and HW-130 motor driver." },
    { title: "Python Utility Scripts", desc: "Developed modular Python scripts focused on logic execution and automated workflows." }
  ];
  return (
    <section id="projects" className="w-full max-w-4xl py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-slate-100 border-b border-slate-800 pb-2">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((p, i) => (
          <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
            <p className="text-slate-400 text-sm font-normal">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
