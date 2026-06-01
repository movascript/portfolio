"use client";

import { motion, useReducedMotion } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: reduced ? "blur(0px)" : "blur(10px)",
        y: reduced ? 0 : 20,
      }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: reduced ? 0.1 : 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
