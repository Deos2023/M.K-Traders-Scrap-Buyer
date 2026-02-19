import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-industrial">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? "" : "opacity-0"}`}>
          <div className={isVisible ? "animate-slide-left" : ""}>
            <img
              src={aboutBg}
              alt="Industrial scrap collection warehouse"
              className="rounded-lg shadow-2xl w-full object-cover aspect-square"
            />
          </div>
          <div className={isVisible ? "animate-slide-right" : ""}>
            <p className="font-heading text-sm tracking-[0.25em] uppercase text-primary mb-3">Who We Are</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About M.K. Traders
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              M.K. Traders is a trusted scrap buyer based in Kolkata, led by <strong className="text-foreground">Md. Zubair Alam</strong>. We purchase office furniture, industrial equipment, electronic scrap, and all types of recyclable materials at competitive market rates.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We believe in responsible recycling and building a better tomorrow through sustainable scrap management solutions.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-16 bg-primary rounded" />
              <span className="font-heading text-sm tracking-[0.2em] uppercase text-metallic-light">
                A Better Tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
