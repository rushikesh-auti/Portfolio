import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-slate-50">
      <Header isDark={isDark} onThemeToggle={() => setIsDark((theme) => !theme)} />

      <main className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6 xl:px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
