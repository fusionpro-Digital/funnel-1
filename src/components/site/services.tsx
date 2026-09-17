import { Media } from "@/components/site/media";
import {
  Container,
  CtaButton,
  DisplayHeading,
  Eyebrow,
  Lede,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { CTA_HREF, type Service, services } from "@/content/site";
import { cn } from "@/lib/utils";

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group rounded-2xl border border-violet-500/25 bg-[#150c22]/80 p-4 transition-colors duration-300 hover:border-violet-500/45 sm:p-5"
    >
      {/* The card artwork is landscape, so it sits full-width above the
          text at every size; a side-by-side portrait frame would crop away
          most of each image. */}
      <div className="flex h-full flex-col gap-4 sm:gap-5">
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg">
          <Media
            src={service.src}
            alt={`${service.title} ${service.titleAccent}`.replace(/[&:]/g, "").trim()}
            tint={service.tint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className={cn(
              "transition-transform duration-500 ease-out group-hover:scale-[1.04]",
              service.imagePosition,
            )}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-[21px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[23px]">
            {service.title}
            <span className="text-gradient-violet block font-display text-[21px] font-semibold italic sm:text-[23px]">
              {service.titleAccent}
            </span>
          </h3>
          <p className="mt-3 text-pretty text-[14px] leading-[1.55] text-muted-foreground">
            {service.body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <Section id="services" className="pt-4">
      <Container className="max-w-[1320px]">
        <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.015] px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <Eyebrow>{services.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={80} className="mt-7">
              <DisplayHeading
                lead={services.headline}
                accent={services.headlineAccent}
              />
            </Reveal>

            <Reveal delay={140} className="mt-6 max-w-[1060px]">
              <Lede>{services.body}</Lede>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={(index % 3) * 70}
              />
            ))}
          </ul>

          <Reveal delay={80} className="mt-12 text-center sm:mt-14">
            <p className="mx-auto max-w-[1200px] text-balance text-[19px] font-semibold leading-[1.45] text-violet-400 sm:text-[25px]">
              {services.statement.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-9 sm:mt-11">
              <CtaButton href={CTA_HREF}>{services.cta}</CtaButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
