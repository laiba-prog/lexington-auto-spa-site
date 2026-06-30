import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer({ logoUrl }: { logoUrl: string }) {
  return (
    <footer className="bg-[hsl(var(--dark))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Image src={logoUrl} alt="Lexington Auto Spa" width={160} height={50} className="h-10 w-auto object-contain mb-4" />
            <p className="text-white/60 font-display text-sm leading-relaxed mb-5">Keeping Lexington Vehicles Spotless Since 2005.</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lexingtonautospaky/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/lexingtonautospa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5">
              {[
                ["Exterior Wash", "/wash-packages"],
                ["Full Service", "/wash-packages"],
                ["Wash Club", "/membership"],
                ["About Us", "/about-us"],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-white/60 hover:text-white font-display text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-2.5">
              {[
                ["About Us", "/about-us"],
                ["Blog", "/blog"],
                ["Contact Us", "/contact-us"],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-white/60 hover:text-white font-display text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-display text-sm transition-colors"
                >
                  1124 Winchester Road, Lexington, KY 40505
                </a>
              </li>
              <li className="flex gap-2.5"><Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><a href="tel:8592549663" className="text-white/60 hover:text-white font-display text-sm transition-colors">(859) 254-9663</a></li>
              <li className="flex gap-2.5"><Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><a href="mailto:info@lexingtonautospa.com" className="text-white/60 hover:text-white font-display text-sm transition-colors">info@lexingtonautospa.com</a></li>
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="font-display text-xs text-white/50 uppercase tracking-widest mb-1">Hours</p>
              <p className="font-display text-sm text-white/80">Mon–Sat: 8 AM – 5 PM</p>
              <p className="font-display text-sm text-white/80">Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 font-display text-sm">© 2026 Lexington Auto Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
