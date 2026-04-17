import Chatbot from "@/components/ChatBox";
import Contact from "@/components/ContactInfo";
import HeroPage from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Header from "@/components/shared/Header";
import Stats from "@/components/Stats";
import WideFormatFeature from "@/components/Wide";
import ProcessAndCTA from "@/components/Work";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Chatbot />
      <ServicesSection />
      <WideFormatFeature />
      <Stats />
      <ProcessAndCTA />
      <Contact />
    </>
  );
}
