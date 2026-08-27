import {
  Container,
  CtaButton,
  DisplayHeading,
  Lede,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CTA_HREF, hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative pb-14 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/85 sm:text-[17px]">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-6 sm:mt-8">
            <DisplayHeading
              as="h1"
              lead={hero.headline}
              accent={hero.headlineAccent}
            />
          </Reveal>

          <Reveal delay={160} className="mt-7 max-w-[1220px] space-y-1 sm:mt-8">
            {hero.body.map((paragraph) => (
              <Lede key={paragraph}>{paragraph}</Lede>
            ))}
          </Reveal>

          <Reveal delay={240} className="mt-9 sm:mt-10">
            <CtaButton href={CTA_HREF}>{hero.cta}</CtaButton>
          </Reveal>

          <Reveal delay={300} className="mt-6 sm:mt-7">
            <p className="text-[15px] text-white/90 sm:text-[19px]">
              {hero.reassurance}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
