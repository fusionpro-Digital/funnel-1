import { Media } from "@/components/site/media";
import { galleryItems } from "@/content/site";

export function GalleryMarquee() {
  return (
    <section aria-label="Selected client work" className="relative w-full py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <Media
                src={item.src}
                alt={item.label}
                tint={item.tint}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
