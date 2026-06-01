const Badge = ({ children }: { children: string }) => {
  return (
    <div className="rounded-full border px-5 py-3 text-sm transition-all duration-300 cursor-default text-[rgba(255,255,255,0.6)] border-[rgba(255,255,255,0.08)] hover:border-accent-border hover:text-accent">
      {children}
    </div>
  );
};

export default Badge;
