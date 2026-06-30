import Image from "next/image";
import Link from "next/link";

const FACILITY_URL = "https://ucarecdn.com/2ff7c026-989d-4d3e-827d-cf43c179bbad/";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[hsl(var(--dark))] relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
              Family-Owned Since 2005
            </span>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
              Lexington&apos;s Premier Car Wash Experience
            </h1>
            <p className="font-display text-white/70 text-lg mb-8 max-w-lg">
              Keeping Lexington Vehicles Spotless Since 2005. From quick exterior washes to our top-tier Ultimate Shine, we deliver results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/wash-packages"
                className="bg-primary text-white font-display font-semibold px-8 py-4 rounded-md hover:bg-accent transition-colors text-center text-base shadow-lg"
              >
                View Packages
              </Link>
              <Link
                href="/membership"
                className="border-2 border-white/30 text-white font-display font-semibold px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors text-center text-base"
              >
                Join Wash Club
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative opacity-0 animate-fade-up-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={FACILITY_URL}
                alt="Lexington Auto Spa facility"
                width={600}
                height={750}
                className="w-full h-[450px] lg:h-[550px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl p-4 shadow-xl">
              <p className="font-heading text-3xl">20+</p>
              <p className="font-display text-xs font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: "2005", label: "Founded" },
            { value: "6", label: "Wash Packages" },
            { value: "5★", label: "Customer Rating" },
            { value: "Family", label: "Owned & Operated" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl text-primary">{stat.value}</p>
              <p className="font-display text-white/60 text-xs font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
