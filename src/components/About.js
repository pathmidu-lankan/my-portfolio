export default function About() {
  const leadershipEvents = [
    {
      role: "ICT Student & Developer",
      organization: "University Academic Projects",
      period: "2024 - Present",
      description:
        "Developing core web applications in Next.js, writing Python utility automation, and working on microcontrollers.",
    },
    {
      role: "Hardware & Robotics Developer",
      organization: "Personal & Academic Lab Projects",
      period: "2025 - Present",
      description:
        "Designed autonomous 4WD robot systems, integrating HC-SR04 ultrasonic sensors, motor drivers, and low-level C++/Arduino code.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto space-y-20">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
          About <span className="text-teal-400">Me</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl">
          Passionate about bridge-building between software design, hardware control systems, and modern web applications.
        </p>
      </div>

      {/* 1. Narrative Bio (Waruna Style Intro) */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed text-base">
          <p>
            I&apos;m <span className="text-slate-100 font-semibold">Pathmidu Lankan</span>, an Information &amp; Communication Technology (ICT) student and software developer. Curiosity drives me to explore everything from full-stack web builds to embedded hardware systems.
          </p>
          <p>
            Whether I&apos;m architecting responsive user interfaces with <span className="text-teal-400">Next.js &amp; Tailwind CSS</span>, writing <span className="text-amber-400">Python scripts</span> for algorithmic tasks, or wiring up microcontrollers for robotics, I aim for clean, maintainable, and effective solutions.
          </p>
        </div>

        {/* Quick Stats Card */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 text-center">
          <div className="text-3xl">🎓</div>
          <h3 className="font-bold text-slate-100">Focus Area</h3>
          <p className="text-xs text-slate-400">ICT Student</p>
          <div className="border-t border-slate-800 pt-3 flex justify-around text-xs font-semibold">
            <span className="text-teal-400">Web Dev</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400">Python</span>
            <span className="text-slate-600">•</span>
            <span className="text-teal-400">Robotics</span>
          </div>
        </div>
      </div>

      {/* 2. Education & Tech Background */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          <span className="text-teal-400">01.</span> Education &amp; Background
        </h3>
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h4 className="text-lg font-semibold text-slate-200">
                Bachelor of Information &amp; Communication Technology (ICT)
              </h4>
              <p className="text-sm text-slate-400">Undergraduate Student</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">
              Present
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Studying fundamental and advanced computer architecture, networking concepts, software development lifecycles, and database systems.
          </p>
        </div>
      </div>

      {/* 3. Leadership & Experience Timeline */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          <span className="text-teal-400">02.</span> Focus &amp; Experience
        </h3>
        <div className="relative border-l border-slate-800 ml-3 space-y-8 pl-6">
          {leadershipEvents.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-teal-400 group-hover:bg-teal-400 transition-colors" />
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h4 className="text-lg font-semibold text-slate-200">
                  {item.role} <span className="text-teal-400">@ {item.organization}</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">{item.period}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Hardware & Specialized Projects Highlight */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          <span className="text-teal-400">03.</span> Hardware &amp; Embedded Systems
        </h3>
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-slate-200">Arduino 4WD Obstacle Avoiding Robot</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designed an autonomous robot car using an HC-SR04 ultrasonic sensor mounted on pin triggers with an HW-130 motor driver to navigate environment obstacles autonomously.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs">Arduino / C++</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs">HC-SR04</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs">HW-130 Driver</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-teal-400 overflow-x-auto">
            <p className="text-slate-500">// Sensor Trigger &amp; Distance Logic</p>
            <p>digitalWrite(trigPin, LOW);</p>
            <p>delayMicroseconds(2);</p>
            <p>digitalWrite(trigPin, HIGH);</p>
            <p className="text-amber-400">duration = pulseIn(echoPin, HIGH);</p>
            <p>distance = duration * 0.034 / 2;</p>
          </div>
        </div>
      </div>
    </section>
  );
}