import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Renders a real asset once one exists at `src`, and a tinted placeholder
 * until then. The Figma exports were flat images, so no source files came
 * with the design — drop the real assets into /public/media and fill in the
 * `src` fields in src/content/site.ts to swap them in.
 */
export function Media({
  src,
  alt,
  tint,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: {
  src: string | null;
  alt: string;
  tint: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} (placeholder)`}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br p-4 text-center",
        tint,
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 8px)",
        }}
      />
      <ImageIcon aria-hidden className="size-5 text-white/55" />
      <span className="relative text-[11px] font-medium leading-tight text-white/65">
        {alt}
      </span>
    </div>
  );
}
