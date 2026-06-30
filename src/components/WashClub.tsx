import { Check, Calendar, CreditCard, Car } from "lucide-react";

const plans = [
  {
    name: "Exterior Monthly",
    price: "$29.95/mo",
    features: ["Up to 10 Washes/Month", "One wash per day", "All exterior packages", "Simple monthly billing"],
    featured: false,
  },
  {
    name: "Full Service Monthly",
    price: "$49.95/mo",
    features: ["Up to 10 Washes/Month", "One wash per day", "All full-service packages", "Simple monthly billing", "Best value for regular customers"],
    featured: true,
  },
];

const steps = [
  { step: "1", title: "Choose Your Plan", desc: "Exterior or Full Service — pick based on how you want your car cleaned." },
  { step: "2", title: "Sign Up Online", desc: "Quick enrollment, one flat monthly charge, cancel anytime." },
  { step: "3", title: "Come Anytime", desc: "Roll up to 1124 Winchester Road up to once per day, any day of the month." },
];

const benefits = [
  { icon: Calendar, title: "Up to 10 Washes/Month", desc: "One wash per day. Keep your car consistently clean all month long." },
  { icon: CreditCard, title: "Simple Monthly Billing", desc: "One charge per month. No surprises. Cancel anytime." },
  { icon: Car, title: "Same Great Service", desc: "Members get the same hand-attention and premium products — because that's our standard." },
];

export default function WashClub() {
  return (
    <section className="bg-[hsl(var(--dark))] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-primary font-display font-semibold text-xs tracking-widest uppercase">Membership</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-3">Join the Wash Club</h2>
          <p className="font-display text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Unlimited clean. One flat monthly rate. Up to 10 washes a month — exterior or full service.
          </p>
        </div>

        {/* Plans + Benefits side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">

          {/* Plans */}
          <div className="flex flex-col sm:flex-row gap-5 flex-1">
          {[...plans].reverse().map((plan) => (
            <div key={plan.name} className={`flex-1 rounded-2xl p-6 flex flex-col ${plan.featured ? "bg-primary shadow-[0_0_40px_rgba(255,127,26,0.3)]" : "bg-[#263035] border border-white/10"}`}>
              <span className={`text-xs font-display font-bold px-3 py-1 rounded-full self-start mb-3 ${plan.featured ? "bg-white text-primary" : "bg-white/10 text-white/60"}`}>
                {plan.featured ? "MOST POPULAR" : "EXTERIOR"}
              </span>
              <h3 className="font-heading text-2xl mb-1 text-white">{plan.name}</h3>
              <p className={`font-heading text-3xl mb-5 ${plan.featured ? "text-white" : "text-primary"}`}>{plan.price}</p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-white" />
                    <span className="font-display text-sm text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.lexingtonautospa.com/#unlimited-club"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-display font-bold py-3 rounded-md transition-colors text-sm ${plan.featured ? "bg-white text-primary hover:bg-white/90" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
              >
                Join Today
              </a>
            </div>
          ))}
          </div>

          {/* Benefits stacked vertically */}
          <div className="flex flex-col gap-4 lg:w-72 flex-shrink-0">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#263035] border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm mb-0.5">{b.title}</h3>
                  <p className="font-display text-white/60 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-[#263035] border border-white/10 rounded-2xl p-8">
          <h3 className="font-heading text-3xl text-white text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-heading text-xl">{s.step}</div>
                <h4 className="font-display font-bold text-white mb-1 text-sm">{s.title}</h4>
                <p className="font-display text-white/60 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
