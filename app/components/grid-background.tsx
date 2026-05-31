import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="grid-bg absolute inset-0" />

      <div className="glow absolute inset-0 opacity-40" />
    </div>
  );
}
