"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-lg overflow-hidden">
          <button
            className="flex w-full items-center justify-between px-6 py-4 text-left font-display font-semibold text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn("h-5 w-5 text-primary transition-transform flex-shrink-0 ml-4", openIndex === i && "rotate-180")}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 text-muted-foreground leading-relaxed font-display text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
