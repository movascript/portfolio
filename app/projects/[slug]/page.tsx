import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageTransition } from "@/app/components/page-transition";

type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  tech: string[];
};

const projects: Project[] = [
  {
    slug: "messaging-platform",
    title: "Messaging Platform",
    description:
      "Real-time communication platform built with scalable architecture.",
    content:
      "A modern messaging experience focused on performance, scalability, and clean interaction design. Built with real-time technologies and optimized rendering.",
    tech: ["Next.js", "TypeScript", "Socket.io", "Tailwind"],
  },
  {
    slug: "developer-dashboard",
    title: "Developer Dashboard",
    description: "Minimal analytics dashboard with animated interactions.",
    content:
      "An elegant dashboard interface designed for developers with smooth transitions, charts, and activity tracking.",
    tech: ["React", "Framer Motion", "Tailwind"],
  },
  {
    slug: "ai-workspace",
    title: "AI Workspace",
    description: "Clean productivity experience focused on speed and clarity.",
    content:
      "A minimalist AI-focused workspace with distraction-free design, command palette interactions, and fast workflows.",
    tech: ["Next.js", "Zustand", "OpenAI API"],
  },
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} • Portfolio`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-white/40 hover:text-white transition mb-12"
        >
          ← Back to projects
        </Link>

        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/40">
              Project
            </div>

            <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
              {project.title}
            </h1>

            <p className="max-w-2xl text-lg text-white/50 leading-8">
              {project.description}
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40">
                Overview
              </h2>

              <p className="text-white/60 leading-8">{project.content}</p>

              <p className="text-white/40 leading-8">
                This page is intentionally minimal to match the space-inspired
                aesthetic of the portfolio. Soft borders, subtle contrast, and
                large typography keep the focus on the content itself.
              </p>
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
