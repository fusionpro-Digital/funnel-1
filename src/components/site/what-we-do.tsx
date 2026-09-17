import {
  ArrowRight,
  CalendarCheck,
  Check,
  LifeBuoy,
  type LucideIcon,
  Magnet,
  PenTool,
  Workflow,
} from "lucide-react";

import {
  Container,
  DisplayHeading,
  Eyebrow,
  Lede,
  Rule,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { type Solution, type Stage, whatWeDo } from "@/content/site";

const stageIcons: Record<Stage, LucideIcon> = {
  Design: PenTool,
  Capture: Magnet,
  Convert: CalendarCheck,
  Automate: Workflow,
};

function SolutionCard({
  solution,
  delay,
}: {
  solution: Solution;
  delay: number;
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="flex rounded-2xl border border-violet-500/25 bg-[#150c22]/80 p-6 transition-colors duration-300 hover:border-violet-500/45 sm:p-8"
    >
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span
            aria-hidden
            className="text-gradient-violet font-display text-[44px] font-semibold italic leading-none sm:text-[52px]"
          >
            {solution.number}
          </span>
          <ul className="flex flex-wrap justify-end gap-1.5">
            {solution.stages.map((stage) => (
              <li
                key={stage}
                className="rounded-full bg-violet-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-violet-200 ring-1 ring-inset ring-violet-500/30 sm:text-[12px]"
              >
                {stage}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-6 text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[28px]">
          {solution.title}
          <span className="text-gradient-violet block font-display font-semibold italic">
            {solution.titleAccent}
          </span>
        </h3>

        <p className="mt-3 text-pretty text-[15px] leading-[1.55] text-muted-foreground sm:text-[16px]">
          {solution.body}
        </p>

        <div
          aria-hidden
          className="mt-6 h-px bg-[linear-gradient(to_right,rgba(139,92,246,0.4),transparent)]"
        />

        {/* Two columns while the cards stack full-width on tablets; one
            column once they sit three-up. */}
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {solution.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[15px] leading-[1.4] text-white/90 sm:text-[16px]"
            >
              <span
                aria-hidden
                className="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-violet-500/15 ring-1 ring-inset ring-violet-500/40"
              >
                <Check className="size-3 text-violet-300" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function WhatWeDo() {
  const lastStage = whatWeDo.stages.length - 1;

  return (
    <Section id="what-we-do" className="pt-4 sm:pt-6">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80} className="mt-7">
            <DisplayHeading
              lead={whatWeDo.headline}
              accent={whatWeDo.headlineAccent}
            />
          </Reveal>

          <Reveal delay={140} className="mt-6 max-w-[1060px]">
            <Lede>{whatWeDo.body}</Lede>
          </Reveal>

          <Reveal delay={200} className="mt-10 sm:mt-12">
            <ol
              aria-label="How FusionPro grows your business"
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-4"
            >
              {whatWeDo.stages.map((stage, index) => {
                const Icon = stageIcons[stage];
                return (
                  <li key={stage} className="flex items-center gap-2 sm:gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/35 bg-violet-500/[0.08] px-4 py-2 text-[15px] font-semibold text-white sm:gap-2.5 sm:px-6 sm:py-3 sm:text-[19px]">
                      <Icon
                        aria-hidden
                        className="size-4 text-violet-300 sm:size-5"
                      />
                      {stage}
                    </span>
                    {index < lastStage && (
                      <ArrowRight
                        aria-hidden
                        className="size-4 text-violet-400/70 sm:size-5"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {whatWeDo.solutions.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              delay={index * 70}
            />
          ))}
        </ul>

        <Reveal className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-violet-500/25 bg-[#150c22]/80 px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-4 sm:px-8 sm:text-left">
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-500/15 ring-1 ring-inset ring-violet-500/40"
          >
            <LifeBuoy className="size-5 text-violet-300" />
          </span>
          <p className="text-pretty text-[15px] leading-[1.5] text-muted-foreground sm:text-[18px]">
            <span className="font-semibold text-white">
              {whatWeDo.support.title}
            </span>{" "}
            {whatWeDo.support.body}
          </p>
        </Reveal>

        <Rule className="mt-14 sm:mt-16" />
      </Container>
    </Section>
  );
}
