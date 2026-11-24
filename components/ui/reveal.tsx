/**
 * Client wrapper that fades and slides its children into view once
 * as they scroll into the viewport, using framer-motion.
 * Animation is skipped entirely when the user prefers reduced motion.
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Renders children with a one-time fade/slide-up entrance when they enter the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
