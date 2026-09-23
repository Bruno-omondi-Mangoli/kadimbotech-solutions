import type { Metadata } from "next";
import ServicesMarquee from "@/components/services/ServicesMarquee";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kadimbotech Solutions' core services: web development, graphic design, data analysis, and data annotation for businesses across Kenya, Africa, and globally.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesMarquee />
      <CTASection />
    </>
  );
}