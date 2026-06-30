"use client";

import { Star } from "lucide-react";

const reviews = [
  { name: "Bobby Ray T.", rating: 5, text: "Been coming here since they opened back in '05. The Ultimate Shine is worth every penny. My truck looks better than the day I drove it off the lot." },
  { name: "Sarah Beth M.", rating: 5, text: "The staff is always friendly and the full-service wash is incredibly thorough. My minivan has never looked this clean. Will not go anywhere else." },
  { name: "James D.", rating: 4, text: "Great value for what you get. The Works Exterior is my go-to — especially love the Rain-X wax before rainy season in Kentucky." },
  { name: "Tanya H.", rating: 5, text: "I signed up for the monthly membership and it's been a game changer. Unlimited washes means I actually keep my car clean all month." },
  { name: "Mike C.", rating: 5, text: "These guys actually hand-prep your car and dry it with microfiber towels. You can tell the difference immediately. Quality operation right here in Lexington." },
];

const doubled = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Reviews</span>
        <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2">What Lexington Is Saying</h2>
      </div>
      <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
        {doubled.map((r, i) => (
          <div key={i} className="w-80 flex-shrink-0 bg-muted rounded-2xl p-6 border border-border">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className={`w-4 h-4 ${s < r.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <p className="text-sm text-foreground font-display leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
            <p className="font-display font-bold text-sm text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
