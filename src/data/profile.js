// Single source of truth for the site and the generated PDF resume (scripts/build-resume-pdf.js).

export const profile = {
  name: "Nathan Studley",
  title: "Software Engineer",
  location: "North Attleboro, MA (remote)",
  email: "nathanstudley@gmail.com",
  site: "nathanstudley.github.io",
  linkedin: "linkedin.com/in/nathan-studley",
  github: "github.com/NathanStudley",
  summary:
    "Software engineer who connects systems and automates the work between them: event-driven AWS integrations, alerting and monitoring that catch silent failures, schema-as-code for production databases, and new internal tools. I move fast with modern tooling and hold the work to a hard bar: reviewed diffs, passing tests, and features that beat a simpler baseline before they ship.",
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Barrett Distribution Centers",
    orgNote: "Logistics & fulfillment",
    dates: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Grew from full-stack work on the customer portal into a primary engineer on the company's core Oracle database and the integrations around it.",
      "Built event-driven AWS serverless integrations: moved accounts-payable automation off a legacy iPaaS onto Lambda, Salesforce billing with queued retries and failure alerts, a returns-platform workflow, and client APIs.",
      "Own observability and platform work: alerting on silent failure paths, a database monitoring and automation service, a production performance audit, Liquibase source control with nightly drift detection, and an org-wide CVE remediation program.",
      "Integrated autonomous mobile robots with core systems for automated picking, through vendor testing and client go-lives.",
      "Lead AI-assisted development on the team: built tooling that lets AI assistants query operational data safely, shared automation for dependency remediation and change control, and co-presented at the company's internal AI summit.",
      "Building a configurable rules engine and dashboard that turns hard-coded, per-customer logic into configuration.",
    ],
    stack: ["Oracle PL/SQL", "TypeScript", "AWS Lambda", "SQS", "Liquibase", "Salesforce", "Datadog"],
  },
  {
    role: "AI & Automation Engineer",
    org: "Independent Practice",
    orgNote: "Small-business systems and applied-AI research",
    dates: "Jan 2025 – Present",
    location: "North Attleboro, MA",
    bullets: [
      "Run monolithconcorp.com and the back office behind it for a commercial contractor, rebuilt through the company's shift to commercial work, plus an automated weekly payroll workflow.",
      "Run a paper-trading research lab that tests LLM judgment against no-AI twins on a holdout period, with eight strategies forward-testing on a daily scheduled job.",
    ],
    stack: ["Python", "React", "AWS Amplify", "Google Workspace"],
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
  { group: "How I work", items: ["AI-assisted development in parallel workflows", "LLM APIs & tool integrations", "Evals against simple baselines", "CI/CD & schema-as-code", "Design records & handoffs in git"] },
  { group: "Where it runs", items: ["AWS (Lambda, SQS, API Gateway, S3, DynamoDB)", "Event-driven architecture", "Datadog alerting & monitoring", "Oracle & PL/SQL", "Liquibase", "Salesforce", "GitHub Actions"] },
  { group: "Languages", items: ["TypeScript", "Python", "SQL"] },
];
