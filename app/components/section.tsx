"use client";

import { motion, useReducedMotion } from "framer-motion";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const reduced = useReducedMotion();

  return (
    <section className="max-w-5xl mx-auto py-32">
      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full shrink-0 bg-accent" />
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40">
            {title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0.1 : 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
