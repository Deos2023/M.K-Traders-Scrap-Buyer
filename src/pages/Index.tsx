import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <>
    <ScrollProgress />
    <StickyHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <GallerySection />
      <CTASection />
    </main>
    <FooterSection />
    <FloatingButtons />
  </>
);

export default Index;
