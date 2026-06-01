/** biome-ignore-all lint/performance/noImgElement: <future> */
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";

import GoHomeLink from "../components/go-home-link";
import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section title="projects">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 transition-all duration-700 hover:border-white/[0.14]">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,135,253,0.10),transparent_60%)]" />
                </div>

                <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 min-h-80">
                    <div className="space-y-8">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/30">
                        <span>0{index + 1}</span>

                        <span className="w-1 h-1 rounded-full bg-white/20" />

                        <span>{project.year}</span>

                        <span className="w-1 h-1 rounded-full bg-white/20" />

                        <span>{project.category}</span>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-3xl sm:text-5xl font-light tracking-tight transition-transform duration-700 group-hover:translate-x-1">
                          {project.title}
                        </h2>

                        <p className="max-w-2xl text-white/50 leading-8 text-[15px] sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((item) => (
                          <div
                            key={item}
                            className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-white/45"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-10">
                      <div className="flex items-center gap-2 text-sm text-white/35 transition-colors duration-500 group-hover:text-white/70">
                        <span>View Project</span>

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden border-t lg:border-l lg:border-t-0 border-white/6 min-h-65 lg:min-h-full">
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent z-10" />

                    <img
                      src={project.cover}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1600 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 z-20 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      <GoHomeLink />
    </PageTransition>
  );
}
