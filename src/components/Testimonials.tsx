"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Bobby Ray T.", rating: 5, text: "Been coming here since they opened back in '05. The Ultimate Shine is worth every penny. My truck looks better than the day I drove it off the lot." },
  { name: "Sarah Beth M.", rating: 5, text: "The staff is always friendly and the full-service wash is incredibly thorough. My minivan has never looked this clean. Will not go anywhere else." },
  { name: "James D.", rating: 4, text: "Great value for what you get. The Works Exterior is my go-to — especially love the Rain-X wax before rainy season in Kentucky." },
  { name: "Tanya H.", rating: 5, text: "I signed up for the monthly membership and it's been a game changer. Unlimited washes means I actually keep my car clean all month." },
  { name: "Mike C.", rating: 5, text: "These guys actually hand-prep your car and dry it with microfiber towels. You can tell the difference immediately. Quality operation right here in Lexington." },
  { name: "Linda K.", rating: 5, text: "Friendly staff, fast service, and my car always comes out spotless. The waiting area is comfortable too. Best car wash in Lexington by far." },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" className={i < rating ? "fill-primary" : "fill-border"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const visible = [reviews[index % total], reviews[(index + 1) % total], reviews[(index + 2) % total]];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-primary" />
              <span className="font-sans text-[hsl(var(--dark))] text-lg tracking-[0.3em] uppercase font-semibold">Reviews</span>
            </div>
            <h2 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)" }}>
              WHAT LEXINGTON<br />IS SAYING.
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-2 shrink-0">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center hover:bg-primary hover:text-white" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center hover:bg-primary hover:text-white" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((r, i) => (
            <div key={`${r.name}-${index}-${i}`} className="bg-white rounded-2xl p-6 flex flex-col shadow-sm">
              <Stars rating={r.rating} />
              <p className="font-sans text-lg text-foreground leading-relaxed flex-1 mt-4 mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-foreground text-lg tracking-wide">{r.name.toUpperCase()}</p>
                <p className="font-sans text-lg text-muted-foreground mt-0.5">Google Review</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="sm:hidden bg-white rounded-2xl p-6 shadow-sm">
          <Stars rating={reviews[index].rating} />
          <p className="font-sans text-lg text-foreground leading-relaxed mt-4 mb-5">
            &ldquo;{reviews[index].text}&rdquo;
          </p>
          <div className="border-t border-border pt-4">
            <p className="font-heading text-foreground text-lg tracking-wide">{reviews[index].name.toUpperCase()}</p>
            <p className="font-sans text-lg text-muted-foreground mt-0.5">Google Review</p>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full ${i === index % total ? "bg-primary w-6" : "bg-border w-2"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
