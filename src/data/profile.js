// Single source of truth for the site and the generated PDF resume (scripts/build-resume-pdf.js).

export const profile = {
  name: "Nathan Studley",
  title: "Software Engineer · AI Solutions",
  location: "Lakeville, MA (remote)",
  email: "nathanstudley@gmail.com",
  site: "nathanstudley.github.io",
  linkedin: "linkedin.com/in/nathan-studley",
  github: "github.com/NathanStudley",
  summary:
    "Software engineer who puts AI agents to work on production systems: multi-agent Claude Code workflows that ship code under real review gates, agents that investigate real operational data, and LLM features measured against no-AI baselines. My day job is the warehouse database, integrations and robotics behind a third-party logistics company, so what I build with AI has to survive real warehouses and real customers.",
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Barrett Distribution Centers",
    orgNote: "Third-party logistics (3PL), warehousing & fulfillment",
    dates: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Grew from full-stack work on the customer portal into a primary engineer on the Oracle warehouse-management database: order waving, cartonization, ship checks, label printing and billing feeds for every client.",
      "Designed and launched robot picking lanes and put-wall automation that connect autonomous mobile robots to the WMS, through vendor testing and client go-lives.",
      "Built AWS serverless integrations: moved accounts-payable automation off a legacy iPaaS onto Lambda, Salesforce billing with queued retries and failure alerts, a returns-platform workflow, and client order and inventory APIs.",
      "Lead AI adoption on the team: built tooling that lets AI agents investigate warehouse data safely, plus shared Claude Code skills for dependency remediation and change control; co-presented at the company's internal AI summit.",
      "Took on database platform work: a production performance audit, Liquibase source control with nightly drift detection, a DB monitoring and automation service, and an org-wide CVE remediation program.",
      "Building a configurable order-waving engine and dashboard with a multi-agent Claude Code workflow where a manager session scopes and verifies, implementer agents work in isolated worktrees, and nothing merges without diff and test review.",
    ],
    stack: ["Claude Code", "Oracle PL/SQL", "TypeScript", "AWS Lambda", "SQS", "Liquibase", "Salesforce", "Datadog"],
  },
  {
    role: "AI & Automation Engineer",
    org: "Independent Practice",
    orgNote: "Small-business systems and applied-AI research",
    dates: "Jan 2025 – Present",
    location: "Lakeville, MA",
    bullets: [
      "Run monolithconcorp.com and the back office behind it for a commercial contractor, rebuilt with Claude Code through the company's shift to commercial work, plus an AI-assisted weekly payroll workflow.",
      "Run a paper-trading research lab that tests LLM judgment against no-AI twins on a holdout period, with eight strategies forward-testing on a daily scheduled job.",
    ],
    stack: ["Claude Code", "Python", "AWS Amplify", "Google Workspace"],
  },
  {
    role: "Web Developer",
    org: "Monolith Construction Corp.",
    orgNote: "Commercial concrete & masonry contractor, Greater Boston",
    dates: "Jan 2024 – Jan 2025",
    location: "Lakeville, MA · Hybrid",
    bullets: [
      "Designed, built and deployed the company website on AWS, and set up Google Workspace as the company's collaboration platform.",
    ],
    stack: ["AWS", "Google Workspace"],
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
  { group: "Where it runs", items: ["Oracle & PL/SQL", "AWS (Lambda, SQS, API Gateway, S3, DynamoDB)", "Liquibase", "Salesforce", "Warehouse robotics", "GitHub Actions", "Datadog"] },
  { group: "Languages", items: ["TypeScript", "Python", "SQL"] },
];
