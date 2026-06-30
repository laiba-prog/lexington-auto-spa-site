import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Lexington Auto Spa",
  description: "Family-owned since 2005. Learn the story of Lexington Auto Spa — father and sons keeping Lexington vehicles spotless for over 20 years.",
};

const FACILITY_URL = "https://ucarecdn.com/2ff7c026-989d-4d3e-827d-cf43c179bbad/";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[hsl(var(--dark))] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary font-display font-semibold text-sm tracking-widest uppercase">Our Story</span>
          <h1 className="font-heading text-6xl sm:text-7xl text-white mt-2">About Lexington Auto Spa</h1>
          <p className="font-display text-white/70 text-lg mt-4 max-w-2xl mx-auto">Family-owned and operated since 2005. Over twenty years of keeping Lexington vehicles spotless.</p>
        </div>
      </section>

      <section className="bg-white -mt-8 rounded-t-[2.5rem] relative z-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-heading text-5xl text-foreground mb-6">Started in 2005, Still Family Strong</h2>
              <div className="space-y-4 font-display text-muted-foreground leading-relaxed">
                <p>Lexington Auto Spa was founded in 2005 by a father who believed that a great car wash should do more than spray water at a vehicle. It should be a real service — hands-on, thorough, and delivered by people who actually care about the result.</p>
                <p>Over the years, his sons joined the operation. Today, all three work together to maintain the standard that Lexington drivers have come to expect. Same family, same address, same commitment to doing it right.</p>
                <p>We&apos;re proud to be a single-location business. We&apos;re not a chain, and we don&apos;t plan to become one. Staying at 1124 Winchester Road means we can focus entirely on serving the Lexington community with the quality it deserves.</p>
              </div>
            </div>
            <div className="relative">
              <Image src={FACILITY_URL} alt="Lexington Auto Spa" width={600} height={700} className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Passion for Detail", desc: "We hand-dry every car. We hand-apply tire dressing. These aren't shortcuts we'd take — they're the standard." },
              { icon: Award, title: "Proven Quality", desc: "Over 20 years of repeat customers is the only metric that matters to us. That trust is earned wash by wash." },
              { icon: Users, title: "Community First", desc: "We're your neighbors. We live in Lexington, we work in Lexington, and we're invested in this community." },
            ].map((v) => (
              <div key={v.title} className="bg-muted rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">{v.title}</h3>
                <p className="font-display text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-heading text-4xl text-foreground mb-4">Come See Us</h2>
            <p className="font-display text-muted-foreground mb-8">We&apos;re at 1124 Winchester Road, open Monday through Saturday, 8 AM to 5 PM.</p>
            <Link href="/contact-us" className="inline-block bg-primary text-white font-display font-semibold px-8 py-4 rounded-md hover:bg-accent transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
