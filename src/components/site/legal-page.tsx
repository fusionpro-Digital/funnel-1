import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import {
  Container,
  DisplayHeading,
  Lede,
  Section,
} from "@/components/site/primitives";

/**
 * Shared shell for /privacy and /terms. The Figma had no legal pages, so
 * these exist only so the footer links resolve instead of 404ing — the body
 * copy is a stub for the client's own text.
 */
export function LegalPage({
  title,
  titleAccent,
  updated,
  intro,
}: {
  title: string;
  titleAccent: string;
  updated: string;
  intro: string;
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
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
