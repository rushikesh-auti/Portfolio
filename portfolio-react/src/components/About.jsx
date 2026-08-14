export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Building modern web experiences
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I enjoy creating clean, responsive, and user-friendly web
            applications with a strong focus on performance, accessibility, and
            maintainable code.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <div
            className="
              rounded-3xl border border-slate-200 bg-white p-6 shadow-sm
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-slate-300
              hover:shadow-lg
              sm:p-8
            "
          >
            <h3 className="text-xl font-semibold text-slate-950">Overview</h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              I'm{" "}
              <span className="font-semibold text-slate-900">
                Rushikesh Auti
              </span>
              , a{" "}
              <span className="font-semibold text-slate-900">
                Full Stack Developer
              </span>{" "}
              with hands-on experience building MERN stack web applications.
              Skilled in developing RESTful APIs, implementing authentication
              and authorization, integrating MongoDB databases, and creating
              responsive user interfaces with React.js.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              I am currently seeking{" "}
              <span className="font-semibold text-slate-900">
                internship and entry-level opportunities
              </span>{" "}
              where I can contribute to real-world projects, learn from
              experienced developers, and grow as a professional software
              engineer.
            </p>
          </div>

          <div
            className="
              rounded-3xl border border-slate-200 bg-white p-6 shadow-sm
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-slate-300
              hover:shadow-lg
              sm:p-8
            "
          >
            <h3 className="text-xl font-semibold text-slate-950">Education</h3>

            <div className="mt-8 space-y-8">
              <div className="border-l-2 border-slate-200 pl-5 transition-colors duration-300 hover:border-slate-900">
                <p className="text-sm font-medium text-slate-500">
                  2022 – 2025
                </p>

                <h4 className="mt-1 text-lg font-semibold text-slate-900">
                  B.Sc. Computer Science
                </h4>

                <p className="mt-2 text-slate-600">MGP College, Ahilyanagar</p>
              </div>

              <div className="border-l-2 border-slate-200 pl-5 transition-colors duration-300 hover:border-slate-900">
                <p className="text-sm font-medium text-slate-500">
                  2025 – 2027
                </p>

                <h4 className="mt-1 text-lg font-semibold text-slate-900">
                  M.Sc. Computer Science
                </h4>

                <p className="mt-2 text-slate-600">
                  PES's Modern Arts, Commerce & Science College, Pune
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
