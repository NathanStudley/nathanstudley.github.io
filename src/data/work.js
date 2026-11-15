import monolithImg from "../assets/images/monolithconcorp.png";
import portfolioImg from "../assets/images/portfolio.png";

// `diagram` names a component exported from src/diagrams/Diagrams.jsx.
export const caseStudies = [
  {
    slug: "integrations",
    kicker: "Integration · Event architecture",
    title: "Event-driven partner integrations on AWS",
    blurb: "Serverless TypeScript integrations between partner platforms and core systems, built to fail loudly.",
    problem: "Partner APIs time out, resend, and change shape. Silent failures mean lost data nobody notices.",
    approach: [
      "API Gateway and Lambda in front, typed and validated payloads, URL-safe identifiers.",
      "SQS with deduplication IDs and bounded retries; exhausted messages land in a dead-letter queue that raises a Datadog alert.",
      "Document and label endpoints hardened against their own callers.",
      "Feed-shape tests pinned against real production samples.",
    ],
    outcome: "Integration failures page a person instead of disappearing.",
    tags: ["TypeScript", "AWS Lambda", "SQS", "API Gateway", "Datadog", "Serverless"],
    diagram: "IntegrationDiagram",
  },
  {
    slug: "schema-as-code",
    kicker: "Data platform · Observability",
    title: "Schema-as-code and drift detection for a production database",
    blurb: "Liquibase CI/CD, rollbacks and nightly drift detection for the Oracle database a business runs on.",
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
    slug: "rules-engine",
    kicker: "Automation · Rules engine",
    title: "A configurable rules engine to replace hard-coded logic",
    blurb:
      "Replacing hard-coded, per-customer business rules with a configurable engine, API and dashboard that operations can adjust themselves.",
    problem:
      "Order-batching rules were hand-written per customer and spread across database procedures, so every new rule was a code change and a risk.",
    approach: [
      "A rules engine in the TypeScript services layer, with procedure logic kept in the database where it belongs.",
      "A REST API and a profile dashboard so operations can see and adjust rule profiles instead of filing tickets.",
      "A design-record repo holds the why (decisions, handoffs, binding engine rules) so anyone picking up the work starts from the same context.",
      "Built with the parallel workflow described below, with authorization and write-path changes held to the strictest review.",
    ],
    outcome: "In final review and not yet in production. The goal is that each new customer's behaviour becomes configuration instead of another code change.",
    tags: ["TypeScript", "AWS Lambda", "Oracle PL/SQL", "REST API"],
  },
  {
    slug: "dev-workflow",
    kicker: "Engineering practice",
    title: "A parallel development workflow with a hard review gate",
    blurb:
      "How I ship production code: work split into parallel branches, modern tooling for the typing, and a verification step that trusts evidence over summaries.",
    problem:
      "Modern tools make it easy to produce a lot of code and hard to trust any of it. On production systems, an unverified diff is an incident waiting to happen.",
    approach: [
      "One lead session per working block scopes the work and splits it into deliverables, each with a concrete done-when.",
      "Parallel work happens in separate git worktrees, with a guard that blocks two sessions from writing the same tree.",
      "Effort matches stakes: the most careful review goes to write paths, auth and data fidelity, and lighter passes to mechanical sweeps.",
      "A verify gate: diffs and test output get read before anything is called done, because a summary is prose and the diff is the record.",
      "The setup (policies, reusable task scripts, handoff notes, permissions) lives in a versioned dotfiles repo with a monthly audit that drops rules that stopped earning their place.",
      "A file-based task board where each task is a markdown file, so a dropped session loses nothing.",
    ],
    outcome:
      "This is how most of my day-job work ships now, including the rules engine: parallel branches, one review gate, nothing merged on a summary's say-so.",
    tags: ["Git worktrees", "CI", "Code review", "Automation", "Dotfiles"],
    diagram: "AgentWorkflowDiagram",
  },
  {
    slug: "jev-lab",
    kicker: "Research · Evaluation",
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
];

export const builds = [
  {
    name: "Monolith Construction",
    description:
      "Site for a commercial concrete and masonry contractor: UAT and production branches, a one-command photo pipeline, and live design previews the owners pick from.",
    image: monolithImg,
    live: "https://monolithconcorp.com/",
    tags: ["Client work", "React", "AWS Amplify"],
  },
  {
    name: "This site",
    description: "Designed and built with React, Vite and Tailwind. I owned the positioning, content and information design, and every diagram is hand-specified SVG.",
    image: portfolioImg,
    live: "https://nathanstudley.github.io",
    code: "https://github.com/NathanStudley/nathanstudley.github.io",
    tags: ["React", "Tailwind", "SVG diagrams"],
  },
];
