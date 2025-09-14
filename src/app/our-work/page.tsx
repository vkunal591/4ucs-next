// app/about/page.tsx (or wherever your About page is located)

import AboutSection1 from "@/components/About/AboutSection1";
import AboutSection2 from "@/components/About/AboutSection2";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import ProjectsSection from "@/components/Project/ProjectsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Empowering Startups with Modern Web Solutions",
  description:
    "Learn more about our mission, values, and how we help startups and SaaS businesses grow with modern, scalable web technologies.",
};

const OurWorkPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Work"
        description="We empower startups and businesses to grow faster with scalable, intuitive, and high-performance web solutions."
      />
      <ProjectsSection />
      <Features />
    </>
  );
};

export default OurWorkPage;
