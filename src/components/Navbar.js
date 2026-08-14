export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl flex justify-between items-center py-6 px-4 border-b border-slate-800 mb-12">
      <h2 className="text-xl font-bold text-slate-100">Pathmidu</h2>
      <div className="flex gap-6 text-slate-300 font-medium">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
}