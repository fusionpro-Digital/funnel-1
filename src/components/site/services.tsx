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

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group rounded-2xl border border-violet-500/25 bg-[#150c22]/80 p-5 transition-colors duration-300 hover:border-violet-500/45 sm:p-6"
    >
      {/* Side-by-side from sm up, as in the comps. On phones the 44% image
          would starve the text column, so it drops below as a wide crop. */}
      <div className="flex h-full flex-col gap-5 sm:flex-row sm:gap-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[29px]">
            {service.title}
            <span className="text-gradient-violet block font-display text-[24px] font-semibold italic sm:text-[29px]">
              {service.titleAccent}
            </span>
          </h3>
          <p className="mt-4 text-pretty text-[14px] leading-[1.55] text-muted-foreground sm:text-[15px]">
            {service.body}
          </p>
        </div>

        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl sm:aspect-[4/5] sm:w-[44%] sm:self-start">
          <Media
            src={service.src}
            alt={`${service.title} ${service.titleAccent}`.replace(/[&:]/g, "").trim()}
            tint={service.tint}
            sizes="(max-width: 1024px) 40vw, 250px"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
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

          <ul className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2">
            {services.items.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={(index % 2) * 70}
              />
            ))}
          </ul>

          <Reveal className="mt-5 rounded-2xl border border-violet-500/25 bg-[#150c22]/80 px-6 py-10 text-center sm:px-10 sm:py-12">
            <h3 className="font-display text-[28px] font-semibold italic leading-tight text-white sm:text-[36px]">
              {services.wide.title}
            </h3>
            <Lede className="mx-auto mt-4 max-w-[900px]">
              {services.wide.body}
            </Lede>
          </Reveal>

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
