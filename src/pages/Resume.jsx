import SectionHeading from "../components/SectionHeading";
import { certifications, education, experience, profile, skills } from "../data/profile";

export default function Resume() {
  return (
    <div className="container-page section">
      <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <SectionHeading eyebrow="Resume" title={profile.name}>
          {profile.summary}
        </SectionHeading>
        <a href="/Nathan_Studley_Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary mb-10 shrink-0 self-start md:self-auto">
          Download PDF
        </a>
      </div>

      <h2 className="eyebrow mb-6">Experience</h2>
      <ol className="relative mb-16 border-l-2 border-violet-200 dark:border-violet-900">
        {experience.map((job) => (
          <li key={job.org + job.role} className="mb-12 ml-6 last:mb-0">
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-violet-500 bg-white dark:bg-ink-950" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="h-display text-xl">
                {job.role} <span className="muted">· {job.org}</span>
              </h3>
              <span className="shrink-0 font-mono text-xs muted">{job.dates}</span>
            </div>
            <p className="mb-3 text-sm muted">{[job.orgNote, job.location].filter(Boolean).join(" · ")}</p>
            <ul className="mb-3 list-disc space-y-1.5 pl-5 marker:text-violet-500">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {job.stack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="eyebrow mb-4">Skills</h2>
          <div className="space-y-4">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="mb-2 text-sm font-semibold">{g.group}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Education</h2>
          <div className="card mb-8 p-5">
            <div className="flex justify-between gap-4">
              <h3 className="h-display text-lg">{education.school}</h3>
              <span className="shrink-0 font-mono text-xs muted">{education.date}</span>
            </div>
            <p className="font-medium">{education.degree}</p>
            <p className="mt-1 text-sm muted">{education.detail}</p>
          </div>
          <h2 className="eyebrow mb-4">Certifications</h2>
          {certifications.map((c) => (
            <div key={c.name} className="card flex justify-between gap-4 p-5">
              <span className="font-medium">{c.name}</span>
              <span className="shrink-0 font-mono text-xs muted">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
