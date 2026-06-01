import { Linkedin, Instagram, Facebook, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "./ThemeProvider";
import { Magnetic } from "./motion/Magnetic";
import logoDark from "@/assets/socioframe-mark.png";
import logoLight from "@/assets/socioframe-mark-light.png";

type Social = {
  Icon: typeof Linkedin;
  href?: string;
  label: string;
  active: boolean;
  comingLabel?: string;
};

const SOCIALS: Social[] = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/socioframe-co/",
    label: "LinkedIn",
    active: true,
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/socioframe.co",
    label: "Instagram",
    active: true,
  },
  { Icon: Facebook, label: "Facebook", active: false, comingLabel: "Facebook" },
  { Icon: MapPin, label: "Google Maps", active: false, comingLabel: "Maps" },
];

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Approach", href: "#framework" },
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#work" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "socioframeco@gmail.com", href: "mailto:socioframeco@gmail.com" },
    ],
  },
];

export function Footer() {
  const { theme } = useTheme();
  const logo = theme === "light" ? logoLight : logoDark;

  return (
    <footer id="contact" className="relative border-t border-border py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex">
                <span className="pointer-events-none absolute -inset-2 rounded-full bg-radial-purple opacity-80 blur-md" />
                <img
                  src={logo}
                  alt="SocioFrame & Co."
                  className="logo-luminous relative h-9 w-9 rounded-md object-contain"
                />
              </span>
              <span className="font-serif text-lg">
                SocioFrame <span className="text-muted-foreground">& Co.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Digital studio for design, development, and growth.
            </p>

            <ul className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label, active, comingLabel }) => {
                const baseClass =
                  "gradient-border inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-[color:var(--gold)]";

                const iconEl = <Icon className="h-4 w-4" />;

                if (active && href) {
                  return (
                    <li key={label}>
                      <Magnetic strength={0.3} radius={120}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className={baseClass}
                        >
                          {iconEl}
                        </a>
                      </Magnetic>
                    </li>
                  );
                }

                return (
                  <li key={label}>
                    <button
                      type="button"
                      aria-label={`${label} (coming soon)`}
                      onClick={() =>
                        toast("Coming Soon", {
                          description: `We are currently polishing our ${comingLabel} presence.`,
                        })
                      }
                      className={`${baseClass} opacity-50`}
                    >
                      {iconEl}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
              Tagline
            </p>
            <p className="mt-4 font-serif text-base leading-snug">
              <span className="text-gradient-brand italic">Design · Market · Scale</span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 SocioFrame & Co. · Design. Market. Scale.</p>
          <p className="font-mono uppercase tracking-widest">All systems operational</p>
        </div>
      </div>
    </footer>
  );
}
