"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { links } from "./navbar";

type Props = {
  pathname: string;
};

export const MobileNavbar = ({ pathname }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!mobileOpen) return;

      const target = event.target as Node;

      const clickedInside =
        wrapperRef.current?.contains(target) ||
        menuRef.current?.contains(target);

      if (!clickedInside) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <div ref={wrapperRef} className="relative md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((prev) => !prev)}
        className="
          relative
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/3
          text-white/70
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:border-white/20
          hover:text-white
        "
      >
        <div className="relative h-5 w-5">
          <motion.span
            animate={
              mobileOpen
                ? {
                    rotate: 45,
                    y: 8,
                  }
                : {
                    rotate: 0,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-0
              h-[1px]
              w-5
              rounded-full
              bg-current
            "
          />

          <motion.span
            animate={
              mobileOpen
                ? {
                    opacity: 0,
                    scaleX: 0,
                  }
                : {
                    opacity: 1,
                    scaleX: 1,
                  }
            }
            transition={{
              duration: 0.18,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-[8px]
              h-[1px]
              w-5
              rounded-full
              bg-current
              origin-center
            "
          />

          <motion.span
            animate={
              mobileOpen
                ? {
                    rotate: -45,
                    y: -8,
                  }
                : {
                    rotate: 0,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-4
              h-[1px]
              w-5
              rounded-full
              bg-current
            "
          />
        </div>
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
            />

            <motion.nav
              ref={menuRef}
              initial={{
                opacity: 0,
                y: -14,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -14,
                scale: 0.96,
              }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-0
                top-full
                z-40
                mt-4
                flex
                w-[220px]
                flex-col
                gap-2
                rounded-3xl
                border
                border-white/10
                bg-black/70
                p-2
                shadow-2xl
                backdrop-blur-3xl
              "
            >
              {links.map((link, index) => {
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex h-14 items-center rounded-2xl px-5 text-sm lowercase tracking-[0.18em] transition-all duration-300",
                        active
                          ? "border border-accent-border bg-accent-dim text-white"
                          : "text-white/45 hover:bg-white/3 hover:text-white/80",
                      )}
                    >
                      <motion.span
                        whileHover={{ x: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
