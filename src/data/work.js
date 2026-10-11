import monolithImg from "../assets/images/monolithconcorp.png";
import portfolioImg from "../assets/images/portfolio.png";

// `diagram` names a component exported from src/diagrams/Diagrams.jsx.
export const caseStudies = [
  {
    slug: "agentic-engineering",
    kicker: "AI · Engineering system",
    title: "A multi-agent engineering system on Claude Code",
    blurb:
      "The way I ship production code now: an orchestrated team of Claude Code agents with real guardrails, version-controlled like any other system.",
    problem:
      "AI coding tools make it easy to generate a lot of code and hard to trust any of it. On a team that runs warehouses, an unverified diff is a production incident waiting to happen.",
    approach: [
      "One manager session per working block scopes the work, spawns implementer subagents with one deliverable and a concrete done-when each, and integrates their branches one at a time.",
      "Model per stakes: the strongest model for anything touching write paths, auth or data fidelity; cheaper models for mechanical sweeps.",
      "Parallel agents get separate git worktrees; a hook blocks two sessions from writing the same tree.",
      "A verify gate: the manager reads diffs and test output before calling anything done, because an agent's report is prose and the diff is the record.",
      "The whole setup (CLAUDE.md policy, skills for morning brief, recap, pickup/checkpoint handoffs and CVE triage, hooks, permissions) lives in a dotfiles repo with a monthly config audit that evicts rules that stopped earning their place.",
      "A file-based task board where each task is a markdown file any session can pick up, so dropped sessions lose nothing.",
    ],
    outcome:
      "This is how most of my 2026 Barrett work ships, including the waving engine: parallel agents, one human gate, nothing merged on an agent's say-so.",
    tags: ["Claude Code", "Subagents", "Git worktrees", "Hooks", "Skills", "MCP"],
    diagram: "AgentWorkflowDiagram",
  },
  {
    slug: "jev-lab",
    kicker: "AI · Applied LLM + evaluation",
    title: "LLM judgment in a trading loop, measured honestly",
    blurb:
      "A paper-trading research lab where an LLM (TypeSafe's Jev) answers typed questions about market regime and code owns every risk decision.",
    problem:
      "\"Add AI\" is easy to claim and hard to prove. I wanted to know whether LLM judgments add real signal over plain technical indicators, not just a nice demo.",
    approach: [
      "The LLM answers five typed questions per ticker-day; every answer is cached so experiments are reproducible.",
      "Deterministic code turns judgments into weights, so the model can never size a position.",
      "Every AI strategy has a no-AI twin; results are judged on a 2023+ holdout the design never touched.",
      "A separate ML test checks whether LLM features improve return forecasts over raw indicators.",
      "Eight strategies forward-paper-trade on a daily scheduled job to rule out training-data leakage.",
    ],
    outcome:
      "The honest result: the LLM beat its twin in 8 of 47 pairings, all as a defensive exit signal, never as a ranker, and its features added no predictive value over raw indicators. The lab's value is that it can say \"no\". Next up is LLM judgment over news text, the place a model should actually help.",
    tags: ["Python", "LLM evaluation", "TypeSafe Jev", "Backtesting", "Scheduled jobs"],
    diagram: "JevLabDiagram",
  },
  {
    slug: "waving-engine",
    kicker: "Warehouse systems · Barrett",
    title: "A configurable order-waving engine",
    blurb:
      "Replacing hard-coded, per-customer wave logic with a configurable engine, API and wave-profile dashboard for a 3PL's warehouse floor.",
    problem:
      "\"Waving\" groups orders into batches the floor can pick efficiently. Every customer had its own hand-written rules spread across PL/SQL, so each new rule was a code change and a risk.",
    approach: [
      "A rules engine in the TypeScript services layer, with procedure logic kept in the Oracle WMS where it belongs.",
      "A REST API and a profile dashboard so operations can see and adjust wave profiles instead of filing tickets.",
      "A design-record repo holds the why (decisions, handoffs, binding engine rules) so any session, human or agent, starts from the same context.",
      "Built by the multi-agent workflow above, with authorization and write-path work reserved for the strongest model.",
    ],
    outcome: "In final review. The goal is that customer wave behaviour becomes configuration instead of code, since per-customer config is where most of the team's engineering hours go.",
    tags: ["Claude Code", "TypeScript", "AWS Lambda", "Oracle PL/SQL"],
  },
  {
    slug: "schema-as-code",
    kicker: "Data platform · Barrett",
    title: "Schema-as-code and drift detection for a production WMS",
    blurb: "Liquibase CI/CD, rollbacks and nightly drift detection for the Oracle database the warehouses run on.",
    problem:
      "Production schema objects were edited directly and outside version control, so deploys and rollbacks broke on surprises and nobody could say what changed or when.",
    approach: [
      "Every table, view, procedure, package and trigger change goes through PRs and an automated Liquibase pipeline (UAT then PROD).",
      "The baseline refreshes from execution truth, meaning only what Liquibase actually applied, so it never quietly adopts drift.",
      "Nightly drift detection diffs live PROD against the baseline across nine object types and emails a triage summary only when something moved.",
      "Untracked production objects get captured into source control instead of hand-patched.",
    ],
    outcome: "Out-of-band changes surface the next morning instead of during the next deploy.",
    tags: ["Liquibase Pro", "Oracle", "GitHub Actions", "AWS S3", "CI/CD"],
    diagram: "DriftDetectionDiagram",
  },
  {
    slug: "integrations",
    kicker: "Cloud integration · Barrett",
    title: "Event-driven partner integrations on AWS",
    blurb: "Serverless TypeScript integrations between marketplaces, carriers and the warehouse system, built to fail loudly.",
    problem: "Partner APIs time out, resend, and change shape. Silent failures mean orders that never ship.",
    approach: [
      "API Gateway and Lambda in front, typed and validated payloads, URL-safe identifiers.",
      "SQS with deduplication IDs and bounded retries; exhausted messages land in a dead-letter queue that raises a Datadog alert.",
      "Label and document endpoints (ZPL) hardened against their own callers.",
      "Feed-shape tests pinned against real production samples.",
    ],
    outcome: "Integration failures page a person instead of disappearing.",
    tags: ["TypeScript", "AWS Lambda", "SQS", "API Gateway", "Datadog", "Serverless"],
    diagram: "IntegrationDiagram",
  },
];

export const builds = [
  {
    name: "Monolith Construction",
    description:
      "Site for a commercial concrete and masonry contractor, built and run with Claude Code as pair: UAT and production branches, a one-command photo pipeline, and live design previews the owners pick from.",
    image: monolithImg,
    live: "https://monolithconcorp.com/",
    tags: ["Client work", "Claude Code", "AWS Amplify"],
  },
  {
    name: "This site",
    description: "Rebuilt in one Claude Code session: I set the direction, content and review bar; Claude did most of the typing. Every diagram is specified node by node.",
    image: portfolioImg,
    live: "https://nathanstudley.github.io",
    code: "https://github.com/NathanStudley/nathanstudley.github.io",
    tags: ["Claude Code", "SVG diagrams"],
  },
];
