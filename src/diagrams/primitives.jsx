const TONES = {
  base: { fill: "var(--dg-node)", stroke: "var(--dg-node-stroke)" },
  accent: { fill: "var(--dg-accent-soft)", stroke: "var(--dg-accent)" },
  warm: { fill: "var(--dg-warm-soft)", stroke: "var(--dg-warm)" },
  good: { fill: "var(--dg-good-soft)", stroke: "var(--dg-good)" },
};

export function Node({ x, y, w, h = 56, title, sub, tone = "base", mono = false }) {
  const t = TONES[tone];
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill={t.fill} stroke={t.stroke} strokeWidth="1.5" />
      <text
        x={cx}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        fill="var(--dg-text)"
        fontSize="14"
        fontWeight="600"
        fontFamily={mono ? "JetBrains Mono, monospace" : "Inter, sans-serif"}
      >
        {title}
      </text>
      {sub && (
        <text x={cx} y={y + h / 2 + 15} textAnchor="middle" fill="var(--dg-sub)" fontSize="11.5" fontFamily="Inter, sans-serif">
          {sub}
        </text>
      )}
    </g>
  );
}

export function Edge({ d, animated = true, tone = "edge", label, lx, ly }) {
  const stroke = tone === "accent" ? "var(--dg-accent)" : tone === "warm" ? "var(--dg-warm)" : "var(--dg-edge)";
  return (
    <g>
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.75" className={animated ? "flow-edge" : undefined} markerEnd={`url(#arrow-${tone})`} />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fill="var(--dg-sub)" fontSize="11" fontFamily="JetBrains Mono, monospace">
          {label}
        </text>
      )}
    </g>
  );
}

export function GroupBox({ x, y, w, h, label }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="16" fill="none" stroke="var(--dg-node-stroke)" strokeDasharray="4 5" />
      <text x={x + 14} y={y + 20} fill="var(--dg-sub)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
        {label.toUpperCase()}
      </text>
    </g>
  );
}

export function Diagram({ width, height, title, caption, children }) {
  return (
    <figure className="card overflow-hidden">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title} className="block min-w-[640px] w-full h-auto p-3">
          <title>{title}</title>
          <defs>
            {["edge", "accent", "warm"].map((tone) => (
              <marker key={tone} id={`arrow-${tone}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={tone === "accent" ? "var(--dg-accent)" : tone === "warm" ? "var(--dg-warm)" : "var(--dg-edge)"} />
              </marker>
            ))}
          </defs>
          {children}
        </svg>
      </div>
      {caption && <figcaption className="border-t border-zinc-200 px-5 py-3 text-sm muted dark:border-ink-600">{caption}</figcaption>}
    </figure>
  );
}
