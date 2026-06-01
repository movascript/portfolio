"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export const links = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

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

        <DesktopNavbar pathname={pathname} />

        <MobileNavbar pathname={pathname} />
      </div>
    </motion.header>
  );
};
