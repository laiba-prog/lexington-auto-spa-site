import { Droplets, Sparkles, Shield, Coffee } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    desc: "Quick, thorough exterior cleaning with wheel & tire cleaner, bug prep, and towel dry. In and out in 10–15 minutes.",
  },
  {
    icon: Sparkles,
    title: "Full-Service Interior & Exterior",
    desc: "We don't just rinse your car — we clean it inside and out. Vacuum, windows, dash, console, and a hand-prepped exterior.",
  },
  {
    icon: Shield,
    title: "Protective Coatings & Wax",
    desc: "Rain-X, Armor All, Carnauba wax, and Extreme Shine — upgrade your wash with coatings that actually protect your finish.",
  },
  {
    icon: Coffee,
    title: "Comfortable Waiting Area",
    desc: "Relax inside while we work. Browse air fresheners, coffee, and products in our customer lounge.",
  },
];

export default function OtherServices() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary font-display font-semibold text-xs tracking-widest uppercase">What We Offer</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-2">Everything We Do</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-[hsl(var(--muted))] rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="font-display text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
