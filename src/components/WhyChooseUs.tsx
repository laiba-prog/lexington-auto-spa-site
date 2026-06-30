import Image from "next/image";
import { Shield, Clock, Users, Coffee, Car } from "lucide-react";

const BUILDING_URL = "https://ucarecdn.com/0b5bd0f7-1995-4307-bf3e-1db70ebe2f88/";

const differentiators = [
  {
    icon: Car,
    title: "Full-Service Interior & Exterior Washes",
    desc: "We don't just rinse your car, we clean it inside and out.",
  },
  {
    icon: Users,
    title: "Fast, Friendly, Local Since 2005",
    desc: "A Lexington auto care staple built on exceptional service for decades.",
  },
  {
    icon: Shield,
    title: "Premium Products & Modern Equipment",
    desc: "Better soaps, better shine, better protection, and happier customers.",
  },
];

const reasons = [
  { icon: Users, title: "Locally Owned & Operated", desc: "Family-run since 2005. We're your neighbors — every car gets the same care we'd give our own." },
  { icon: Shield, title: "Premium Products", desc: "Rain-X, Armor All, Carnauba wax — we only use products that actually protect your vehicle's finish." },
  { icon: Clock, title: "Fast & Thorough", desc: "Exterior packages in 10–15 min, full-service in 20–30 min. Every package includes vacuum, windows, dash wipe, and a towel-dried finish." },
  { icon: Coffee, title: "Comfortable Waiting Area", desc: "Relax inside while we work. Browse air fresheners, coffee, and other products while you wait." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white -mt-12 lg:-mt-16 rounded-t-[2.5rem] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* The Auto Spa Difference — 3 cards */}
        <div className="mb-20">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">What Sets Us Apart</span>
          <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2 mb-10">The Auto Spa Difference</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[hsl(var(--dark))] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <d.icon className="w-7 h-7 text-white" />
                </div>
                <div className="w-10 h-0.5 bg-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-white mb-3 leading-tight">{d.title}</h3>
                <p className="font-display text-white/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us detail */}
        <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2 mb-8">
          More Than Just a Car Wash
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <r.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{r.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-display">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Q&A */}
            <div className="mt-8 bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <p className="font-display font-bold text-foreground text-sm mb-2">Q: How long does an interior full service wash take?</p>
              <p className="font-display text-muted-foreground text-sm leading-relaxed">
                About 20 to 30 minutes. Vacuum, windows cleaned, dash and console wiped, hand-prepped exterior, and a towel-dried finish. Every package. Every car. Every time.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={BUILDING_URL}
              alt="Lexington Auto Spa car wash building"
              width={600}
              height={700}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
