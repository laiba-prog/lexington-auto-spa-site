import Hero from "@/components/Hero";
import OtherServices from "@/components/OtherServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import WashClub from "@/components/WashClub";
import VideoReels from "@/components/VideoReels";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OtherServices />
      <WhyChooseUs />
      <Pricing />
      <WashClub />
      <VideoReels />
      <Testimonials />
      <Location />
      <CTABanner />
    </>
  );
}
