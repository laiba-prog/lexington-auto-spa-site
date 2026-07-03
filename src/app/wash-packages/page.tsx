import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wash Packages | Lexington Auto Spa",
  description: "Explore all Lexington Auto Spa wash packages — from $18 Exterior Wash to the $60 Ultimate Shine full-service detail.",
};

const exterior = [
  { name: "Exterior Wash",   price: "$18", features: ["Wheel + Tire Cleaner", "Bug Prep", "Towel Dry"], featured: false },
  { name: "Deluxe Exterior", price: "$23", features: ["Everything in Exterior", "Triple Foam Protectant", "Wheel Brite", "Hand Applied Tire Dressing"], featured: false },
  { name: "Works Exterior",  price: "$26", features: ["Everything in Deluxe", "Rain-X Wax", "Armor All Extreme Shine Wax", "Undercarriage + Rust Inhibitor"], featured: true, badge: "Best Exterior Value" },
];

const fullService = [
  { name: "Inside & Out",    price: "$35", features: ["Vacuum", "Windows Cleaned", "Dash & Console Wiped", "Exterior Wash", "Towel Dry"], featured: false },
  { name: "Ultimate",        price: "$40", features: ["Everything in Inside & Out", "Cup Holders Wiped", "Door Panels Wiped", "Undercarriage + Rust Inhibitor", "Wheel Brite", "Hand Applied Tire Dressing"], featured: false },
  { name: "Ultimate Shine",  price: "$60", features: ["Everything in Ultimate", "Dash/Doors/Console Dressed", "Rain-X Wax", "Armor All Professional Wax", "Extreme Shine Wax + Carnauba"], featured: true, badge: "Most Popular" },
];

function PackageCard({ pkg }: { pkg: typeof exterior[0] & { badge?: string } }) {
  const featured = pkg.featured;
  return (
    <div className="relative pt-5 flex flex-col h-full">
      {pkg.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-[#1e2636] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-5 py-2">
          {pkg.badge}
        </div>
      )}
      <div className={`flex flex-col flex-1 p-6 pt-8 ${featured ? "bg-primary" : "bg-[#1e2636]"}`}>
        <h3 className="font-heading text-white leading-tight mb-1" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
          {pkg.name}
        </h3>
        <p className={`font-heading leading-none mb-6 ${featured ? "text-white" : "text-primary"}`} style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}>
          {pkg.price}
        </p>
        <ul className="space-y-3 flex-1 mb-6">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <svg className="shrink-0 mt-[3px]" width="10" height="13" viewBox="0 0 10 13" fill="none" aria-hidden>
                <path
                  d="M5 0 C5 0 0 5.5 0 8.5 C0 11.5 2.24 13 5 13 C7.76 13 10 11.5 10 8.5 C10 5.5 5 0 5 0Z"
                  fill={featured ? "rgba(255,255,255,0.7)" : "hsl(26 100% 55%)"}
                />
              </svg>
              <span className={`font-sans text-sm leading-snug ${featured ? "text-white/90" : "text-white/85"}`}>{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact-us"
          className={`block text-center font-heading tracking-widest py-4 text-base transition-colors ${
            featured ? "bg-[#1e2636] text-white hover:bg-[#161c2a]" : "bg-primary text-white hover:bg-accent"
          }`}
        >
          Get This Wash
        </Link>
      </div>
    </div>
  );
}

function PackageGroup({ label, sub, note, packages }: { label: string; sub: string; note?: string; packages: typeof exterior }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1 h-px bg-primary" />
        <h2 className="font-heading text-foreground shrink-0 leading-none" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          {label}
        </h2>
        <div className="flex-1 h-px bg-primary" />
      </div>
      <p className="text-center font-sans text-base text-foreground/50 mb-1">{sub}</p>
      {note && <p className="text-center font-sans text-sm text-foreground/35 mb-8">{note}</p>}
      {!note && <div className="mb-8" />}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

export default function WashPackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#161c2a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          <h1 className="font-heading text-white leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
            WASH <span className="text-primary">PACKAGES.</span>
          </h1>
          <p className="font-sans text-white/40 text-base mt-3 max-w-lg">
            Six packages designed to fit every need and budget — all with the human touch that automated washes can&apos;t match.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <PackageGroup
            label="Full Service"
            sub="Interior + Exterior · 20–30 min · Vacuum, windows, dash wipe, hand-prep & towel dry"
            note="* Minivans, trucks & larger SUVs add $2."
            packages={fullService}
          />
          <PackageGroup
            label="Exterior Only"
            sub="Outside only · 10–15 min · Quick refresh without interior service"
            packages={exterior}
          />
        </div>
      </section>

      {/* Wash Club */}
      <section className="bg-[#161c2a] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          <div className="mb-12">
            <h2 className="font-heading text-white leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
              JOIN THE<br /><span className="text-primary">WASH CLUB.</span>
            </h2>
            <p className="font-sans text-white/40 text-base mt-3 max-w-md leading-relaxed">
              Stop paying per wash. For less than the cost of two visits, you get up to 10 washes a month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {plans.map((plan) => (
              <div key={plan.name} className="relative pt-5 flex flex-col">
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-white text-[#161c2a] text-[9px] font-sans font-bold tracking-widest uppercase px-4 py-1.5">
                    {plan.badge}
                  </div>
                )}
                <div className={`flex flex-col flex-1 p-6 pt-8 ${plan.featured ? "bg-primary" : "bg-[#1e2636]"}`}>
                  <h3 className="font-heading text-white leading-tight mb-1" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {plan.name.toUpperCase()}
                  </h3>
                  <p className="font-sans text-sm leading-snug mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="font-heading text-white leading-none" style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}>
                      {plan.price}
                    </span>
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.per}</span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className="shrink-0 mt-[3px]" width="10" height="13" viewBox="0 0 10 13" fill="none" aria-hidden>
                          <path d="M5 0 C5 0 0 5.5 0 8.5 C0 11.5 2.24 13 5 13 C7.76 13 10 11.5 10 8.5 C10 5.5 5 0 5 0Z"
                            fill={plan.featured ? "rgba(255,255,255,0.7)" : "hsl(26 100% 55%)"} />
                        </svg>
                        <span className="font-sans text-sm leading-snug text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://www.lexingtonautospa.com/#unlimited-club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center font-heading tracking-widest py-4 text-sm transition-colors ${
                      plan.featured
                        ? "bg-[#161c2a] text-white hover:bg-black"
                        : "bg-primary text-white hover:bg-accent"
                    }`}
                  >
                    Join Today
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Perk circles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-hidden">
            {perks.map((p) => (
              <div
                key={p.stat}
                className="circle aspect-square flex flex-col items-center justify-center text-center p-4"
                style={{ background: "hsl(26 100% 55%)", borderRadius: "50%" }}
              >
                <span className="font-heading text-white leading-tight" style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)", letterSpacing: "0.03em" }}>
                  {p.stat.toUpperCase()}
                </span>
                <span className="font-sans text-white/70 leading-tight mt-1" style={{ fontSize: "clamp(0.65rem, 1.3vw, 0.75rem)" }}>
                  {p.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

const perks = [
  { stat: "Save up to 60%",    sub: "vs paying per wash"     },
  { stat: "10 Washes / Month", sub: "one per day, no limits" },
  { stat: "Cancel Anytime",    sub: "no contracts, no catch" },
  { stat: "Since 2005",        sub: "trusted in Lexington"   },
];

const plans = [
  {
    name: "Full Service Monthly",
    price: "$49.95",
    per: "/mo",
    tagline: "Inside and out — the full treatment, unlimited all month.",
    features: [
      "Up to 10 Washes / Month",
      "One wash per day",
      "All full-service packages included",
      "Interior + exterior every visit",
      "Simple monthly billing",
      "Cancel anytime",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Exterior Monthly",
    price: "$29.95",
    per: "/mo",
    tagline: "Keep it clean on the outside — fast, every day if you want.",
    features: [
      "Up to 10 Washes / Month",
      "One wash per day",
      "All exterior packages included",
      "Simple monthly billing",
      "Cancel anytime",
    ],
    featured: false,
    badge: undefined,
  },
];
