import { motion } from "framer-motion";
import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
};

/**
 * Staggered reveal-on-scroll for blocks of text. Each direct child slides up (y:10 → y:0)
 * and fades in with a small delay between siblings.
 */
export function StaggerText({ children, className, delay = 0, step = 0.08 }: Props) {
  const items = Children.toArray(children);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: step, delayChildren: delay }}
      className={className}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
