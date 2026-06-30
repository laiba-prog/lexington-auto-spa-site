import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
          Ready for the Cleanest Car in Lexington?
        </h2>
        <p className="font-display text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Stop by 1124 Winchester Road or join the Wash Club for unlimited washes all month long.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/wash-packages"
            className="bg-white text-primary font-display font-bold px-8 py-4 rounded-md hover:bg-white/90 transition-colors text-base"
          >
            View Packages
          </Link>
          <Link
            href="/membership"
            className="border-2 border-white text-white font-display font-bold px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-colors text-base"
          >
            Join Wash Club
          </Link>
        </div>
      </div>
    </section>
  );
}
