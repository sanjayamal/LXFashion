import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Watch } from "../types";
import { watches } from "../data";

/* ─── animate-on-scroll ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const categories = ["All", "Dress", "Sport", "Complication"];
const movements = ["All", "Automatic", "Manual"];

/* ─── watch card ─── */
const WatchCard = ({ watch, index }: { watch: Watch; index: number }) => {
  const { ref, visible } = useInView(0.05);

  return (
    <div
      ref={ref}
      className={`group relative bg-t-card border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* tag */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-gold-400/90 text-dark-900">
          {watch.tag}
        </span>
      </div>

      {/* image */}
      <div className="relative h-72 sm:h-80 overflow-hidden bg-t-bg-alt">
        <img
          src={watch.img}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--t-bg)] via-transparent to-transparent opacity-60" />

        {/* hover overlay with specs */}
        <div className="absolute inset-0 bg-[var(--t-bg)]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="grid grid-cols-2 gap-4 text-[10px] tracking-[0.15em] uppercase">
              <div>
                <p className="text-gold-400 font-semibold mb-1">Movement</p>
                <p className="text-t-muted">{watch.movement}</p>
              </div>
              <div>
                <p className="text-gold-400 font-semibold mb-1">Case</p>
                <p className="text-t-muted">{watch.caseMaterial}</p>
              </div>
              <div>
                <p className="text-gold-400 font-semibold mb-1">Water Res.</p>
                <p className="text-t-muted">{watch.waterResistance}</p>
              </div>
              <div>
                <p className="text-gold-400 font-semibold mb-1">Category</p>
                <p className="text-t-muted">{watch.category}</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2.5 border border-gold-400/50 text-gold-400 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-400/10 transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* info */}
      <div className="p-7">
        <h3 className="font-display text-xl font-semibold mb-1.5 group-hover:text-gold-400 transition-colors duration-300">
          {watch.name}
        </h3>
        <p className="text-t-faint text-sm mb-4 leading-relaxed line-clamp-2">
          {watch.desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gold-400 font-display text-lg font-semibold">
            {watch.price}
          </span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-t-faint group-hover:text-gold-400 transition-colors flex items-center gap-1.5">
            Discover
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════════════ */

export const CollectionPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMovement, setActiveMovement] = useState("All");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default",
  );

  const filtered = watches
    .filter((w) => activeCategory === "All" || w.category === activeCategory)
    .filter((w) => activeMovement === "All" || w.movement === activeMovement)
    .sort((a, b) => {
      if (sortBy === "default") return 0;
      const priceA = parseInt(a.price.replace(/[$,]/g, ""));
      const priceB = parseInt(b.price.replace(/[$,]/g, ""));
      return sortBy === "price-asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <>
      {/* ════════════ HERO BANNER ════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        {/* bg decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-gold-400/[0.02] rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />
          <div className="absolute inset-0 bg-t-radial" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Link
              to="/"
              className="text-[11px] tracking-[0.2em] uppercase text-t-faint hover:text-gold-400 transition-colors"
            >
              Home
            </Link>
            <span className="text-gold-400/40 text-xs">✦</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-gold-400">
              Collection
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight">
            The Complete
            <br />
            <span className="text-gold-gradient animate-shimmer">
              Collection
            </span>
          </h1>

          <p className="animate-fade-in text-t-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed [animation-delay:0.3s]">
            Explore our full range of exceptional timepieces — from the everyday
            elegance of the Heritage line to the awe-inspiring Grand
            Complications.
          </p>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-10" />
        </div>
      </section>

      {/* ════════════ FILTERS ════════════ */}
      <section className="sticky top-[72px] z-40 bg-t-nav backdrop-blur-xl border-y border-gold-400/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold-400/15 border-gold-400/40 text-gold-400"
                    : "border-transparent text-t-muted hover:text-gold-400 hover:border-gold-400/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* movement filter */}
            <div className="flex items-center gap-2">
              {movements.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMovement(m)}
                  className={`px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeMovement === m
                      ? "text-gold-400 border-b border-gold-400"
                      : "text-t-faint hover:text-t-muted"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-t-input border border-gold-400/15 px-4 py-2 text-[11px] tracking-[0.1em] text-t-muted outline-none appearance-none cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* ════════════ RESULTS COUNT ════════════ */}
      <section className="px-6 pt-10 pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-[11px] tracking-[0.2em] uppercase text-t-faint">
            Showing{" "}
            <span className="text-gold-400 font-semibold">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "timepiece" : "timepieces"}
          </p>
          {(activeCategory !== "All" || activeMovement !== "All") && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveMovement("All");
                setSortBy("default");
              }}
              className="text-[11px] tracking-[0.15em] uppercase text-gold-400/70 hover:text-gold-400 transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* ════════════ WATCH GRID ════════════ */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((watch, i) => (
                <WatchCard key={watch.name} watch={watch} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-gold-400/30 text-6xl block mb-6">✦</span>
              <p className="font-display text-2xl text-t-muted mb-3">
                No timepieces found
              </p>
              <p className="text-t-faint text-sm mb-8">
                Try adjusting your filters to discover more pieces.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveMovement("All");
                }}
                className="px-8 py-3 border border-gold-400/40 text-gold-400 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-400/10 transition-all"
              >
                View All Timepieces
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-t-card border border-gold-400/10 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
          <span className="text-gold-400 text-2xl block mb-5">✦</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-t-muted max-w-lg mx-auto mb-8 leading-relaxed">
            Our master watchmakers can create a bespoke timepiece tailored to
            your exact specifications. Every detail, from movement to engraving,
            is yours to choose.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_auto] text-dark-900 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-right hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
          >
            Commission a Bespoke Piece
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};
