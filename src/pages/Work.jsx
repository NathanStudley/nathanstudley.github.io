import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import * as Diagrams from "../diagrams/Diagrams";
import { builds, caseStudies } from "../data/work";

function CaseStudy({ study }) {
  const Figure = study.diagram ? Diagrams[study.diagram] : null;
  return (
    <article id={study.slug} className="scroll-mt-24 border-t border-zinc-200 py-14 first:border-t-0 dark:border-ink-700">
      <p className="eyebrow mb-3">{study.kicker}</p>
      <h2 className="h-display mb-4 max-w-3xl text-2xl sm:text-3xl">{study.title}</h2>
      <p className="mb-8 max-w-3xl text-lg muted">{study.blurb}</p>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="mb-2 font-mono text-xs uppercase tracking-widest muted">Problem</h3>
          <p className="mb-6">{study.problem}</p>
          <h3 className="mb-2 font-mono text-xs uppercase tracking-widest muted">Outcome</h3>
          <p className="mb-6">{study.outcome}</p>
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest muted">Approach</h3>
          <ol className="space-y-3">
            {study.approach.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-100 font-mono text-xs text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  {i + 1}
                </span>
                <span className="muted">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {Figure && (
        <div className="mt-10">
          <Figure />
        </div>
      )}
    </article>
  );
}

export default function Work() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
  }, [hash]);

  return (
    <div className="container-page section">
      <SectionHeading eyebrow="Work" title="Case studies">
        Two AI systems I run, and three production systems from my day job at a third-party logistics company. Client specifics and internal numbers are left out on purpose.
      </SectionHeading>
      <nav className="mb-6 flex flex-wrap gap-2" aria-label="Case studies">
        {caseStudies.map((s) => (
          <a key={s.slug} href={`#/work#${s.slug}`} className="chip hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300">
            {s.kicker}
          </a>
        ))}
      </nav>
      {caseStudies.map((s) => (
        <CaseStudy key={s.slug} study={s} />
      ))}

      <section className="border-t border-zinc-200 pt-14 dark:border-ink-700">
        <SectionHeading eyebrow="Builds" title="Sites & side projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((b) => (
            <div key={b.name} className="card flex flex-col overflow-hidden">
              <img src={b.image} alt={`${b.name} screenshot`} className="h-44 w-full object-cover object-top" loading="lazy" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="h-display mb-2 text-lg">{b.name}</h3>
                <p className="mb-4 flex-1 text-sm muted">{b.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {b.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                  {b.live && <a className="link" href={b.live} target="_blank" rel="noreferrer">Live site</a>}
                  {b.code && <a className="link" href={b.code} target="_blank" rel="noreferrer">Code</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
