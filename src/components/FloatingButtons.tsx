import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp */}
    <a
      href="https://wa.me/919433987979"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>

    {/* Sticky Call */}
    <a
      href="tel:9433987979"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg pulse-glow hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  </>
);

export default FloatingButtons;
