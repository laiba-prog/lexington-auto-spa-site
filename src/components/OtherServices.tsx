const services = [
  {
    title: "Exterior Wash",
    desc: "A full exterior clean — rinse, soap, scrub, and dry. Fast and thorough every time.",
    sub: "Quick & Thorough",
  },
  {
    title: "Full Service",
    desc: "Everything outside plus a complete interior vacuum, wipe-down, and window clean.",
    sub: "Interior + Exterior",
  },
  {
    title: "Coatings & Wax",
    desc: "Hand-applied wax and protective coatings that keep your paint looking showroom fresh.",
    sub: "Hand Applied Protection",
  },
  {
    title: "Waiting Lounge",
    desc: "Relax with complimentary coffee while we take care of your car. No rush, no waiting outside.",
    sub: "Coffee While You Wait",
  },
];

function ServiceCard({ title, desc, sub, gold }: (typeof services)[0] & { gold?: boolean }) {
  const accent = gold ? "hsl(var(--gold))" : "hsl(var(--primary))";

  return (
    <div
      className="relative overflow-hidden bg-[#fbfaf7] p-6 sm:p-8 shadow-md"
      style={{
        borderRadius: "1.25rem 1.25rem 1.25rem 0.25rem / 1.5rem 1.5rem 1.5rem 0.5rem",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.025) 0px, rgba(0,0,0,0.025) 1px, transparent 1px, transparent 5px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 5px)",
      }}
    >
      {/* Folded corner */}
      <div
        className="absolute bottom-0 right-0 h-8 w-8"
        style={{
          background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.1) 100%)",
          borderRadius: "0 0 0.25rem 0",
        }}
      />

      {/* Sewn tag — sits in normal flow above the title, no overlap risk */}
      <div
        className="inline-flex items-center rounded-sm bg-white px-3 py-1 mb-4"
        style={{ border: `1px dashed ${accent}` }}
      >
        <span className="font-sans text-lg font-bold uppercase tracking-wide" style={{ color: accent }}>
          {sub}
        </span>
      </div>

      <p className="font-logo text-foreground text-2xl leading-none mb-2">{title}</p>
      <p className="font-sans text-foreground/55 text-lg leading-relaxed">{desc}</p>
    </div>
  );
}

export default function OtherServices() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">

        <h2
          className="font-logo text-foreground leading-none mb-12"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
        >
          Everything<br />
          <span className="text-primary">we do.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} gold={i % 2 === 1} />
          ))}
        </div>

      </div>
    </section>
  );
}
