import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BlurText from "@/components/BlurText";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0f19] text-[#f3f4f6] flex flex-col items-center p-8">
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        
        <div id="about" className="text-center my-12 max-w-2xl flex flex-col items-center">
          <BlurText text="Hi, I'm Pathmidu Lankan" />
          <p className="text-lg text-indigo-400 font-medium mt-4 mb-6">
            Welcome to my personal portfolio. I am learning Next.js and building modern web applications.
          </p>
          
          {/* Hero Call-To-Action Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 font-semibold rounded-lg border border-cyan-500/30 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}