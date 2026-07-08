"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://ucarecdn.com/d1eb0081-8c1c-4fae-b9ba-efde99cd14d1/";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Wash Packages" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO_URL}
              alt="Lexington Auto Spa"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden min-[900px]:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-foreground hover:text-primary font-display text-base lg:text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.lexingtonautospa.com/#unlimited-club"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-primary text-white font-heading tracking-wide text-base lg:text-lg px-4 py-2 lg:px-5 lg:py-2.5 hover:bg-accent"
            >
              Manage My Membership
            </a>
          </nav>

          <button
            className="min-[900px]:hidden text-foreground p-2 rounded-full hover:bg-muted"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="min-[900px]:hidden bg-[hsl(var(--dark))] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-white font-display font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.lexingtonautospa.com/#unlimited-club"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-primary text-white font-heading tracking-wide text-lg px-5 py-3 hover:bg-accent text-center mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Manage My Membership
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
