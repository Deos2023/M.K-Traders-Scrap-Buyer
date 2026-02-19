import { Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div ref={ref} className={`relative z-10 text-center px-4 max-w-4xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
          M.K. Traders – Scrap Buyer
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
          Trusted Scrap Buyer<br />
          <span className="text-gradient">in Kolkata</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
          Buying All Types of Industrial & Electronic Scrap Items
        </p>
        <p className="font-heading text-sm tracking-[0.25em] uppercase text-metallic-light mb-10">
          A Better Tomorrow
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:9874797979"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-lg tracking-wider hover:bg-primary/90 transition-all pulse-glow"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="mailto:M.zubair7979@gmail.com"
            className="flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded font-heading text-lg tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Mail className="w-5 h-5" /> Get Scrap Valuation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
