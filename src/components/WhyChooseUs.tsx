import Image from "next/image";

const BUILDING_URL = "https://ucarecdn.com/0b5bd0f7-1995-4307-bf3e-1db70ebe2f88/";

const features = [
  { label: "Rain Repellent Coating" },
  { label: "Carnauba Wax Protection" },
  { label: "Underbody Rust Protection" },
  { label: "Streak-Free Glass Polish" },
];

function SwatchBar({ gold }: { gold?: boolean }) {
  return (
    <span
      className="absolute left-0 top-0 bottom-0 w-2 rounded-l-2xl"
      style={{ background: gold ? "hsl(var(--gold))" : "hsl(var(--primary))" }}
      aria-hidden
    />
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5 rounded-full bg-white px-4 py-1.5 shadow-sm">
              <span className="text-primary">★</span>
              <span className="font-sans text-lg tracking-wide uppercase text-foreground/60 font-semibold">Est. 2005 · Lexington, Kentucky</span>
            </div>

            <h2 className="font-logo text-foreground leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>
              More than<br /><span className="text-primary">a car wash.</span>
            </h2>

            <p className="font-sans text-foreground/60 text-lg sm:text-lg max-w-md mb-8 leading-relaxed text-pretty">
              May cause excessive compliments on your vehicle, and the uncontrollable urge to park where people can see it.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div key={f.label} className="relative overflow-hidden flex items-center rounded-2xl bg-white py-4 pl-6 pr-4 shadow-sm">
                  <SwatchBar gold={i % 2 === 1} />
                  <span className="font-sans text-lg font-semibold text-foreground leading-snug">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Building photo */}
          <div className="relative overflow-hidden order-first lg:order-last rounded-3xl shadow-lg" style={{ aspectRatio: "4/3" }}>
            <Image
              src={BUILDING_URL}
              alt="Lexington Auto Spa"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
