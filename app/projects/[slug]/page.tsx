import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageTransition } from "@/app/components/page-transition";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
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
    title: `${project.title} • Mohsen Vahedi`,
    description: project.description,
  };
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto py-24">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-white/40 hover:text-white transition mb-12"
        >
          ← Back to projects
        </Link>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/40">
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
                className="border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 hover:border-white/30 transition"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 hover:border-white/30 transition"
                >
                  Live Website
                </a>
              )}
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="grid gap-14 lg:grid-cols-[1fr_240px]">
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40">
                Overview
              </h2>

              {project.content.map((paragraph) => (
                <p key={paragraph} className="text-white/60 leading-8">
                  {paragraph}
                </p>
              ))}

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <div className="aspect-video rounded-3xl border border-white/10 bg-white/3" />
                <div className="aspect-video rounded-3xl border border-white/10 bg-white/3" />
                <div className="aspect-video rounded-3xl border border-white/10 bg-white/3" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40">
                Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 bg-white/[0.02]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
