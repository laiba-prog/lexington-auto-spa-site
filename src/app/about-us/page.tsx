import type { Metadata } from "next";
import Image from "next/image";

const STAFF_URL = "https://ucarecdn.com/f6a72621-756d-4cde-a240-d5253fd3ad8e/";
const FACILITY_URL = "https://ucarecdn.com/2ff7c026-989d-4d3e-827d-cf43c179bbad/";

export const metadata: Metadata = {
  title: "About Us | Lexington Auto Spa",
  description: "Family-owned since 2005. Learn the story of Lexington Auto Spa — father and sons keeping Lexington vehicles spotless for over 20 years.",
};

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 mb-4 shadow-sm">
              <span className="font-heading text-primary text-lg tracking-[0.2em] uppercase font-bold">Our Story</span>
            </div>
            <h1 className="font-heading text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
              About <span className="text-primary">Lexington Auto Spa.</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 font-sans text-foreground/70 leading-relaxed">
              <p>Lexington Auto Spa was founded in 2005 by a father who believed that a great car wash should do more than spray water at a vehicle. It should be a real service — hands-on, thorough, and delivered by people who actually care about the result.</p>
              <p>Over the years, his sons joined the operation. Today, all three work together to maintain the standard that Lexington drivers have come to expect. Same family, same address, same commitment to doing it right.</p>
              <p>We&apos;re proud to be a single-location business. We&apos;re not a chain, and we don&apos;t plan to become one. Staying at 1124 Winchester Road means we can focus entirely on serving the Lexington community with the quality it deserves.</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg" style={{ aspectRatio: "4 / 3" }}>
              <Image src={FACILITY_URL} alt="Lexington Auto Spa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-xl bg-[hsl(var(--muted))] max-w-5xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="relative overflow-hidden rounded-3xl shadow-lg w-full lg:w-2/5 shrink-0" style={{ aspectRatio: "1 / 1" }}>
              <Image src={STAFF_URL} alt="Lexington Auto Spa team" fill className="object-cover" />
            </div>
            <div className="lg:border-l-4 lg:border-primary lg:pl-10">
              <p className="font-heading text-foreground leading-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                These are your <span className="text-primary">neighbors.</span>
              </p>
              <p className="font-sans text-foreground/60 text-lg leading-relaxed mb-4">
                When you pull into Lexington Auto Spa, you&apos;re trusting a local team that&apos;s been part of this community since 2005. These are the people who hand-prep every car and treat it like it belongs in their own driveway.
              </p>
              <p className="font-sans text-foreground/60 text-lg leading-relaxed">
                Locally owned, locally operated, and glad you stopped by. Support us, and you&apos;re supporting your neighbors. We don&apos;t take that for granted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
