import Link from "next/link";
import { PageTransition } from "./components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-5xl text-center space-y-10">
          <div className="space-y-6">
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs">
              frontend engineer
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Building <span className="text-accent">fast,</span>
              <br />
              awesome web experiences.
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-white/50 leading-8 text-sm sm:text-base">
            I design and build performant frontend systems with a strong focus
            on motion, architecture, simplicity, and user experience. Mostly
            working with React, Next.js, TypeScript, PWAs, and modern frontend
            tooling.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
            <Link
              href="/projects"
              className="rounded-full px-6 py-3 text-sm bg-accent text-black font-medium transition-all duration-300 hover:opacity-80"
            >
              view projects
            </Link>

            <Link
              href="/about"
              className="border border-white/10 hover:border-white/30 transition-all duration-300 rounded-full px-6 py-3 text-sm text-white/60 hover:text-white"
            >
              about me
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
