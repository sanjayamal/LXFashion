import Section from "../../components/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="py-24 md:py-32 px-6 border-t border-gold-400/10 bg-gradient-to-b from-t-bg-alt/30 to-t-bg"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4 font-medium">
            Visit Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-8">
            Book a Private{" "}
            <span className="text-gold-gradient animate-shimmer italic">
              Viewing
            </span>
          </h2>
          <p className="text-t-muted leading-relaxed mb-10 max-w-md">
            Experience our timepieces in person. Our specialists will guide
            you through our collection in the intimacy of our Geneva boutique.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z|M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                label: "Geneva Boutique",
                value: "Rue du Rhône 40, 1204 Geneva, Switzerland",
              },
              {
                icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
                label: "Email",
                value: "concierge@chronos.swiss",
              },
              {
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
                label: "Telephone",
                value: "+41 22 818 00 00",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-gold-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon.split("|").map((d, idx) => (
                      <path
                        key={idx}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={d}
                      />
                    ))}
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-t-faint text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-t-input border border-gold-400/15 focus:border-gold-400 px-5 py-4 text-sm text-t-text placeholder:text-t-faint outline-none transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-t-input border border-gold-400/15 focus:border-gold-400 px-5 py-4 text-sm text-t-text placeholder:text-t-faint outline-none transition-all duration-300"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-t-input border border-gold-400/15 focus:border-gold-400 px-5 py-4 text-sm text-t-text placeholder:text-t-faint outline-none transition-all duration-300"
          />
          <select
            className="w-full bg-t-input border border-gold-400/15 focus:border-gold-400 px-5 py-4 text-sm text-t-faint outline-none transition-all duration-300 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Interested In
            </option>
            <option value="royal">Royal Perpetual Collection</option>
            <option value="nautique">Nautique Diver Series</option>
            <option value="heritage">Heritage Classic Line</option>
            <option value="bespoke">Bespoke Commission</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-t-input border border-gold-400/15 focus:border-gold-400 px-5 py-4 text-sm text-t-text placeholder:text-t-faint outline-none transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_auto] text-dark-900 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-right hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
