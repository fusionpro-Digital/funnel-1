"use client";

import * as React from "react";
import { Play, Volume2 } from "lucide-react";

import { Media } from "@/components/site/media";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { type VideoTestimonial, videoTestimonials } from "@/content/site";

function VideoCard({
  item,
  index,
  delay,
}: {
  item: VideoTestimonial;
  index: number;
  delay: number;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <Reveal
      as="li"
      delay={delay}
      className="flex flex-col rounded-2xl border border-violet-500/20 bg-[#110b17]/90 p-4 sm:p-5"
    >
      {/* Inset from the card edge, as in the comps — the clip is portrait
          and sits in a wider card. */}
      <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-xl bg-black sm:w-[72%] lg:w-[68%]">
        {item.videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={item.videoSrc}
              poster={item.poster ?? undefined}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="size-full object-cover"
            />
            <button
              type="button"
              onClick={togglePlay}
              aria-label={`${playing ? "Pause" : "Play"} client testimonial ${index + 1}`}
              className="absolute inset-0 grid place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-400"
            >
              <span
                className={`grid size-12 place-items-center rounded-full bg-violet-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-violet-500 ${
                  playing ? "opacity-0" : "opacity-100"
                }`}
              >
                <Play className="size-5 translate-x-px fill-white text-white" />
              </span>
            </button>
          </>
        ) : (
          <>
            <Media
              src={item.poster}
              alt={`Client testimonial ${index + 1}`}
              tint={item.tint}
              sizes="(max-width: 768px) 80vw, 260px"
            />
            {/* Decorative until a real videoSrc is supplied — rendering a
                button here would promise playback the page cannot deliver. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 grid place-items-center"
            >
              <span className="grid size-12 place-items-center rounded-full bg-violet-600 shadow-lg">
                <Play className="size-5 translate-x-px fill-white text-white" />
              </span>
            </span>
          </>
        )}

        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2.5 right-2.5 grid size-7 place-items-center rounded-md bg-black/55 backdrop-blur-sm"
        >
          <Volume2 className="size-4 text-violet-300" />
        </span>
      </div>

      <blockquote className="mt-5 text-balance px-1 text-center text-[14px] leading-[1.5] text-white/95 sm:text-[15px]">
        {item.quote}
      </blockquote>
    </Reveal>
  );
}

export function VideoTestimonials() {
  if (!videoTestimonials.items || videoTestimonials.items.length === 0) {
    return null;
  }

  return (
    <Section id="results">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{videoTestimonials.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80} className="mt-7">
            <DisplayHeading
              lead={videoTestimonials.headline}
              accent={videoTestimonials.headlineAccent}
            />
          </Reveal>

          <Reveal delay={140} className="mt-6 max-w-[1140px]">
            <Lede>{videoTestimonials.body}</Lede>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {videoTestimonials.items.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
              delay={index * 70}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
