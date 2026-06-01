"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);

  const navRef = useRef<HTMLDivElement>(null);

  const [thumb, setThumb] = useState({
    width: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    const active = navRef.current?.querySelector(
      `[data-active="true"]`,
    ) as HTMLElement | null;

    if (!active) {
      setThumb({
        width: 0,
        left: 0,
      });

      return;
    }

    setThumb({
      width: active.offsetWidth,
      left: active.offsetLeft,
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: visible ? 0 : -24,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 select-none"
    >
      <div className="relative flex items-center justify-between px-6 pt-8 sm:px-10 lg:px-20">
        {/* LOGO */}
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.24em] text-white/35 transition-colors duration-300 hover:text-white"
        >
          movascript
        </Link>

        {/* DESKTOP NAV */}
        <nav
          ref={navRef}
          className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-2xl md:flex"
        >
          <AnimatePresence>
            {thumb.width > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: thumb.left,
                  width: thumb.width,
                }}
                exit={{ opacity: 0 }}
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
            )}
          </AnimatePresence>

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

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white/70 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:text-white md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
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
                    right-6
                    top-full
                    mt-4
                    z-40
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
                    sm:right-10
                    md:hidden
                  "
            >
              {links.map((link, index) => {
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
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
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
