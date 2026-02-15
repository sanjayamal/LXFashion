import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import HeaderWithNavs from "./HeaderWithNavs";

/* ─── shared layout with nav + footer ─── */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-t-bg text-t-text overflow-x-hidden">
      <HeaderWithNavs
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
