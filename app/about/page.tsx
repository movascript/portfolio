import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function AboutPage() {
  return (
    <PageTransition>
      <Section title="about">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-light leading-tight">
              I create modern frontend experiences.
            </h1>

            <p className="text-white/50 leading-8">
              I focus on building performant interfaces with clean systems,
              scalable architecture, and smooth user interactions.
            </p>
          </div>

          <div className="space-y-10 text-white/60 leading-8">
            <p>
              Working mainly with React, Next.js, TypeScript, Tailwind, and
              animation libraries.
            </p>

            <p>
              Interested in minimalism, motion design, performance, and design
              systems.
            </p>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
