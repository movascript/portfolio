import { PageTransition } from "../components/page-transition";
import { Section } from "../components/section";

export default function ContactPage() {
  return (
    <PageTransition>
      <Section title="contact">
        <div className="max-w-3xl space-y-14">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-light leading-tight">
              Somewhere between
              <br />
              silence and signal.
            </h1>

            <p className="text-white/50 leading-8 max-w-2xl">
              I’m always interested in meaningful projects, creative frontend
              systems, startup ideas, and ambitious digital experiences.
            </p>
          </div>

          <div className="space-y-6 pt-10">
            <a
              href="mailto:movascript@gmail.com"
              className="block text-lg text-white/70 hover:text-white transition"
            >
              movascript@gmail.com
            </a>

            <a
              href="https://github.com/movascript"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white/70 hover:text-white transition"
            >
              github.com/movascript
            </a>

            {/*
            <a
              href="https://linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            */}

            {/*
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              telegram
            </a>
            */}
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
