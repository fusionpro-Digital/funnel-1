import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/footer";
import { GalleryMarquee } from "@/components/site/gallery-marquee";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { OneTeam } from "@/components/site/one-team";
import { Problems } from "@/components/site/problems";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <GalleryMarquee />
        <OneTeam />
        <Problems />
        <Services />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
