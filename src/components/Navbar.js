import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-100 hover:text-teal-400 transition-colors">
          Pathmidu<span className="text-teal-400">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link href="#about" className="hover:text-teal-400 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-teal-400 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-teal-400 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-teal-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}