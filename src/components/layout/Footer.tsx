import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const SERVICE_LINKS = [
  { label: "Web Development", href: "/services/web-design-development" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Data Analysis", href: "/services/data-analysis" },
  { label: "Data Annotation", href: "/services/data-annotation" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/107920188/",
    icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/bruno_mangoli",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=6157742686264",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/brunomangoli",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="glass mt-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Kadimbotech<span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Empowering Ideas, Driving Innovation. A Kenya-based technology
            company delivering digital solutions across Africa and globally.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a
                href="mailto:kadimbotechsolutions@gmail.com"
                className="transition-colors hover:text-text"
              >
                kadimbotechsolutions@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+254704708970" className="transition-colors hover:text-text">
                +254 704 708 970
              </a>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
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
        </div>
      </div>

            <div className="flex flex-col items-center gap-3 border-t border-border px-6 py-6 text-center text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Kadimbotech Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="transition-colors hover:text-text">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-text">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}