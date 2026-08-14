import profileImg from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 flex min-h-screen items-start pt-28 pb-10 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="grid w-full items-center gap-14 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative lg:-translate-y-4 xl:-translate-y-6">
            <div className="absolute inset-0 rounded-full bg-slate-200 blur-3xl opacity-60"></div>
            <img
              src={profileImg}
              alt="Rushikesh Auti"
              className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-2xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-85 lg:w-85 xl:h-95 xl:w-95"
            />
          </div>
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]">
            Hi, I'm
            <br />
            <span className="text-slate-900">Rushikesh Auti</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg md:text-xl md:leading-8 lg:mx-0">
            A passionate Full Stack Developer who enjoys building responsive web
            applications with React, Node.js, Express, and MongoDB. I focus on
            clean UI, performance, and maintainable code.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl bg-slate-950 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-md sm:w-auto"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="w-full rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 sm:w-auto"
            >
              Explore Projects
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/rushikesh-auti"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/rushikesh-auti"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-slate-200 p-3 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
