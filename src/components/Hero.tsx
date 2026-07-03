"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-svh bg-[hsl(var(--dark))] relative overflow-hidden flex flex-col justify-center">

      {/* Video background */}
      <video
        src="https://43yvylcg4r.ucarecd.net/28c12dd7-89ef-48fd-abec-b4491f215412/"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      {/* Speed streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="streak streak-1" />
        <div className="streak streak-2" />
        <div className="streak streak-3" />
        <div className="streak streak-4" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 py-10">

        {/* Est. badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-6 bg-primary" />
          <span className="font-sans text-primary text-[10px] tracking-[0.3em] uppercase font-semibold">Est. 2005 · Lexington, KY</span>
        </div>

        {/* Heading block */}
        <div className="mb-1">
          <h1 className="font-heading leading-none tracking-wide text-white" style={{ fontSize: "clamp(3.5rem, 18vw, 7rem)" }}>
            LEXINGTON
          </h1>
          {/* "AUTO SPA" on orange bar */}
          <div className="inline-flex items-center bg-primary px-3 py-0.5 mb-1">
            <span className="font-heading text-white tracking-widest" style={{ fontSize: "clamp(1.4rem, 7vw, 2.8rem)" }}>
              AUTO SPA
            </span>
          </div>
          <br />
          <p className="font-sans text-white/50 text-xs tracking-[0.18em] uppercase mt-2">
            Full-service car wash · Guaranteed clean every time
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-2.5 mt-5">
          <a
            href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-heading text-sm tracking-widest px-8 py-2 whitespace-nowrap"
          >
            Get Directions
          </a>
          <Link
            href="/wash-packages"
            className="bg-white text-[hsl(var(--dark))] font-heading text-sm tracking-widest px-8 py-2 whitespace-nowrap hover:bg-white/90 transition-colors"
          >
            See Packages
          </Link>
        </div>

      </div>
    </section>
  );
}
