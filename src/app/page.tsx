import { Hero } from "@/components/home/Hero";
import { ServiceRows } from "@/components/home/ServiceRows";
import { StatsBand } from "@/components/home/StatsBand";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ParallaxBreak } from "@/components/home/ParallaxBreak";
import { Gallery } from "@/components/home/Gallery";
import { Process } from "@/components/home/Process";
import { ReviewMarquee } from "@/components/home/ReviewMarquee";
import { StatsTicker } from "@/components/home/StatsTicker";
import { ServiceAreaMap } from "@/components/home/ServiceAreaMap";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceRows />
      <StatsBand />
      <WhyChooseUs />
      <ParallaxBreak />
      <Process />
      <Gallery />
      <ReviewMarquee />
      <StatsTicker />
      <ServiceAreaMap />
      <CtaBanner variant="home" />
    </>
  );
}
