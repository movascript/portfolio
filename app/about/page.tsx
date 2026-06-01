import { experiences, technologies } from "@/data/about";
import Badge from "../components/badge";
import GoHomeLink from "../components/go-home-link";
import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function AboutPage() {
  return (
    <PageTransition>
      <Section title="about">
        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl font-light leading-tight">
                Frontend engineer obsessed with{" "}
                <span className="text-accent">performance</span>, motion, and
                clean architecture.
              </h1>

              <p className="text-white/50 leading-8">
                Programming was never accidental for me. I've been fascinated by
                computers since childhood, and started learning web development
                around the age of 14 after discovering HTML through a family
                member who worked in tech.
              </p>
            </div>

            <div className="space-y-8 text-white/60 leading-8">
              <p>
                Before college, I was already building small websites with HTML,
                CSS, JavaScript, PHP, and Python. But things became serious when
                I started learning React, Next.js, C++, scalable frontend
                architecture, PWAs, and real-time systems.
              </p>
              <p>
                I mainly enjoy building admin panels, chat applications,
                real-time systems, WebRTC experiences, and highly interactive
                interfaces with cinematic motion and strong UX.
              </p>
              <p>
                The things I care about most are simplicity, architecture,
                performance, animation, and creating products that genuinely
                feel good to use.
              </p>
              <p>
                Even though I can work across the stack, frontend engineering is
                where I feel most creative and most focused.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Tech Stack
              </p>
              <h2 className="text-3xl font-light">
                Technologies I enjoy working with.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Experience
              </p>
              <h2 className="text-3xl font-light">
                A timeline of projects and positions.
              </h2>
            </div>

            <div className="space-y-10">
              {experiences.map((experience) => (
                <div
                  key={experience.company}
                  className="pl-8 space-y-3 relative"
                >
                  {/* Accent left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-accent to-[rgba(149,135,253,0.1)]" />

                  <div>
                    <h3 className="text-2xl font-light">{experience.title}</h3>
                    <p className="text-white/40 text-sm mt-1">
                      {experience.company} • {experience.period}
                    </p>
                  </div>

                  <p className="text-white/60 leading-8 max-w-3xl">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <GoHomeLink />
    </PageTransition>
  );
}
