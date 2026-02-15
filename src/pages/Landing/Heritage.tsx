import Section from "../../components/Section";

const Heritage = () => {
  return (
    <Section
      id="heritage"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-t-bg via-t-bg-alt/40 to-t-bg"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-gold-400/10 group-hover:border-gold-400/20 transition-colors duration-500" />
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80"
            alt="Master watchmaker at work"
            className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--t-overlay-soft)] to-transparent" />
          <div className="absolute bottom-8 left-8 bg-t-bg/90 backdrop-blur-md border border-gold-400/20 px-6 py-4">
            <p className="text-gold-400 font-display text-2xl font-semibold">
              185
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-t-muted">
              Years of Excellence
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4 font-medium">
            Our Heritage
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-8 leading-tight">
            A Legacy Written
            <br />
            in{" "}
            <span className="text-gold-gradient animate-shimmer italic">
              Precision
            </span>
          </h2>
          <div className="space-y-5 text-t-muted leading-relaxed">
            <p>
              Founded in 1839 in the heart of Geneva, CHRONOS has dedicated
              nearly two centuries to the singular pursuit of horological
              perfection. Every timepiece that leaves our atelier carries the
              weight of this heritage.
            </p>
            <p>
              Our master watchmakers spend over 1,200 hours on each Grand
              Complication piece, hand-finishing every component to exacting
              standards that exceed even the strictest Geneva Seal
              requirements.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-gold-400 font-display text-3xl font-semibold">
                1,200+
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-t-faint mt-1">
                Hours Per Piece
              </p>
            </div>
            <div>
              <p className="text-gold-400 font-display text-3xl font-semibold">
                847
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-t-faint mt-1">
                Components
              </p>
            </div>
            <div>
              <p className="text-gold-400 font-display text-3xl font-semibold">
                ±2s
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-t-faint mt-1">
                Daily Accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Heritage;
