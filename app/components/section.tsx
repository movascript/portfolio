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
        <h2 className="text-xs uppercase tracking-[0.4em] text-white/40">
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </section>
  );
};
