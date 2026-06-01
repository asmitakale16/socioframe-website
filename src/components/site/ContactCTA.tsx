import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Mail } from "lucide-react";
import { toast } from "sonner";
import { Magnetic } from "./motion/Magnetic";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwxOGO4tR6mgexUTgHxP_t3-wWVSsCOahprIa36hjQz0ELUdcIj9uMQng2gorJE6jgXLQ/exec";

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  company: "",
  project: "",
};

export function ContactCTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      // Only allow digits, spaces, +, -, (, )
      const cleaned = value.replace(/[^\d+\-\s()]/g, "");
      setValues((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mobileDigits = values.mobile.replace(/\D/g, "");
    if (mobileDigits.length < 7) {
      toast.warning("Please enter a valid mobile number.");
      return;
    }

    const payload = {
      Sheet: "WebsiteForm",
      Name: values.name,
      Mobile: values.mobile,
      Email: values.email,
      Company: values.company,
      Requirement: values.project,
      source: "Socioframe Website",
    };

    setLoading(true);
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSuccess(true);
      setValues(initialValues);
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 md:py-[5.5rem]">
      <div className="pointer-events-none absolute inset-0 bg-radial-purple opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="glass-strong border-beam relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 bg-radial-purple blur-2xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 bg-radial-gold blur-2xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
                Let's build
              </span>
              <h2 className="mt-4 font-serif text-5xl leading-[1.15] md:text-6xl pb-2">
                Let's <span className="text-gradient-brand italic pr-1">collaborate</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Tell us about the brand you're building. SocioFrame & Co. responds personally within one business day.
              </p>
              <a
                href="mailto:socioframeco@gmail.com"
                className="mt-8 inline-flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-[color:var(--gold)]"
              >
                <Mail className="h-4 w-4 text-[color:var(--gold)]" />
                socioframeco@gmail.com
              </a>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="form-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[color:var(--gold)]/40 via-white/10 to-[color:var(--primary)]/40"
                  >
                    <form
                      onSubmit={onSubmit}
                      className="space-y-3 rounded-2xl bg-background/40 p-5 backdrop-blur-xl md:p-6"
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field id="name" label="Name">
                          <Input id="name" name="name" required placeholder="Your full name" value={values.name} onChange={handleChange} />
                        </Field>
                        <Field id="mobile" label="Mobile">
                          <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9+\-\s()]*"
                            required
                            placeholder="Your mobile number"
                            value={values.mobile}
                            onChange={handleChange}
                          />
                        </Field>
                        <Field id="email" label="Email">
                          <Input id="email" name="email" type="email" required placeholder="you@brand.com" value={values.email} onChange={handleChange} />
                        </Field>
                        <Field id="company" label="Company">
                          <Input id="company" name="company" placeholder="Brand or company" value={values.company} onChange={handleChange} />
                        </Field>
                      </div>
                      <Field id="project" label="Requirements">
                        <Textarea
                          id="project"
                          name="project"
                          required
                          rows={3}
                          placeholder="Tell us about your specific requirements and objectives."
                          value={values.project}
                          onChange={handleChange}
                          className="resize-none"
                        />
                      </Field>
                      <Magnetic strength={0.25} radius={140} className="block w-full">
                        <Button
                          type="submit"
                          variant="brand"
                          size="lg"
                          className={`w-full shimmer transition-shadow duration-300 hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--gold)_60%,transparent)] ${loading ? "animate-pulse" : ""}`}
                          disabled={loading}
                        >
                          {loading ? "Transmitting..." : "Get a Quote"}
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Magnetic>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-2xl border border-[color:var(--gold)]/20 bg-background/40 p-10 text-center backdrop-blur-sm"
                  >
                    <svg
                      width="84"
                      height="84"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-6"
                    >
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="24"
                        stroke="url(#gold-grad)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M14 27 L23 36 L39 18"
                        stroke="url(#gold-grad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gold-grad" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#F5D27A" />
                          <stop offset="100%" stopColor="#B8860B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <h3 className="font-serif text-3xl md:text-4xl">Inquiry Received.</h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      The SocioFrame & Co. team has been notified. We will reach out within one business day.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
