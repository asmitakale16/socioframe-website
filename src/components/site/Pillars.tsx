import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Target, Pencil, Code2, TrendingUp, type LucideIcon } from "lucide-react";
import { RevealHeading } from "./motion/RevealHeading";

const STEPS: { num: string; title: string; desc: string; icon: LucideIcon }[] = [
  { num: "01", title: "Discover", desc: "Understand your brand, audience, and objectives.", icon: Search },
  { num: "02", title: "Define", desc: "Establish a clear strategy, structure, and direction.", icon: Target },
  { num: "03", title: "Design", desc: "Craft refined, user-focused visual experiences.", icon: Pencil },
  { num: "04", title: "Develop", desc: "Build fast, responsive, and scalable digital platforms.", icon: Code2 },
  { num: "05", title: "Scale", desc: "Continuously improve visibility, performance, and engagement.", icon: TrendingUp },
];

export function Pillars() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 25%"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="framework" className="relative py-6 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-radial-purple opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Approach"
          title={
            <>
              A <span className="text-gradient-brand italic">Structured Approach.</span>
            </>
          }
          subtitle="Our process is intentionally simple - designed to bring clarity and direction at every stage."
        />

        <div ref={trackRef} className="relative mt-14">
          {/* Scroll-linked progress line (desktop) — sits behind text/icons */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 z-0 hidden h-px overflow-hidden bg-border md:block">
            <motion.div
              style={{ width: fillWidth }}
              className="h-full bg-gradient-to-r from-[color:var(--purple)] via-[color:var(--purple)] to-[color:var(--gold)]"
            />
          </div>

          <ol className="relative z-10 grid gap-8 md:grid-cols-5 md:gap-4">
            {STEPS.map((s, i) => (
              <ScrollStep key={s.num} step={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ScrollStep({
  step,
  index,
}: {
  step: { num: string; title: string; desc: string; icon: LucideIcon };
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  // 1 when card is centered in viewport, 0 otherwise
  const active = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 1, 1, 0]);
  const titleColor = useTransform(active, (v) =>
    v > 0.5 ? "var(--foreground)" : "var(--muted-foreground)",
  );
  const numColor = useTransform(active, (v) =>
    v > 0.5 ? "var(--gold)" : "var(--muted-foreground)",
  );
  const iconScale = useTransform(active, [0, 1], [1, 1.08]);

  const Icon = step.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex flex-col items-center text-center"
    >
      <motion.div
        style={{ scale: iconScale }}
        className="glass relative flex h-14 w-14 items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-glow-purple"
      >
        <Icon className="h-5 w-5 text-[color:var(--gold)]" />
      </motion.div>
      <motion.p
        style={{ color: numColor }}
        className="mt-4 font-mono text-xs tracking-widest transition-colors"
      >
        {step.num}
      </motion.p>
      <motion.h3 style={{ color: titleColor }} className="mt-1 font-serif text-2xl transition-colors">
        {step.title}
      </motion.h3>
      <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
    </motion.li>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
        {eyebrow}
      </span>
      <RevealHeading as="h2" className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
        {title}
      </RevealHeading>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
