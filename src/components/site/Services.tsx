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
      { title: "Responsive Architecture", body: "Seamless experiences across desktop, tablet, and mobile devices." },
      { title: "Performance-Optimization", body: "Optimized for speed, usability, and seamless user experiences." },
      { title: "Scalable Infrastructure", body: "Structured for visibility, scalability, and long-term digital growth." },
      { title: "Connected Ecosystem", body: "Connect analytics, CRM, forms, and essential tools into one streamlined system." },
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
      { title: "Brand Identity", body: "Logo Design, Visual Identity, and Brand Guidelines crafted to build a distinctive, credible and recignizable brand." },
      { title: "Brand Collaterals", body: "Professionally designed brand assets that elevate every presentation, pitch, and customer interaction." },
      { title: "Visual Direction", body: "Considered art direction that signals quality the moment a visitor lands." },
      { title: "Design Consistency", body: "A unified visual language across every platform, touchpoint, and customer interaction." },
    ],
    deliverables: [
      "Logo Design",
      "Brand Identity",
      "Guidelines",
      "Collaterals",
      "Presentations",
      "Profiles",
      "Portfolios",
      "Digital Assets",
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
      { title: "Paid Media", body: "Data-driven campaigns designed to generate leads, conversions, and measurable growth." },
      { title: "Content & Community", body: "Consistent content and engagement strategies that strengthen brand presence." },
      { title: "Campaign Strategy", body: "Structured planning and execution aligned with your business objectives." },
      { title: "Audience Targeting", body: "Precision targeting that connects your message with the right audience." },
    ],
    deliverables: [
       "Paid Advertising",
       "Social Media",
       "Content Planning",
       "Ad Creatives",
       "Performance Tracking",
       "Monthly Reports",
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
      { title: "Market Intelligence", body: "Understand your industry, audience, and competitive landscape." },
      { title: "Actionable Insights", body: "Clear metrics and insights that drive smarter decisions." },
      { title: "Growth Anlaysis", body: "Identify what's working, what's not, and where opportunities exist." },
      { title: "Optimizaion Efficiency", body: "Optimize processes to improve productivity and performance." },
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
    points: ["Custom AI Bots", "Lead Automation", " CRM Integration"],
    intro:
      "Building smart conversational systems to streamline communication and improve user experience.",
    pillars: [
      { title: "AI-powered Engagement", body:  "Create meaningful conversations that guide users, answer queries, and drive action." },
      { title: "Lead Qualification", body: "Capture, qualify, and nurture prospects through automated and personalized interactions." },
      { title: "Customer Support", body:  "Provide instant assistance around the clock while reducing response times and support workload." },
      { title: "Seamless Integration", body: "Connect your chatbot with CRMs, websites, and business tools for a unified experience."},
    ],
    deliverables: [
     "Custom AI Bots",
     "Lead Capture",
     "CRM Integration",
     "Workflow Automation",
     "Knowledge Base",
     "24/7 Support", 
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
      { title: "Performance Monitoring", body: "Continuous monitoring and optimization to keep your digital presence running at its best." },
      { title: "Continuous Support", body: "Ongoing enhancements that improve usability, engagement, and overall performance." },
      { title: "Maintainence & Security", body: "Regular updates and maintenance to ensure stability, security, and smooth operation."},
      { title: "Feature Iteration", body: "Strategic updates and refinements that keep your platform aligned with changing needs."},
    ],
    deliverables: [
     "Performance Tracking",
     "Maintenance & Updates",
     "Security Management",
     "Feature Improvements",
     "Issue Resolution",
     "Growth Support",
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
