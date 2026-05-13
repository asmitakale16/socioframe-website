import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, Megaphone, BarChart3, Bot, LifeBuoy, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Pillars";
import { ServiceDialog, type ServiceDeepDive } from "./ServiceDialog";

const SERVICES: (ServiceDeepDive & { points: string[] })[] = [
  {
    icon: Globe,
    title: "Web Development",
    tag: "Engineering",
    desc: "Modern websites built for speed, usability, and scalability. Engineered for performance and seamless user experience.",
    points: ["Responsive", "Performance", "Scalable"],
    intro:
      "Building fast, responsive, and scalable digital platforms tailored to your needs.",
    pillars: [
      { title: "Responsive Architecture", body: "Layouts that adapt cleanly across every device and screen." },
      { title: "Performance-First", body: "Optimized for speed, Core Web Vitals, and a smooth user experience." },
      { title: "Clean Codebase", body: "Maintainable, well-structured code built with modern best practices." },
      { title: "Tool Integration", body: "Seamless integration of analytics, CMS, and the tools your team relies on." },
    ],
    deliverables: [
      "Responsive architecture",
      "Performance-first build",
      "Clean codebase",
      "Speed optimization",
      "Tool integration",
      "Technical setup",
    ],
  },
  {
    icon: Briefcase,
    title: "Brand & Portfolio Design",
    tag: "Identity",
    desc: "Refined visual identities and digital experiences that build credibility. Designed to communicate clarity and professionalism.",
    points: ["Identity", "UI Design", "Visual Direction"],
    intro:
      "Creating cohesive brand identities and digital presentations that leave a lasting impression.",
    pillars: [
      { title: "Identity Systems", body: "Logo, type, color, and motion built as a cohesive system, not isolated assets." },
      { title: "Business Website Design", body: "Portfolio and business sites engineered to project authority and credibility." },
      { title: "Visual Direction", body: "Considered art direction that signals quality the moment a visitor lands." },
      { title: "Consistent Design Language", body: "A unified language across web, social, and print · every touchpoint aligned." },
    ],
    deliverables: [
      "Identity systems",
      "Business website design",
      "Visual direction",
      "UI design",
      "Consistent design language",
      "Digital assets",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tag: "Growth",
    desc: "Structured strategies to build visibility and drive consistent growth. Focused on reach, engagement, and performance.",
    points: ["Paid Media", "Social", "Targeting"],
    intro:
      "Developing and managing strategies to help your brand grow and connect with the right audience.",
    pillars: [
      { title: "Paid Campaigns", body: "Full-funnel paid acquisition across the channels that matter for your audience." },
      { title: "Social Media Management", body: "Native-first content and community management built for sustained engagement." },
      { title: "Planning & Execution", body: "Clear roadmaps with disciplined execution · strategy that actually ships." },
      { title: "Audience Targeting", body: "Sharp targeting and segmentation so every dollar reaches the right people." },
    ],
    deliverables: [
      "Paid campaigns",
      "Social media management",
      "Planning & execution",
      "Audience targeting",
      "Performance optimization",
      "Content direction",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    tag: "Insight",
    desc: "Structured insights to support better decisions and growth. Focused on clarity, performance, and direction.",
    points: ["Analysis", "Reporting", "Strategy"],
    intro:
      "Analyzing your business and digital presence to identify opportunities and improve performance.",
    pillars: [
      { title: "Market & Competitor Analysis", body: "Understand your landscape and position against the brands you compete with." },
      { title: "Data-Driven Reporting", body: "Clear reporting that makes the numbers actionable, not decorative." },
      { title: "Performance Evaluation", body: "Honest assessment of what's working and what needs to be retired." },
      { title: "Workflow Assessment", body: "Identify operational friction and the highest-leverage places to improve." },
    ],
    deliverables: [
      "Market/competitor analysis",
      "Data-driven reporting",
      "Performance evaluation",
      "Workflow assessment",
      "Growth identification",
      "Strategic recommendations",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    tag: "Automation",
    desc: "Intelligent systems to automate communication and enhance user interaction. Designed for efficiency, engagement, and scalability.",
    points: ["Custom Bots", "Lead Capture", "Integration"],
    intro:
      "Building smart conversational systems to streamline communication and improve user experience.",
    pillars: [
      { title: "Custom Chatbot Development", body: "Conversational systems shaped around your product, tone, and customers." },
      { title: "Conversational Flow Design", body: "Thoughtful flows that guide users to outcomes · not dead ends." },
      { title: "Lead Capture", body: "Capture and qualify leads natively in conversation, then route to your team." },
      { title: "Platform Integration", body: "Connect to your CRM, helpdesk, and channels for a unified experience." },
    ],
    deliverables: [
      "Custom chatbot development",
      "Conversational flow design",
      "Lead capture",
      "Automated support",
      "Platform integration",
      "Scalable interaction",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    tag: "Support",
    desc: "Continuous monitoring, optimization, and improvements to keep your digital presence performing at its best. Focused on performance, usability, and long-term growth.",
    points: ["Monitoring", "Maintenance", "Iteration"],
    intro:
      "Providing long-term technical and strategic support to ensure your brand continues to scale and perform.",
    pillars: [
      { title: "Performance Monitoring", body: "Continuous reporting on speed, uptime, and Core Web Vitals so issues are caught early." },
      { title: "UX & Conversion", body: "Iterative improvements to flows and interfaces that lift conversion over time." },
      { title: "Technical Maintenance", body: "Dependency updates, security patches, and stability work to keep the stack healthy." },
      { title: "Feature Iteration", body: "Steady enhancements and new features shipped on a predictable cadence." },
    ],
    deliverables: [
      "Performance monitoring & reporting",
      "UX and conversion improvements",
      "Technical maintenance & updates",
      "Feature enhancements and iterations",
      "Bug fixes and stability improvements",
      "Ongoing guidance and support",
    ],
  },
];

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-6 md:py-14">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What we <span className="text-gradient-brand italic">Offer.</span>
            </>
          }
          subtitle="Five disciplines, one integrated studio. We connect strategy, design, engineering, and growth into a unified system."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              onClick={() => setOpenIdx(i)}
              className="group glass gradient-border relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <s.icon className="h-5 w-5 text-[color:var(--gold)] transition-colors" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx(i);
                }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-[color:var(--gold)]"
              >
                View Details <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <ServiceDialog
        service={openIdx !== null ? SERVICES[openIdx] : null}
        open={openIdx !== null}
        onOpenChange={(v) => !v && setOpenIdx(null)}
      />
    </section>
  );
}
