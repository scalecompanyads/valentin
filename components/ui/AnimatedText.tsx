"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Mapa para evitar motion.create() com string dinâmica (problema de tipos) */
const motionMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
};

type AnimatedTag = keyof typeof motionMap;

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: AnimatedTag;
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedTextProps) {
  const prefersReduced = useReducedMotion();
  const Tag = motionMap[as];

  return (
    <Tag
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/* Container com stagger para revelar filhos em sequência */
interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function AnimatedGroup({
  children,
  className = "",
  stagger = 0.12,
}: AnimatedGroupProps) {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={prefersReduced ? undefined : containerVariants}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* Item filho usado dentro de AnimatedGroup */
export function AnimatedItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReduced ? undefined : itemVariants}
    >
      {children}
    </motion.div>
  );
}
