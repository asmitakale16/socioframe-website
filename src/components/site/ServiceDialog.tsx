import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight, type LucideIcon } from "lucide-react";

export interface ServiceDeepDive {
  icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
  intro: string;
  pillars: { title: string; body: string }[];
  deliverables: string[];
}

export function ServiceDialog({
  service,
  open,
  onOpenChange,
}: {
  service: ServiceDeepDive | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!service) return null;
  const Icon = service.icon;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong border-beam max-w-2xl overflow-hidden border-[color:var(--gold-soft)]/30 bg-transparent p-0 sm:rounded-2xl">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 bg-radial-purple blur-2xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 bg-radial-gold blur-2xl" />

        <div className="relative max-h-[85vh] overflow-y-auto p-7 md:p-10">
          <DialogHeader className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-[color:var(--gold)]" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {service.tag}
              </span>
            </div>
            <DialogTitle className="font-serif text-3xl md:text-4xl">
              {service.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              {service.intro}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {service.pillars.map((p) => (
              <div
                key={p.title}
                className="glass rounded-xl p-4 transition-colors hover:border-[color:var(--gold-soft)]/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Deliverables
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[color:var(--gold)]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="brand" className="shimmer">
              <a href="#contact" onClick={() => onOpenChange(false)}>
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outlineBrand" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
