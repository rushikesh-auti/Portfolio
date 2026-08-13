import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "StayFinder",
      description:
        "Full-stack property rental platform with authentication, property management, booking system, Razorpay payments, Cloudinary uploads, favourites, and a responsive UI.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
      github: "https://github.com/rushikesh-auti/StayFinder",
      live: "https://stayfinder-m131.onrender.com/",
    },
    {
      title: "StyleKart",
      description:
        "Fashion e-commerce application featuring dynamic product management, Redux state management, RESTful APIs, and MongoDB integration.",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rushikesh-auti/StyleKart",
      live: "https://stylekart-store.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task management application with CRUD operations, REST APIs, MongoDB integration, and a responsive Tailwind CSS interface.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/rushikesh-auti/Task-Management-Application",
      live: "https://task-management-application-rushi.vercel.app/",
    },
    {
      title: "Calculator",
      description:
        "Responsive calculator application built with React and CSS supporting arithmetic operations with a simple modern interface.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/rushikesh-auti/Calculator",
      live: "https://calculator-react-72.vercel.app/",
    },
    {
      title: "Social Media Interface",
      description:
        "Responsive social media interface built with React where users can view posts, create posts, and interact with content through a clean UI.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/rushikesh-auti/Social-Media-Interface",
      // live: "",
    },
    {
      title: "Web Music Player",
      description:
        "Responsive web music player with audio controls, progress bar, playlist interface, and a clean modern user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rushikesh-auti/Web-Music-Player",
      // live: "",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Featured work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects demonstrating my full-stack development
            skills, problem-solving approach, and experience building real-world
            web applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

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

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  Live Demo
                  <FiExternalLink size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                  GitHub
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
