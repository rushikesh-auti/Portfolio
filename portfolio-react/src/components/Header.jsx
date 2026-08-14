import { useState } from "react";
import { Download, Moon, Menu, X } from "lucide-react";
import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-2xl font-bold text-slate-900">
          Rushikesh Auti
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-slate-600 transition-colors hover:text-slate-900">
            Home
          </a>
          <a href="#about" className="text-slate-600 transition-colors hover:text-slate-900">
            About
          </a>
          <a href="#skills" className="text-slate-600 transition-colors hover:text-slate-900">
            Skills
          </a>
          <a href="#projects" className="text-slate-600 transition-colors hover:text-slate-900">
            Projects
          </a>
          <a href="#contact" className="text-slate-600 transition-colors hover:text-slate-900">
            Contact
          </a>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Download size={18} />
            Resume
          </a>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle dark mode"
          >
            <Moon size={20} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-sm">
          <div className="flex flex-col gap-2">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
            >
              Contact
            </a>

            <a
              href={resume}
              download
              className="mt-2 rounded-lg bg-slate-950 px-4 py-3 text-center font-semibold text-white hover:bg-slate-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
