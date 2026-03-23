import Image from "next/image";
import Hero from "@/components/Hero";
import DesignChoice from "@/components/design";
import ChatBot from "@/components/ChatBox";
import CategorySection from "@/components/Categories";
import BasicSection from "@/components/Basics";
import PrintsSection from "@/components/Prints";
import SignsBannerSection from "@/components/Signs";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <BasicSection/>      
      <ChatBot />
      <PrintsSection/>
      <SignsBannerSection />
      <DesignChoice />
    </>
  );
}
