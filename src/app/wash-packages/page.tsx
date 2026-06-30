import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Wash Packages | Lexington Auto Spa",
  description: "Explore all Lexington Auto Spa wash packages — from $18 Exterior Wash to the $60 Ultimate Shine full-service detail.",
};

const exteriorPackages = [
  { name: "Exterior Wash", price: "$18", features: ["Wheel + Tire Cleaner", "Bug Prep", "Towel Dry"], best: false },
  { name: "Deluxe Exterior", price: "$23", features: ["Everything in Exterior Wash", "Triple Foam Protectant", "Wheel Brite", "Hand Applied Tire Dressing"], best: false },
  { name: "Works Exterior", price: "$26", features: ["Everything in Deluxe Exterior", "Rain-X Wax", "Armor All Extreme Shine Wax", "Undercarriage + Rust Inhibitor"], best: true },
];

const fullServicePackages = [
  { name: "Inside & Out", price: "$35", features: ["Vacuum", "Windows Cleaned", "Dash & Console Wiped", "Exterior Wash", "Towel Dry"], best: false, featured: false },
  { name: "Ultimate", price: "$40", features: ["Everything in Inside & Out", "Cup Holders Wiped", "Door Panels Wiped", "Undercarriage + Rust Inhibitor", "Wheel Brite", "Hand Applied Tire Dressing"], best: false, featured: false },
  { name: "Ultimate Shine", price: "$60", features: ["Everything in Ultimate", "Dash/Doors/Console Dressed", "Rain-X Wax", "Armor All Professional Wax", "Extreme Shine Wax + Carnauba"], best: true, featured: true },
];

const faqItems = [
  { question: "How long do packages take?", answer: "Exterior packages: 10-15 minutes. Full-service packages: 20-30 minutes." },
  { question: "What does the $2 surcharge apply to?", answer: "Minivans, trucks, and larger SUVs add $2 to all full-service packages." },
  { question: "Can I upgrade mid-package?", answer: "Absolutely — just let our staff know before we start and they'll get you set up with the right package." },
  { question: "Do you offer gift cards?", answer: "Yes! Ask our staff about gift cards — great for any occasion." },
];

function PackageCard({ pkg, featured = false }: { pkg: { name: string; price: string; features: string[]; best?: boolean }; featured?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 flex flex-col ${featured ? "bg-[hsl(var(--dark))] ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.25)]" : "bg-white border border-border"}`}>
      {pkg.best && (
        <span className={`text-xs font-display font-bold px-3 py-1 rounded-full self-start mb-3 ${featured ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
          {featured ? "MOST POPULAR" : "Best Value"}
        </span>
      )}
      <h3 className={`font-heading text-4xl mb-1 ${featured ? "text-white" : "text-foreground"}`}>{pkg.name}</h3>
      <p className="font-heading text-5xl text-primary mb-6">{pkg.price}</p>
      <ul className="space-y-2.5 flex-1 mb-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
            <span className={`text-sm font-display ${featured ? "text-white/80" : "text-muted-foreground"}`}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact-us" className={`block text-center font-display font-semibold py-3 rounded-md transition-colors text-sm ${featured ? "bg-primary text-white hover:bg-accent" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}>
        Choose This Package
      </Link>
    </div>
  );
}

export default function WashPackagesPage() {
  return (
    <>
      <section className="bg-[hsl(var(--dark))] pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="font-heading text-6xl sm:text-7xl text-white mt-2">Wash Packages</h1>
          <p className="font-display text-white/70 text-lg mt-4 max-w-2xl mx-auto">Six packages designed to fit every need and budget — all with the human touch that automated washes can&apos;t match.</p>
        </div>
      </section>

      <section className="bg-white -mt-8 rounded-t-[2.5rem] relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-foreground mb-2">Exterior Packages</h2>
          <p className="font-display text-muted-foreground mb-8">Quick and thorough — in and out in 10-15 minutes.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {exteriorPackages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>

          <h2 className="font-heading text-4xl text-foreground mb-2">Full Service Packages</h2>
          <p className="font-display text-muted-foreground mb-2">Complete inside and out — 20-30 minutes.</p>
          <p className="font-display text-sm text-muted-foreground mb-8">* Minivans, trucks &amp; larger SUVs add $2.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {fullServicePackages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} featured={pkg.featured} />)}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl text-foreground mb-6 text-center">Package Questions</h2>
            <Accordion items={faqItems} />
          </div>

          <div className="mt-16 text-center">
            <p className="font-display text-muted-foreground mb-6">Want unlimited washes for a flat monthly rate?</p>
            <Link href="/membership" className="inline-block bg-primary text-white font-display font-semibold px-8 py-4 rounded-md hover:bg-accent transition-colors">
              See Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
