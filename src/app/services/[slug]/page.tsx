import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import WebsiteTypesShowcase from "@/components/services/WebsiteTypesShowcase";
import GraphicDesignTypesShowcase from "@/components/services/GraphicDesignTypesShowcase";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const extraSection =
    slug === "web-design-development" ? (
      <WebsiteTypesShowcase />
    ) : slug === "graphic-design" ? (
      <GraphicDesignTypesShowcase />
    ) : undefined;

  return <ServicePageTemplate {...service} extraSection={extraSection} />;
}