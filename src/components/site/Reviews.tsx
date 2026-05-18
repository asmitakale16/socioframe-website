import { motion } from "framer-motion";
import { MessageCircle, Eye, Code2, TrendingUp, type LucideIcon } from "lucide-react";

const POINTS: { icon: LucideIcon; title: string }[] = [
  { icon: MessageCircle, title: "Direct and clear communication" },
  { icon: Eye, title: "High attention to detail" },
  { icon: Code2, title: "Use of modern tools and practices" },
  { icon: TrendingUp, title: "A long-term perspective on growth" },
];

export function Reviews() {
  return (
    <section id="why" className="relative py-6 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-radial-purple opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Why Us
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              Focused. Considered. <span className="text-gradient-brand italic">Reliable.</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              We operate as a small, dedicated studio which allows us to stay closely involved in
              every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <ul className="grid gap-4 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li
                  key={p.title}
                  className="glass gradient-border flex items-start gap-3 rounded-xl p-5"
                >
                  <div className="glass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                    <p.icon className="h-4 w-4 text-[color:var(--gold)]" />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-foreground/90">{p.title}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-serif text-lg italic text-muted-foreground">
              We value thoughtful execution over rushed output.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
