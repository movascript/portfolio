"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
};

export function ProjectGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const lastTouchDistance = useRef<number | null>(null);
  const lastPanPoint = useRef<{ x: number; y: number } | null>(null);

  const isOpen = activeIndex !== null;

  useEffect(() => {
    setMounted(true);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <future>
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }

      if (e.key === "ArrowRight") {
        resetTransform();

        setActiveIndex((prev) => {
          if (prev === null) return null;

          return prev >= images.length - 1 ? 0 : prev + 1;
        });
      }

      if (e.key === "ArrowLeft") {
        resetTransform();

        setActiveIndex((prev) => {
          if (prev === null) return null;

          return prev <= 0 ? images.length - 1 : prev - 1;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, images.length]);

  const resetTransform = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });

    lastTouchDistance.current = null;
    lastPanPoint.current = null;
  };

  // biome-ignore lint/suspicious/noExplicitAny: <future>
  const getTouchDistance = (touches: any) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;

    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      lastTouchDistance.current = getTouchDistance(e.touches);
    }

    if (e.touches.length === 1 && scale > 1) {
      lastPanPoint.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      e.preventDefault();

      const distance = getTouchDistance(e.touches);

      if (lastTouchDistance.current) {
        const delta = distance / lastTouchDistance.current;

        setScale((prev) => {
          const next = prev * delta;

          return Math.min(Math.max(next, 1), 5);
        });
      }

      lastTouchDistance.current = distance;
    }

    if (e.touches.length === 1 && scale > 1) {
      e.preventDefault();

      const touch = e.touches[0];

      if (lastPanPoint.current) {
        const dx = touch.clientX - lastPanPoint.current.x;
        const dy = touch.clientY - lastPanPoint.current.y;

        setTranslate((prev) => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }

      lastPanPoint.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    }
  };

  const handleTouchEnd = () => {
    lastTouchDistance.current = null;
    lastPanPoint.current = null;

    if (scale <= 1) {
      setTranslate({ x: 0, y: 0 });
    }
  };

  return (
    <>
      <div className="grid gap-6 pt-8 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => {
              resetTransform();
              setActiveIndex(index);
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/2
            "
          >
            <div className="aspect-video w-full">
              {/** biome-ignore lint/performance/noImgElement: <no time for now> */}
              <img
                src={image}
                alt=""
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                  transition-transform
                  duration-500
                  group-hover:scale-[1.015]
                "
              />
            </div>
          </button>
        ))}
      </div>

      {mounted &&
        isOpen &&
        activeIndex !== null &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-1000
              overflow-hidden
              bg-black/95
              backdrop-blur-xl
              animate-in
              fade-in
              duration-200
            "
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-xl
                text-white/70
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <X />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    resetTransform();

                    setActiveIndex((prev) => {
                      if (prev === null) return null;

                      return prev <= 0 ? images.length - 1 : prev - 1;
                    });
                  }}
                  className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    hidden
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white/60
                    transition
                    hover:bg-white/10
                    hover:text-white
                    md:block
                  "
                >
                  <ArrowLeft />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    resetTransform();

                    setActiveIndex((prev) => {
                      if (prev === null) return null;

                      return prev >= images.length - 1 ? 0 : prev + 1;
                    });
                  }}
                  className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    hidden
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white/60
                    transition
                    hover:bg-white/10
                    hover:text-white
                    md:block
                  "
                >
                  <ArrowRight />
                </button>
              </>
            )}

            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                overflow-hidden
                touch-none
                p-4
              "
            >
              {/** biome-ignore lint/performance/noImgElement: <no time for now> */}
              {/** biome-ignore lint/a11y/noStaticElementInteractions: <TODO> */}
              <img
                src={images[activeIndex]}
                alt=""
                draggable={false}
                onDoubleClick={() => {
                  if (scale > 1) {
                    resetTransform();
                  } else {
                    setScale(2);
                  }
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="
                  max-h-[80vh]
                  max-w-[80wh]
                  select-none
                  object-contain
                  will-change-transform
                  transition-transform
                  duration-75
                "
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
