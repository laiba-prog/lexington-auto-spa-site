"use client";

import Link from "next/link";

const VIDEO_URL = "https://43yvylcg4r.ucarecd.net/28c12dd7-89ef-48fd-abec-b4491f215412/";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative w-full rounded-3xl bg-[hsl(var(--dark))] shadow-xl ${compact ? "px-4 py-6" : "px-7 py-5 mb-4 overflow-hidden"}`}>
      <h1
        className={`font-logo italic text-white leading-[1.05] tracking-wide [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] ${compact ? "whitespace-nowrap" : ""}`}
        style={{ fontSize: compact ? "clamp(1.6rem, 9vw, 2.75rem)" : "clamp(2.25rem, 5.5vw, 4rem)" }}
      >
        {compact ? "Lexington Auto Spa" : <>Lexington<br />Auto Spa</>}
      </h1>
      <p
        className="font-logo italic text-[hsl(var(--gold))] leading-none tracking-wide [-webkit-text-stroke:1px_black] [paint-order:stroke_fill] mt-1"
        style={{ fontSize: compact ? "clamp(1.6rem, 9vw, 2.75rem)" : "clamp(2.25rem, 5.5vw, 4rem)" }}
      >
        Carwash
      </p>
    </div>
  );
}

function CTAButtons({ justify = "center" }: { justify?: "center" | "start" }) {
  return (
    <div className={`flex flex-nowrap gap-2.5 ${justify === "center" ? "justify-center" : "justify-start"}`}>
      <a
        href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-primary text-white font-heading text-lg min-[900px]:text-sm lg:text-lg tracking-widest min-[900px]:tracking-wide lg:tracking-widest px-5 min-[900px]:px-4 lg:px-8 py-2.5 whitespace-nowrap shadow-md hover:bg-accent"
      >
        Get Directions
      </a>
      <Link
        href="/#pricing"
        className="rounded-full bg-white text-[hsl(var(--dark))] shadow-md min-[900px]:bg-transparent min-[900px]:shadow-none min-[900px]:border min-[900px]:border-[hsl(var(--dark))]/20 font-heading text-lg min-[900px]:text-sm lg:text-lg tracking-widest min-[900px]:tracking-wide lg:tracking-widest px-5 min-[900px]:px-4 lg:px-8 py-2.5 whitespace-nowrap hover:bg-white/90 min-[900px]:hover:bg-[hsl(var(--dark))]/5"
      >
        See Packages
      </Link>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="relative overflow-hidden rounded-b-[2.5rem] shadow-xl bg-[hsl(var(--dark))] min-[900px]:hidden">
      {/* Soft glow behind the wordmark for depth on the flat dark background */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-primary/30 blur-3xl"
        aria-hidden
      />

      <div className="relative px-6 pt-16 pb-6 text-center">
        <Wordmark compact />
      </div>

      <div className="relative px-5 pb-6">
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-white/10"
          style={{ aspectRatio: "4 / 3" }}
        >
          <video
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative px-6 pb-10">
        <CTAButtons />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pb-8">
      <MobileHero />

      {/* Desktop / tablet: text and video side by side */}
      <div className="hidden min-[900px]:flex min-h-screen flex-col justify-center relative overflow-hidden rounded-b-[2.5rem] shadow-xl bg-[hsl(var(--muted))] pt-24 pb-16 px-6 lg:px-16">
        <div className="relative grid min-[900px]:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col items-start text-left max-w-[360px] lg:max-w-[420px]">
            <Wordmark />
            <p className="font-heading text-[hsl(var(--dark))] text-lg font-semibold leading-snug text-pretty">
              Family Owned &amp; Operated for Over 20 Years
            </p>
            <p className="font-sans text-[hsl(var(--dark))]/60 text-base leading-snug mt-1.5 mb-8 text-pretty">
              Hand-dried, hand-detailed — never just a drive-through rinse.
            </p>
            <CTAButtons justify="start" />
          </div>

          {/* Right: video, contained in a neat white-bordered box */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[hsl(var(--dark))]" style={{ aspectRatio: "16 / 11" }}>
              <video
                src={VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
