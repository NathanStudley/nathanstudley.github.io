import { Link } from "react-router-dom";
import AgentTerminal from "../components/AgentTerminal";
import CaseStudyCard from "../components/CaseStudyCard";
import SectionHeading from "../components/SectionHeading";
import useRotatingText from "../components/useRotatingText";
import { AgentsIcon, ArrowIcon, BrainIcon, CloudIcon } from "../components/Icons";
import { AgentWorkflowDiagram } from "../diagrams/Diagrams";
import { caseStudies } from "../data/work";
import { skills } from "../data/profile";

const ROTATING = [
  "a waving engine for a warehouse floor",
  "an LLM trading lab that's allowed to say no",
  "integrations that page a human when they break",
  "guardrails for a team of Claude Code agents",
];

const STATS = [
  { value: "4", label: "layers I own, from warehouse database to agent" },
  { value: "47", label: "AI-vs-no-AI strategy pairings tested" },
  { value: "8", label: "LLM strategies forward-testing every trading day" },
  { value: "1", label: "human gate before anything merges" },
];

const PILLARS = [
  {
    icon: AgentsIcon,
    title: "Agentic engineering",
    body: "Claude Code run as a team: a manager session, implementer subagents in separate worktrees, skills and hooks that encode the house rules, and a verify step before anything reaches review.",
  },
  {
    icon: BrainIcon,
    title: "LLM features that earn it",
    body: "An LLM answers narrow, typed questions; code owns the decisions. Every AI feature runs against a no-AI twin, and if the twin wins, the twin ships.",
  },
  {
    icon: CloudIcon,
    title: "The systems AI has to touch",
    body: "Queues, partner APIs, label printers, a production Oracle WMS. An agent's answer is worth nothing until it lands safely in one of these, so I own them too.",
  },
];

const LAYERS = [
  { name: "People & operations", note: "who the solution is actually for", tone: "from-zinc-200 to-zinc-100 dark:from-ink-700 dark:to-ink-800" },
  { name: "AI agents & LLM judgment", note: "Claude, MCP tools, typed decisions, evals", tone: "from-violet-200 to-fuchsia-100 dark:from-violet-900/70 dark:to-fuchsia-900/40" },
  { name: "APIs & integrations", note: "AWS serverless, queues, partner APIs", tone: "from-sky-200 to-sky-100 dark:from-sky-900/60 dark:to-sky-900/30" },
  { name: "Systems of record", note: "WMS, Oracle, schema pipelines", tone: "from-amber-200 to-amber-100 dark:from-amber-900/60 dark:to-amber-900/30" },
];

const RULES = [
  { n: "01", title: "Agents don't merge. Evidence does.", body: "An agent's report is prose. The diff and the test output are the record, and a person reads both before anything ships." },
  { n: "02", title: "Every AI feature gets a no-AI twin.", body: "If the plain version wins, the plain version ships. In my trading lab the LLM won 8 of 47 head-to-heads, so that's what I report." },
  { n: "03", title: "The model answers; code decides.", body: "LLMs get narrow, typed questions. Sizing, routing, money and writes to production stay in deterministic code I can test." },
  { n: "04", title: "Context lives in git, not in a chat.", body: "House rules, handoffs and design decisions are versioned files, so any session, human or agent, starts from the same truth." },
];

const CLAUDE_REASONS = [
  { title: "It holds a long task together", body: "Multi-hour, multi-repo sessions where Claude keeps the plan, the constraints and the verification straight. That's what makes orchestration possible at all." },
  { title: "It follows the house rules", body: "A CLAUDE.md, skills and hooks turn my team's standards into behaviour. Claude actually reads and respects them, so the guardrails hold." },
  { title: "It tells me when I'm wrong", body: "The most valuable thing a pair can do is push back. Claude flags weak options and risky steps instead of agreeing to be agreeable." },
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
            <p className="eyebrow mb-5">Software Engineer · AI Solutions</p>
            <h1 className="h-display mb-6 text-[2.5rem] leading-[1.05] sm:text-6xl">
              I run a team of <span className="text-gradient">AI agents</span> on production systems. Then I check their work.
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
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
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
          <SectionHeading eyebrow="What I do" title="Engineer by trade. Coding with AI is how I work now.">
            Most AI projects stall between the demo and the system of record. I work the whole distance, so an agent's output ends up as a shipped order, a merged PR or a decision someone can check.
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
            <SectionHeading eyebrow="Where AI fits" title="An AI solution is a full stack, not a prompt.">
              Agents are only as useful as the APIs they can call and the data they can trust. I build and own all four layers, which is why the AI work lands in production instead of in a slide deck.
            </SectionHeading>
          </div>
          <div className="space-y-3" role="list" aria-label="Layers of an AI solution">
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

      {/* Workflow */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How I build with AI" title="An orchestrated team of agents, with one human gate.">
            Not "AI wrote my code." A system: a manager session that scopes and verifies, implementer agents in isolated worktrees, the right model for each job, and nothing merged on an agent's say-so.
          </SectionHeading>
          <AgentWorkflowDiagram />
        </div>
      </section>

      {/* Rules */}
      <section className="section pt-0">
        <div className="container-page">
          <SectionHeading eyebrow="House rules" title="How I keep AI work honest.">
            There's a lot of noise about AI right now. These are the four rules I hold my own work to.
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
            Production work for a third-party logistics company, plus AI research I run on my own time.
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

      {/* Built with Claude */}
      <section className="section">
        <div className="container-page">
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            <p className="eyebrow mb-3">Built with Claude</p>
            <h2 className="h-display mb-4 max-w-3xl text-3xl sm:text-4xl">Claude Code is my daily driver, and the reason one engineer can cover this much ground.</h2>
            <p className="mb-10 max-w-3xl text-lg muted">
              I build on Anthropic's Claude (Opus for orchestration and anything that touches production data, smaller models for mechanical work) because it's the one I trust to run real work under real rules. This site was rebuilt with it too.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {CLAUDE_REASONS.map((r) => (
                <div key={r.title}>
                  <h3 className="h-display mb-2 text-lg">{r.title}</h3>
                  <p className="text-sm muted">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolbox */}
      <section className="section pt-0">
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
            <h2 className="h-display mb-3 text-3xl sm:text-4xl">Got a process that should be an agent?</h2>
            <p className="mb-8 max-w-2xl text-lg text-white/85">
              I'm always up for talking with teams working out where AI actually pays off, whether that's a role, a project, or comparing notes on agentic workflows.
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
