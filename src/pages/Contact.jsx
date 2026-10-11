import SectionHeading from "../components/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";
import { profile } from "../data/profile";

const TOPICS = [
  "AI solutions engineering and applied-AI roles",
  "Turning a manual process into an agent with guardrails",
  "Rolling out Claude Code across an engineering team",
  "LLM features that need an honest evaluation",
];

export default function Contact() {
  return (
    <div className="container-page section">
      <SectionHeading eyebrow="Contact" title="Let's talk.">
        Email is the fastest way to reach me.
      </SectionHeading>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <a href={`mailto:${profile.email}`} className="h-display block break-all text-2xl text-gradient sm:text-3xl">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="mt-3 block text-lg muted hover:text-violet-600">
            {profile.phone}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-ghost" href="https://www.linkedin.com/in/nathan-studley/" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="btn-ghost" href="https://github.com/NathanStudley" target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <div className="card p-8">
          <h2 className="h-display mb-4 text-xl">Good reasons to reach out</h2>
          <ul className="space-y-3">
            {TOPICS.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                <span className="muted">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
