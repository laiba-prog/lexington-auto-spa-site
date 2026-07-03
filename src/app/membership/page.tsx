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
      <section className="bg-[hsl(var(--dark))] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Membership</span>
          <h1 className="font-heading text-6xl sm:text-7xl text-white mt-2">Wash Club</h1>
          <p className="font-display text-white/70 text-lg mt-4 max-w-2xl mx-auto">Unlimited clean. One flat monthly rate. No games.</p>
        </div>
      </section>

      <section className="bg-white -mt-8 rounded-t-[2.5rem] relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.featured ? "bg-[hsl(var(--dark))] ring-2 ring-primary shadow-[0_0_40px_rgba(255,127,26,0.25)]" : "bg-muted border border-border"}`}>
                {plan.featured && <span className="text-xs font-display font-bold bg-primary text-white px-3 py-1 rounded-full self-start mb-3">MOST POPULAR</span>}
                <h3 className={`font-heading text-3xl mb-2 ${plan.featured ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-heading text-4xl text-primary">Starting at {plan.price}</span>
                  <span className={`font-display text-sm ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className={`font-display text-sm ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.lexingtonautospa.com/#unlimited-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-display font-semibold py-3 rounded-md transition-colors ${plan.featured ? "bg-primary text-white hover:bg-accent" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
                >
                  Join Today
                </a>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">{b.title}</h3>
                <p className="font-display text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-8 lg:p-12">
            <h2 className="font-heading text-4xl text-foreground text-center mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-2xl">{s.step}</div>
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="font-display text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
