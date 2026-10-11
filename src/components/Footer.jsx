export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm muted dark:border-ink-700">
      <div className="container-page flex flex-col items-center justify-between gap-2 sm:flex-row">
        <span>© {new Date().getFullYear()} Nathan Studley</span>
        <span className="font-mono text-xs">Built with Claude Code</span>
      </div>
    </footer>
  );
}
