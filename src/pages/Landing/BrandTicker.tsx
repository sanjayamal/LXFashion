type BrandTickerProps = {
  brands: Array<string>;
};

const BrandTicker = ({ brands }: BrandTickerProps) => {
  return (
    <div className="border-y border-gold-400/10 py-5 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="mx-10 text-[11px] tracking-[0.3em] text-t-faint font-medium flex items-center gap-4"
          >
            <span className="text-gold-400/40">✦</span>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandTicker;
