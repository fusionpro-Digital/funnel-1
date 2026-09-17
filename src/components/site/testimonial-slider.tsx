"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import type { Testimonial } from "@/content/site";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD_PX = 50;

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const arrowButton = cn(
  "grid size-11 shrink-0 place-items-center rounded-full border border-violet-500/35 bg-violet-500/[0.08] text-white",
  "transition-colors duration-300 hover:border-violet-400/70 hover:bg-violet-500/20",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

/**
 * One testimonial at a time, centred. Every slide is rendered into the same
 * grid cell so the frame is as tall as the longest quote and never jumps,
 * and all quotes stay in the server HTML.
 *
 * Autoplay advances every 7s while the slider is on screen, pauses while it
 * is hovered or holds focus, stops for good once the visitor navigates
 * themselves, and never starts when reduced motion is requested.
 */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [userTookControl, setUserTookControl] = React.useState(false);
  const [inView, setInView] = React.useState(false);
  const regionRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);

  const count = items.length;
  const autoplaying =
    inView && !userTookControl && !hovered && !focused && count > 1;

  // Only rotate while the slider is on screen, so visitors arrive at the
  // first testimonial rather than somewhere mid-rotation.
  React.useEffect(() => {
    const node = regionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!autoplaying) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, autoplaying, count]);

  function show(index: number) {
    setUserTookControl(true);
    setActive((index + count) % count);
  }

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="mx-auto w-full max-w-[860px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          show(active + 1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          show(active - 1);
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX) {
          show(active + (deltaX < 0 ? 1 : -1));
        }
      }}
    >
      <div aria-live={autoplaying ? "off" : "polite"} className="grid">
        {items.map((item, index) => {
          const isActive = index === active;

          return (
            <figure
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={cn(
                "flex flex-col items-center justify-center rounded-3xl border border-violet-500/20 bg-[#0e0916]/90 px-6 py-10 text-center [grid-area:1/1] sm:px-14 sm:py-14",
                "transition-[opacity,transform] duration-500 ease-out",
                isActive
                  ? "translate-x-0 opacity-100"
                  : cn(
                      "pointer-events-none opacity-0",
                      index < active ? "-translate-x-6" : "translate-x-6",
                    ),
              )}
            >
              <Quote
                aria-hidden
                className="size-9 fill-violet-500/20 text-violet-400/80 sm:size-11"
              />

              <blockquote className="mt-6 text-pretty text-[17px] leading-[1.65] text-white/90 sm:text-[21px]">
                {item.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 text-left">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element -- fixed 48px avatar, no responsive variants needed
                  <img
                    src={item.avatar}
                    alt=""
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-violet-600/30 text-[14px] font-semibold text-violet-200 ring-1 ring-inset ring-violet-400/25"
                  >
                    {initials(item.name)}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-[16px] font-medium text-white">
                    {item.name}
                  </span>
                  <span className="block text-pretty text-[14px] leading-snug text-muted-foreground">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => show(active - 1)}
          className={arrowButton}
        >
          <ChevronLeft aria-hidden className="size-5" />
        </button>

        <div className="flex items-center">
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Show testimonial ${index + 1} of ${count}, ${item.name}`}
                aria-current={isActive || undefined}
                onClick={() => show(index)}
                className="group grid h-7 place-items-center px-[3px] focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-[width,background-color] duration-300",
                    "group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
                    isActive
                      ? "w-6 bg-violet-400"
                      : "w-2 bg-white/25 group-hover:bg-white/50",
                  )}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => show(active + 1)}
          className={arrowButton}
        >
          <ChevronRight aria-hidden className="size-5" />
        </button>
      </div>
    </div>
  );
}
