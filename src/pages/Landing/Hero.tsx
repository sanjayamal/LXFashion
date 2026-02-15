import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-400/[0.07] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold-400/[0.05] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-[15%] right-[10%] w-72 h-72 bg-gold-400/[0.03] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[20%] left-[5%] w-56 h-56 bg-gold-400/[0.02] rounded-full blur-3xl animate-pulse-glow [animation-delay:3s]" />
        <div className="absolute inset-0 bg-t-radial" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <p className="animate-fade-in-down text-[11px] sm:text-xs font-medium tracking-[0.4em] uppercase text-gold-400 mb-6">
          Swiss Haute Horlogerie — Since 1839
        </p>
        <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-8 tracking-tight">
          Time, Perfected
          <br />
          <span className="text-gold-gradient animate-shimmer">By Masters</span>
        </h1>
        <p className="animate-fade-in text-t-muted text-base sm:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed [animation-delay:0.4s]">
          Where centuries of craftsmanship converge with modern artistry. Each
          CHRONOS timepiece is a masterwork of precision and beauty.
        </p>
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center [animation-delay:0.6s]">
          <Link
            to="/collection"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_auto] text-dark-900 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-right hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
          >
            Explore Collection
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
          <a
            href="#heritage"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-gold-400/40 text-gold-400 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300"
          >
            Our Heritage
          </a>
        </div>
        <div className="animate-float mt-20 flex flex-col items-center gap-3 [animation-delay:1s]">
          <span className="text-[10px] tracking-[0.3em] text-t-faint uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
