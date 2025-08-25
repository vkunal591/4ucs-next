// app/contact/page.tsx or pages/contact.tsx

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Let's Connect with Our Team",
  description:
    "Have a question or partnership idea? Reach out to our team — we're here to help startups and SaaS businesses grow.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Whether you're a startup looking for a partner or a SaaS founder with a question, we're here to help. Reach out today and let's build something amazing together."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
