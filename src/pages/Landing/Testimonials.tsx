import Section from "../../components/Section";
import type { Testimonial } from "../../types";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <Section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-5">
            Voices of{" "}
            <span className="text-gold-gradient animate-shimmer">
              Distinction
            </span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative p-10 bg-t-card border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="absolute top-4 left-6 text-8xl font-display text-gold-400/[0.07] leading-none select-none">
                "
              </span>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-display text-lg italic leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold tracking-wide text-sm">
                  {t.name}
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-gold-400/80 mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
