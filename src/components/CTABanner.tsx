import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">

      {/* Background pattern — diagonal speed lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="speedlines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="1.5" />
            <line x1="20" y1="0" x2="20" y2="60" stroke="white" strokeWidth="0.5" />
            <line x1="40" y1="0" x2="40" y2="60" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#speedlines)" />
      </svg>

      {/* Large faded text watermark */}
      <p
        className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-white/10 leading-none select-none pr-8 hidden lg:block"
        style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
        aria-hidden
      >
        CLEAN.
      </p>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">

          <h2
            className="font-heading text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5.5rem)" }}
          >
            READY FOR THE<br />CLEANEST CAR<br />IN LEXINGTON?
          </h2>

          <p className="font-sans text-white/70 text-base mb-10 max-w-md">
            Stop by 1124 Winchester Road — Mon–Sat, 8 AM to 5 PM. Or join the Wash Club for unlimited washes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/#pricing"
              className="bg-white text-primary font-heading tracking-wider px-8 py-3 text-sm text-center hover:bg-white/90 transition-colors"
            >
              Buy a Wash
            </a>
            <Link
              href="/membership"
              className="bg-[#1e2636] text-white font-heading tracking-wider px-8 py-3 text-sm text-center hover:bg-[#161c2a] transition-colors"
            >
              Join the Wash Club
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
