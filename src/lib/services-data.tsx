import type { ReactNode } from "react";
import { Code2, Palette, BarChart3, Tags } from "lucide-react";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  heroDescription: string;
  metaDescription: string;
  accent: string;
  icon: ReactNode;
  problem: string;
  solution: string;
  benefits: string[];
  process: ProcessStep[];
  deliverables: string[];
  technologies: string[];
  faqs: FAQ[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "web-design-development",
    title: "Web Development",
    heroDescription:
      "Fast, secure, and scalable websites and web applications built with Next.js, React, and TypeScript.",
    metaDescription:
      "Custom websites, web applications, e-commerce, and API development from Kadimbotech Solutions, built with Next.js, React, and TypeScript.",
    accent: "#1F4173",
    icon: <Code2 className="h-8 w-8" />,
    problem:
      "Many businesses lose credibility and customers to slow, outdated, or hard-to-navigate websites.",
    solution:
      "We build custom websites and web applications using modern, production-ready technology, designed to load fast, work on every device, and scale as your business grows.",
    benefits: [
      "Fast, mobile-first performance",
      "Built with modern, maintainable technology",
      "SEO-ready from day one",
      "Scales as your business grows",
    ],
    process: [
      { title: "Discovery", description: "We learn about your business, goals, and audience." },
      { title: "Design", description: "We design the interface and user experience before writing code." },
      { title: "Development", description: "We build the site using Next.js, React, and TypeScript." },
      { title: "Launch & Support", description: "We deploy your site and remain available for ongoing updates." },
    ],
    deliverables: [
      "Custom website or web application",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Deployment to production",
    ],
    technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Vercel",
  "Sanity CMS",
  "REST & GraphQL APIs",
  "Stripe Payments",
  "Git & GitHub",
],
    faqs: [
      {
        question: "How long does a website project take?",
        answer: "Timelines vary by scope. After discovery, we'll give you a clear estimate before work begins.",
      },
      {
        question: "Can you build e-commerce sites?",
        answer: "Yes, e-commerce and custom web applications are part of our web development service.",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    heroDescription:
      "Visual identities and digital graphics that communicate your brand story and capture attention.",
    metaDescription:
      "Logo design, brand identity, and UI/UX design services from Kadimbotech Solutions, based in Kenya and serving clients globally.",
    accent: "#8B5CF6",
    icon: <Palette className="h-8 w-8" />,
    problem:
      "A weak or inconsistent visual identity makes it harder for potential clients to trust and remember your brand.",
    solution:
      "We create visual identities and digital graphics that communicate your brand story clearly and consistently.",
    benefits: [
      "A consistent, professional visual identity",
      "Designs that reflect your brand story",
      "Assets ready for digital and print use",
      "A collaborative, feedback-driven design process",
    ],
    process: [
      { title: "Brief & Research", description: "We understand your brand, audience, and goals." },
      { title: "Concept Design", description: "We develop initial visual directions for your review." },
      { title: "Refinement", description: "We refine the chosen direction based on your feedback." },
      { title: "Final Delivery", description: "You receive final files ready for use." },
    ],
    deliverables: [
      "Logo design",
      "Brand identity guidelines",
      "UI/UX design assets",
      "Marketing materials",
    ],
    technologies: ["Modern design tooling suited to each project"],
    faqs: [
      {
        question: "Do you offer full brand identity packages?",
        answer: "Yes, alongside logo design we can develop a complete visual identity system.",
      },
      {
        question: "How many revisions are included?",
        answer: "We'll agree on a revision process with you before the project begins, based on project scope.",
      },
    ],
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    heroDescription:
      "Business intelligence, data visualization, and reporting that turn raw data into clear decisions.",
    metaDescription:
      "Data analysis, business intelligence, and forecasting services from Kadimbotech Solutions, turning raw data into actionable insight.",
    accent: "#22C7B8",
    icon: <BarChart3 className="h-8 w-8" />,
    problem:
      "Businesses often collect data but struggle to turn it into decisions they can act on.",
    solution:
      "We turn raw data into actionable business insights through analysis, visualization, and reporting.",
    benefits: [
      "Clear, decision-ready insights",
      "Visualized data that's easy to understand",
      "Reports tailored to your business questions",
      "A foundation for better forecasting",
    ],
    process: [
      { title: "Data Review", description: "We assess your data sources and quality." },
      { title: "Analysis", description: "We analyze the data against your business questions." },
      { title: "Visualization", description: "We turn findings into clear visual reports." },
      { title: "Handover", description: "We walk you through the insights and next steps." },
    ],
    deliverables: [
      "Business intelligence reports",
      "Data visualizations",
      "Forecasting models where applicable",
    ],
    technologies: ["Industry-standard analysis and visualization tools"],
    faqs: [
      {
        question: "What kind of data can you work with?",
        answer:
          "We work with a range of business data sources — the right approach depends on your specific data and goals, which we'll assess during discovery.",
      },
      {
        question: "Do you offer ongoing reporting?",
        answer: "Yes, ongoing reporting can be arranged depending on your needs.",
      },
    ],
  },
  {
    slug: "data-annotation",
    title: "Data Annotation",
    heroDescription:
      "High-precision labeled datasets for AI and machine learning projects.",
    metaDescription:
      "Image, text, video, and NLP data annotation services from Kadimbotech Solutions, providing high-precision labeled datasets for AI and machine learning.",
    accent: "#F5B942",
    icon: <Tags className="h-8 w-8" />,
    problem:
      "AI and machine learning models depend on accurately labeled data, and mislabeled datasets lead to unreliable models.",
    solution:
      "We provide high-precision labeled datasets for AI and machine learning projects.",
    benefits: [
      "High-precision, quality-checked labeling",
      "Support across multiple data types",
      "Scalable to project size",
      "Clear, consistent labeling processes",
    ],
    process: [
      { title: "Scoping", description: "We review your dataset and labeling requirements." },
      { title: "Guideline Setup", description: "We define clear annotation guidelines with you." },
      { title: "Annotation", description: "Our team labels the data according to your specifications." },
      { title: "Quality Review", description: "We review labeled data for accuracy before delivery." },
    ],
    deliverables: [
      "Labeled image datasets",
      "Labeled text/NLP datasets",
      "Labeled video datasets",
    ],
    technologies: ["Annotation workflows tailored to each project's data type"],
    faqs: [
      {
        question: "What types of data can you annotate?",
        answer: "We support image, text, video, and NLP dataset annotation.",
      },
      {
        question: "How do you ensure labeling accuracy?",
        answer: "We use clear guidelines and a quality review step before delivery.",
      },
    ],
  },
];