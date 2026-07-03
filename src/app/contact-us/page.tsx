import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Lexington Auto Spa",
  description: "Contact Lexington Auto Spa at 1124 Winchester Road, Lexington KY. Call (859) 254-9663 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[hsl(var(--dark))] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h1 className="font-heading text-6xl sm:text-7xl text-white mt-2">Contact Us</h1>
        </div>
      </section>

      <section className="bg-white -mt-8 rounded-t-[2.5rem] relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-8">Find Us</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Address</p>
                    <p className="font-display text-muted-foreground text-sm">1124 Winchester Road, Lexington, KY 40505</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Phone</p>
                    <a href="tel:8592549663" className="font-display text-muted-foreground text-sm hover:text-primary transition-colors">(859) 254-9663</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Email</p>
                    <a href="mailto:info@lexingtonautospa.com" className="font-display text-muted-foreground text-sm hover:text-primary transition-colors">info@lexingtonautospa.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Hours</p>
                    <p className="font-display text-muted-foreground text-sm">Monday – Saturday: 8 AM – 5 PM</p>
                    <p className="font-display text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-96">
            <iframe
              src="https://maps.google.com/maps?q=1124+Winchester+Rd,+Lexington,+KY+40505&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lexington Auto Spa location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
