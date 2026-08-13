import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Let’s work together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I’m currently open to internships, entry-level opportunities, and
            freelance projects. Feel free to reach out if you’d like to discuss
            a project, collaboration, or job opportunity.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-950">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              I’d love to hear from you. The fastest way to reach me is through
              email or LinkedIn.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:autirushikesh758@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="mt-1 text-sm text-slate-600 break-all">
                    autirushikesh758@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rushikesh-auti"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                  <FaLinkedin size={20} />
                </div>

                <div>
                  <p className="font-medium text-slate-900">LinkedIn</p>
                  <p className="mt-1 text-sm text-slate-600 break-all">
                    linkedin.com/in/rushikesh-auti
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rushikesh-auti"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                  <FaGithub size={20} />
                </div>

                <div>
                  <p className="font-medium text-slate-900">GitHub</p>
                  <p className="mt-1 text-sm text-slate-600 break-all">
                    github.com/rushikesh-auti
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-950">
              Send a message
            </h3>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
