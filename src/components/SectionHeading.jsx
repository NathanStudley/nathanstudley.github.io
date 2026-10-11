export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="h-display text-3xl sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg muted">{children}</p>}
    </div>
  );
}
