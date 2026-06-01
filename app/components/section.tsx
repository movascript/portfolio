"use client";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="max-w-5xl mx-auto py-32">
      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full shrink-0 bg-accent" />
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
};
