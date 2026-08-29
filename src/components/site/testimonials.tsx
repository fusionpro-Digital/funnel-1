import { Container, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/reveal";
import { type Testimonial, testimonials } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Reveal className="mb-5 break-inside-avoid rounded-2xl border border-violet-500/15 bg-[#0e0916]/90 p-5 sm:p-6">
      <figure>
        <figcaption className="flex items-center gap-3">
          {item.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element -- fixed 40px avatar, no responsive variants needed
            <img
              src={item.avatar}
              alt=""
              className="size-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden
              className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-600/30 text-[13px] font-semibold text-violet-200 ring-1 ring-inset ring-violet-400/25"
            >
              {initials(item.name)}
            </span>
          )}
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-medium text-white">
              {item.name}
            </span>
            <span className="block text-pretty text-[13px] leading-snug text-muted-foreground">
              {item.role}
            </span>
          </span>
        </figcaption>

        <blockquote className="mt-4 text-pretty text-[14px] leading-[1.6] text-white/85">
          {item.quote}
        </blockquote>
      </figure>
    </Reveal>
  );
}

export function Testimonials() {
  return (
    <Section aria-label="Client testimonials">
      <Container>
        {/* CSS multi-column gives the staggered masonry from the comps
            without measuring heights in JS. */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
