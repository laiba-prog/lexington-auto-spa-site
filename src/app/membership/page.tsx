import type { Metadata } from "next";
import { Check, Calendar, CreditCard, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Wash Club Membership | Lexington Auto Spa",
  description: "Join the Lexington Auto Spa Wash Club — 10 washes per month starting at $29.95. Exterior and full-service membership options available.",
};

const plans = [
  {
    name: "Exterior Monthly",
    price: "$29.95",
    period: "/month",
    features: ["10 Washes Per Month", "Convenient Monthly Billing", "Wash Once Per Day", "Exterior Packages Included"],
    featured: false,
  },
  {
    name: "Full Service Monthly",
    price: "$49.95",
    period: "/month",
    features: ["10 Washes Per Month", "Convenient Monthly Billing", "Wash Once Per Day", "All Full Service Packages Included", "Best Value for Regular Customers"],
    featured: true,
  },
];

const benefits = [
  { icon: Calendar, title: "Up to 10 Washes/Month", desc: "One wash per day, every day if you want. Keep your vehicle consistently clean all month long." },
  { icon: CreditCard, title: "Simple Monthly Billing", desc: "One charge per month, no surprises. Cancel anytime — we make membership easy." },
  { icon: Car, title: "Same Great Service", desc: "Members get the same hand-attention and premium products as every other customer — because that's our standard." },
];

const steps = [
  { step: "1", title: "Choose Your Plan", desc: "Pick Exterior or Full Service based on how you want your car cleaned." },
  { step: "2", title: "Sign Up", desc: "Click Join Today and complete the quick online enrollment." },
  { step: "3", title: "Come Anytime", desc: "Roll up to 1124 Winchester Road up to once per day, every day of the month." },
];

export default function MembershipPage() {
  return (
    <>
      {/* Plans */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 mb-4 shadow-sm">
              <span className="font-heading text-primary text-lg tracking-[0.2em] uppercase font-bold">Membership</span>
            </div>
            <h1 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
              Wash <span className="text-primary">Club.</span>
            </h1>
            <p className="font-sans text-foreground/60 text-lg sm:text-lg mt-4 max-w-xl mx-auto">
              Unlimited clean. One flat monthly rate. No games.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative pt-6 flex flex-col ${plan.featured ? "mt-8 sm:mt-0" : ""}`}>
                {plan.featured && (
                  <div className="absolute -top-2 -right-2 z-10 whitespace-nowrap rounded-full bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] text-sm font-sans font-bold tracking-widest uppercase px-3 py-1 shadow-md rotate-6">
                    Most Popular
                  </div>
                )}
                <div className={`flex flex-col flex-1 rounded-3xl p-6 sm:p-8 shadow-xl ${plan.featured ? "bg-[hsl(var(--dark))]" : "bg-white"}`}>
                  <h3 className={`font-heading font-bold text-2xl mb-1 ${plan.featured ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`font-heading font-bold leading-none text-3xl ${plan.featured ? "text-white" : "text-primary"}`}>{plan.price}</span>
                    <span className={`font-sans text-lg ${plan.featured ? "text-white/50" : "text-foreground/50"}`}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 ${plan.featured ? "text-white" : "text-primary"}`} />
                        <span className={`font-sans text-lg ${plan.featured ? "text-white/80" : "text-foreground/70"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://www.lexingtonautospa.com/#unlimited-club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-full font-heading tracking-widest py-3.5 text-lg ${plan.featured ? "bg-primary text-white hover:bg-accent" : "bg-[hsl(var(--dark))] text-white hover:bg-[hsl(var(--dark))]/80"}`}
                  >
                    Join Today
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-foreground text-xl mb-2">{b.title}</h3>
                <p className="font-sans text-lg text-foreground/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <h2 className="font-heading text-foreground text-center mb-10" style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-xl">{s.step}</div>
                <h3 className="font-heading text-foreground text-lg mb-2">{s.title}</h3>
                <p className="font-sans text-lg text-foreground/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
