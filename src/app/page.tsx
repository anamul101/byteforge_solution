import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Research } from "@/components/Research";
import ResearchSlider from "@/components/ResearchSlider";
import GenerativeAISection from "@/components/GenerativeAISection";
import BuildAISection from "@/components/BuildAISection";
import GenerativeAIApplications from "@/components/GenerativeAIApplications";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Industry from "@/components/Industry";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import LogoMarqueeSection from "@/components/LogoMarqueeSection";

// Ensure BuildAISection.tsx exists in the same directory

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <LogoMarqueeSection />
      {/* <LogoTicker /> */}
      <Research />
      <GenerativeAISection />
      <BuildAISection />
      <GenerativeAIApplications />
      <CaseStudiesSection />
      <TestimonialSlider />
      <Industry />
      <FutureSection />
      {/* <ResearchSlider/> */}
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
    </>
  );
}
