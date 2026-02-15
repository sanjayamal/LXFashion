import Section from "../../components/Section";

const Newsletter = () => {
  return (
    <Section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="absolute -inset-10 border border-gold-400/10 pointer-events-none hidden md:block" />
        <div className="absolute -inset-14 border border-gold-400/[0.05] pointer-events-none hidden md:block" />
        <div className="relative bg-t-bg py-16 px-8 md:px-16">
          <span className="text-gold-400 text-3xl block mb-6">✦</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
            Join the{" "}
            <span className="text-gold-gradient animate-shimmer">
              Inner Circle
            </span>
          </h2>
          <p className="text-t-muted max-w-md mx-auto mb-10 leading-relaxed">
            Receive exclusive invitations, private viewing access, and be the
            first to discover limited edition timepieces.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-t-input border border-gold-400/20 focus:border-gold-400 px-6 py-4 text-sm text-t-text placeholder:text-t-faint outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_auto] text-dark-900 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-right hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-t-dimmed mt-5 tracking-wide">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Newsletter;
