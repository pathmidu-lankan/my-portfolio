'use client';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-slate-800 text-center text-slate-400 text-sm mt-12">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="hover:text-cyan-400 transition"
        >
          Email
        </a>
      </div>
      <p>© {new Date().getFullYear()} Pathmidu Lankan. All rights reserved.</p>
    </footer>
  );
}