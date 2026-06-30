import Link from "next/link";
import { Check } from "lucide-react";

const exterior = [
  {
    name: "Exterior Wash",
    price: "$18",
    features: ["Wheel + Tire Cleaner", "Bug Prep", "Towel Dry"],
    featured: false,
  },
  {
    name: "Deluxe Exterior",
    price: "$23",
    features: ["Everything in Exterior", "Triple Foam Protectant", "Wheel Brite", "Hand Applied Tire Dressing"],
    featured: false,
  },
  {
    name: "Works Exterior",
    price: "$26",
    features: ["Everything in Deluxe", "Rain-X Wax", "Armor All Extreme Shine Wax", "Undercarriage + Rust Inhibitor"],
    featured: true,
    badge: "Best Exterior Value",
  },
];

const fullService = [
  {
    name: "Inside & Out",
    price: "$35",
    features: ["Vacuum", "Windows Cleaned", "Dash & Console Wiped", "Exterior Wash", "Towel Dry"],
    featured: false,
  },
  {
    name: "Ultimate",
    price: "$40",
    features: ["Everything in Inside & Out", "Cup Holders Wiped", "Door Panels Wiped", "Undercarriage + Rust Inhibitor", "Wheel Brite", "Hand Applied Tire Dressing"],
    featured: false,
  },
  {
    name: "Ultimate Shine",
    price: "$60",
    features: ["Everything in Ultimate", "Dash/Doors/Console Dressed", "Rain-X Wax", "Armor All Professional Wax", "Extreme Shine Wax + Carnauba"],
    featured: true,
    badge: "Most Popular",
  },
];

function PackageCard({ pkg, dark }: { pkg: typeof exterior[0] & { badge?: string }; dark?: boolean }) {
  return (
    <div className={`relative rounded-2xl p-5 sm:p-6 flex flex-col h-full ${
      pkg.featured
        ? dark
          ? "bg-[hsl(var(--dark))] ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.25)]"
          : "bg-primary/5 ring-2 ring-primary"
        : "bg-white border border-border"
    }`}>
      {pkg.featured && pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-display font-bold px-4 py-1 rounded-full whitespace-nowrap">
          {pkg.badge}
        </span>
      )}
      <h3 className={`font-heading text-3xl sm:text-4xl mb-1 ${dark && pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.name}</h3>
      <p className="font-heading text-5xl text-primary mb-5">{pkg.price}</p>
      <ul className="space-y-2 flex-1 mb-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
            <span className={`text-sm font-display ${dark && pkg.featured ? "text-white/80" : "text-muted-foreground"}`}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/wash-packages"
        className={`block text-center font-display font-semibold py-3 px-6 rounded-md transition-colors text-sm ${
          pkg.featured
            ? "bg-primary text-white hover:bg-accent"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
        }`}
      >
        Get This Wash
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="bg-[hsl(var(--muted))] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-display font-semibold text-xs tracking-widest uppercase">Our Packages</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2 mb-3">Find Your Perfect Wash</h2>
          <p className="font-display text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Every package includes hand attention you won&apos;t find at an automated tunnel.
          </p>
        </div>

        {/* Full Service — hero section, shown first on mobile */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="font-heading text-2xl sm:text-3xl text-foreground">Full Service</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-sm font-display text-muted-foreground mb-6">Interior + Exterior · 20–30 min · Vacuum, windows, dash wipe, hand-prep & towel dry</p>
          {/* Mobile: reverse so Most Popular shows first */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 sm:[&>*:nth-child(1)]:order-3 sm:[&>*:nth-child(2)]:order-2 sm:[&>*:nth-child(3)]:order-1">
            {[...fullService].reverse().map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} dark />
            ))}
          </div>
        </div>

        {/* Exterior Only */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="font-heading text-2xl sm:text-3xl text-foreground">Exterior Only</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-sm font-display text-muted-foreground mb-6">Outside only · 10–15 min · Quick refresh without interior service</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 sm:[&>*:nth-child(1)]:order-3 sm:[&>*:nth-child(2)]:order-2 sm:[&>*:nth-child(3)]:order-1">
            {[...exterior].reverse().map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
