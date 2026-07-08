import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">

        <div className="relative">

          <h2
            className="font-logo text-foreground leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            READY FOR THE<br />CLEANEST CAR<br />IN LEXINGTON?
          </h2>

          <p className="font-sans text-foreground/60 text-lg mb-10 max-w-md">
            Stop by 1124 Winchester Road — Mon–Sat, 8 AM to 5 PM. Or join the Wash Club for unlimited washes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/#pricing"
              className="rounded-full bg-primary text-white font-heading tracking-wider px-8 py-3 text-lg text-center shadow-md hover:bg-accent"
            >
              Buy a Wash
            </a>
            <Link
              href="/membership"
              className="rounded-full bg-[hsl(var(--dark))] text-white font-heading tracking-wider px-8 py-3 text-lg text-center hover:bg-[hsl(var(--dark))]/80"
            >
              Join the Wash Club
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
