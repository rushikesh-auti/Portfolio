import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "StayFinder",
      description:
        "Full-stack property rental platform with user authentication, property management, booking workflows, Razorpay payments, Cloudinary image uploads, favourites, and responsive UI.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
      github: "https://github.com/rushikesh-auti/StayFinder",
      live: "https://stayfinder-m131.onrender.com/",
    },
    {
      title: "StyleKart",
      description:
        "Full-stack fashion e-commerce application with product management, category-based browsing, search, cart and wishlist functionality, Redux state management, REST APIs, and MongoDB integration.",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rushikesh-auti/StyleKart",
      live: "https://stylekart-store.vercel.app/",
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
        "Responsive React-based social media interface where users can view posts, create content, and interact with posts through a clean and responsive UI.",
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
    <section id="projects" className="scroll-mt-15 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Featured Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects demonstrating my experience building
            responsive, full-stack web applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-slate-950">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                  >
                    Live Demo
                    <FiExternalLink size={16} />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                  GitHub
                  <FaGithub size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
