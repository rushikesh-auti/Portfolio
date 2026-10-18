import { Award, CalendarDays, ExternalLink, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "October 2026",
    url: "https://www.hackerrank.com/certificates/iframe/d52fd1f0b4f9",
  },
  {
    title: "Node.js, Express.js & MongoDB",
    issuer: "KnowledgeGate",
    date: "August 2026",
    url: "https://www.knowledgegate.ai/certificate/09EBCDEA",
  },
  {
    title: "React & Redux",
    issuer: "KnowledgeGate",
    date: "April 2026",
    url: "https://www.knowledgegate.ai/certificate/0528EA59",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="scroll-mt-15 bg-slate-50 py-5 sm:py-5 lg:py-5"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="certifications-title"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Certifications
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Professional certificates recognizing my learning in frontend and
            full-stack web development.
          </p>
        </div>

        <div className="section-content-grid mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={`${certification.issuer}-${certification.title}`}
              className="surface-card surface-card-hover flex min-h-80 flex-col p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                  <Award aria-hidden="true" className="h-7 w-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                  <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                  Certified
                </span>
              </div>

              <div className="mt-7 min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {certification.issuer}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-slate-950">
                  {certification.title}
                </h3>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-500">Issued</span>
                  <span className="flex items-center gap-2 font-semibold text-slate-900">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4 text-slate-500"
                    />
                    {certification.date}
                  </span>
                </div>
                {certification.url && (
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-5 w-full"
                  >
                    View Certificate
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
