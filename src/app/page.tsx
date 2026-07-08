import Hero from "@/components/Hero";
import OtherServices from "@/components/OtherServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import VideoReels from "@/components/VideoReels";
import Location from "@/components/Location";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pricing />
      <OtherServices />
      <WhyChooseUs />
      <Location />
      <VideoReels />
      <CTABanner />
    </>
  );
}
