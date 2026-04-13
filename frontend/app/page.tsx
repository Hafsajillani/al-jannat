import Contact from "@/components/ContactInfo";
import HeroPage from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Header from "@/components/shared/Header";
import Stats from "@/components/Stats";
import WideFormatFeature from "@/components/Wide";
import ProcessAndCTA from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroPage />
      <ServicesSection />
      <WideFormatFeature />
      <Stats />
      <ProcessAndCTA />
      <Contact />
    </>
  );
}
