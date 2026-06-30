import type { Metadata } from "next";
import Link from "next/link";
import { Check, CalendarDays, CreditCard, Car } from "lucide-react";

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


function PackageCard({ pkg, featured = false, orange = false }: { pkg: { name: string; price: string; features: string[]; best?: boolean }; featured?: boolean; orange?: boolean }) {
  const bg = featured ? "bg-[hsl(var(--dark))] ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.25)]"
    : orange ? "bg-primary shadow-[0_0_40px_rgba(255,127,26,0.35)]"
    : "bg-white border border-border";
  const textColor = featured || orange ? "text-white" : "text-foreground";
  const featureColor = featured ? "text-white/80" : orange ? "text-white/90" : "text-muted-foreground";
  const checkColor = orange ? "text-white" : "text-primary";
  const priceColor = orange ? "text-white" : "text-primary";
  return (
    <div className={`rounded-2xl p-6 flex flex-col ${bg}`}>
      {pkg.best && (
        <span className={`text-xs font-display font-bold px-3 py-1 rounded-full self-start mb-3 ${featured ? "bg-primary text-white" : orange ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
          {featured ? "MOST POPULAR" : "Best Value"}
        </span>
      )}
      <h3 className={`font-heading text-4xl mb-1 ${textColor}`}>{pkg.name}</h3>
      <p className={`font-heading text-5xl mb-6 ${priceColor}`}>{pkg.price}</p>
      <ul className="space-y-2.5 flex-1 mb-6">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${checkColor}`} />
            <span className={`text-sm font-display ${featureColor}`}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact-us" className={`block text-center font-display font-semibold py-3 rounded-md transition-colors text-sm ${featured ? "bg-primary text-white hover:bg-accent" : orange ? "bg-white text-primary hover:bg-white/90" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}>
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
            {exteriorPackages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} orange={pkg.best} />)}
          </div>

          <h2 className="font-heading text-4xl text-foreground mb-2">Full Service Packages</h2>
          <p className="font-display text-muted-foreground mb-2">Complete inside and out — 20-30 minutes.</p>
          <p className="font-display text-sm text-muted-foreground mb-8">* Minivans, trucks &amp; larger SUVs add $2.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {fullServicePackages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} featured={pkg.featured} />)}
          </div>

          {/* Membership section */}
          <div className="mt-16 border-t border-border pt-16">
            <h2 className="font-heading text-4xl text-foreground mb-2">Wash Club Memberships</h2>
            <p className="font-display text-muted-foreground mb-8">Up to 10 washes per month for one flat rate. One wash per day, cancel anytime.</p>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="grid sm:grid-cols-2 gap-6 flex-1 w-full">
              <div className="rounded-2xl p-6 flex flex-col bg-white border border-border">
                <h3 className="font-heading text-3xl text-foreground mb-1">Exterior Monthly</h3>
                <p className="font-heading text-4xl text-primary mb-5">$29.95<span className="font-display text-base text-muted-foreground font-normal">/mo</span></p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {["Up to 10 Washes/Month", "One wash per day", "All exterior packages included", "Simple monthly billing"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-display text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://www.lexingtonautospa.com/#unlimited-club" target="_blank" rel="noopener noreferrer" className="block text-center font-display font-semibold py-3 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm">
                  Join Today
                </a>
              </div>
              <div className="rounded-2xl p-6 flex flex-col bg-[hsl(var(--dark))] ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.25)]">
                <span className="text-xs font-display font-bold bg-primary text-white px-3 py-1 rounded-full self-start mb-3">MOST POPULAR</span>
                <h3 className="font-heading text-3xl text-white mb-1">Full Service Monthly</h3>
                <p className="font-heading text-4xl text-primary mb-5">$49.95<span className="font-display text-base text-white/60 font-normal">/mo</span></p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {["Up to 10 Washes/Month", "One wash per day", "All full-service packages included", "Simple monthly billing", "Best value for regular customers"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-display text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://www.lexingtonautospa.com/#unlimited-club" target="_blank" rel="noopener noreferrer" className="block text-center font-display font-semibold py-3 rounded-md bg-primary text-white hover:bg-accent transition-colors text-sm">
                  Join Today
                </a>
              </div>
            </div>

              {/* Benefit cards — right column */}
              <div className="flex flex-col gap-4 lg:w-72 w-full">
                {[
                  { icon: CalendarDays, title: "Up to 10 Washes/Month", desc: "One wash per day. Keep your car consistently clean all month long." },
                  { icon: CreditCard, title: "Simple Monthly Billing", desc: "One charge per month. No surprises. Cancel anytime." },
                  { icon: Car, title: "Same Great Service", desc: "Members get the same hand-attention and premium products — because that's our standard." },
                ].map((b) => (
                  <div key={b.title} className="bg-[hsl(var(--dark))] rounded-2xl p-5 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <b.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-sm mb-1">{b.title}</p>
                      <p className="font-display text-white/60 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-display text-muted-foreground text-sm mt-6">* Minivans, trucks & larger SUVs add $2 to full-service packages.</p>
          </div>
        </div>
      </section>
    </>
  );
}
