export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors dark:border-zinc-800 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-900 dark:text-white">
            Rushikesh Auti
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}