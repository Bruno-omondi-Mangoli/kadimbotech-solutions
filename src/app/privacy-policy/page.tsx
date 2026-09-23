import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kadimbotech Solutions collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    title: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how Kadimbotech Solutions (\"we\", \"us\", \"our\") collects, uses, and protects information when you visit our website or use our services. By using this website, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "When you submit our Contact or Quote forms, we collect the information you provide, which may include your name, email address, phone number, company name, and details about your project.",
      "We do not require you to create an account or provide payment information through this website.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information you provide to respond to your inquiries, prepare project quotes, and communicate with you about our services. We do not use your information for purposes beyond what is reasonably necessary to respond to your request.",
    ],
  },
  {
    title: "Sharing of Information",
    paragraphs: [
      "We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who help us operate this website and deliver our services (for example, hosting and email delivery providers), solely for that purpose.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "You may contact us at any time to request access to, correction of, or deletion of the personal information you have provided to us.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "This website may use minimal, essential cookies required for basic site functionality. If we introduce analytics or additional tracking in the future, this policy will be updated accordingly.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy, please contact us at kadimbotechsolutions@gmail.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      <ScrollProgressBar />

      <section className="px-6 py-24 text-center">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Last updated: September 2026</p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {SECTIONS.map((section) => (
            <ScrollReveal key={section.title} className="glass rounded-2xl p-8">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}