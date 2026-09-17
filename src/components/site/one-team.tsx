import type * as React from "react";

import {
  Container,
  DisplayHeading,
  Lede,
  Rule,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { oneTeam, type PlatformLogo, platformLogos } from "@/content/site";
import { cn } from "@/lib/utils";

const splitAt = Math.ceil(platformLogos.length / 2);
const logoRows = [
  { logos: platformLogos.slice(0, splitAt), reverse: false },
  { logos: platformLogos.slice(splitAt), reverse: true },
];

function LogoTile({ logo }: { logo: PlatformLogo }) {
  return (
    <div className="flex h-[76px] w-[150px] items-center justify-center rounded-xl bg-white px-5 sm:h-[86px] sm:w-[190px]">
      {logo.src ? (
        // eslint-disable-next-line @next/next/no-img-element -- platform logos are fixed-size marks, not responsive art
        <img
          src={logo.src}
          alt={logo.name}
          className="h-[46px] w-auto max-w-full object-contain"
        />
      ) : (
        <span className="text-center text-[12px] font-semibold uppercase leading-tight tracking-wide text-zinc-800 sm:text-[13px]">
          {logo.name}
        </span>
      )}
    </div>
  );
}

/**
 * One infinitely scrolling row. The list is rendered twice and the track
 * slides by -50%, so the second copy lands exactly where the first began.
 * Spacing is padding on each item rather than flex `gap`, otherwise the
 * loop would jump by half a gap. With reduced motion the duplicate copy is
 * dropped and the row wraps into a static grid.
 */
function LogoMarquee({
  logos,
  reverse,
}: {
  logos: PlatformLogo[];
  reverse: boolean;
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
      <ul
        style={{ "--marquee-duration": `${logos.length * 4}s` } as React.CSSProperties}
        className={cn(
          "flex w-max hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 sm:motion-reduce:gap-y-4",
        )}
      >
        {[...logos, ...logos].map((logo, index) => {
          const isCopy = index >= logos.length;
          return (
            <li
              key={`${logo.id}-${index}`}
              aria-hidden={isCopy || undefined}
              className={cn(
                "shrink-0 px-1.5 sm:px-2",
                isCopy && "motion-reduce:hidden",
              )}
            >
              <LogoTile logo={logo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function OneTeam() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <DisplayHeading
              lead={oneTeam.headline}
              accent={oneTeam.headlineAccent}
            />
          </Reveal>

          <Reveal delay={100} className="mt-6 max-w-[1180px]">
            <Lede>{oneTeam.body}</Lede>
          </Reveal>

          <Reveal delay={160} className="mt-14 w-full sm:mt-16">
            <p className="text-[19px] text-white/70 sm:text-[24px]">
              {oneTeam.logosLabel}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:gap-4">
              {logoRows.map((row) => (
                <LogoMarquee
                  key={row.logos[0].id}
                  logos={row.logos}
                  reverse={row.reverse}
                />
              ))}
            </div>
          </Reveal>
        </div>

        <Rule className="mt-14 sm:mt-16" />
      </Container>
    </Section>
  );
}
