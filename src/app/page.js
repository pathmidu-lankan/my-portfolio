import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-[#f3f4f6] flex flex-col items-center p-8">
      <Navbar />
      <div id="about" className="text-center my-12 max-w-2xl">
        <BlurText text="Hi, I'm Pathmidu Lankan" />
        <p className="text-lg text-indigo-400 font-medium mt-4">
          Welcome to my personal portfolio. I am learning Next.js and building modern web applications.
        </p>
      </div>
      <Projects />
      <Contact />
    </main>
  );
}