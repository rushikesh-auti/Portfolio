import {
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "C Programming", icon: FaCode },
        { name: "JavaScript", icon: FaJs },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: FaGlobe,
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend Technologies",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: FaServer },
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: VscVscode },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: FaCloud,
      skills: [
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Hands-on experience across modern web technologies with a focus on
            building scalable, responsive, and maintainable applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <GroupIcon size={18} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-white"
                      >
                        <SkillIcon size={14} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
