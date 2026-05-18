import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Pillars";
import { Magnetic } from "./motion/Magnetic";
import wifsHero from "@/assets/wifs-hero.png";

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-6 md:py-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center">
        <div className="marquee w-full">
          <div className="marquee-track font-serif text-[18vw] font-medium leading-none text-outline opacity-[0.05]">
            <span>Design.&nbsp;Market.&nbsp;Scale.</span>
            <span>Design.&nbsp;Market.&nbsp;Scale.</span>
            <span>Design.&nbsp;Market.&nbsp;Scale.</span>
            <span>Design.&nbsp;Market.&nbsp;Scale.</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Our Work"
          title={
            <>
              Selected <span className="text-gradient-brand italic">Engagements.</span>
            </>
          }
          subtitle="Our work is evolving through collaborations with growing brands. Every project is designed with intention, functionality, and longevity in mind."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="group glass gradient-border relative mt-12 overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[16/8] overflow-hidden">
            <img
              src={wifsHero}
              alt="WIFS · Wealth Icon Financial Solutions website hero"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
            <Magnetic className="absolute right-5 top-5 z-20">
              <a
                href="https://www.wifsindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-[color:var(--gold)]"
                aria-label="Visit WIFS · Wealth Icon Financial Solutions"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Magnetic>
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Live · Insurance & Wealth Management
              </p>
              <p className="mt-1 font-serif text-2xl">
                WIFS <span className="text-muted-foreground">·</span> Wealth Icon Financial Solutions
              </p>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                A refined digital platform for a premier insurance and wealth management advisory with over 25 years of expertise.
              </p>
            </div>

            {/* Glass-morphic hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong absolute inset-0 z-[15] flex flex-col items-center justify-center gap-6 px-6 text-center opacity-0 transition-opacity"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
                Case Study · Full-Scale Digital Transition
              </span>
              <div className="grid grid-cols-3 gap-8 md:gap-14">
                {[
                  { v: "+145%", l: "Lead Generation" },
                  { v: "98", l: "Performance Score" },
                  { v: "25yr", l: "Legacy Preserved" },
                ].map((m) => (
                  <div key={m.l} className="flex flex-col items-center">
                    <span className="font-serif text-3xl text-foreground md:text-4xl">{m.v}</span>
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {m.l}
                    </span>
                  </div>
                ))}
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Built a high-performance digital backbone that communicates authority, security, and long-term financial growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
