import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Pillars } from "@/components/site/Pillars";
import { Services } from "@/components/site/Services";
import { Reviews } from "@/components/site/Reviews";
import { Work } from "@/components/site/Work";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { StackMarquee } from "@/components/site/StackMarquee";
import { Toaster } from "@/components/ui/sonner";
import { useTabTitle } from "@/hooks/use-tab-title";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useTabTitle("SocioFrame & Co. · Let's build");
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="grid-lines-fixed" aria-hidden />
      <div className="grain pointer-events-none fixed inset-0 z-[1]" aria-hidden />
      <Header />
      <main className="relative z-[2]">
        <Hero />
        <Story />
        <Pillars />
        <Services />
        <StackMarquee />
        <Reviews />
        <Work />
        <ContactCTA />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

