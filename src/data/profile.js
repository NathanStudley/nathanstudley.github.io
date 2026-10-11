// Single source of truth for the site and the generated PDF resume (scripts/build-resume-pdf.js).

export const profile = {
  name: "Nathan Studley",
  title: "Software Engineer · AI Solutions",
  location: "Lakeville, MA (remote)",
  email: "nathanstudley@gmail.com",
  phone: "508-232-5346",
  site: "nathanstudley.github.io",
  linkedin: "linkedin.com/in/nathan-studley",
  github: "github.com/NathanStudley",
  summary:
    "Software engineer who puts AI agents to work on production systems: multi-agent Claude Code workflows that ship production code under real review gates, LLM features measured against no-AI baselines, and the AWS, integration and Oracle data layers underneath. My day job is the production systems of a third-party logistics company, so what I build with AI has to survive real warehouses and real customers.",
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Barrett Distribution Centers",
    orgNote: "Third-party logistics (3PL), warehousing & fulfillment",
    dates: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Ship weekly across four production systems (Oracle WMS layer, TypeScript/AWS serverless portal API, partner integrations, ops automation); 3,000+ commits merged since joining.",
      "Building a configurable order-waving engine, API and dashboard (in final review) with a multi-agent Claude Code workflow: a manager session scopes and verifies, implementer agents work in isolated git worktrees, nothing merges without diff and test review.",
      "Own schema-as-code for the production WMS: Liquibase CI/CD, automated rollbacks, and nightly drift detection that diffs live PROD against a tracked baseline across nine object types.",
      "Ship per-customer warehouse logic in PL/SQL (wave routing, carton sortation, SSCC/ZPL labels, inventory views) and brought untracked production objects under source control.",
      "Built event-driven AWS integrations (Lambda, SQS with deduplication, retries and dead-letter alerting) and hardened label endpoints that carriers and marketplaces call directly.",
      "Run dependency/CVE hygiene and observability for the org (Dependabot strategy, audit workflows, Datadog alerts on silent failure paths); highest merged-PR and code-review volume on a ~19-engineer team (Aug 2026).",
    ],
    stack: ["Claude Code", "TypeScript", "AWS Lambda", "SQS", "Oracle PL/SQL", "Liquibase", "GitHub Actions", "Datadog"],
  },
  {
    role: "Freelance Software Developer",
    org: "Monolith Construction Corp.",
    orgNote: "Commercial concrete & masonry contractor, Greater Boston",
    dates: "Jan 2024 – Present",
    location: "Lakeville, MA · Hybrid",
    bullets: [
      "Built and run monolithconcorp.com, pair-built with Claude Code, through the company's shift to commercial work: UAT and production on AWS Amplify, a one-command image pipeline, owner-facing design previews.",
      "Run the company's Google Workspace and automate back-office work, including an AI-assisted weekly payroll workflow (time export → overtime split → approval email).",
    ],
    stack: ["Claude Code", "AWS Amplify", "Google Workspace"],
  },
  {
    role: "AI Trainer (Contract)",
    org: "DataAnnotation",
    dates: "Jun 2024 – Jan 2025",
    location: "Remote",
    bullets: [
      "Evaluated and debugged frontier-LLM answers to coding prompts and wrote reference prompts and solutions in Python, TypeScript, SQL and C# used to train models.",
    ],
    stack: ["LLM evaluation", "RLHF data", "Python", "TypeScript", "SQL"],
  },
  {
    role: "Teaching Assistant",
    org: "Embry-Riddle Aeronautical University",
    dates: "Jan 2022 – May 2022",
    location: "Daytona Beach, FL",
    bullets: [],
    stack: [],
  },
];

export const education = {
  school: "University of Massachusetts Amherst",
  degree: "B.S. Computer Science",
  date: "Jan 2024",
  detail: "GPA 3.73 · Dean's List · Coursework: AI, Algorithms, Data Management, Secure Distributed Systems, Web Programming",
};

export const certifications = [{ name: "AWS Certified Cloud Practitioner", date: "Apr 2024" }];

export const skills = [
  { group: "How I work", items: ["Claude Code: multi-agent orchestration, subagents, skills, hooks", "Claude API & Agent SDK", "MCP tool integrations", "Evals against no-AI baselines", "Context engineering (CLAUDE.md, handoffs, design records)"] },
  { group: "Where it runs", items: ["AWS (Lambda, SQS, API Gateway, S3)", "Oracle & PL/SQL", "Liquibase", "GitHub Actions", "Datadog"] },
  { group: "Languages", items: ["TypeScript", "Python", "SQL"] },
];
