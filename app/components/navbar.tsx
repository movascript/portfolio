"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 select-none">
      <div className="flex justify-between items-center pt-8 px-6 sm:px-10 lg:px-20">
        <Link
          href="/"
          className="text-sm tracking-[0.2em] text-white/40 hover:text-white transition duration-300 uppercase"
        >
          movascript
        </Link>

        <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm lowercase tracking-[0.2em] transition duration-300",
                  active ? "text-accent" : "text-[rgba(255,255,255,0.5)]",
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px transition-all duration-300 bg-accent",
                    active ? "w-full" : "w-0",
                  )}
                />

                {!active && (
                  <span className="absolute -bottom-1 left-0 h-px bg-white/30 w-0 group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
