import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kadimbotech Solutions. We're based in Nairobi, Kenya, and work with clients across Kenya, Africa, and globally.",
};

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/107920188/", icon: FaLinkedin },
  { label: "X (Twitter)", href: "https://x.com/bruno_mangoli", icon: FaXTwitter },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=6157742686264", icon: FaFacebook },
  { label: "Instagram", href: "https://www.instagram.com/brunomangoli", icon: FaInstagram },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="relative flex flex-col items-center overflow-hidden px-6 py-24 text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute h-40 w-40 rounded-full border border-accent/30 motion-safe:animate-[pulse-ring_3s_ease-out_infinite]" />
          <span className="absolute h-40 w-40 rounded-full border border-accent/30 motion-safe:animate-[pulse-ring_3s_ease-out_infinite] [animation-delay:1s]" />
          <span className="absolute h-40 w-40 rounded-full border border-accent/30 motion-safe:animate-[pulse-ring_3s_ease-out_infinite] [animation-delay:2s]" />
        </div>

        <ScrollReveal className="relative mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted">
            Have a question or want to talk about a project? Send us a message
            and we&apos;ll get back to you.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <ScrollReveal className="glass flex flex-col gap-6 rounded-2xl p-8">
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-sm text-muted">
                Reach us directly, or use the form to send a message.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:kadimbotechsolutions@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <span className="glass-strong flex h-10 w-10 items-center justify-center rounded-full">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                kadimbotechsolutions@gmail.com
              </a>
              <a
                href="tel:+254704708970"
                className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <span className="glass-strong flex h-10 w-10 items-center justify-center rounded-full">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                +254 704 708 970
              </a>
              <div className="flex items-center gap-3 text-sm">
                <span className="glass-strong flex h-10 w-10 items-center justify-center rounded-full">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                Nairobi, Kenya
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass-strong flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}