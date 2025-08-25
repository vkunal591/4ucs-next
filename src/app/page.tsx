import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4U Consultancy Services | IT Consulting & Solutions",
  description: "We provide innovative IT consulting, software development, and digital transformation services to help businesses scale and succeed.",
  keywords: "IT consulting, software development, SaaS solutions, digital transformation, technology consulting, 4U Consultancy Services",
  authors: [{ name: "4U Consultancy Services" }],
  openGraph: {
    title: "4U Consultancy Services | IT Consulting & Solutions",
    description: "Innovative IT consulting and digital solutions for startups and enterprises worldwide.",
    url: "https://4ucs.in",
    siteName: "4U Consultancy Services",
    images: [
      {
        url: "/logofinalwithname2.png",
        width: 1200,
        height: 630,
        alt: "4U Consultancy Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
