import Image from "next/image";

const BUILDING_URL = "https://ucarecdn.com/0b5bd0f7-1995-4307-bf3e-1db70ebe2f88/";

const ingredients = [
  { name: "Exterior Hand Wash",         pct: "28%"        },
  { name: "Rain Repellent Coating",     pct: "22%"        },
  { name: "Carnauba Wax Protection",    pct: "18%"        },
  { name: "Locally Owned & Operated",   pct: "Since 2005" },
  { name: "Underbody Rust Protection",  pct: "12%"        },
  { name: "100,000+ Cars Washed",       pct: "& Counting" },
  { name: "Streak-Free Glass Polish",   pct: "6%"         },
  { name: "4.7★ Google Rating",         pct: "Lexington"  },
  { name: "Interior Deep Clean",        pct: "4%"         },
];

const steps = [
  { n: "01", text: "Pull up to 1124 Winchester Road" },
  { n: "02", text: "Relax in the lounge with a coffee" },
  { n: "03", text: "Drive out looking brand new"       },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center lg:grid-flow-row">

          {/* Left: label */}
          <div>
            {/* Top rule + brand line */}
            <div className="border-t-4 border-foreground pt-4 mb-4">
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-foreground/40">
                Est. 2005 · Lexington, Kentucky
              </p>
            </div>

            {/* Product name */}
            <h2
              className="font-heading text-foreground leading-none mb-1"
              style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)" }}
            >
              MORE THAN
            </h2>
            <h2
              className="font-heading text-primary leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)" }}
            >
              A CAR WASH.
            </h2>

            {/* Double divider */}
            <div className="border-t-2 border-foreground mb-1" />
            <div className="border-t border-foreground mb-4" />

            {/* Active ingredients */}
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-foreground/40 mb-3">
              Active Ingredients
            </p>
            <ul className="divide-y divide-black/10 mb-4">
              {ingredients.map((ing) => (
                <li key={ing.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="font-heading text-foreground tracking-wide leading-none text-lg sm:text-xl">
                    {ing.name.toUpperCase()}
                  </span>
                  <span className="font-sans text-foreground/35 text-sm tabular-nums shrink-0">
                    {ing.pct}
                  </span>
                </li>
              ))}
            </ul>

            {/* Double divider */}
            <div className="border-t border-foreground mb-1" />
            <div className="border-t-2 border-foreground mb-4" />

            {/* Directions */}
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-foreground/40 mb-3">
              Directions for Use
            </p>
            <ol className="flex gap-6 mb-5">
              {steps.map((s) => (
                <li key={s.n} className="flex-1">
                  <p className="font-heading text-primary text-3xl leading-none mb-1">{s.n}</p>
                  <p className="font-sans text-foreground/50 text-sm leading-snug">{s.text}</p>
                </li>
              ))}
            </ol>

            {/* Double divider */}
            <div className="border-t border-foreground mb-1" />
            <div className="border-t-2 border-foreground mb-4" />

            {/* Warning */}
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-foreground/40 mb-1">
              Warning
            </p>
            <p className="font-sans text-foreground/40 text-sm leading-relaxed">
              May cause excessive compliments on your vehicle. Known side effects include
              an unusually shiny hood, suspiciously clean windows, and the uncontrollable
              urge to park where people can see it. Use as often as needed.
            </p>

            {/* Fine print footer */}
            <div className="border-t border-black/10 mt-4 pt-3">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/25">
                Lexington Auto Spa · 1124 Winchester Rd · 4.7★ Google Rating · Mon–Sat 8AM–5PM
              </p>
            </div>
          </div>

          {/* Building photo — before label on mobile, after on desktop */}
          <div className="relative overflow-hidden order-first lg:order-last" style={{ aspectRatio: "3/4" }}>
            <Image
              src={BUILDING_URL}
              alt="Lexington Auto Spa"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary px-5 py-3">
              <p className="font-heading text-white tracking-widest text-sm">
                EST. 2005 · LEXINGTON, KY
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
