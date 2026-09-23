"use client";

import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-30 transition-opacity duration-300 md:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`glass-strong absolute right-0 top-0 flex h-full w-72 flex-col gap-2 p-8 pt-24 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-lg font-medium text-muted transition-colors hover:bg-glass hover:text-text"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/quote"
          onClick={onClose}
          className="glass mt-4 rounded-full px-5 py-3 text-center text-sm font-medium hover:bg-accent hover:text-background"
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
}