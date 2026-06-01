/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <no time to die> */
"use client";

import { ArrowUpRight } from "lucide-react";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import GoHomeLink from "../components/go-home-link";
import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  tag?: string;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
  tag,
}: ContactCardProps) {
  const cardRef = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTransform({ x: dx * 6, y: dy * 6 });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const sharedStyle = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    transition: isHovered
      ? "transform 0.12s ease-out, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease"
      : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
  };

  const sharedClassName =
    "group relative flex items-center gap-4 px-6 py-4 rounded-xl " +
    "border border-white/[0.06] bg-white/[0.02] " +
    "hover:border-[var(--accent-border)] hover:bg-[var(--accent-dim)] " +
    "cursor-pointer select-none overflow-hidden";

  const inner = (
    <>
      <span
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <span
        className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg
          bg-white/4 border border-white/[0.07]
          text-white/40 group-hover:text-accent
          group-hover:border-accent-border group-hover:bg-accent-dim
          transition-all duration-300"
      >
        {icon}
      </span>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-white/25 group-hover:text-white/40 transition-colors duration-300 mb-0.5">
          {label}
        </p>
        <p className="text-[15px] text-white/60 group-hover:text-white/90 transition-colors duration-300 truncate font-light">
          {value}
        </p>
      </div>

      {tag && (
        <span className="shrink-0 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/8 text-white/30 bg-white/3 group-hover:border-accent-border group-hover:text-accent transition-all duration-300">
          {tag}
        </span>
      )}

      {href && (
        <span className="shrink-0 text-white/30 group-hover:text-accent transition-colors duration-300">
          <ArrowUpRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={sharedClassName}
        style={sharedStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <no time to die>
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={sharedClassName}
      style={sharedStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </div>
  );
}

// ─── Status Dot ───────────────────────────────────────────────────────────────

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
  );
}

// ─── Context Pills ────────────────────────────────────────────────────────────

const contextItems = [
  { text: "Based in Tehran, Iran" },
  { text: "Computer engineering student" },
  { text: "Open to remote collaboration" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <PageTransition>
      <Section title="contact">
        <div className="max-w-2xl space-y-14">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-6xl font-light leading-tight">
              Somewhere between
              <br />
              silence and signal.
            </h1>
            <p className="text-white/40 leading-7 max-w-xl text-[15px]">
              I'm always interested in meaningful projects, creative frontend
              systems, startup ideas, and ambitious digital experiences.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/6 text-emerald-400/80 text-[12px] tracking-wide">
              <StatusDot />
              Available for new projects
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {contextItems.map((item) => (
              <span
                key={item.text}
                className="text-[11px] uppercase tracking-widest text-white/30 border border-white/6 bg-white/2 px-3 py-1.5 rounded-full"
              >
                {item.text}
              </span>
            ))}
          </div>

          <div
            className="grid gap-2.5"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            <ContactCard
              icon={<IconMail />}
              label="Email"
              value="movascript@gmail.com"
              href="mailto:movascript@gmail.com"
              tag="preferred"
            />
            <ContactCard
              icon={<IconGithub />}
              label="GitHub"
              value="github.com/movascript"
              href="https://github.com/movascript"
              external
            />
            <ContactCard
              icon={<IconLinkedin />}
              label="LinkedIn"
              value="linkedin.com/in/movascript"
              href="https://linkedin.com/in/movascript"
              external
            />
            <ContactCard
              icon={<IconTelegram />}
              label="Telegram"
              value="t.me/movalipa"
              href="https://t.me/movalipa"
              external
            />
          </div>

          <p className="text-[13px] text-white/20 leading-6 max-w-sm">
            Response time is usually under 24 hours.
            <br />
            Serious inquiries only, please.
          </p>
        </div>
      </Section>
      <GoHomeLink />
    </PageTransition>
  );
}
