import Section from "../../components/Section";
import type { Stat } from "../../types";

type StatsProps = {
  stats: Stat[];
};

const Stats = ({ stats }: StatsProps) => {
  return (
    <Section className="py-20 border-y border-gold-400/10 bg-gradient-to-r from-t-bg-alt/50 via-t-bg to-t-bg-alt/50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="group">
            <p className="font-display text-4xl sm:text-5xl font-semibold text-gold-gradient animate-shimmer mb-2">
              {s.value}
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-t-faint group-hover:text-t-muted transition-colors">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;
