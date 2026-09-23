import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PillarsSection from "@/components/sections/PillarsSection";
import ServicesPreviewSection from "@/components/sections/ServicesPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreviewSection />
      <PillarsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}