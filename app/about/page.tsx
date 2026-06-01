import { experiences, technologies } from "@/data/about";
import Badge from "../components/badge";
import GoHomeLink from "../components/go-home-link";
import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

function IdentityCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
        {label}
      </span>
      <span className="text-sm text-white/70">{value}</span>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="relative pl-6 py-1 border-l-2 my-2"
      style={{ borderColor: "var(--accent)" }}
    >
      <p className="text-xl sm:text-2xl font-light leading-snug text-white/80 italic">
        {children}
      </p>
    </blockquote>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <Section title="about">
        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl font-light leading-tight">
                  A Frontend engineer obsessed with{" "}
                  <span className="text-accent">performance</span>, motion, and
                  PWA.
                </h1>

                <p className="text-white/50 leading-8">
                  Programming was never accidental for me. Fascinated by
                  computers since childhood, I discovered HTML at 14 through a
                  family member who worked in tech — and never stopped building.
                </p>
              </div>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-2 pb-6"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <IdentityCard label="Age" value="21" />
                <IdentityCard label="Based in" value="Tehran, Iran" />
                <IdentityCard label="University" value="Jundi Shapur" />
                <IdentityCard label="Focus" value="Frontend Engineering" />
              </div>
            </div>

            <div className="relative select-none">
              <div
                className="relative rounded-xl overflow-hidden aspect-3/4 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto"
                style={{
                  border: "1px solid rgba(149,135,253,0.18)",
                  background: "#0c0c10",
                }}
              >
                {/** biome-ignore lint/performance/noImgElement: <future> */}
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="object-cover grayscale"
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4,4,4,0.70) 0%, transparent 50%)",
                  }}
                />

                <div className="absolute bottom-4 left-4 right-4 flex justify-left items-end gap-4">
                  <div className="w-10 h-10">
                    {/** biome-ignore lint/performance/noImgElement: <future> */}
                    <img
                      src="/avatar.png"
                      alt="avatar"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-light tracking-wide">
                      Mohammad Valadi
                    </p>
                    <p className="text-xs text-white/40 mt-0.5 uppercase tracking-widest">
                      Frontend Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-24 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Background
              </p>
              <h2 className="text-2xl font-light leading-snug">
                How I became a frontend engineer.
              </h2>
            </div>

            <div className="space-y-8 text-white/60 leading-8">
              <p>
                Before college I was already shipping small sites with HTML,
                CSS, JavaScript, PHP, and Python. Things got serious when I
                picked up React and Next.js — I realised I could build
                experiences that didn't just work, they{" "}
                <em className="text-white/80 not-italic">felt</em> something.
              </p>

              <PullQuote>
                Every frame of animation is a decision about how much you care
                about the person on the other side.
              </PullQuote>

              <p>
                Today I have experiences in admin panels, chat applications,
                real-time systems, WebRTC, and highly interactive interfaces
                with cinematic motion and thoughtful UX. Even though I can work
                across the stack, frontend is where I'm most creative and most
                focused.
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
