import Section from "../../components/Section";
import { Link } from "react-router-dom";
import type { FeaturedWatch } from "../../types";

type FeaturedCollectionsProps = {
  featuredWatches: Array<FeaturedWatch>;
};

const FeaturedCollections = ({ featuredWatches }: FeaturedCollectionsProps) => {
  return (
    <Section id="collection" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4 font-medium">
            The Collection
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-5">
            Exceptional{" "}
            <span className="text-gold-gradient animate-shimmer">
              Timepieces
            </span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWatches.map((watch, i) => (
            <div
              key={watch.name}
              className="group relative bg-t-card border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-gold-400/90 text-dark-900">
                  {watch.tag}
                </span>
              </div>
              <div className="relative h-80 sm:h-96 overflow-hidden bg-t-bg-alt">
                <img
                  src={watch.img}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--t-bg)] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {watch.name}
                </h3>
                <p className="text-t-faint text-sm mb-5 leading-relaxed">
                  {watch.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-400 font-display text-xl font-semibold">
                    {watch.price}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-t-faint group-hover:text-gold-400 transition-colors flex items-center gap-2">
                    Discover
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/collection"
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-400 border-b border-gold-400/30 pb-1 hover:border-gold-400 transition-all duration-300 group"
          >
            View Full Collection
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
      </div>
    </Section>
  );
};

export default FeaturedCollections;
