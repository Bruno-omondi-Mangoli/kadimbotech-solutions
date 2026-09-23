import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the Kadimbotech Solutions website and services.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing this website or engaging Kadimbotech Solutions for services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website or our services.",
    ],
  },
  {
    title: "Our Services",
    paragraphs: [
      "Kadimbotech Solutions provides web development, graphic design, data analysis, and data annotation services. The specific scope, deliverables, timeline, and cost of any project are agreed upon individually with each client before work begins.",
    ],
  },
  {
    title: "Use of This Website",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Unless otherwise agreed in writing, all content on this website — including text, graphics, logos, and design — is the property of Kadimbotech Solutions and may not be reproduced without permission. Ownership of deliverables produced for a client project is addressed in the individual agreement for that project.",
    ],
  },
  {
    title: "Project Terms & Payment",
    paragraphs: [
      "Project pricing, payment schedules, and delivery timelines are agreed upon individually with each client prior to the start of work, and are not fixed by this website.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Kadimbotech Solutions strives to provide accurate information and reliable services, but does not guarantee that this website or our services will be uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions are governed by the laws of Kenya.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms & Conditions, please contact us at kadimbotechsolutions@gmail.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="relative">
      <ScrollProgressBar />

      <section className="px-6 py-24 text-center">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Terms &amp; Conditions</h1>
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