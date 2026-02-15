import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gold-400/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded-full border border-gold-400/50 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                <svg
                  className="w-4 h-4 text-gold-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold tracking-[0.2em]">
                CHRONOS
              </span>
            </Link>
            <p className="text-t-faint text-sm leading-relaxed">
              Swiss haute horlogerie since 1839. Crafting exceptional timepieces
              for those who appreciate the art of precision.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-400 font-semibold mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                "Royal Perpetual",
                "Nautique Diver",
                "Heritage Classic",
                "Grand Complication",
                "Limited Editions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/collection"
                    className="text-t-faint text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-400 font-semibold mb-6">
              Maison
            </h4>
            <ul className="space-y-3">
              {[
                "Our Heritage",
                "The Atelier",
                "Master Watchmakers",
                "Sustainability",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-t-faint text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-400 font-semibold mb-6">
              Contact
            </h4>
            <div className="text-t-faint text-sm space-y-2 leading-relaxed">
              <p>Rue du Rhône 40</p>
              <p>1204 Geneva, Switzerland</p>
              <p className="pt-2">concierge@chronos.swiss</p>
              <p>+41 22 818 00 00</p>
            </div>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gold-400/20 flex items-center justify-center hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-gold-400 text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold-400/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-t-dimmed text-[11px] tracking-[0.1em]">
            © 2025 CHRONOS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-t-dimmed text-[11px] tracking-[0.1em] hover:text-gold-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
