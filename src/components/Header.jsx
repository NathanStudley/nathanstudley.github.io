import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition ${
      isActive ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "hover:text-violet-600 dark:hover:text-violet-300"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-ink-700 dark:bg-ink-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-amber-500 text-sm text-white">NS</span>
          <span>Nathan Studley</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={navClass}>
              {n.label}
            </NavLink>
          ))}
          <a className="ml-2 p-2 hover:text-violet-600 dark:hover:text-violet-300" href="https://www.linkedin.com/in/nathan-studley/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="p-2 hover:text-violet-600 dark:hover:text-violet-300" href="https://github.com/NathanStudley" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </nav>
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="container-page flex flex-col gap-1 pb-4 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={navClass} onClick={() => setOpen(false)}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
