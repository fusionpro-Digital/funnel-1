import {
  Container,
  DisplayHeading,
  Lede,
  Rule,
  Section,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { clientLogos, oneTeam } from "@/content/site";

export function OneTeam() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <DisplayHeading
              lead={oneTeam.headline}
              accent={oneTeam.headlineAccent}
            />
          </Reveal>

          <Reveal delay={100} className="mt-6 max-w-[1180px]">
            <Lede>{oneTeam.body}</Lede>
          </Reveal>

          <Reveal delay={160} className="mt-14 w-full sm:mt-16">
            <p className="text-[19px] text-white/70 sm:text-[24px]">
              {oneTeam.logosLabel}
            </p>

            <ul className="mt-7 flex flex-wrap items-stretch justify-center gap-3 sm:mt-9 sm:gap-4">
              {clientLogos.map((logo) => (
                <li
                  key={logo.id}
                  className="flex h-[76px] w-[150px] items-center justify-center rounded-xl bg-white px-5 sm:h-[86px] sm:w-[190px]"
                >
                  {logo.src ? (
                    // eslint-disable-next-line @next/next/no-img-element -- client logos are fixed-size marks, not responsive art
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-[46px] w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center text-[12px] font-semibold uppercase leading-tight tracking-wide text-zinc-800 sm:text-[13px]">
                      {logo.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Rule className="mt-14 sm:mt-16" />
      </Container>
    </Section>
  );
}
