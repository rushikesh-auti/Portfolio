import profileImg from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import resume from "../assets/resume/Rushikesh_Auti_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100vh-4.5rem)] scroll-mt-15 items-center overflow-hidden py-16 sm:py-16 lg:py-16"
    >
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
        {/* Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* Availability badge */}
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-slate-300 sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-pulse rounded-full bg-green-500"
              />
              Open to opportunities
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Hi, I'm
            <br />
            <span className="text-slate-900 dark:text-white">
              Rushikesh Auti
            </span>
          </h1>

          {/* Role */}
          <div className="mt-5">
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 sm:text-xl md:text-2xl">
              Full Stack Developer
            </p>

            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-500 sm:text-base">
              React.js · Node.js · Express.js · MongoDB
            </p>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
            I build{" "}
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              responsive and user-focused web applications
            </strong>{" "}
            with modern technologies. I focus on clean UI, reliable backend
            systems, performance, accessibility, and maintainable code.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              aria-label="View Rushikesh Auti's projects"
              className="btn-primary w-full sm:w-auto"
            >
              View Projects
              <FaArrowDown
                size={13}
                aria-hidden="true"
                className="-rotate-90"
              />
            </a>

            <a
              href={resume}
              download
              aria-label="Download Rushikesh Auti's resume"
              className="btn-secondary w-full sm:w-auto"
            >
              Download Resume
              <FiExternalLink size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Social Links */}
          <div
            className="mt-8 flex justify-center gap-3 lg:justify-start"
            aria-label="Social links"
          >
            <a
              href="https://github.com/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's GitHub profile"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-slate-200
                bg-white text-slate-700
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:bg-slate-950
                hover:text-white
                hover:shadow-md
                dark:border-zinc-700
                dark:bg-zinc-900
                dark:text-slate-300
                dark:hover:bg-white
                dark:hover:text-slate-950
              "
            >
              <FaGithub size={19} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/rushikesh-auti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rushikesh Auti's LinkedIn profile"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-slate-200
                bg-white text-slate-700
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:bg-slate-950
                hover:text-white
                hover:shadow-md
                dark:border-zinc-700
                dark:bg-zinc-900
                dark:text-slate-300
                dark:hover:bg-white
                dark:hover:text-slate-950
              "
            >
              <FaLinkedin size={19} aria-hidden="true" />
            </a>

            <a
              href="mailto:autirushikesh758@gmail.com"
              aria-label="Send an email to Rushikesh Auti"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-slate-200
                bg-white text-slate-700
                transition-all duration-300
                hover:-translate-y-1
                hover:border-slate-300
                hover:bg-slate-950
                hover:text-white
                hover:shadow-md
                dark:border-zinc-700
                dark:bg-zinc-900
                dark:text-slate-300
                dark:hover:bg-white
                dark:hover:text-slate-950
              "
            >
              <FaEnvelope size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0 scale-90
                rounded-full bg-slate-200
                blur-3xl opacity-70
                dark:bg-zinc-800
              "
            />

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="
                absolute -inset-3
                rounded-full
                border border-slate-200
                dark:border-zinc-700
              "
            />

            {/* Image */}
            <div
              className="
                relative overflow-hidden rounded-full
                border-4 border-white
                bg-slate-100
                shadow-2xl
                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <img
                src={profileImg}
                alt="Rushikesh Auti - Full Stack Developer"
                width="420"
                height="420"
                fetchPriority="high"
                decoding="async"
                className="
                  h-60 w-60
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                  sm:h-72 sm:w-72
                  md:h-80 md:w-80
                  lg:h-95 lg:w-95
                  xl:h-105 xl:w-105
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
