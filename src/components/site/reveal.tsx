"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Fades/slides children in the first time they scroll into view.
 *
 * The hidden state is applied by CSS (`.js [data-reveal="pending"]`, see
 * globals.css) rather than React state, which means:
 *   - the server HTML is complete and visible, so crawlers and no-JS
 *     visitors get the whole page;
 *   - the inline script in the document head adds `.js` before first paint,
 *     so above-the-fold items never flash in before hiding;
 *   - no setState-in-effect, and no hydration mismatch.
 *
 * This effect only talks to the DOM node, so there is nothing to re-render.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in ms. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.reveal = "visible";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal="pending"
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
