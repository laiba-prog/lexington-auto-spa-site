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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">

          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 mb-4 shadow-sm">
              <span className="font-heading text-primary text-lg tracking-[0.2em] uppercase font-bold">Get In Touch</span>
            </div>
            <h1 className="font-logo text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
              Contact <span className="text-primary">Us.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-logo text-2xl text-foreground mb-6">Find Us</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-lg">Address</p>
                    <p className="font-sans text-foreground/60 text-lg">1124 Winchester Road, Lexington, KY 40505</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-lg">Phone</p>
                    <a href="tel:8592549663" className="font-sans text-foreground/60 text-lg hover:text-primary">(859) 254-9663</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-lg">Email</p>
                    <a href="mailto:info@lexingtonautospa.com" className="font-sans text-foreground/60 text-lg hover:text-primary break-all">info@lexingtonautospa.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground text-lg">Hours</p>
                    <p className="font-sans text-foreground/60 text-lg">Monday – Saturday: 8 AM – 5 PM</p>
                    <p className="font-sans text-foreground/60 text-lg">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-logo text-2xl text-foreground mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
