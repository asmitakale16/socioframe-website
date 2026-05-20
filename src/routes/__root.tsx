import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Magnetic } from "@/components/site/motion/Magnetic";
import { ArrowLeft } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute inset-0 bg-radial-purple opacity-50" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="glass-strong border-beam relative z-10 w-full max-w-lg rounded-3xl p-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          Error · 404
        </span>
        <h1 className="mt-4 font-serif text-6xl leading-[1.05] md:text-7xl">
          Page <span className="text-gradient-brand italic">not found</span>
        </h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Let's get you back on track.
        </p>
        <div className="mt-8 inline-block">
          <Magnetic strength={0.3} radius={140}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-[color:var(--gold)]/30 bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
            >
              <ArrowLeft className="h-4 w-4 text-[color:var(--gold)]" />
              Return Home
            </Link>
          </Magnetic>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          SocioFrame &amp; Co.
        </p>
      </div>
    </div>
  );
}


export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SocioFrame & Co. · Design. Market. Scale." },
      {
        name: "description",
        content:
          "A digital studio for design, development, and growth. We build refined online presences for modern brands.",
      },
      { name: "author", content: "SocioFrame & Co." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SocioFrame & Co. · Design. Market. Scale." },
      {
        property: "og:description",
        content:
          "A digital studio for design, development, and growth. We build refined online presences for modern brands.",
      },
      { property: "og:site_name", content: "SocioFrame & Co." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SocioFrame & Co. · Design. Market. Scale." },
      {
        name: "twitter:description",
        content:
          "A digital studio for design, development, and growth. We build refined online presences for modern brands.",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sf-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
