import profileImg from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen scroll-mt-20 items-start pt-28 pb-10 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="grid w-full items-center gap-14 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative lg:-translate-y-4 xl:-translate-y-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-slate-200 blur-3xl opacity-60 dark:bg-zinc-800"
            />

            <img
              src={profileImg}
              alt="Rushikesh Auti - Full Stack Developer"
              width="380"
              height="380"
              fetchPriority="high"
              decoding="async"
              className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-2xl dark:border-zinc-800 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-85 lg:w-85 xl:h-95 xl:w-95"
            />
          </div>
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            id="hero-title"
            className="text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]"
          >
            Hi, I'm
            <br />
            <span className="text-slate-900 dark:text-white">
              Rushikesh Auti
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl md:leading-8 lg:mx-0">
            A passionate{" "}
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              Full Stack Developer
            </strong>{" "}
            who builds responsive and scalable web applications using React,
            Node.js, Express, and MongoDB. I focus on clean UI, performance,
            accessibility, and maintainable code.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Rushikesh Auti's resume"
              className="w-full rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-md dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
            >
              View Resume
            </a>

            <a
              href="#projects"
              aria-label="View Rushikesh Auti's projects"
              className="w-full rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-zinc-700 dark:text-slate-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white sm:w-auto"
            >
              Explore Projects
            </a>
          </div>

          <div
            className="mt-8 flex justify-center gap-4 lg:justify-start"
            aria-label="Social links"
          >
            <a
              href="https://github.com/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's GitHub profile"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm dark:border-zinc-700 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's LinkedIn profile"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm dark:border-zinc-700 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>

            <a
              href="mailto:autirushikesh758@gmail.com"
              aria-label="Send an email to Rushikesh Auti"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm dark:border-zinc-700 dark:text-slate-300 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <FaEnvelope size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}