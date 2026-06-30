import { Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary font-display font-semibold text-xs tracking-widest uppercase">Find Us</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-2">Visit Us in Lexington</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 lg:h-full min-h-[320px]">
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

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[hsl(var(--muted))] rounded-2xl p-6 border border-border">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-1">Address</p>
              <p className="font-heading text-2xl text-foreground">1124 Winchester Road</p>
              <p className="font-heading text-2xl text-foreground">Lexington, KY 40505</p>
              <a
                href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-primary text-white font-display font-semibold px-6 py-3 rounded-md hover:bg-accent transition-colors text-sm"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-[hsl(var(--muted))] rounded-2xl p-6 border border-border">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-3">Hours</p>
              <div className="space-y-1.5">
                <div className="flex justify-between font-display text-sm">
                  <span className="text-foreground">Monday – Saturday</span>
                  <span className="font-bold text-foreground">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between font-display text-sm">
                  <span className="text-foreground">Sunday</span>
                  <span className="font-bold text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--muted))] rounded-2xl p-6 border border-border">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest mb-3">Contact</p>
              <div className="space-y-2">
                <a href="tel:8592549663" className="flex items-center gap-2 font-display text-sm text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />(859) 254-9663
                </a>
                <a href="mailto:info@lexingtonautospa.com" className="flex items-center gap-2 font-display text-sm text-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />info@lexingtonautospa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
