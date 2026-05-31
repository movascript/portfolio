"use client";

import type React from "react";
import {
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  size: number;

  vx: number;
  vy: number;

  alpha: number;
  targetAlpha: number;

  offsetX: number;
  offsetY: number;

  magnetism: number;
};

interface ParticlesCanvasProps extends ComponentPropsWithoutRef<"div"> {
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
  refresh?: boolean;
}

const hexToRgb = (hex: string) => {
  let normalized = hex.replace("#", "");

  if (normalized.length === 3) {
    normalized = normalized
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const num = Number.parseInt(normalized, 16);

  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

export const ParticlesCanvas: React.FC<ParticlesCanvasProps> = ({
  className,

  quantity = 30,
  staticity = 40,
  ease = 60,
  size = 1,
  color = "#666",

  vx = 0,
  vy = 0,

  refresh = false,

  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const particlesRef = useRef<Particle[]>([]);

  const animationFrameRef = useRef<number | null>(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const canvasSizeRef = useRef({
    width: 0,
    height: 0,
  });

  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const dpr = useMemo(() => {
    if (typeof window === "undefined") {
      return 1;
    }

    return Math.min(window.devicePixelRatio, 1.5);
  }, []);

  const rgb = useMemo(() => hexToRgb(color), [color]);

  const createParticle = (): Particle => {
    const { width, height } = canvasSizeRef.current;

    return {
      x: Math.random() * width,
      y: Math.random() * height,

      size: Math.random() * 1.5 + size,

      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,

      alpha: 0,
      targetAlpha: Math.random() * 0.5 + 0.1,

      offsetX: 0,
      offsetY: 0,

      magnetism: Math.random() * 2 + 0.5,
    };
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = contextRef.current;

    if (!canvas || !container || !context) {
      return;
    }

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvasSizeRef.current = {
      width,
      height,
    };

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    particlesRef.current = Array.from({ length: quantity }, createParticle);
  };

  const drawParticle = (
    context: CanvasRenderingContext2D,
    particle: Particle,
  ) => {
    context.save();

    context.translate(particle.offsetX, particle.offsetY);

    context.beginPath();

    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

    context.fillStyle = `rgba(${rgb.join(",")}, ${particle.alpha})`;

    context.fill();

    context.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    contextRef.current = canvas.getContext("2d");

    setupCanvas();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current.x =
        event.clientX - rect.left - canvasSizeRef.current.width / 2;

      mouseRef.current.y =
        event.clientY - rect.top - canvasSizeRef.current.height / 2;
    };

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setupCanvas();
      }, 150);
    };

    let lastFrame = 0;

    const FPS = 30;

    const frameDelay = 1000 / FPS;

    const animate = (time: number) => {
      if (document.hidden) {
        animationFrameRef.current = requestAnimationFrame(animate);

        return;
      }

      if (time - lastFrame < frameDelay) {
        animationFrameRef.current = requestAnimationFrame(animate);

        return;
      }

      lastFrame = time;

      const context = contextRef.current;

      if (!context) {
        return;
      }

      const { width, height } = canvasSizeRef.current;

      context.clearRect(0, 0, width, height);

      for (const particle of particlesRef.current) {
        particle.x += particle.vx + vx;
        particle.y += particle.vy + vy;

        particle.offsetX +=
          (mouseRef.current.x / (staticity / particle.magnetism) -
            particle.offsetX) /
          ease;

        particle.offsetY +=
          (mouseRef.current.y / (staticity / particle.magnetism) -
            particle.offsetY) /
          ease;

        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.05;

        drawParticle(context, particle);

        if (
          particle.x < -particle.size ||
          particle.x > width + particle.size ||
          particle.y < -particle.size ||
          particle.y > height + particle.size
        ) {
          Object.assign(particle, createParticle());
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("resize", handleResize);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [color, dpr, ease, quantity, refresh, rgb, size, staticity, vx, vy]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0", className)}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
