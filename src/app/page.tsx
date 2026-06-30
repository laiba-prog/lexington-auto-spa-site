import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const FACILITY_URL = "https://ucarecdn.com/2ff7c026-989d-4d3e-827d-cf43c179bbad/";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs facilityImageUrl={FACILITY_URL} />
      <Pricing />
      <CTABanner />
      <Testimonials />
      <FAQ />
    </>
  );
}
