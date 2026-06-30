import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      {/* Decorative diagonal stripe */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          Ready for the Cleanest Car in Lexington?
        </h2>
        <p className="font-display text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Stop by 1124 Winchester Road — Mon–Sat, 8AM to 5PM. Or join the Wash Club for unlimited washes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://maps.google.com/?q=1124+Winchester+Road+Lexington+KY+40505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary font-display font-bold px-8 py-4 rounded-md hover:bg-white/90 transition-colors text-base min-h-[52px] flex items-center justify-center"
          >
            Get Directions
          </a>
          <Link
            href="/membership"
            className="border-2 border-white text-white font-display font-bold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors text-base min-h-[52px] flex items-center justify-center"
          >
            Join the Wash Club
          </Link>
        </div>
      </div>
    </section>
  );
}
