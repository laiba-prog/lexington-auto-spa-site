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
  },
];

const perks = [
  { stat: "Save up to 60%",    sub: "vs paying per wash"      },
  { stat: "10 Washes / Month", sub: "one per day, no limits"  },
  { stat: "Cancel Anytime",    sub: "no contracts, no catch"  },
  { stat: "Since 2005",        sub: "trusted in Lexington"    },
];

const steps = [
  { n: "01", title: "Pick Your Plan",      desc: "Exterior or Full Service — one flat monthly rate, no contracts, no surprise fees." },
  { n: "02", title: "Sign Up Online",      desc: "Quick enrollment, done in minutes. Your membership starts the same day."           },
  { n: "03", title: "Come Back Every Day", desc: "Up to once per day all month long. We'll be here at 1124 Winchester Road."         },
];

function Droplet({ orange }: { orange?: boolean }) {
  return (
    <svg className="shrink-0 mt-[3px]" width="10" height="13" viewBox="0 0 10 13" fill="none" aria-hidden>
      <path d="M5 0 C5 0 0 5.5 0 8.5 C0 11.5 2.24 13 5 13 C7.76 13 10 11.5 10 8.5 C10 5.5 5 0 5 0Z"
        fill={orange ? "hsl(26 100% 55%)" : "rgba(255,255,255,0.5)"} />
    </svg>
  );
}

export default function WashClub() {
  return (
    <section className="bg-[#161c2a] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col">

        {/* Heading */}
        <div className="mb-12 order-1">
          <h2 className="font-heading text-white leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
            JOIN THE<br /><span className="text-primary">WASH CLUB.</span>
          </h2>
          <p className="font-sans text-white/40 text-base mt-3 max-w-md leading-relaxed">
            Stop paying per wash. For less than the cost of two visits,
            you get up to 10 washes a month — drive in whenever you want.
          </p>
        </div>

        {/* Perks circles — full width row */}
        <div className="grid grid-cols-4 gap-3 mb-14 order-3 w-full">
          {perks.map((p) => (
            <div
              key={p.stat}
              className="aspect-square flex flex-col items-center justify-center text-center p-2"
              style={{ background: "hsl(26 100% 55%)", borderRadius: "50%" }}
            >
              <span className="font-heading text-white leading-tight" style={{ fontSize: "clamp(0.7rem, 2.5vw, 1.1rem)", letterSpacing: "0.03em" }}>
                {p.stat.toUpperCase()}
              </span>
              <span className="font-sans text-white/80 leading-tight mt-1" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)" }}>
                {p.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Plan cards — side by side */}
        <div className="grid sm:grid-cols-2 gap-3 mb-16 order-2">
          {plans.map((plan) => (
            <div key={plan.name} className="relative pt-5 flex flex-col">
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-[#161c2a] text-white text-[9px] font-sans font-bold tracking-widest uppercase px-4 py-1.5">
                  {plan.badge}
                </div>
              )}
              <div className={`flex flex-col flex-1 p-6 pt-8 ${plan.featured ? "bg-primary" : "bg-white"}`}>
                <h3 className={`font-heading leading-tight mb-1 ${plan.featured ? "text-white" : "text-[#161c2a]"}`} style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  {plan.name.toUpperCase()}
                </h3>
                <p className="font-sans text-sm leading-snug mb-5" style={{ color: plan.featured ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)" }}>
                  {plan.tagline}
                </p>
                <div className={`flex items-baseline gap-1 mb-6 pb-6 border-b ${plan.featured ? "border-white/10" : "border-black/10"}`}>
                  <span className={`font-heading leading-none ${plan.featured ? "text-white" : "text-primary"}`} style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}>
                    {plan.price}
                  </span>
                  <span className="font-sans text-sm" style={{ color: plan.featured ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>{plan.per}</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Droplet orange />
                      <span className={`font-sans text-sm leading-snug ${plan.featured ? "text-white/80" : "text-slate-700"}`}>{f}</span>
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

        {/* How it works */}
        <div className="border-t border-white/10 pt-12 mt-4 order-4">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/25 mb-10">How It Works</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 items-start">
                {/* Step number in orange circle */}
                <div
                  className="circle shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ background: "hsl(26 100% 55%)", borderRadius: "50%" }}
                >
                  <span className="font-heading text-white text-lg leading-none">{s.n}</span>
                </div>
                <div>
                  <p className="font-heading text-white tracking-wide text-lg leading-none mb-2">{s.title.toUpperCase()}</p>
                  <p className="font-sans text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
