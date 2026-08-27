import {
  Container,
  CtaButton,
  DisplayHeading,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CTA_HREF, finalCta } from "@/content/site";

export function FinalCta() {
  return (
    <Section id="contact" className="pt-0 sm:pt-0">
      <Container>
        <Reveal className="rounded-[26px] bg-[linear-gradient(140deg,rgba(139,92,246,0.6),rgba(139,92,246,0.1)_35%,rgba(255,255,255,0.04))] p-px">
          <div className="rounded-[25px] bg-[#0c0713] px-6 py-14 text-center sm:px-12 sm:py-16">
            <DisplayHeading
              lead={finalCta.headline}
              accent={finalCta.headlineAccent}
            />

            <Lede className="mx-auto mt-7 max-w-[1080px]">
              {finalCta.body}
            </Lede>

            <div className="mt-9 sm:mt-10">
              <CtaButton href={CTA_HREF} className="sm:text-[16px]">
                {finalCta.cta}
              </CtaButton>
            </div>

            <p className="mx-auto mt-7 max-w-[980px] text-balance text-[14px] text-white/90 sm:text-[16px]">
              {finalCta.fineprint}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
