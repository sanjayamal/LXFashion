import Section from "../../components/Section";
import type { Feature } from "../../types";

type CraftsmanshipProps = {
  features: Feature[];
};

const Craftsmanship = ({ features }: CraftsmanshipProps) => {
  return (
    <Section id="craftsmanship" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4 font-medium">
            Why CHRONOS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-5">
            The Art of{" "}
            <span className="text-gold-gradient animate-shimmer">
              Watchmaking
            </span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-8 bg-t-card border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">
                {f.title}
              </h3>
              <p className="text-t-faint text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Craftsmanship;
