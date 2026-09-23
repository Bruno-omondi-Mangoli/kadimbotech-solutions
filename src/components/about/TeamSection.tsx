import { TrendingUp } from "lucide-react";
import { Caveat } from "next/font/google";
import Typewriter from "@/components/ui/Typewriter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  initials: string;
  color: string;
  linkedin?: string;
  x?: string;
}

const FOUNDER: TeamMember = {
  name: "Bruno Omondi Mang'oli",
  role: "CEO & Founder",
  bio: "Full-stack developer, data annotator, and entrepreneur with a passion for building technology that empowers African businesses. Specializes in Next.js, React, Python, and AI-powered solutions. Leads the overall vision and technical direction of Kadimbotech Solutions.",
  skills: ["Full-Stack Development", "Data Annotation", "AI & ML"],
  initials: "BM",
  color: "#22C7B8",
  linkedin: "https://www.linkedin.com/in/bruno-mang-oli-5029ab23b/",
  x: "https://x.com/bruno_mangoli",
};

const TEAM: TeamMember[] = [
  {
    name: "Moses Maranya",
    role: "Marketing Strategist",
    bio: "Creative marketing professional with deep expertise in digital marketing, brand strategy, and business growth. Moses drives Kadimbotech's client acquisition, brand visibility, and market positioning across Kenya and beyond.",
    skills: ["Digital Marketing", "Brand Strategy", "Social Media"],
    initials: "MM",
    color: "#FB923C",
  },
  {
    name: "Emmanuel Mang'oli",
    role: "Lead Graphic Designer",
    bio: "Talented graphic designer and visual storyteller with expertise in brand identity, logo design, and digital graphics. Emmanuel crafts compelling visuals that communicate brand stories with clarity and creativity.",
    skills: ["Adobe Photoshop", "Adobe Suite", "Canva"],
    initials: "EM",
    color: "#F472B6",
  },
  {
    name: "Hellen Atsunga",
    role: "Data Analyst & Annotation Specialist",
    bio: "Data professional specializing in analytics, visualization, and AI training data. Hellen brings precision and expertise to every dataset, delivering high-quality annotated data and actionable business insights.",
    skills: ["Python", "R", "Tableau"],
    initials: "HA",
    color: "#38BDF8",
  },
];


function FounderCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass-strong mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted">founder.ts</span>
      </div>

      <div className="flex flex-col gap-6 p-8 font-mono sm:flex-row sm:items-start">
        <Image
          src="/team/brunno.jpeg"
          alt={member.name}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover"
        />

        <div className="flex-1">
          <p className="text-xs text-muted">// role</p>
          <p className="text-accent">
            const role = <span className="text-text">&quot;{member.role}&quot;</span>;
          </p>

          <p className="mt-4 text-xs text-muted">// name</p>
          <p className="text-lg font-semibold text-text">{member.name}</p>

          <p className="mt-4 text-xs text-muted">// bio</p>
          <Typewriter text={member.bio} className="text-sm text-muted" />

          <p className="mt-4 text-xs text-muted">$ skills --list</p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {member.skills.map((skill) => (
              <span key={skill} className="text-accent">
                - {skill}
              </span>
            ))}
          </div>

          {(member.linkedin || member.x) && (
            <div className="mt-4 flex gap-5 text-sm">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  $ open linkedin
                </a>
              )}
              {member.x && (
                <a
                  href={member.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X`}
                  className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  $ open x
                </a>
              )}
            </div>
          )}

          <p className="mt-4 flex items-center gap-1 text-xs text-muted">
            $
            <span
              aria-hidden="true"
              className="inline-block h-3 w-2 bg-accent motion-safe:animate-[blink-cursor_1s_steps(1)_infinite]"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

function MarketerCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="glass relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6"
      style={{
        background: `linear-gradient(155deg, ${member.color}33 0%, var(--color-glass) 55%)`,
        borderColor: `${member.color}66`,
      }}
    >
      <TrendingUp
        aria-hidden="true"
        className="absolute -right-4 -top-4 h-24 w-24 opacity-10"
        style={{ color: member.color }}
      />
      <Image src="/team/moses.png" alt={member.name} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
      <div>
        <p className="font-semibold">{member.name}</p>
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: member.color }}>
          {member.role}
        </p>
      </div>
      <p className="text-sm text-muted">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span key={skill} className="glass-strong rounded-full px-3 py-1 text-xs text-muted">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function DesignerCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="glass flex flex-col gap-4 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 motion-reduce:!rotate-0"
      style={{
        transform: "rotate(-2deg)",
        borderColor: `${member.color}66`,
        boxShadow: `0 10px 30px -12px ${member.color}55`,
      }}
    >
      <Image src="/team/manu.jpeg" alt={member.name} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
      <div>
        <p className={`${caveat.className} text-3xl text-text`}>{member.name}</p>
        <p className="text-xs font-medium uppercase tracking-wide" style={{ color: member.color }}>
          {member.role}
        </p>
      </div>
      <p className="text-sm text-muted">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className={`${caveat.className} rounded-full px-3 py-1 text-sm`}
            style={{ background: `${member.color}22`, color: member.color }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function DataCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass flex flex-col gap-4 rounded-xl p-6" style={{ borderColor: `${member.color}55` }}>
      <div className="flex items-center gap-3">
        <Image src="/team/helen.jpeg" alt={member.name} width={112} height={112} className="h-28 w-28 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{member.name}</p>
          <p className="font-mono text-xs" style={{ color: member.color }}>
            {member.role}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted">{member.bio}</p>
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {member.skills.map((skill) => (
          <span key={skill} className="glass-strong rounded px-2 py-1 text-muted">
            {`<${skill}/>`}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div className="flex flex-col gap-10">
      <ScrollReveal>
        <FounderCard member={FOUNDER} />
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        <ScrollReveal delay={0}>
          <MarketerCard member={TEAM[0]} />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <DesignerCard member={TEAM[1]} />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <DataCard member={TEAM[2]} />
        </ScrollReveal>
      </div>
    </div>
  );
}