import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MapSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="map" className="py-20 md:py-28 bg-gradient-metallic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.25em] uppercase text-primary mb-3">Find Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Location</h2>
        </div>

        <div ref={ref} className={`w-full rounded-xl overflow-hidden border border-border shadow-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.489086257028!2d88.35440349999999!3d22.5555879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027789346bc289%3A0x72b3c33a9a24e07b!2sM.K.%20Traders-%20Scrap%20Buyer!5e1!3m2!1sen!2sin!4v1771487421791!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="M.K. Traders Location"
            className="w-full h-[350px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
