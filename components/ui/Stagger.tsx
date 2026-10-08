"use client";

import { motionTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "ul";
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: motionTransition.staggerItem,
  },
};

export function Stagger({
  children,
  className,
  delay = 0,
  as = "div",
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "ul" ? motion.ul : motion.div;

  if (reduceMotion) {
    const Static = as === "ul" ? "ul" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  if (reduceMotion) {
    const Static = as === "li" ? "li" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
