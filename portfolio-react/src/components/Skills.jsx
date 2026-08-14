import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "C Programming", icon: TbBrandCSharp },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST APIs", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Mongoose", icon: SiMongoose },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I have hands-on experience with the technologies and tools listed
            below.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    group flex items-center gap-3 rounded-xl border
                    border-slate-200 bg-slate-50 px-3 py-2.5
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:border-slate-300
                    hover:bg-white hover:shadow-sm
                  "
                >
                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-lg bg-white text-slate-700 shadow-sm
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
