export default function Location() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">

        <div className="mb-10">
          <h2 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}>
            VISIT US IN<br /><span className="text-primary">LEXINGTON.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Map */}
          <div className="overflow-hidden h-72 sm:h-96 lg:h-auto min-h-[320px] rounded-3xl">
            <iframe
              src="https://maps.google.com/maps?q=1124+Winchester+Rd,+Lexington,+KY+40505&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              title="Lexington Auto Spa location"
            />
          </div>

          {/* Address */}
          <div>
            <p className="font-sans text-primary text-lg tracking-[0.3em] uppercase font-semibold mb-2">Address</p>
            <p className="font-heading text-foreground text-3xl leading-tight">1124 Winchester Road</p>
            <p className="font-heading text-foreground text-3xl leading-tight">Lexington, KY 40505</p>
            <a
              href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 rounded-full bg-primary text-white font-heading tracking-wider px-6 py-2.5 text-lg shadow-md hover:bg-accent"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
