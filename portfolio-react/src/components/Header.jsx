import { Download, Moon } from 'lucide-react';
import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-semibold text-slate-900">
          Rushikesh Auti
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-base font-medium text-slate-600">
            <li><a href="#home" className="text-slate-900">Home</a></li>
            <li><a href="#about" className="hover:text-slate-900">About</a></li>
            <li><a href="#skills" className="hover:text-slate-900">Skills</a></li>
            <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
            <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
          </ul>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-800"
          >
            <Download size={18} />
            Resume
          </a>

          <button
            className="rounded-xl border border-slate-200 p-3 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle theme"
          >
            <Moon size={20} />
          </button>
        </div>

        <button
          className="rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;