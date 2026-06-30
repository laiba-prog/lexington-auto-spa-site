import Image from "next/image";
import { Shield, Clock, Users, Star } from "lucide-react";

const reasons = [
  { icon: Users, title: "Family Owned & Operated", desc: "Father and sons running Lexington's most trusted car wash since 2005. We treat every car like it's our own." },
  { icon: Star, title: "Hand-Applied Detail", desc: "Real people, real care. From hand towel drying to manually applied tire dressing — the difference is obvious." },
  { icon: Shield, title: "Premium Products", desc: "Rain-X, Armor All, Carnauba wax — we only use products that actually protect your vehicle's finish." },
  { icon: Clock, title: "Fast & Thorough", desc: "Exterior packages in 10-15 min, full-service in 20-30 min. No cutting corners to save time." },
];

export default function WhyChooseUs({ facilityImageUrl }: { facilityImageUrl: string }) {
  return (
    <section className="bg-white -mt-12 lg:-mt-16 rounded-t-[2.5rem] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2 mb-8">
              More Than Just a Car Wash
            </h2>
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
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={facilityImageUrl}
                alt="Lexington Auto Spa facility"
                width={600}
                height={700}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[hsl(var(--dark))] text-white rounded-xl p-4 shadow-xl">
              <p className="font-heading text-2xl text-primary">Single</p>
              <p className="font-display text-xs font-semibold">Location in Lexington, KY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
