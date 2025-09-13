// app/about/page.tsx (or wherever your About page is located)

import AboutSection1 from "@/components/About/AboutSection1";
import AboutSection2 from "@/components/About/AboutSection2";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import OurTeam from "@/components/About/OurTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Empowering Startups with Modern Web Solutions",
  description:
    "Learn more about our mission, values, and how we help startups and SaaS businesses grow with modern, scalable web technologies.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We empower startups and businesses to grow faster with scalable, intuitive, and high-performance web solutions."
      />

      <AboutSection1
        title="Our Mission"
        content="At StartupNext, our mission is to empower startups and small businesses with scalable, modern web solutions. We believe technology should be intuitive, accessible, and designed to accelerate your growth."
        subTitle="Who We Are"
        subContent="Founded by a team of passionate developers and designers, we bring years of experience building SaaS platforms, websites, and digital tools that help brands thrive in the digital era."
      />

      <AboutSection2
        title="Why Choose Us?"
        points={[
          " Built with modern technologies (Next.js, Tailwind CSS, TypeScript)",
          " Easy to customize for any kind of business or startup",
          " Optimized for performance, accessibility, and SEO",
        ]}
        subTitle="Our Values"
        subContent="We stand for innovation, integrity, and impact. Every line of code we write is guided by our commitment to quality, usability, and user experience."
      />
      <OurTeam />
    </>
  );
};

export default AboutPage;
