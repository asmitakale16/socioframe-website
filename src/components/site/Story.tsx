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
              About <span className="text-gradient-brand italic">SocioFrame & Co.</span>
            </>
          }
        />

        <StaggerText className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-muted-foreground md:text-lg">
          <p>
            SocioFrame & Co. is a digital studio dedicated to building refined, high-performing
            online presence for modern brands.
          </p>
          <p>
            Our work sits at the intersection of design, engineering, and digital strategy ·
            brought together through a structured and considered approach. Rather than treating
            these as isolated services, we integrate them into a unified system where each
            decision supports performance, usability, and long-term scalability.
          </p>
          <p>
            We collaborate with founders, startups, and growing businesses who understand the
            value of strong digital foundations · not just visually, but functionally.
          </p>
          <p>
            As an independent and evolving studio, we remain intentionally focused: fewer
            projects, deeper involvement, and higher attention to detail.
          </p>
        </StaggerText>
      </div>
    </section>
  );
}
