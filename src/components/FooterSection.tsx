import { Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            M.K. <span className="text-primary">Traders</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Trusted scrap buyer in Kolkata. We buy all types of industrial & electronic scrap items at competitive prices.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
          <nav className="space-y-2">
            {["Home", "About", "Services", "Why Us", "Contact", "Gallery"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="block text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Contact Info</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:9433987979" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /> 9433987979
            </a>
            <a href="mailto:M.zubair7979@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" /> M.zubair7979@gmail.com
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              B/33/H, Mirza Ghalib St., Kolkata – 700016
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
        © 2026 M.K. Traders | All Rights Reserved || Developed & Maintained By <span className="text-accent"><a href="https://teamdeos.co.in/" target="_blank">Digital Exposure Online Service</a></span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
