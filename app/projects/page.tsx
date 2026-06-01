"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import GoHomeLink from "../components/go-home-link";
import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section title="projects">
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <div className="border rounded-3xl p-8 sm:p-10 transition-all duration-500 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.01)] hover:border-accent-border hover:bg-accent-glow">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-light transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h2>

                  <p className="max-w-2xl text-white/50 leading-8">
                    {project.description}
                  </p>

                  <div className="pt-2 text-sm flex items-center gap-1 transition-all duration-300 text-[rgba(255,255,255,0.25)]">
                    <span className="group-hover:text-accent transition-colors duration-300">
                      View project
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:text-accent transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <GoHomeLink />
    </PageTransition>
  );
}
