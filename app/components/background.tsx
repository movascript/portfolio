import { cn } from "@/lib/utils";

import { GridBackground } from "./grid-background";
import { ParticlesCanvas } from "./particles-canvas";

interface BackgroundProps {
  className?: string;
}

export function Background({ className }: BackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 overflow-hidden",
        className,
      )}
    >
      <GridBackground />

      <ParticlesCanvas />
    </div>
  );
}
