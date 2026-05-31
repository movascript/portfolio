import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function ContactPage() {
  return (
    <PageTransition>
      <Section title="contact">
        <div className="max-w-3xl space-y-10">
          <h1 className="text-4xl sm:text-6xl font-light leading-tight">
            Let’s build something meaningful.
          </h1>

          <p className="text-white/50 leading-8 max-w-2xl">
            Available for freelance work, collaborations, and frontend-focused
            product development.
          </p>

          <div className="space-y-4 pt-8">
            <a
              href="mailto:hello@example.com"
              className="block text-white/70 hover:text-white transition"
            >
              hello@example.com
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition"
            >
              github
            </a>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
