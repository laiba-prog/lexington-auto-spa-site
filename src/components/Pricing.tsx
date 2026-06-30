import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Exterior Wash",
    price: "$18",
    time: "10-15 min",
    type: "Exterior",
    features: ["Wheel + Tire Cleaner", "Bug Prep", "Towel Dry"],
    bg: "bg-muted",
    badge: null,
    featured: false,
  },
  {
    name: "Deluxe Exterior",
    price: "$23",
    time: "10-15 min",
    type: "Exterior",
    features: ["Everything in Exterior", "Triple Foam Protectant", "Wheel Brite", "Hand Applied Tire Dressing"],
    bg: "bg-white border border-border",
    badge: null,
    featured: false,
  },
  {
    name: "Works Exterior",
    price: "$26",
    time: "10-15 min",
    type: "Exterior",
    features: ["Everything in Deluxe", "Rain-X Wax", "Armor All Extreme Shine Wax", "Undercarriage + Rust Inhibitor"],
    bg: "bg-primary/5 border border-primary/20",
    badge: "Best Exterior Value",
    featured: false,
  },
  {
    name: "Inside & Out",
    price: "$35",
    time: "20-30 min",
    type: "Full Service",
    features: ["Vacuum", "Windows Cleaned", "Dash & Console Wiped", "Exterior Wash", "Towel Dry"],
    bg: "bg-muted",
    badge: null,
    featured: false,
  },
  {
    name: "Ultimate",
    price: "$40",
    time: "20-30 min",
    type: "Full Service",
    features: ["Everything in Inside & Out", "Cup Holders Wiped", "Door Panels Wiped", "Undercarriage + Rust Inhibitor", "Wheel Brite", "Hand Applied Tire Dressing"],
    bg: "bg-white border border-border",
    badge: null,
    featured: false,
  },
  {
    name: "Ultimate Shine",
    price: "$60",
    time: "20-30 min",
    type: "Full Service",
    features: ["Everything in Ultimate", "Dash/Doors/Console Dressed", "Rain-X Wax", "Armor All Professional Wax", "Extreme Shine Wax + Carnauba"],
    bg: "bg-[hsl(var(--dark))]",
    badge: "MOST POPULAR",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Our Packages</span>
          <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2 mb-4">Find Your Perfect Wash</h2>
          <p className="font-display text-muted-foreground max-w-2xl mx-auto">
            From a quick exterior refresh to our full top-tier detail — every package includes hand attention you won&apos;t find at an automated tunnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 flex flex-col ${pkg.bg} ${pkg.featured ? "ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.3)]" : ""}`}
            >
              {pkg.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-display font-bold px-4 py-1 rounded-full ${pkg.featured ? "bg-primary text-white" : "bg-primary/10 text-primary border border-primary/20"}`}>
                  {pkg.badge}
                </span>
              )}
              <div className={`text-xs font-display font-semibold tracking-widest uppercase mb-2 ${pkg.featured ? "text-primary" : "text-muted-foreground"}`}>
                {pkg.type} • {pkg.time}
              </div>
              <h3 className={`font-heading text-4xl mb-1 ${pkg.featured ? "text-white" : "text-foreground"}`}>{pkg.name}</h3>
              <p className="font-heading text-5xl text-primary mb-6">{pkg.price}</p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className={`text-sm font-display ${pkg.featured ? "text-white/80" : "text-muted-foreground"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className={`block text-center font-display font-semibold py-3 px-6 rounded-md transition-colors text-sm ${pkg.featured ? "bg-primary text-white hover:bg-accent" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
              >
                Get This Wash
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 font-display">
          * Minivans, Trucks &amp; Larger SUVs add $2 to full-service packages.
        </p>
      </div>
    </section>
  );
}
