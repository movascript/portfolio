import { ArrowUpRight, Clock3, Layers3, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/app/components/badge";
import { PageTransition } from "@/app/components/page-transition";
import { ProjectGallery } from "@/app/components/project-gallery";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} • Mohammad Valadi`,
    description: project.description,
  };
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto py-24">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/70 transition-all duration-300 tracking-[0.15em] lowercase mb-14"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          projects
        </Link>

        <section className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-accent-border px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-accent">
              Project
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-none">
                  {project.title}
                </h1>

                <p className="text-lg leading-8 text-white/50 max-w-3xl">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 text-sm">
                <div>
                  <div className="text-white/30 mb-2">Type</div>
                  <div className="text-white/80">{project.category}</div>
                </div>

                <div>
                  <div className="text-white/30 mb-2">Year</div>
                  <div className="text-white/80">{project.year}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-white/10 hover:border-white/30 rounded-full px-5 py-2 text-sm text-white/60 hover:text-white transition-all duration-300"
              >
                GitHub
                <ArrowUpRight className="size-4" />
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:opacity-80 bg-accent text-black"
                >
                  Live Website
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/8 aspect-video bg-white/[0.02]">
            {/** biome-ignore lint/performance/noImgElement: <future> */}
            <img
              src={project.cover}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
          </div>
        </section>

        <div className="grid lg:grid-cols-[1fr_320px] gap-20 mt-24">
          <div className="space-y-24">
            <section className="space-y-8">
              <SectionLabel icon={<Sparkles size={14} />}>
                Overview
              </SectionLabel>

              <div className="space-y-6">
                {project.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-white/60 leading-8 text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <SectionLabel icon={<ArrowUpRight size={14} />}>
                Key Features
              </SectionLabel>

              <div className="grid sm:grid-cols-2 gap-5">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6"
                  >
                    <p className="text-white/75 leading-7">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <SectionLabel icon={<Layers3 size={14} />}>
                Architecture
              </SectionLabel>

              <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.02] p-8 space-y-6">
                {project.architecture.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-lg text-white/90 mb-3">{item.title}</h3>

                    <p className="text-white/55 leading-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <SectionLabel icon={<Clock3 size={14} />}>
                Technical Challenges
              </SectionLabel>

              <div className="space-y-5">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6"
                  >
                    <p className="text-white/60 leading-8">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <SectionLabel>Gallery</SectionLabel>

              <ProjectGallery images={project.screenshots} />
            </section>
          </div>

          <aside className="space-y-12">
            <div className="sticky top-28 space-y-12">
              <div className="space-y-6">
                <SectionLabel>Stack</SectionLabel>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.02] p-7">
                <div className="text-sm uppercase tracking-[0.18em] text-white/30 mb-6">
                  Engineering Notes
                </div>

                <div className="space-y-5 text-sm leading-7 text-white/55">
                  {project.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageTransition>
  );
}

function SectionLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/35">
      {icon && icon}

      <span>{children}</span>
    </div>
  );
}
