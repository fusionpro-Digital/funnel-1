import { X } from "lucide-react";

import {
  Container,
  CtaButton,
  DisplayHeading,
  Eyebrow,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CTA_HREF, problems } from "@/content/site";
import { cn } from "@/lib/utils";

function ProblemCard({
  children,
  className,
  delay,
}: {
  children: string;
  className?: string;
  delay: number;
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      // 1px gradient frame: hot red along the top edge, fading to nothing
      // by the bottom, matching the comps.
      className={cn(
        "rounded-2xl bg-[linear-gradient(to_bottom,rgba(239,68,68,0.6),rgba(239,68,68,0.1)_45%,rgba(255,255,255,0.05))] p-px",
        className,
      )}
    >
      <div className="flex h-full items-center gap-5 rounded-[15px] bg-[#120b14] p-6 sm:gap-7 sm:p-8">
        <span
          aria-hidden
          className="grid size-12 shrink-0 place-items-center rounded-full bg-red-500/20 ring-1 ring-inset ring-red-500/35 sm:size-[56px]"
        >
          <span className="grid size-9 place-items-center rounded-full bg-red-500 sm:size-10">
            <X className="size-5 text-white sm:size-[22px]" strokeWidth={3} />
          </span>
        </span>
        <p className="text-pretty text-[16px] leading-[1.45] text-white/95 sm:text-[20px]">
          {children}
        </p>
      </div>
    </Reveal>
  );
}

export function Problems() {
  const [first, second, third, fourth, fifth] = problems.items;

  return (
    <Section id="problems" className="pt-4 sm:pt-6">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{problems.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80} className="mt-7">
            <DisplayHeading
              lead={problems.headline}
              accent={problems.headlineAccent}
            />
          </Reveal>

          <Reveal delay={140} className="mt-6 max-w-[1180px]">
            <Lede>{problems.body}</Lede>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2">
          <ProblemCard delay={0}>{first}</ProblemCard>
          <ProblemCard delay={70}>{second}</ProblemCard>
          <ProblemCard delay={140}>{third}</ProblemCard>
          <ProblemCard delay={210}>{fourth}</ProblemCard>
          <ProblemCard delay={280} className="lg:col-span-2">
            {fifth}
          </ProblemCard>
        </ul>

        <Reveal delay={120} className="flex flex-col items-center">
          <p className="mx-auto mt-10 max-w-[1000px] text-balance text-center text-[16px] font-semibold text-white sm:mt-12 sm:text-[20px]">
            {problems.closing}
          </p>

          <div className="mt-8 sm:mt-10">
            <CtaButton href={CTA_HREF}>{problems.cta}</CtaButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
