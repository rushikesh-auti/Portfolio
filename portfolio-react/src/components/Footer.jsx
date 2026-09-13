import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white transition-colors dark:border-zinc-800 dark:bg-[#0a0a0a]">
      <div className="section-shell py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-slate-950 transition-colors hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
            >
              Rushikesh Auti
            </a>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
              Software Developer building thoughtful full-stack web experiences.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
              Available for software development opportunities
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </p>
          </div>

          <div className="flex items-center gap-2 md:justify-end">
            <a
              href="https://github.com/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 dark:border-zinc-800 dark:text-slate-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 dark:border-zinc-800 dark:text-slate-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <FaLinkedin size={18} aria-hidden="true" />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-zinc-800 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear}{" "}
            <span className="font-semibold">Rushikesh Auti</span>. All rights
            reserved.
          </p>

          <p className="inline-flex items-center gap-1.5">
            Built with
            <Heart
              size={13}
              className="fill-current text-slate-700 dark:text-slate-300"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
