import Image from "next/image";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Collaborations from "@/components/Collabrations";
import AboutSection from "@/components/AboutUs";
import ServicesSection from "@/components/Services";
import ProjectsSection from "@/components/Projects";
import DesignChoice from "@/components/design";
import ChatBot from "@/components/ChatBox";

export default function Home() {
  return (
    <>
      <Hero />
      <ChatBot />
      <Collaborations />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <DesignChoice />
      <Testimonials />
    </>
  );
}
