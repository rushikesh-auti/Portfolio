import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "StyleKart",
      description:
        "Full-stack fashion e-commerce application with product management, category-based browsing, search, cart and wishlist functionality, Redux state management, REST APIs, and MongoDB integration.",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rushikesh-auti/StyleKart",
      live: "https://stylekart-store.vercel.app/",
    },
    {
      title: "StayFinder",
      description:
        "Full-stack property rental platform with user authentication, property management, booking workflows, Razorpay payments, Cloudinary image uploads, favourites, and responsive UI.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
      github: "https://github.com/rushikesh-auti/StayFinder",
      live: "https://stayfinder-m131.onrender.com/",
    },
    {
      title: "AI Prompt Library",
      description:
        "React and TypeScript application for creating and organizing reusable AI prompts with CRUD operations, favourites, pinning, categories, filtering, search, and drag-and-drop reordering.",
      tech: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Hook Form",
        "dnd-kit",
      ],
      github: "https://github.com/rushikesh-auti/ai-prompt-library",
      live: "https://my-ai-prompt-library.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task management application supporting task creation, updates, deletion, completion tracking, RESTful APIs, MongoDB persistence, and a responsive Tailwind CSS interface.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/rushikesh-auti/Task-Management-Application",
      live: "https://task-management-application-rushi.vercel.app/",
    },
    {
      title: "Social Media Interface",
      description:
        "Responsive React-based social media interface where users can view posts, create content, and interact with posts through a clean and responsive user interface.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/rushikesh-auti/Social-Media-Interface",
      live: "https://github.com/rushikesh-auti/Social-Media-Interface",
    },
    {
      title: "Calculator",
      description:
        "Responsive calculator application built with React and JavaScript supporting basic arithmetic operations through a simple and user-friendly interface.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/rushikesh-auti/Calculator",
      live: "https://calculator-react-72.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-15 bg-slate-50 py-5 sm:py-5 lg:py-5"
    >
      <div className="section-shell">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="projects-title"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl "
          >
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects demonstrating my experience building
            responsive, full-stack web applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="section-content-grid mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                surface-card surface-card-hover group relative flex h-full flex-col overflow-hidden p-6
                sm:p-7
              "
            >
              {/* Top Accent */}
              <div
                className="
                  absolute left-0 top-0 h-1 w-0
                  bg-slate-950
                  transition-all duration-300
                  group-hover:w-full
                "
              />

              {/* Project Title */}
              <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        project-tech
                        rounded-lg border border-slate-200
                        bg-slate-50 px-3 py-1.5
                        text-xs font-medium text-slate-700
                        transition-all duration-200
                        hover:border-slate-300
                        hover:bg-white
                        hover:shadow-sm
                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:hover:border-slate-600
                        dark:hover:bg-slate-700
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-7 flex gap-3 border-t border-slate-100 pt-5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="
                      project-live
                      inline-flex flex-1 items-center
                      justify-center gap-2
                      rounded-xl bg-slate-950 dark:bg-slate-800
                      px-4 py-2.5
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:bg-slate-800 dark:hover:bg-slate-700
                      hover:shadow-md
                    "
                  >
                    Live Demo
                    <FiExternalLink size={15} aria-hidden="true" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="
                    project-github
                    inline-flex flex-1 items-center
                    justify-center gap-2
                    rounded-xl border border-slate-300
                    bg-white px-4 py-2.5
                    text-sm font-semibold text-slate-700
                    dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200
                    transition-all duration-300
                    hover:border-slate-400
                    hover:bg-slate-50
                    hover:text-slate-950
                    dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:hover:text-white
                  "
                >
                  GitHub
                  <FaGithub size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/rushikesh-auti?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View all projects
            <FaGithub size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
