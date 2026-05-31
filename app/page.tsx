import Link from "next/link";

import { PageTransition } from "./components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl text-center space-y-10">
          <div className="space-y-6">
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs">
              software developer
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Building calm
              <br />
              digital experiences.
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-white/50 leading-8 text-sm sm:text-base">
            Minimal interfaces, thoughtful animations, scalable frontend
            architecture, and immersive web experiences.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
            <Link
              href="/projects"
              className="border border-white/10 bg-white/5 hover:bg-white hover:text-black transition rounded-full px-6 py-3 text-sm"
            >
              view projects
            </Link>

            <Link
              href="/contact"
              className="border border-white/10 hover:border-white/30 transition rounded-full px-6 py-3 text-sm text-white/70"
            >
              contact
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
