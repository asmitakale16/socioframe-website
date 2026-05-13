import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Magnetic } from "./motion/Magnetic";
import { RevealHeading } from "./motion/RevealHeading";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[78vh] items-center overflow-hidden pt-36 pb-20"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-[background] duration-200"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), oklch(0.55 0.05 250 / 0.20), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-radial-purple blur-2xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[500px] bg-radial-gold blur-2xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-[color:var(--gold)]" />
            Design. Market. Scale.
          </span>
          <RevealHeading as="h1" className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
            Digital Presence, <br />
            Built with <span className="text-gradient-brand italic">Intent.</span>
          </RevealHeading>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            SocioFrame & Co. helps brands build a clear, high-performing digital presence through
            thoughtful design, reliable development, and structured growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.35} radius={120}>
              <Button asChild variant="brand" size="lg" className="shimmer">
                <a href="#contact">
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Button asChild variant="outlineBrand" size="lg">
              <a href="#framework">View Our Approach</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
