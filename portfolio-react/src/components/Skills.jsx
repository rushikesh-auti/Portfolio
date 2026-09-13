import {
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
  FaRocket,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { BsOpenai } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiCursor,
  SiClaude,
  SiGooglegemini,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      description: "Languages I use to build application logic.",
      icon: FaCode,
      skills: [
        { name: "C", icon: FaCode },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: FaGlobe,
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "React.js", icon: FaReact },
        { name: "Redux Toolkit", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "Backend Development",
      description: "Developing APIs and server-side applications.",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: FaServer },
      ],
    },
    {
      title: "Database Management",
      description: "Working with relational and NoSQL databases.",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Tools I use for development and deployment.",
      icon: FaTools,
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: VscVscode },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
        { name: "AWS", icon: FaAws },
      ],
    },
    {
      title: "AI & Productivity",
      description: "AI-powered tools for development and productivity.",
      icon: FaRocket,
      skills: [
        { name: "ChatGPT", icon: BsOpenai },
        { name: "Claude AI", icon: SiClaude },
        { name: "Gemini AI", icon: SiGooglegemini },
        { name: "Cursor", icon: SiCursor },
        { name: "Antigravity", icon: FaRocket },
      ],
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-15 bg-slate-50 py-5 sm:py-5 lg:py-5"
    >
      <div className="section-shell">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="skills-title"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Technical Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Hands-on experience across modern web technologies with a focus on
            building scalable, responsive, and maintainable applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="section-content-grid mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <article
                key={group.title}
                className="
                  surface-card surface-card-hover relative overflow-hidden p-6
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

                {/* Background Decoration */}
                <div
                  className="
                    absolute -right-14 -top-14
                    h-28 w-28 rounded-full
                    bg-slate-50
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                />

                <div className="relative">
                  {/* Card Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-2xl bg-slate-950
                        text-white shadow-sm
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <GroupIcon size={21} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-6 text-slate-950">
                        {group.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-5 text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-slate-100" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <span
                          key={skill.name}
                          className="
                            inline-flex items-center gap-2
                            rounded-xl
                            border border-slate-200
                            bg-slate-50
                            px-3 py-2
                            text-sm font-medium
                            text-slate-700
                            transition-all duration-200
                            hover:-translate-y-0.5
                            hover:border-slate-300
                            hover:bg-white
                            hover:text-slate-950
                            hover:shadow-sm
                          "
                        >
                          <SkillIcon
                            size={15}
                            className="shrink-0 text-slate-700"
                          />

                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Technology Summary */}
        <div
          className="
            mt-8 rounded-3xl border border-slate-200
            bg-slate-50 p-6 dark:bg-slate-900
            sm:p-8
          "
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Full Stack Toolkit
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                From frontend interfaces to backend APIs
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                I combine modern frontend technologies, backend development,
                databases, developer tools, and AI-assisted workflows to build
                complete web applications.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200">
                MERN
              </span>

              <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
