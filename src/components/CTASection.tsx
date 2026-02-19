import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-gradient-cta">
      <div ref={ref} className={`container mx-auto px-4 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Sell Your Scrap at the <span className="text-gradient">Best Price</span> Today
        </h2>
        <p className="text-muted-foreground text-lg mb-10">Contact Us for Immediate Pickup</p>
        <a
          href="tel:9874797979"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-lg font-heading text-xl tracking-wider hover:bg-primary/90 transition-all pulse-glow"
        >
          <Phone className="w-6 h-6" /> Call 9874797979
        </a>
      </div>
    </section>
  );
};

export default CTASection;
