import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../components/ThemeToggle";

/* ─── shared layout with nav + footer ─── */
export default function HeaderWithNavs({
  menuOpen,
  setMenuOpen,
  scrolled,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}) {
  const { theme, toggle } = useTheme();
  const location = useLocation();

  const navLinks = [
    { label: "Collection", to: "/collection" },
    { label: "Craftsmanship", to: "/#craftsmanship" },
    { label: "Heritage", to: "/#heritage" },
    { label: "Contact", to: "/#contact" },
  ];

  const handleNavClick = (to: string) => {
    setMenuOpen(false);
    if (to.startsWith("/#") && location.pathname === "/") {
      const el = document.getElementById(to.slice(2));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-t-nav backdrop-blur-xl border-b border-gold-400/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400/60 flex items-center justify-center group-hover:border-gold-400 transition-colors">
            <svg
              className="w-5 h-5 text-gold-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <span className="font-display text-xl font-semibold tracking-[0.2em] text-gold-gradient animate-shimmer">
            CHRONOS
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) =>
            l.to.startsWith("/#") ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => handleNavClick(l.to)}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-muted hover:text-gold-400 transition-colors duration-300"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className={`text-[11px] font-medium tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-300 ${
                  location.pathname === l.to ? "text-gold-400" : "text-t-muted"
                }`}
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        {/* cta + theme toggle */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle theme={theme} toggle={toggle} />
          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3 border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300"
          >
            Book Viewing
          </Link>
        </div>

        {/* mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gold-400 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 bg-t-nav-blur backdrop-blur-xl border-t border-gold-400/10">
          {navLinks.map((l) =>
            l.to.startsWith("/#") ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => handleNavClick(l.to)}
                className="text-sm tracking-[0.15em] uppercase text-t-muted hover:text-gold-400 transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className={`text-sm tracking-[0.15em] uppercase hover:text-gold-400 transition-colors ${
                  location.pathname === l.to ? "text-gold-400" : "text-t-muted"
                }`}
              >
                {l.label}
              </Link>
            ),
          )}
          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="text-sm tracking-[0.15em] uppercase px-6 py-3 border border-gold-400/50 text-gold-400 text-center hover:bg-gold-400/10 transition-all"
          >
            Book Viewing
          </Link>
        </div>
      </div>
    </nav>
  );
}
