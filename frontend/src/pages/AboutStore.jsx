import { Heart, Package, Sparkles, Star } from "lucide-react";

export default function AboutStore({ store, getImageUrl }) {
  // Balanced universal story fallback that fits any creative small business seamlessly
  const defaultBioText =
    store?.ourStory ||
    "Every item here starts as an idea and comes to life through dedicated craftsmanship. Born from a passion to build things that matter, this space is dedicated to original design, intentional details, and sharing authentic creations directly with you.";

  return (
    <section
      id="about-store-section"
      className="relative mb-16 overflow-hidden rounded-[28px] border border-creator-text/5 bg-gradient-to-br from-white/90 via-white/70 to-transparent p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md md:grid md:grid-cols-[1.1fr_1.3fr] md:gap-10 md:p-6"
    >
      {/* Whimsical Handwritten Tag */}
      <span className="absolute right-6 top-4 z-20 rotate-6 font-caveat text-xl text-creator-pink select-none animate-pulse">made with heart ♡</span>

      {/* --- LEFT SIDE: THE ARTISTIC IMAGERY CAPTURE --- */}
      <div className="relative min-h-[280px] md:min-h-[340px] overflow-hidden rounded-[20px] shadow-sm group">
        <img
          src={getImageUrl(store?.profileImage, getImageUrl(store?.storeLogo, getImageUrl(store?.bannerImage, "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1000")))}
          alt="About store workspace"
          className="h-full min-h-[280px] md:min-h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Polarized Floating Sticker (Matches Craft/Indie Aesthetics) */}
        <div className="absolute bottom-5 left-5 rotate-[-4deg] rounded-lg bg-white/95 px-5 py-3 font-caveat text-xl leading-6 text-creator-text shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:rotate-0 group-hover:translate-y-[-2px] border border-creator-text/5">
          Bringing
          <br />
          Imaginings
          <br />
          to Light ✨
        </div>
      </div>

      {/* --- RIGHT SIDE: THE BALANCED CREATOR STORY --- */}
      <div className="flex flex-col justify-between px-2 py-6 md:py-4">
        <div>
          {/* Subtle Label */}
          <p className="font-caveat text-xl tracking-wide text-creator-pink">the vision behind the work</p>

          {/* Heading */}
          <h2 className="mt-1.5 font-serif text-3xl font-bold tracking-tight text-creator-text sm:text-4xl">Meet {store?.storeName || "The Creator"}</h2>

          {/* Universal Context Bio */}
          <p className="mt-4 max-w-[520px] font-sans text-sm font-normal leading-7 text-creator-text/65 antialiased">{defaultBioText}</p>
        </div>

        {/* --- DYNAMIC UNIVERSAL VALUE FEATURES --- */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-creator-text/5 pt-6 sm:grid-cols-4">
          {/* Feature 1 */}
          <div className="flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-creator-pink/10 text-creator-pink">
              <Heart size={16} />
            </div>
            <span className="text-[10px] font-medium tracking-wide text-creator-text/80 uppercase">
              Intentional
              <small className="block font-sans normal-case text-creator-text/45 mt-0.5 font-normal">Design focus</small>
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-creator-primary/10 text-creator-primary">
              <Package size={16} />
            </div>
            <span className="text-[10px] font-medium tracking-wide text-creator-text/80 uppercase">
              Independent
              <small className="block font-sans normal-case text-creator-text/45 mt-0.5 font-normal">Small scale</small>
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-creator-accent/10 text-creator-accent">
              <Sparkles size={16} />
            </div>
            <span className="text-[10px] font-medium tracking-wide text-creator-text/80 uppercase">
              Original
              <small className="block font-sans normal-case text-creator-text/45 mt-0.5 font-normal">Uniquely yours</small>
            </span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Star size={16} />
            </div>
            <span className="text-[10px] font-medium tracking-wide text-creator-text/80 uppercase">
              Authentic
              <small className="block font-sans normal-case text-creator-text/45 mt-0.5 font-normal">Direct connection</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
