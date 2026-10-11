import { useEffect, useState } from "react";

const LINES = [
  { t: "manager", c: "text-violet-400", s: "scoped 3 deliverables · spawning implementers" },
  { t: "impl-a ", c: "text-sky-400", s: "wave-profile API          worktree/a   ✓ 42 tests" },
  { t: "impl-b ", c: "text-sky-400", s: "dashboard filters         worktree/b   ✓ 18 tests" },
  { t: "impl-c ", c: "text-zinc-400", s: "lint + comment sweep      sonnet       ✓ done" },
  { t: "verify ", c: "text-amber-300", s: "diffs read · suites re-run · 1 rework sent back" },
  { t: "impl-a ", c: "text-sky-400", s: "rework: null customer ref  ✓ 43 tests" },
  { t: "manager", c: "text-emerald-400", s: "merged into feature branch → PR ready for review" },
];

export default function AgentTerminal() {
  const [shown, setShown] = useState(1);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(LINES.length);
      return undefined;
    }
    const id = setInterval(() => setShown((n) => (n >= LINES.length + 3 ? 1 : n + 1)), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card overflow-hidden border-ink-600 bg-ink-900 text-zinc-200 shadow-2xl shadow-violet-900/20 dark:bg-ink-900" aria-label="Illustration of a multi-agent Claude Code session">
      <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-400">claude · manager session</span>
      </div>
      <div className="min-h-[15.5rem] space-y-1.5 overflow-x-auto p-4 font-mono text-[11.5px] leading-relaxed sm:text-xs">
        {LINES.slice(0, Math.min(shown, LINES.length)).map((l, i) => (
          <div key={i} className="animate-rise whitespace-pre">
            <span className={l.c}>{l.t}</span>
            <span className="text-zinc-500"> │ </span>
            <span>{l.s}</span>
          </div>
        ))}
        {shown < LINES.length && <span className="inline-block h-4 w-2 animate-pulseglow bg-violet-400 align-middle" />}
      </div>
    </div>
  );
}
