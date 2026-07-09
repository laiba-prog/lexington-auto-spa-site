"use client";

import { useState } from "react";
import Link from "next/link";

const exterior = [
  { name: "The Classic", price: "$16", monthly: "$34.95", features: ["Presoak", "Foam Bath", "Towel Dry"] },
  { name: "Ceramic",     price: "$25", monthly: "$44.95", features: ["Works Wash +", "Underbody Wash", "Quartz Protectant", "Ceramic Shine"], badge: "Most Popular" },
  { name: "Wheel Deal",  price: "$20", monthly: "$39.95", features: ["The Classic +", "Clearcoat Sealant", "Tire Shine", "Wheel Brite"] },
];

const fullService = [
  { name: "Silver",   price: "$36", monthly: "$59.95", features: ["Vacuum", "Windows", "Bug Prep", "Presoak", "Towel Dry"] },
  { name: "Platinum", price: "$48", monthly: "$79.95", features: ["Vacuum", "Windows", "Front Cupholders", "Dash & Console", "Underbody Wash", "Quartz Protectant", "Ceramic Shine"], badge: "Most Popular" },
  { name: "Gold",     price: "$42", monthly: "$69.95", features: ["Vacuum", "Windows", "Front Cupholders", "Triple Foam", "Wheel Brite", "Tire Shine"] },
];

type Pkg = { name: string; price: string; monthly: string; features: string[]; badge?: string };
type BillingMode = "monthly" | "single";

const ORDER_1 = "order-1";
const ORDER_2 = "order-2";
const ORDER_3 = "order-3";

const SPARKLES = [
  { top: "6%", left: "5%", size: 16, glow: true },
  { top: "14%", left: "10%", size: 10 },
  { top: "88%", left: "6%", size: 14 },
  { top: "3%", left: "94%", size: 12 },
  { top: "18%", left: "91%", size: 20, glow: true },
  { top: "92%", left: "90%", size: 10 },
  { top: "50%", left: "97%", size: 14 },
];

function FourPointStar({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="hsl(var(--gold))" aria-hidden>
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
    </svg>
  );
}

function SparkleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute opacity-60"
          style={{ top: s.top, left: s.left, filter: s.glow ? "drop-shadow(0 0 5px hsl(var(--gold)/0.6))" : undefined }}
        >
          <FourPointStar size={s.size} />
        </span>
      ))}
    </div>
  );
}

function BillingToggle({ mode, onChange }: { mode: BillingMode; onChange: (m: BillingMode) => void }) {
  return (
    <div className="inline-flex items-center rounded-full bg-white p-1 shadow-sm">
      {(["monthly", "single"] as const).map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={`rounded-full px-5 py-2 font-heading text-lg tracking-wide ${
            mode === m ? "bg-primary text-white shadow-md" : "text-foreground/60"
          }`}
        >
          {m === "monthly" ? "Monthly" : "Single Wash"}
        </button>
      ))}
    </div>
  );
}

function FeatureStar() {
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="hsl(var(--primary))" aria-hidden>
        <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
      </svg>
    </span>
  );
}

function PackageCard({ pkg, mode }: { pkg: Pkg; mode: BillingMode }) {
  const price = mode === "monthly" ? pkg.monthly : pkg.price;
  const label = mode === "monthly" ? "per month, unlimited" : "single wash";
  const featured = !!pkg.badge;

  return (
    <div className="relative pt-4 flex flex-col h-full">
      {pkg.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] text-sm font-sans font-bold tracking-widest uppercase px-4 py-1.5 shadow-lg">
          {pkg.badge}
        </div>
      )}

      <div
        className={`relative flex flex-col flex-1 justify-between overflow-hidden rounded-3xl bg-white ${
          featured ? "shadow-[0_18px_45px_-12px_hsl(var(--primary)/0.45)] ring-2 ring-primary" : "shadow-xl ring-1 ring-black/5"
        }`}
      >
        <div className="flex flex-col flex-1 justify-between p-7 pt-7">
          <div>
            <h3 className="font-heading font-bold text-foreground uppercase tracking-wide leading-tight mb-5 text-center" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>
              {pkg.name}
            </h3>

            <div className="mb-6 text-center">
              <span className="font-heading font-bold text-primary leading-none" style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.1rem)" }}>
                {price}
              </span>
              <p className="font-sans text-foreground/45 text-lg tracking-widest uppercase mt-1">{label}</p>
            </div>

            <ul className="space-y-3">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center justify-center gap-3">
                  <FeatureStar />
                  <span className="font-sans text-lg leading-snug text-foreground/70">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            {mode === "monthly" ? (
              <a
                href="https://www.lexingtonautospa.com/#unlimited-club"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 rounded-full font-heading tracking-widest py-3.5 text-lg ${
                  featured
                    ? "bg-primary text-white hover:bg-accent"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Join Now
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            ) : (
              <Link
                href="/#pricing"
                className={`group flex items-center justify-center gap-2 rounded-full font-heading tracking-widest py-3.5 text-lg ${
                  featured
                    ? "bg-primary text-white hover:bg-accent"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get This Wash
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageGroup({ label, sub, packages, mode }: { label: string; sub: string; packages: Pkg[]; mode: BillingMode }) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1 h-px bg-black/10" />
        <h3 className="font-heading text-foreground shrink-0 leading-none" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          {label}
        </h3>
        <div className="flex-1 h-px bg-black/10" />
      </div>
      <p className="text-center font-sans text-lg text-foreground/60 mb-10">{sub}</p>

      <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-3 lg:items-stretch">
        {packages.map((pkg) => {
          const mobileRank = [...packages]
            .sort((a, b) => parseFloat(b.monthly.replace("$", "")) - parseFloat(a.monthly.replace("$", "")))
            .indexOf(pkg);
          const mobileOrderClass = [ORDER_1, ORDER_2, ORDER_3][mobileRank];
          return (
            <div key={pkg.name} className={`${mobileOrderClass} lg:order-none`}>
              <PackageCard pkg={pkg} mode={mode} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<BillingMode>("monthly");

  return (
    <section id="pricing" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
        <SparkleField />

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
              FIND YOUR <span className="text-primary">WASH.</span>
            </h2>
            <p className="font-sans text-foreground/60 text-lg mt-3">
              Every package includes hand attention you won&apos;t find at an automated tunnel.
            </p>
          </div>

          <div className="flex justify-center mb-14">
            <BillingToggle mode={mode} onChange={setMode} />
          </div>

          <PackageGroup label="Full Service" sub="Interior + Exterior · Vans, trucks & SUVs add $3" packages={fullService} mode={mode} />
          <PackageGroup label="Exterior Only" sub="Outside only · Quick refresh without interior service" packages={exterior} mode={mode} />
        </div>

      </div>
    </section>
  );
}
