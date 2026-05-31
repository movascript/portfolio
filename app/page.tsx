import Link from "next/link";

import { PageTransition } from "./components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-5xl text-center space-y-10">
          <div className="space-y-6">
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs">
              frontend engineer • movascript
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Building fast,
              <br />
              cinematic web experiences.
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-white/50 leading-8 text-sm sm:text-base">
            I design and build performant frontend systems with a strong focus
            on motion, architecture, simplicity, and user experience. Mostly
            working with React, Next.js, TypeScript, PWAs, and modern frontend
            tooling.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
            {/* <Link
              href="/projects"
              className="border border-white/10 bg-white/5 hover:bg-white hover:text-black transition rounded-full px-6 py-3 text-sm"
            >
              view projects
            </Link>

            <Link
              href="/about"
              className="border border-white/10 hover:border-white/30 transition rounded-full px-6 py-3 text-sm text-white/70"
            >
              about me
            </Link> */}

            {/* <a
              href="/resume.pdf"
              className="border border-white/10 hover:border-white/30 transition rounded-full px-6 py-3 text-sm text-white/70"
            >
              resume
            </a> */}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
