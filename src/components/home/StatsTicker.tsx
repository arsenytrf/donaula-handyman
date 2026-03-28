export function StatsTicker() {
  const items = [
    "25+ SERVICES",
    "$2M INSURED",
    "24/7 AVAILABLE",
    "BRONX TO CT",
    "ROOFING TO IKEA",
    "COPPER SPECIALIST",
    "SNOW REMOVAL",
    "RENOVATIONS",
    "TRANSPARENT PRICING",
    "REFERENCES AVAILABLE",
  ];

  const repeated = [...items, ...items];

  return (
    <section className="bg-neutral-900 py-4 overflow-hidden border-y border-neutral-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4">
            <span className="text-xs font-heading font-bold tracking-[0.2em] text-neutral-400">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-accent-500 rotate-45 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
