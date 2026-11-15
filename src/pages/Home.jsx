import { Link } from "react-router-dom";
import AgentTerminal from "../components/AgentTerminal";
import CaseStudyCard from "../components/CaseStudyCard";
import SectionHeading from "../components/SectionHeading";
import useRotatingText from "../components/useRotatingText";
import { AgentsIcon, ArrowIcon, CloudIcon, DatabaseIcon } from "../components/Icons";
import { caseStudies } from "../data/work";
import { skills } from "../data/profile";

const ROTATING = [
  "event pipelines that page a human when they break",
  "a rules engine that replaces hard-coded logic",
  "drift checks for a production database",
  "a research lab that's allowed to say no",
];

const STATS = [
  { value: "4", label: "layers I work across, from the database to the people using it" },
  { value: "9", label: "schema object types under nightly drift checks" },
  { value: "47", label: "model-vs-baseline pairings tested in my research lab" },
];

const PILLARS = [
  {
    icon: CloudIcon,
    title: "Integration & event architecture",
    body: "Event-driven integrations between SaaS platforms, partner APIs, robots and core databases: typed payloads, queues with deduplication and bounded retries, and clean handoffs between systems.",
  },
  {
    icon: DatabaseIcon,
    title: "Observability that catches failures",
    body: "Alerting, logging and monitoring on the paths that fail silently, plus schema-as-code and drift detection, so a broken integration pages a person instead of quietly losing data.",
  },
  {
    icon: AgentsIcon,
    title: "Automation, shipped carefully",
    body: "Turning manual processes into reliable workflows and new tools. I move fast with modern tooling, but nothing merges without a read diff and passing tests.",
  },
];

const LAYERS = [
  { name: "People & operations", note: "who the solution is actually for", tone: "from-zinc-200 to-zinc-100 dark:from-ink-700 dark:to-ink-800" },
  { name: "Automation & decision logic", note: "rules engines, scheduled jobs, models where they earn it", tone: "from-violet-200 to-fuchsia-100 dark:from-violet-900/70 dark:to-fuchsia-900/40" },
  { name: "APIs & integrations", note: "event-driven AWS, queues, partner and SaaS APIs", tone: "from-sky-200 to-sky-100 dark:from-sky-900/60 dark:to-sky-900/30" },
  { name: "Systems of record", note: "databases, ERP and CRM platforms, schema pipelines", tone: "from-amber-200 to-amber-100 dark:from-amber-900/60 dark:to-amber-900/30" },
];

const RULES = [
  { n: "01", title: "Evidence merges. Claims don't.", body: "A summary of a change is prose. The diff and the test output are the record, and both get read before anything ships." },
  { n: "02", title: "Every clever feature gets a plain twin.", body: "If the simple version wins, the simple version ships. In my research lab the model won 8 of 47 head-to-heads, so that's what I report." },
  { n: "03", title: "Judgment in, decisions in code.", body: "Models and heuristics answer narrow, typed questions. Routing, money and writes to production stay in deterministic code I can test." },
  { n: "04", title: "Context lives in git.", body: "Rules, handoffs and design decisions are versioned files, so anyone picking up the work starts from the same truth." },
];


export default function Home() {
  const rotating = useRotatingText(ROTATING);

  return (
    <>
      {/* Hero */}
      <section className="grid-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0 animate-rise">
            <p className="eyebrow mb-5">Software Engineer</p>
            <h1 className="h-display mb-6 text-[2.5rem] leading-[1.05] sm:text-6xl">
              I connect systems and <span className="text-gradient">automate</span> the work between them.
            </h1>
            <p className="mb-2 text-lg muted">I'm Nate. Right now I'm building</p>
            <p className="mb-8 min-h-[2rem] font-mono text-base sm:text-lg text-violet-600 dark:text-violet-300" aria-live="polite">
              {rotating}
              <span className="ml-0.5 inline-block h-5 w-2 animate-pulseglow bg-current align-middle" />
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/work" className="btn-primary">
                See the work <ArrowIcon />
              </Link>
              <Link to="/resume" className="btn-ghost">Resume</Link>
              <Link to="/contact" className="btn-ghost">Get in touch</Link>
            </div>
          </div>
          <div className="min-w-0 animate-rise [animation-delay:200ms]">
            <AgentTerminal />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 dark:border-ink-700">
        <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="h-display text-3xl sm:text-4xl text-gradient">{s.value}</div>
              <div className="mt-1 text-sm muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="What I do" title="The work that happens between systems.">
            Most of what I build sits in the gaps: the integrations, events, alerts and automation that keep data moving, and that tell a person when it stops.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  <Icon />
                </div>
                <h3 className="h-display mb-2 text-lg">{title}</h3>
                <p className="text-sm muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section bg-zinc-50 dark:bg-ink-900/50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Where I work" title="Useful software is a full stack.">
              Automation is only as good as the APIs it can call and the data it can trust. I work across all four layers, so a good idea ends up in production instead of a slide deck.
            </SectionHeading>
          </div>
          <div className="space-y-3" role="list" aria-label="Layers of a production system">
            {LAYERS.map((l, i) => (
              <div
                key={l.name}
                role="listitem"
                className={`rounded-2xl bg-gradient-to-r ${l.tone} p-5 shadow-sm animate-rise`}
                style={{ animationDelay: `${i * 120}ms`, marginLeft: `${i * 4}%`, marginRight: `${(3 - i) * 4}%` }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="h-display text-lg">{l.name}</span>
                  <span className="font-mono text-xs muted">L{4 - i}</span>
                </div>
                <div className="text-sm muted">{l.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Rules */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How I work" title="Four rules I hold my work to.">
            Speed is easy to come by now. These keep it honest.
          </SectionHeading>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-ink-600 dark:bg-ink-600 sm:grid-cols-2">
            {RULES.map((r) => (
              <div key={r.n} className="bg-white p-6 dark:bg-ink-900">
                <div className="mb-3 font-mono text-sm text-violet-600 dark:text-violet-400">{r.n}</div>
                <h3 className="h-display mb-2 text-lg">{r.title}</h3>
                <p className="text-sm muted">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section bg-zinc-50 dark:bg-ink-900/50">
        <div className="container-page">
          <SectionHeading eyebrow="Selected work" title="Real systems, real constraints.">
            Production work from my day job, plus research I run on my own time.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/work" className="btn-ghost">
              All case studies <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>


      {/* Toolbox */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Toolbox" title="What I reach for." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest muted">{g.group}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 p-8 text-white sm:p-12">
            <h2 className="h-display mb-3 text-3xl sm:text-4xl">Have a process that should run itself?</h2>
            <p className="mb-8 max-w-2xl text-lg text-white/85">
              I'm always up for talking with teams that need software to hold up in the real world, whether that's a role, a project, or comparing notes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn bg-white text-zinc-900 hover:bg-zinc-100">
                Get in touch <ArrowIcon />
              </Link>
              <a href="/Nathan_Studley_Resume.pdf" target="_blank" rel="noreferrer" className="btn border border-white/50 hover:bg-white/10">
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
