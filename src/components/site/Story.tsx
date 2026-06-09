import { SectionHeading } from "./Pillars";
import { StaggerText } from "./motion/StaggerText";

export function Story() {
  return (
    <section id="about" className="relative py-6 md:py-14">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] bg-radial-gold blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="About Us"
          title={
            <>
            <span className="text-gradient-brand italic">SocioFrame & Co.</span>
            </>
          }
            />
        <StaggerText className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-muted-foreground md:text-lg">
          <p>
            SocioFrame & Co. is a digital studio that designs and builds high-performing online platforms for modern organizations.</p>
          <p>
            We combine visual design, frontend engineering, and data-driven marketing into a streamlined process, ensuring every technical and creative decision directly supports your long-term business scalability.</p>
          <p>
            We partner with founders, startups, and expanding enterprises to establish reliable digital foundations that excel in both form and function.</p>
          <p>
            Operating as an independent studio allows us to prioritize technical precision and seamless integration with your business workflows.
            We integrate closely with your team to deliver meticulous attention to detail, transparent communication, and digital assets built to scale fluidly as your business evolves.</p>
        </StaggerText>
      </div>
    </section>
  );
}
