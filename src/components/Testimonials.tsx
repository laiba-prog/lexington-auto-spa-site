"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Bobby Ray T.", rating: 5, text: "Been coming here since they opened back in '05. The Ultimate Shine is worth every penny. My truck looks better than the day I drove it off the lot." },
  { name: "Sarah Beth M.", rating: 5, text: "The staff is always friendly and the full-service wash is incredibly thorough. My minivan has never looked this clean. Will not go anywhere else." },
  { name: "James D.", rating: 4, text: "Great value for what you get. The Works Exterior is my go-to — especially love the Rain-X wax before rainy season in Kentucky." },
  { name: "Tanya H.", rating: 5, text: "I signed up for the monthly membership and it's been a game changer. Unlimited washes means I actually keep my car clean all month." },
  { name: "Mike C.", rating: 5, text: "These guys actually hand-prep your car and dry it with microfiber towels. You can tell the difference immediately. Quality operation right here in Lexington." },
  { name: "Linda K.", rating: 5, text: "Friendly staff, fast service, and my car always comes out spotless. The waiting area is comfortable too. Best car wash in Lexington by far." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const visible = [
    reviews[index % total],
    reviews[(index + 1) % total],
    reviews[(index + 2) % total],
  ];

  return (
    <section className="bg-[hsl(var(--muted))] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Reviews</span>
          <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2">What Lexington Is Saying</h2>
        </div>

        {/* Desktop: arrows on sides. Mobile: cards full width, arrows below */}
        <div className="hidden sm:flex items-center gap-4">
          <button onClick={prev} className="w-11 h-11 rounded-full border-2 border-border bg-white flex-shrink-0 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Previous review">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {visible.map((r, i) => (
              <div key={`${r.name}-${index}-${i}`} className="bg-white rounded-2xl p-7 border border-border shadow-sm flex flex-col">
                <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className={`w-4 h-4 ${s < r.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}</div>
                <p className="font-display text-sm text-foreground leading-relaxed flex-1 mb-6">&ldquo;{r.text}&rdquo;</p>
                <div><p className="font-display font-bold text-sm text-foreground">{r.name}</p><p className="font-display text-xs text-muted-foreground mt-0.5">Google Review</p></div>
              </div>
            ))}
          </div>
          <button onClick={next} className="w-11 h-11 rounded-full border-2 border-border bg-white flex-shrink-0 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Next review">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile: single full-width card + arrows below */}
        <div className="sm:hidden">
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className={`w-4 h-4 ${s < reviews[index].rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}</div>
            <p className="font-display text-sm text-foreground leading-relaxed mb-6">&ldquo;{reviews[index].text}&rdquo;</p>
            <p className="font-display font-bold text-sm text-foreground">{reviews[index].name}</p>
            <p className="font-display text-xs text-muted-foreground mt-0.5">Google Review</p>
          </div>
          <div className="flex justify-center gap-4 mt-5">
            <button onClick={prev} className="w-11 h-11 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Previous review">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-11 h-11 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Next review">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === index % total ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
