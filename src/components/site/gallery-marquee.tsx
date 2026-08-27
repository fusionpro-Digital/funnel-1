import { Media } from "@/components/site/media";
import { type GalleryItem, galleryRowOne, galleryRowTwo } from "@/content/site";
import { cn } from "@/lib/utils";

function Row({
  items,
  reverse = false,
  duration,
}: {
  items: GalleryItem[];
  reverse?: boolean;
  duration: string;
}) {
  // The track holds the list twice so the -50% keyframe lands on an
  // identical frame and the loop has no visible seam.
  const track = [...items, ...items];

  return (
    <div className="group/row relative flex overflow-hidden">
      <ul
        className={cn(
          "flex w-max shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          // Pausing on hover lets a visitor actually look at a piece.
          "group-hover/row:[animation-play-state:paused]",
          "motion-reduce:animate-none",
        )}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {track.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            aria-hidden={index >= items.length}
            className="relative aspect-[4/5] w-[220px] shrink-0 overflow-hidden rounded-xl sm:w-[280px] lg:w-[325px]"
          >
            <Media
              src={item.src}
              alt={item.label}
              tint={item.tint}
              sizes="325px"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GalleryMarquee() {
  return (
    <section aria-label="Selected client work" className="relative py-6">
      {/* Tiles run to the viewport edge and clip hard, as in the comps. */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <Row items={galleryRowOne} duration="70s" />
        <Row items={galleryRowTwo} duration="85s" reverse />
      </div>
    </section>
  );
}
