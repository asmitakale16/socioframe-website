import { motion } from "framer-motion";

type Tech = { name: string; color: string; svg: React.ReactNode };

const TECHS: Tech[] = [
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <circle cx="12" cy="12" r="2.05" />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Go",
    color: "#00ADD8",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <text x="2" y="17" fontSize="11" fontWeight="700" fontFamily="monospace">GO</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="2" fillOpacity="0.15" />
        <text x="4" y="17" fontSize="10" fontWeight="700" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    color: "#E5008C",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M5 3h14v6h-7l7 7v7h-7L5 16V9l7-3H5z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 6c-2.7 0-4.4 1.35-5 4 .9-1.2 2-1.65 3.3-1.35.74.18 1.27.7 1.85 1.29C13.1 10.92 14.2 12 16.5 12c2.7 0 4.4-1.35 5-4-.9 1.2-2 1.65-3.3 1.35-.74-.18-1.27-.7-1.85-1.29C15.4 7.08 14.3 6 12 6zM7.5 12c-2.7 0-4.4 1.35-5 4 .9-1.2 2-1.65 3.3-1.35.74.18 1.27.7 1.85 1.29C8.6 16.92 9.7 18 12 18c2.7 0 4.4-1.35 5-4-.9 1.2-2 1.65-3.3 1.35-.74-.18-1.27-.7-1.85-1.29C10.9 13.08 9.8 12 7.5 12z" />
      </svg>
    ),
  },
];

export function StackMarquee() {
  const loop = [...TECHS, ...TECHS, ...TECHS];
  return (
    <section
      aria-label="Technology stack"
      className="relative overflow-hidden border-y border-border/60 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Built with
        </p>
      </div>
      <motion.div
        className="flex w-max items-center gap-12"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="group flex shrink-0 items-center gap-2.5 text-muted-foreground transition-colors duration-300"
            style={{ ["--brand" as string]: t.color }}
          >
            <span className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:[color:var(--brand)]">
              {t.svg}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest transition-colors duration-300 group-hover:[color:var(--brand)]">
              {t.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
