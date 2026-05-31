import Link from "next/link";

import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

const projects = [
  {
    slug: "messaging-platform",
    title: "Messaging Platform",
    description:
      "Real-time communication platform built with scalable architecture.",
  },
  {
    slug: "developer-dashboard",
    title: "Developer Dashboard",
    description: "Minimal analytics dashboard with animated interactions.",
  },
  {
    slug: "ai-workspace",
    title: "AI Workspace",
    description: "Clean productivity experience focused on speed and clarity.",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section title="projects">
        <div className="space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block"
            >
              <div className="group border border-white/10 bg-white/[0.02] rounded-3xl p-8 sm:p-10 hover:border-white/20 hover:bg-white/[0.05] transition duration-500">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-light transition duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h2>

                  <p className="max-w-2xl text-white/50 leading-8">
                    {project.description}
                  </p>

                  <div className="pt-2 text-sm text-white/30">
                    View project →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}
