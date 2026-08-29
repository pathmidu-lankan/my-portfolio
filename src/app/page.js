import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            Pathmidu Lankan
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          ICT Student &amp; Developer passionate about building clean web applications, python solutions, and robotics.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold rounded-lg transition-colors shadow-lg shadow-teal-500/20"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-lg border border-slate-800 transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}