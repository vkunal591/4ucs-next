import React from "react";

// Next.js page component (can be placed in /app or /pages depending on your project)
// This file is a single-file page component that displays company overview,
// services extracted from the site, contact info, and a short privacy policy summary.

export default function page() {
  const company = {
    name: "4U Consultancy Services",
    brand: "4UCS.in",
    overview:
      "We are a consultant service based on web development. We make creative and user-friendly websites for your company. Our team consists of experienced professionals who understand your vision and represent it through your website. We collaborate with our clients and strive to fulfill their requirements. Our focus is on building your website so that your online presence is strong, and you communicate effectively with your customers.",
    address: "New Delhi, India",
    email: "info@4ucs.in",
    phone: "+919229128072",
    lastUpdated: "13 September 2025",
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Responsive, fast, and scalable websites built with modern frameworks like Next.js and React.",
    },
    {
      title: "App Development",
      description:
        "Custom mobile apps for iOS and Android with seamless performance and modern UI/UX.",
    },
    {
      title: "SaaS Development",
      description:
        "End-to-end SaaS product development including dashboards, authentication, and APIs.",
    },
    {
      title: "API Development",
      description:
        "Robust and secure RESTful & GraphQL APIs for mobile and web applications.",
    },
    {
      title: "UI/UX Design",
      description:
        "User‑centric design with wireframes, prototypes, and pixel‑perfect interfaces.",
    },
    {
      title: "E‑commerce Solutions",
      description: "Custom online stores, marketplaces, and payment gateway integration.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable infrastructure with CI/CD pipelines, Docker, and Kubernetes.",
    },
    {
      title: "AI & Automation",
      description:
        "Smart AI‑driven solutions for chatbots, analytics, and workflow automation.",
    },
    {
      title: "Maintenance & Support",
      description:
        "24/7 monitoring, updates, bug fixes, and long‑term support for your applications.",
    },
  ];

  const privacySummary = {
    title: "Privacy Policy",
    lastUpdated: company.lastUpdated,
    summary:
      "At 4U Consultancy Services (4UCS.in) we respect your privacy. We collect personal information such as name, email, phone and billing details when you contact us or make payments. Payments are processed using Razorpay and sensitive card data is not stored on our servers. We use cookies and technical data (IP, browser) to improve the experience. We do not sell personal data; we share only with payment processors and when legally required. You have rights to access, update, or delete your data.",
  };

  return (
    <main className="min-h-screen bg-gray-50 mt-20 text-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">{company.name}</h1>
              {/* <p className="text-sm text-gray-600">{company.brand}</p> */}
            </div>
            <div className="text-right text-sm">
              <p>Last updated: {company.lastUpdated}</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{company.overview}</p>
        </header>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Privacy Policy Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{privacySummary.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Last Updated: {privacySummary.lastUpdated}</p>
          <p className="text-gray-700 leading-relaxed">{privacySummary.summary}</p>
          <p className="mt-3 text-sm text-gray-600">
            For the full policy (suitable for Razorpay verification) visit <strong>/privacy</strong> or
            download the full policy from your admin panel.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Contact & Business Details</h2>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <dt className="text-xs text-gray-500">Company</dt>
              <dd className="mt-1 font-medium">{company.name}</dd>
            </div>

            <div>
              <dt className="text-xs text-gray-500">Email</dt>
              <dd className="mt-1 font-medium">{company.email}</dd>
            </div>

            <div>
              <dt className="text-xs text-gray-500">Phone</dt>
              <dd className="mt-1 font-medium">{company.phone}</dd>
            </div>

            <div className="md:col-span-3">
              <dt className="text-xs text-gray-500">Address</dt>
              <dd className="mt-1">{company.address}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <a
              href={`mailto:${company.email}`}
              className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow"
            >
              Email Us
            </a>
          </div>
        </section>

            
      </div>
    </main>
  );
}
