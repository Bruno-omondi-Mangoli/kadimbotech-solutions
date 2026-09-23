import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  Scale,
  Scissors,
  Flame,
  Newspaper,
  Sprout,
  Building2,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LoopingTypewriter from "@/components/ui/LoopingTypewriter";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See live websites and brand design work delivered by Kadimbotech Solutions for clients in Kenya and internationally.",
};

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

interface WebProject {
  name: string;
  client?: string;
  location?: string;
  description: string;
  tags: string[];
  url: string;
  icon: typeof Scale;
  accent: string;
}

const WEB_PROJECTS: WebProject[] = [
  {
    name: "Swaro Oyosa & Co. Advocates",
    location: "Kenya",
    description:
      "Swaro Oyosa & Co. Advocates combines expertise with a client-centred approach, ensuring every case is handled with care and professionalism.",
    tags: ["Legal Services", "Business Website"],
    url: "https://www.swarooyosalegal.co.ke/",
    icon: Scale,
    accent: "#1F4173",
  },
  {
    name: "Holly's Hairstyles",
    client: "Holly Martinez",
    location: "United States",
    description:
      "A full-featured hair salon website with service listings, gallery, booking system, blog, client reviews, and special offers.",
    tags: ["Website", "Booking System", "Blog", "Gallery"],
    url: "https://holyshairstyle.netlify.app/",
    icon: Scissors,
    accent: "#F472B6",
  },
  {
    name: "Candie's Candles",
    client: "Candie",
    location: "United States",
    description:
      "A beautiful e-commerce website for a handmade candle artisan, featuring product listings, shopping cart, checkout, and a compelling brand story.",
    tags: ["E-Commerce", "Product Listings", "Checkout", "Brand Story"],
    url: "https://candiescandles.netlify.app/",
    icon: Flame,
    accent: "#FB923C",
  },
  {
    name: "Bob's Blog",
    client: "Bob",
    location: "United States",
    description:
      "A modern blog platform with a full admin panel, letting Bob publish, edit, and manage weekly posts without any coding.",
    tags: ["Blog", "Admin Panel", "CMS", "Content Management"],
    url: "https://bobsblogposts.netlify.app/",
    icon: Newspaper,
    accent: "#38BDF8",
  },
  {
    name: "JoseTech Farm & Consultancy",
    client: "Joseph Oyuga",
    location: "Busia, Kenya",
    description:
      "A professional agricultural business website for a farm and consultancy dealing in livestock, vegetables, horticulture, and agribusiness planning.",
    tags: ["Agriculture", "Business Website", "Services", "Kenya"],
    url: "https://josetch.netlify.app/",
    icon: Sprout,
    accent: "#22C55E",
  },
  {
    name: "Namenge Builders Ltd",
    client: "Caleb",
    location: "Busia County, Kenya",
    description:
      "A corporate website for a construction company delivering residential and commercial projects across Busia County and beyond.",
    tags: ["Construction", "Corporate Website", "Services", "Kenya"],
    url: "https://namengebuilderltd.netlify.app/",
    icon: Building2,
    accent: "#8B5CF6",
  },
];

interface DesignProject {
  name: string;
  location: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
}

const DESIGN_PROJECTS: DesignProject[] = [
  {
    name: "Remedy Construction & Interiors Ltd",
    location: "Kenya",
    description:
      "Professional logo design featuring a bold architectural house icon with navy and gold colors — conveying strength, precision, and premium quality.",
    tags: ["Logo Design", "Brand Identity"],
    image: "/portfolio/graphic-design/remedy-construction.jpeg",
    accent: "#F5B942",
  },
  {
    name: "Wakurugenzi Loaded",
    location: "Kenya",
    description:
      "Modern brand identity with a distinctive V-shaped diamond logo in deep navy blue — bold, memorable, and authoritative.",
    tags: ["Logo Design", "Brand Identity"],
    image: "/portfolio/graphic-design/wakurugenzi-loaded.jpeg",
    accent: "#1F4173",
  },
  {
    name: "BrixFarm",
    location: "Kenya",
    description:
      "Fresh and vibrant logo for an agri-tech company — combining blue and green to represent trust and nature. Tagline: \"Smart farming. Pure growth.\"",
    tags: ["Logo Design", "AgriTech"],
    image: "/portfolio/graphic-design/brixfarm.jpeg",
    accent: "#22C55E",
  },
  {
    name: "TechVerve",
    location: "Kenya",
    description:
      "Dynamic tech brand logo with a green leaf-inspired icon — clean, modern, and forward-looking. Tagline: \"Simplifying The Future.\"",
    tags: ["Logo Design", "Tech Brand"],
    image: "/portfolio/graphic-design/techverve.jpeg",
    accent: "#38BDF8",
  },
  {
    name: "Beniacom Construction & Interiors",
    location: "Kenya",
    description:
      "Elegant monogram-based logo with interlocked BC letters and a gold accent — professional and sophisticated for a premium construction brand.",
    tags: ["Logo Design", "Monogram"],
    image: "/portfolio/graphic-design/beniacom.jpeg",
    accent: "#FACC15",
  },
  {
    name: "Infinity Fast Food",
    location: "Kenya",
    description:
      "Vibrant and appetizing logo with an infinity loop incorporating a fork and spoon — energetic brand identity for a fast food restaurant.",
    tags: ["Logo Design", "Restaurant"],
    image: "/portfolio/graphic-design/infinity-fast-food.jpeg",
    accent: "#F87171",
  },
  {
    name: "Juddy Ogaro — MCA Campaign",
    location: "Kenya",
    description:
      "Professional political campaign poster designed for MCA Rigoma Ward candidate — bold, clear, and visually impactful for grassroots campaigning.",
    tags: ["Campaign Poster", "Political Design"],
    image: "/portfolio/graphic-design/juddy-ogaro-mca.png",
    accent: "#A78BFA",
  },
  {
    name: "Kitayama Maisori — MP Campaign",
    location: "Kenya",
    description:
      "Eye-catching MP campaign poster for Kuria East constituency — strong typography and layout designed to command attention.",
    tags: ["Campaign Poster", "Political Design"],
    image: "/portfolio/graphic-design/kitayama-maisori-mp.jpeg",
    accent: "#F472B6",
  },
];

const ROTATIONS = [-3, 2, -2, 3, -1, 2, -3, 1];

function WebProjectCard({ project }: { project: WebProject }) {
  const Icon = project.icon;
  let hostname = project.url;
  try {
    hostname = new URL(project.url).hostname;
  } catch {
    // fall back to raw url if parsing fails
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass block overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
      style={{ borderColor: `${project.accent}55` }}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />
        <span className="glass-strong ml-2 flex-1 truncate rounded-full px-3 py-1 text-[11px] text-muted">
          {hostname}
        </span>
      </div>

      <div
        className="flex h-32 items-center justify-center"
        style={{ background: `linear-gradient(155deg, ${project.accent}44, var(--color-surface))` }}
      >
        <Icon className="h-10 w-10" style={{ color: project.accent }} />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{project.name}</h3>
          {project.location && (
            <span className="flex flex-shrink-0 items-center gap-1 text-xs text-muted">
              <MapPin className="h-3 w-3" />
              {project.location}
            </span>
          )}
        </div>
        {project.client && (
          <p className="mt-1 text-xs text-muted">Client: {project.client}</p>
        )}
        <p className="mt-3 text-sm text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="glass-strong rounded-full px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <span
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
          style={{ color: project.accent }}
        >
          Visit Live Site
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

function DesignProjectCard({ project, rotation }: { project: DesignProject; rotation: number }) {
  return (
    <div
      className="glass w-64 rounded-lg p-3 pb-5 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 motion-reduce:!rotate-0"
      style={{
        transform: `rotate(${rotation}deg)`,
        borderColor: `${project.accent}66`,
        boxShadow: `0 10px 30px -12px ${project.accent}55`,
      }}
    >
      <div
        className="relative aspect-square w-full overflow-hidden rounded"
        style={{ background: "var(--color-surface-raised)" }}
      >
        <Image src={project.image} alt={project.name} fill className="object-cover" />
      </div>
      <p className={`${caveat.className} mt-3 text-xl leading-tight text-text`}>{project.name}</p>
      <p className="text-xs text-muted">{project.location}</p>
      <p className="mt-2 text-xs text-muted">{project.description}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`${caveat.className} rounded-full px-2 py-0.5 text-sm`}
            style={{ background: `${project.accent}22`, color: project.accent }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative">
      <section className="px-6 py-24 text-center">
        <ScrollReveal className="mx-auto max-w-3xl">
         <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
  <LoopingTypewriter text="Our Work" />
</h1>
          <p className="mt-4 text-lg text-muted">
            From scalable web platforms to bold brand identities, see how we help businesses transform their digital presence and drive real results.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
         <h2 className="text-2xl font-semibold">
  <LoopingTypewriter text="Web Development Projects" />
</h2>
          <p className="mt-2 text-muted">From dynamic Web applications to scalable e-commerce platforms, explore how we turn complex ideas into live digital experiences. Click any card to see them in action.</p>
        </ScrollReveal>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.name} delay={(index % 3) * 100}>
              <WebProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className={`${caveat.className} text-4xl text-text`}>
            Brand Identities &amp; Design
          </h2>
          <p className="mt-2 text-muted">Visual identity design built for recognition and trust. Explore our portfolio of logos, brand assets, and marketing designs.</p>
        </ScrollReveal>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {DESIGN_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.name} delay={(index % 4) * 80}>
              <DesignProjectCard
                project={project}
                rotation={ROTATIONS[index % ROTATIONS.length]}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <ScrollReveal className="glass-strong glow-accent mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Want to Be Our Next Project?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}