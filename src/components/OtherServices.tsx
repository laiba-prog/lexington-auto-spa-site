const services = [
  {
    plate: "EXT·WASH",
    title: "Exterior Wash",
    desc: "A full exterior clean — rinse, soap, scrub, and dry. Fast and thorough every time.",
    sub: "Quick & Thorough",
  },
  {
    plate: "FULL·SVC",
    title: "Full Service",
    desc: "Everything outside plus a complete interior vacuum, wipe-down, and window clean.",
    sub: "Interior + Exterior",
  },
  {
    plate: "WAX·COAT",
    title: "Coatings & Wax",
    desc: "Hand-applied wax and protective coatings that keep your paint looking showroom fresh.",
    sub: "Hand Applied Protection",
  },
  {
    plate: "VIP·CLUB",
    title: "Waiting Lounge",
    desc: "Relax with complimentary coffee while we take care of your car. No rush, no waiting outside.",
    sub: "Coffee While You Wait",
  },
];

function ScrewHole() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <circle cx="6" cy="6" r="5" fill="white" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
      <circle cx="6" cy="6" r="2" fill="rgba(0,0,0,0.12)" />
    </svg>
  );
}

function LicensePlate({ plate, title, desc, sub }: typeof services[0]) {
  return (
    <div className="flex flex-col">
      {/* The plate itself */}
      <div
        className="relative bg-[#F2EFE4] flex flex-col items-center justify-between px-8 py-5 select-none"
        style={{
          aspectRatio: "2 / 1",
          border: "5px solid hsl(26 100% 55%)",
          boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.5), 0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Screw holes */}
        <div className="absolute top-2.5 left-3"><ScrewHole /></div>
        <div className="absolute top-2.5 right-3"><ScrewHole /></div>
        <div className="absolute bottom-2.5 left-3"><ScrewHole /></div>
        <div className="absolute bottom-2.5 right-3"><ScrewHole /></div>

        {/* State name */}
        <p
          className="font-heading text-primary tracking-[0.35em] leading-none"
          style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)" }}
        >
          KENTUCKY
        </p>

        {/* Plate number */}
        <p
          className="font-heading text-foreground leading-none tracking-[0.12em] text-center"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            textShadow: "2px 2px 0 rgba(0,0,0,0.07), -1px -1px 0 rgba(255,255,255,0.7)",
          }}
        >
          {plate}
        </p>

        {/* Bottom tagline */}
        <p
          className="font-sans text-foreground/45 tracking-[0.25em] uppercase leading-none"
          style={{ fontSize: "clamp(0.4rem, 1vw, 0.55rem)" }}
        >
          {sub}
        </p>
      </div>

      {/* Description below the plate */}
      <div className="pt-4 px-1">
        <p className="font-heading text-foreground tracking-wide text-lg leading-none mb-1.5">
          {title.toUpperCase()}
        </p>
        <p className="font-sans text-foreground/45 text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function OtherServices() {
  return (
    <section className="py-16 lg:py-24" style={{ background: "#faf8f5" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <h2
          className="font-heading text-foreground leading-none mb-12"
          style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)" }}
        >
          EVERYTHING<br />
          <span className="text-primary">WE DO.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {services.map((s) => (
            <LicensePlate key={s.plate} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
