import { useState } from "react";
import { Download, Moon, Sun, Menu, X } from "lucide-react";

import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Header({ isDark, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-zinc-800/80 dark:bg-[#0a0a0a]/90">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex h-18 items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
          aria-label="Rushikesh Auti - Home"
        >
          <span className="text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-slate-700 sm:text-2xl dark:text-white dark:group-hover:text-slate-300">
            Rushikesh Auti
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center md:flex">
          {/* Resume */}
          <a href={resume} download className="btn-primary">
            <Download size={17} />
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onThemeToggle}
            className="ml-2 inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-zinc-700 dark:text-slate-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onThemeToggle}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition-all duration-200 hover:bg-slate-100 dark:border-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-900"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition-all duration-200 hover:bg-slate-100 dark:border-zinc-700 dark:text-slate-200 dark:hover:bg-zinc-900"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden dark:border-zinc-800 dark:bg-[#0a0a0a] ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="section-shell py-4">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href={resume}
              download
              onClick={closeMenu}
              className="btn-primary mt-2 w-full"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
