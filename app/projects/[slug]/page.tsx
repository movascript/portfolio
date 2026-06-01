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
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
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
      <div className="max-w-5xl mx-auto py-24 px-6 sm:px-10 lg:px-0">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/70 transition-all duration-300 tracking-[0.15em] lowercase mb-12"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          projects
        </Link>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent border-accent-border">
              Project
            </div>

            <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
              {project.title}
            </h1>

            <p className="max-w-3xl text-lg text-white/50 leading-8">
              {project.description}
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 hover:border-white/30 rounded-full px-5 py-2 text-sm text-white/60 hover:text-white transition-all duration-300"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:opacity-80 bg-accent text-[#040404]"
                >
                  Live Website
                </a>
              )}
            </div>
          </div>

          <div className="h-px bg-[rgba(255,255,255,0.06)]" />

          <div className="grid gap-14 lg:grid-cols-[1fr_240px]">
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
                <span className="w-1 h-1 rounded-full shrink-0 bg-accent" />
                Overview
              </h2>

              {project.content.map((paragraph) => (
                <p key={paragraph} className="text-white/60 leading-8">
                  {paragraph}
                </p>
              ))}

              <ProjectGallery images={project.screenshots} />
            </div>

            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 flex items-center gap-3">
                <span className="w-1 h-1 rounded-full shrink-0 bg-accent" />
                Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
