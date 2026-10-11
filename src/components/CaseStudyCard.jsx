import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";

export default function CaseStudyCard({ study }) {
  return (
    <Link to={`/work#${study.slug}`} className="card group flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-violet-400">
      <p className="eyebrow mb-3">{study.kicker}</p>
      <h3 className="h-display mb-3 text-xl">{study.title}</h3>
      <p className="mb-5 flex-1 muted">{study.blurb}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {study.tags.slice(0, 4).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 group-hover:gap-2.5 dark:text-violet-300">
        Read the case study <ArrowIcon />
      </span>
    </Link>
  );
}
