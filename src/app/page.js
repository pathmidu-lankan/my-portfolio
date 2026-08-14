import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-8 font-sans">
      <Navbar />
      <div id="about" className="text-center my-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Hi, I'm Pathmidu Lankan</h1>
        <p className="text-lg text-slate-400 font-normal">Welcome to my personal portfolio. I am learning Next.js and building modern web applications.</p>
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
