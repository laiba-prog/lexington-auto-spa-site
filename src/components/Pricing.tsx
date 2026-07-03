import Link from "next/link";

const exterior = [
  { name: "Exterior Wash", price: "$18", features: ["Wheel + Tire Cleaner", "Bug Prep", "Towel Dry"], featured: false },
  { name: "Deluxe Exterior", price: "$23", features: ["Everything in Exterior", "Triple Foam Protectant", "Wheel Brite", "Hand Applied Tire Dressing"], featured: false },
  { name: "Works Exterior", price: "$26", features: ["Everything in Deluxe", "Rain-X Wax", "Armor All Extreme Shine Wax", "Undercarriage + Rust Inhibitor"], featured: true, badge: "Best Exterior Value" },
];

const fullService = [
  { name: "Inside & Out", price: "$35", features: ["Vacuum", "Windows Cleaned", "Dash & Console Wiped", "Exterior Wash", "Towel Dry"], featured: false },
  { name: "Ultimate", price: "$40", features: ["Everything in Inside & Out", "Cup Holders Wiped", "Door Panels Wiped", "Undercarriage + Rust Inhibitor", "Wheel Brite", "Hand Applied Tire Dressing"], featured: false },
  { name: "Ultimate Shine", price: "$60", features: ["Everything in Ultimate", "Dash/Doors/Console Dressed", "Rain-X Wax", "Armor All Professional Wax", "Extreme Shine Wax + Carnauba"], featured: true, badge: "Most Popular" },
];

function PackageCard({ pkg }: { pkg: typeof exterior[0] & { badge?: string } }) {
  const featured = pkg.featured;
  return (
    /* Outer wrapper reserves space for the floating badge on ALL cards */
    <div className="relative pt-5 flex flex-col h-full">

      {/* Badge floats centered on the top edge of the card */}
      {pkg.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-[#1e2636] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-5 py-2">
          {pkg.badge}
        </div>
      )}

      {/* Card body — full height below the badge slot */}
      <div className={`flex flex-col flex-1 p-6 pt-8 ${featured ? "bg-primary" : "bg-[#1e2636]"}`}>
        <h3
          className="font-heading text-white leading-tight mb-1"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
        >
          {pkg.name}
        </h3>
        <p
          className={`font-heading leading-none mb-6 ${featured ? "text-white" : "text-primary"}`}
          style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
        >
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
              <span className={`font-sans text-sm leading-snug ${featured ? "text-white/90" : "text-white/85"}`}>
                {f}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/wash-packages"
          className={`block text-center font-heading tracking-widest py-4 text-base transition-colors ${
            featured
              ? "bg-[#1e2636] text-white hover:bg-[#161c2a]"
              : "bg-primary text-white hover:bg-accent"
          }`}
        >
          Get This Wash
        </Link>
      </div>
    </div>
  );
}

function PackageGroup({ label, sub, packages }: { label: string; sub: string; packages: typeof exterior }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1 h-px bg-primary" />
        <h3 className="font-heading text-foreground shrink-0 leading-none" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          {label}
        </h3>
        <div className="flex-1 h-px bg-primary" />
      </div>
      <p className="text-center font-sans text-base text-foreground/50 mb-8">{sub}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <h2 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
            FIND YOUR <span className="text-primary">WASH.</span>
          </h2>
          <p className="font-sans text-foreground/40 text-base mt-3">
            Every package includes hand attention you won&apos;t find at an automated tunnel.
          </p>
        </div>

        <PackageGroup
          label="Full Service"
          sub="Interior + Exterior · 20–30 min · Vacuum, windows, dash wipe, hand-prep & towel dry"
          packages={fullService}
        />
        <PackageGroup
          label="Exterior Only"
          sub="Outside only · 10–15 min · Quick refresh without interior service"
          packages={exterior}
        />

      </div>
    </section>
  );
}
