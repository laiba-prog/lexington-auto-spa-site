"use client";

import { Accordion } from "@/components/ui/accordion";

const faqs = [
  { question: "How long does a wash take?", answer: "Exterior packages take 10-15 minutes. Full-service packages take 20-30 minutes depending on vehicle size and package selected." },
  { question: "Do your full-service packages include interior cleaning?", answer: "Yes! All full-service packages (Inside & Out, Ultimate, and Ultimate Shine) include interior vacuuming, window cleaning, and dash/console wipe-down. Upper packages add door panels, cup holders, and full interior dressing." },
  { question: "What's included in the Ultimate Shine?", answer: "Our top-tier package includes everything in Ultimate plus Dash/Doors/Console Dressed, Rain-X Wax, Armor All Professional Wax, and Extreme Shine Wax with Carnauba. It's our most complete service." },
  { question: "How does the Wash Club membership work?", answer: "You get up to 10 washes per month (one per day), billed monthly. Exterior memberships start at $29.95/month, full-service at $49.95/month. Visit the membership page or ask our staff to sign up." },
  { question: "Are your chemicals safe for my paint and trim?", answer: "Absolutely. We use professional-grade products from trusted brands like Rain-X and Armor All that are formulated to clean and protect automotive finishes without damaging clear coat, rubber trim, or chrome." },
  { question: "What if it rains right after my wash?", answer: "Rain won't wash away your wax or protection — those products bond to your paint. Your car will still be cleaner than before. Our Rain-X treatment actually helps water bead and roll off, improving visibility in rain." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards, as well as cash. Monthly memberships are billed to a card on file." },
  { question: "What are your hours?", answer: "We're open Monday through Saturday, 8 AM to 5 PM. We are closed on Sundays." },
];

export default function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[hsl(var(--dark))] font-display font-semibold text-lg tracking-widest uppercase">FAQ</span>
          <h2 className="font-heading text-5xl lg:text-6xl text-foreground mt-2">Common Questions</h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
