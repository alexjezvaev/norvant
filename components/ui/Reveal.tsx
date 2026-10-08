"use client";

import { motionTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = { ...motionTransition.reveal, delay };
  const initial = { opacity: 0, y: 24 };
  const visible = { opacity: 1, y: 0 };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -5% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
