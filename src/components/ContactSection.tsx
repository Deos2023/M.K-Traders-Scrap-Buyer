import { Phone, Mail, MapPin, User, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const details = [
    { icon: Building2, label: "Business Name", value: "M.K. Traders – Scrap Buyer" },
    { icon: User, label: "Owner", value: "Md. Zubair Alam" },
    { icon: Phone, label: "Contact", value: "9874797979 / 9433987979", href: "tel:9874797979" },
    { icon: Mail, label: "Email", value: "M.zubair7979@gmail.com", href: "mailto:M.zubair7979@gmail.com" },
    { icon: MapPin, label: "Address", value: "B/33/H, Mirza Ghalib St., Kolkata – 700016" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-industrial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.25em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Business Details</h2>
        </div>

        <div ref={ref} className={`max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 md:p-10 shadow-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-foreground font-medium hover:text-primary transition-colors text-lg">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium text-lg">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
