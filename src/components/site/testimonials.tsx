import {
  Container,
  DisplayHeading,
  Eyebrow,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { TestimonialSlider } from "@/components/site/testimonial-slider";
import { testimonials, testimonialsIntro } from "@/content/site";

export function Testimonials() {
  return (
    <Section aria-label="Client testimonials">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <Reveal>
            <Eyebrow>{testimonialsIntro.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80} className="mt-7">
            <DisplayHeading
              lead={testimonialsIntro.headline}
              accent={testimonialsIntro.headlineAccent}
            />
          </Reveal>

          <Reveal delay={140} className="mt-6 max-w-[1180px]">
            <Lede>{testimonialsIntro.body}</Lede>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <TestimonialSlider items={testimonials} />
        </Reveal>
      </Container>
    </Section>
  );
}
