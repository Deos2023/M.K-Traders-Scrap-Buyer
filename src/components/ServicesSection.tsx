import { Armchair, Monitor, Cpu, BatteryCharging, Settings, Wrench, Fan, Snowflake, Recycle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { icon: Armchair, title: "Office Furniture & Fixtures", desc: "Desks, chairs, cabinets & partitions" },
  { icon: Monitor, title: "Computer Sets", desc: "Complete desktop systems & laptops" },
  { icon: Cpu, title: "CPU & Monitor", desc: "All brands and conditions accepted" },
  { icon: BatteryCharging, title: "UPS & Batteries", desc: "Industrial & commercial batteries" },
  { icon: Settings, title: "DG Sets", desc: "Diesel generators of all capacities" },
  { icon: Wrench, title: "Motors", desc: "Electric motors & pumps" },
  { icon: Fan, title: "Fans", desc: "Industrial & commercial fans" },
  { icon: Snowflake, title: "AC Plants", desc: "Split, window & central AC units" },
  { icon: Recycle, title: "All Kinds of Scrap", desc: "Metal, plastic, electronic & more" },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.25em] uppercase text-primary mb-3">Our Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Scrap Items We Purchase
          </h2>
        </div>

        <div className="mb-14 rounded-lg overflow-hidden shadow-2xl">
          <img src={servicesBg} alt="Industrial scrap sorting" className="w-full h-64 md:h-80 object-cover" />
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-lg p-6 hover-lift cursor-default ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
