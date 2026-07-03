import type { Metadata } from "next";
import Image from "next/image";

const STAFF_URL = "https://ucarecdn.com/f6a72621-756d-4cde-a240-d5253fd3ad8e/";

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

          {/* Staff photo + community text */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="rounded-2xl overflow-hidden flex-shrink-0 w-full lg:w-auto lg:max-w-md">
              <Image
                src={STAFF_URL}
                alt="Lexington Auto Spa team"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="border-l-4 border-primary pl-8">
              <p className="font-heading text-3xl sm:text-4xl text-foreground leading-tight mb-4">
                These are your neighbors.
              </p>
              <p className="font-display text-muted-foreground text-base leading-relaxed mb-4">
                When you pull into Lexington Auto Spa, you're trusting a local team that's been part of this community since 2005. These are the people who hand-prep every car and treat it like it belongs in their own driveway.
              </p>
              <p className="font-display text-muted-foreground text-base leading-relaxed">
                Locally owned, locally operated, and glad you stopped by. Support us, and you're supporting your neighbors. We don't take that for granted.
              </p>
            </div>
          </div>

          <ul className="border-t border-foreground/10 divide-y divide-foreground/10">
            {[
              { title: "Passion for Detail", desc: "We hand-dry every car. We hand-apply tire dressing. These aren't shortcuts we'd take — they're the standard." },
              { title: "Proven Quality",     desc: "Over 20 years of repeat customers is the only metric that matters to us. That trust is earned wash by wash." },
              { title: "Community First",    desc: "We're your neighbors. We live in Lexington, we work in Lexington, and we're invested in this community." },
            ].map((v) => (
              <li key={v.title} className="flex items-start gap-5 py-6">
                <svg className="shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="hsl(26 100% 55%)" aria-hidden>
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
                <div>
                  <h3 className="font-heading text-foreground leading-tight mb-1" style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}>
                    {v.title.toUpperCase()}
                  </h3>
                  <p className="font-sans text-base text-foreground/55 leading-relaxed">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}
