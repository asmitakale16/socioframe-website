import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import logoDark from "@/assets/socioframe-mark.png";
import logoLight from "@/assets/socioframe-mark-light.png";
import { useTheme } from "./ThemeProvider";
import { Magnetic } from "./motion/Magnetic";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#framework" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "shadow-elegant" : ""
        }`}
      >
        <Link to="/" className="group relative flex items-center gap-2.5">
          {/* Purple glow behind logo (dark mode emphasis) */}
          <span className="pointer-events-none absolute -left-2 -top-2 h-12 w-12 rounded-full bg-radial-purple opacity-80 blur-md dark:opacity-100" />
          <Magnetic strength={0.4} radius={90}>
            <img
              src={theme === "light" ? logoLight : logoDark}
              alt="SocioFrame & Co."
              className="logo-luminous relative h-9 w-9 rounded-md object-contain"
            />
          </Magnetic>
          <span className="font-serif text-lg tracking-tight">
            SocioFrame <span className="text-muted-foreground">& Co.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="gradient-border inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Magnetic strength={0.3} radius={100} className="hidden md:inline-flex">
            <Button asChild variant="brand" size="sm" className="shimmer">
              <a href="#contact">Get a Quote</a>
            </Button>
          </Magnetic>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong absolute left-4 right-4 top-20 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="brand" className="w-full shimmer">
                <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
