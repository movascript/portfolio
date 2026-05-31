"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/projects",
    label: "projects",
  },
  {
    href: "/contact",
    label: "contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-center pt-8 px-4">
        <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm lowercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
