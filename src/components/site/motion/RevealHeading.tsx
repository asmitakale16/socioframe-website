import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
  delay?: number;
};

/**
 * Clip-path reveal: animates from inset(0 0 100% 0) to inset(0 0 0 0) when in view.
 * Wraps existing text without modifying the content.
 */
export function RevealHeading({ children, className, as = "div", delay = 0 }: Props) {
  const MotionTag = motion[as as "div"];
  return (
    <MotionTag
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={{ willChange: "clip-path, opacity" }}
    >
      {children}
    </MotionTag>
  );
}
