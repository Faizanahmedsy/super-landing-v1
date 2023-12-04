import { ModeToggle } from "@/components/darkmodetoggle";
import CTASection from "@/components/modules/CTASection";
import HeroSection from "@/components/modules/HeroSection";
import OurIntro from "@/components/modules/OurIntro";
import Testimonials from "@/components/modules/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurIntro />
      {/* <Testimonials /> */}
      <CTASection />
    </main>
  );
}
