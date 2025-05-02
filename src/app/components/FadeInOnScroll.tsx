"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeInOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
