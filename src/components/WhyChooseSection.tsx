import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const points = [
  "Best Market Price",
  "Instant Payment",
  "Quick Pickup Service",
  "Reliable & Professional",
  "Bulk Scrap Handling",
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.25em] uppercase text-primary mb-3">Our Advantages</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Why Choose Us</h2>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto space-y-5">
          {points.map((point, i) => (
            <div
              key={point}
              className={`flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-lg p-5 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading text-lg md:text-xl tracking-wider text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
