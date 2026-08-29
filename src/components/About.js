export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto space-y-16">
      {/* Intro Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-6">
          About Me
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          I am an <span className="text-teal-400 font-semibold">ICT Student</span> and developer with a strong focus on building practical software solutions—ranging from web applications and Python tools to embedded microcontroller systems and robotics.
        </p>
      </div>

      {/* Grid Layout: Background & Focus Areas */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1: Academic & Focus */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-xl">
            🎓
          </div>
          <h3 className="text-xl font-bold text-slate-100">Education & Technical Direction</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Currently pursuing higher studies in Information and Communication Technology (ICT). I spend my time mastering core computer architecture, algorithmic problems in Python, and modern frontend development using Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Card 2: Robotics & Hardware */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
            🤖
          </div>
          <h3 className="text-xl font-bold text-slate-100">Hardware & Robotics</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Beyond screen-based development, I build physical computing projects with microcontrollers. My hardware builds include autonomous 4WD obstacle-avoiding robot cars using ultrasonic sensors and dual-channel motor drivers.
          </p>
        </div>
      </div>

      {/* Highlights / Quick Stats */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-extrabold text-teal-400">ICT</p>
          <p className="text-xs text-slate-400 mt-1 font-medium">Undergraduate</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-amber-400">Python</p>
          <p className="text-xs text-slate-400 mt-1 font-medium">Core Stack</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-teal-400">Next.js</p>
          <p className="text-xs text-slate-400 mt-1 font-medium">Frontend Framework</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-amber-400">Arduino</p>
          <p className="text-xs text-slate-400 mt-1 font-medium">Embedded Systems</p>
        </div>
      </div>
    </section>
  );
}