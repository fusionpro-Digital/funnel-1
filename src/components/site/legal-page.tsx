import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import {
  Container,
  DisplayHeading,
  Lede,
  Rule,
  Section,
} from "@/components/site/primitives";
import type { LegalSection } from "@/content/legal";

/**
 * Shared shell for /privacy and /terms. The Figma had no legal pages, so the
 * layout follows the rest of the site: display heading, lede, then numbered
 * sections. Copy lives in @/content/legal.
 */
export function LegalPage({
  title,
  titleAccent,
  updated,
  intro,
  sections,
}: {
  title: string;
  titleAccent: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Section>
          <Container className="max-w-[820px]">
            <DisplayHeading as="h1" lead={title} accent={titleAccent} />
            <p className="mt-6 text-[14px] uppercase tracking-[0.08em] text-muted-foreground">
              Last updated {updated}
            </p>
            <Lede className="mt-8">{intro}</Lede>

            <Rule className="mt-12 sm:mt-14" />

            <div className="mt-12 flex flex-col gap-10 sm:mt-14 sm:gap-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-sans text-[20px] font-semibold tracking-[-0.015em] text-white sm:text-[24px]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.body.map((block, i) =>
                      Array.isArray(block) ? (
                        <ul
                          key={i}
                          className="flex flex-col gap-2.5 pl-1 text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px]"
                        >
                          {block.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-violet-400"
                              />
                              <span className="text-pretty">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          key={i}
                          className="text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px]"
                        >
                          {block}
                        </p>
                      ),
                    )}
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
