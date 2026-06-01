"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { links } from "./navbar";

type Props = {
  pathname: string;
};

export const DesktopNavbar = ({ pathname }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  const [thumb, setThumb] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const updateThumb = () => {
    if (!navRef.current) return;

    const active = navRef.current.querySelector(
      `[data-active="true"]`,
    ) as HTMLElement | null;

    if (!active) {
      setThumb({
        width: 0,
        left: 0,
        opacity: 0,
      });

      return;
    }

    setThumb({
      width: active.offsetWidth,
      left: active.offsetLeft,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    updateThumb();

    const handleResize = () => {
      requestAnimationFrame(updateThumb);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-2xl md:flex"
    >
      <motion.div
        animate={{
          opacity: thumb.opacity,
          x: thumb.left,
          width: thumb.width,
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 340,
            damping: 24,
            mass: 0.9,
          },
          width: {
            type: "spring",
            stiffness: 340,
            damping: 24,
            mass: 0.9,
          },
          opacity: {
            duration: 0.18,
          },
        }}
        className="absolute inset-y-1.5 left-0 rounded-full border border-accent-border bg-accent-dim"
      />

      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            data-active={active}
            className={cn(
              "relative z-10 flex h-11 items-center justify-center rounded-full px-5 text-sm lowercase tracking-[0.18em] transition-colors duration-300",
              active ? "text-white" : "text-white/45 hover:text-white/80",
            )}
          >
            <motion.span
              whileHover={{ y: -1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
            >
              {link.label}
            </motion.span>
          </Link>
        );
      })}
    </nav>
  );
};
