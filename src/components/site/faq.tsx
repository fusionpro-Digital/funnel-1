import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Container,
  DisplayHeading,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <DisplayHeading lead={faq.headline} accent={faq.headlineAccent} />
          </Reveal>

          <Reveal delay={100} className="mt-6 max-w-[1140px]">
            <Lede>{faq.body}</Lede>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-12 sm:mt-14">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="gap-4"
          >
            {faq.items.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                // Violet 1px frame, brightest along the top edge. The
                // not-last:border-b-0 cancels AccordionItem's own divider,
                // which would otherwise draw a second line under each card.
                className="mb-4 rounded-2xl border-0 bg-[linear-gradient(to_bottom,rgba(139,92,246,0.6),rgba(139,92,246,0.08)_55%,rgba(255,255,255,0.03))] p-px not-last:border-b-0 last:mb-0"
              >
                <div className="rounded-[15px] bg-[#0f0817] px-6 py-1 sm:px-8">
                  <AccordionTrigger className="items-center py-6 text-[18px] font-semibold text-white hover:no-underline focus-visible:ring-violet-400/50 sm:text-[21px] **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-violet-400">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pr-8 text-pretty text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]">
                    {item.a}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
