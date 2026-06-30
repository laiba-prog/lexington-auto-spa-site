import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";

const BUILDING_URL = "https://ucarecdn.com/0b5bd0f7-1995-4307-bf3e-1db70ebe2f88/";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[hsl(var(--dark))] relative overflow-hidden flex flex-col justify-center">
      {/* Background building image — light opacity on white */}
      <div className="absolute inset-0">
        <Image
          src={BUILDING_URL}
          alt="Lexington Auto Spa"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark))]/60 via-[hsl(var(--dark))]/50 to-[hsl(var(--dark))]" />
        {/* Speed streaks — shoot across on load, then gone */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="streak streak-1" />
          <div className="streak streak-2" />
          <div className="streak streak-3" />
          <div className="streak streak-4" />
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-28 pb-20">
        <div className="text-center lg:text-left max-w-2xl lg:max-w-none">
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary font-display font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Family-Owned · Locally Operated · Since 2005
          </span>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
            <span className="hero-line hero-line-1">Lexington&apos;s</span>
            <span className="hero-line hero-line-2 text-primary">Premier</span>
            <span className="hero-line hero-line-3">Car Wash</span>
          </h1>

          <p className="hero-sub font-display text-white/70 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0">
            Full-service interior &amp; exterior washes. Premium products. Real people who care about your car.
          </p>

          <div className="hero-ctas flex flex-row gap-3 justify-center lg:justify-start w-full">
            <a
              href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 bg-primary text-white font-display font-bold px-4 py-3 rounded-md hover:bg-accent transition-colors text-center text-xs shadow-lg flex items-center justify-center"
            >
              Get Directions
            </a>
            <Link
              href="/wash-packages"
              className="w-36 border-2 border-white text-white font-display font-bold px-4 py-3 rounded-md hover:bg-white hover:text-[hsl(var(--dark))] transition-colors text-center text-xs flex items-center justify-center"
            >
              See Wash Packages
            </Link>
          </div>

          <div className="hero-strip mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-display text-white/60">
            <a href="tel:8592549663" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-primary" />(859) 254-9663
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />Mon–Sat 8AM–5PM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />1124 Winchester Rd
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
