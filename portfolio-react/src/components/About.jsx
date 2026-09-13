import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-15 bg-slate-50 py-5 sm:py-5 lg:py-5"
    >
      <div className="section-shell">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-title"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Building modern web experiences
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I enjoy creating clean, responsive, and user-friendly web
            applications with a strong focus on performance, accessibility, and
            maintainable code.
          </p>
        </div>

        {/* Cards */}
        <div className="section-content-grid mt-10 grid gap-6 lg:grid-cols-3">
          {/* Overview Card */}
          <article className="surface-card surface-card-hover p-6 sm:p-8">
            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                <UserRound className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Overview
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                I'm{" "}
                <span className="font-semibold text-slate-950">
                  Rushikesh Auti
                </span>
                , a{" "}
                <span className="font-semibold text-slate-950">
                  Full Stack Developer
                </span>{" "}
                with hands-on experience building MERN stack web applications.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                I work with React.js, Node.js, Express.js, and MongoDB to build
                responsive interfaces, RESTful APIs, authentication systems, and
                scalable application features.
              </p>

              {/* Skills */}
              {/* <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                  React.js
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                  Node.js
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                  MongoDB
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                  Express.js
                </span>
              </div> */}

              {/* Career Goal */}
              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">
                  Currently seeking{" "}
                  <span className="font-semibold text-slate-950">
                    internship and entry-level opportunities
                  </span>{" "}
                  to contribute to real-world projects and grow as a software
                  engineer.
                </p>
              </div>
            </div>
          </article>

          {/* Education Card */}
          <article className="surface-card surface-card-hover p-6 sm:p-8">
            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                <GraduationCap className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Education
              </h3>

              <div className="relative mt-8 space-y-8">
                {/* Timeline Line */}
                <div className="absolute left-1.75 top-2 h-[calc(100%-20px)] w-px bg-slate-200" />

                {/* BSc */}
                <div className="relative pl-7">
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-slate-950 shadow-sm" />

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    2022 – 2025
                  </div>

                  <h4 className="mt-2 text-lg font-semibold text-slate-950">
                    B.Sc. Computer Science
                  </h4>

                  <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" />
                    <span>MGP College, Ahilyanagar</span>
                  </div>
                </div>

                {/* MSc */}
                <div className="relative pl-7">
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-slate-950 shadow-sm" />

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    2025 – 2027
                  </div>

                  <h4 className="mt-2 text-lg font-semibold text-slate-950">
                    M.Sc. Computer Science
                  </h4>

                  <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" />

                    <span>
                      PES's Modern College Of Arts, Science & Commerce Pune
                    </span>
                  </div>

                  <span className="mt-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                    Currently Pursuing
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Internship Card */}
          <article className="surface-card surface-card-hover p-6 sm:p-8">
            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Internship Experience
              </h3>

              <div className="mt-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Apr 2026 – May 2026
                </div>

                <h4 className="mt-2 text-lg font-semibold text-slate-950">
                  Web Development Intern
                </h4>

                <p className="mt-2 text-sm font-medium text-slate-600">
                  Oasis Infobyte · Remote
                </p>

                {/* Responsibilities */}
                <div className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-950" />

                    <p className="text-sm leading-6 text-slate-600">
                      Built and refined responsive interfaces using HTML, CSS,
                      and JavaScript.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-950" />

                    <p className="text-sm leading-6 text-slate-600">
                      Developed reusable frontend components with a focus on
                      accessibility and intuitive interactions.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-950" />

                    <p className="text-sm leading-6 text-slate-600">
                      Used Git and GitHub workflows to manage changes and
                      collaborate effectively.
                    </p>
                  </div>
                </div>

                {/* Experience Tags */}
                {/* <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <Code2 className="h-3.5 w-3.5" />
                    Frontend
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <GitBranch className="h-3.5 w-3.5" />
                    Git & GitHub
                  </span>
                </div> */}
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="#projects" className="btn-primary">
            Explore my projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
