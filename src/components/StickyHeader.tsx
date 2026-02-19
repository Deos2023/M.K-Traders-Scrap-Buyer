import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
  { label: "Gallery", href: "#gallery" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-heading text-xl md:text-2xl font-bold tracking-wider">
          M.K. <span className="text-primary">Traders</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:9874797979"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background/98 backdrop-blur-md border-t border-border pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 font-heading text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:9874797979"
            className="mx-6 mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded font-heading text-sm tracking-wider"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;
